"use client";
import Webcam from "react-webcam";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";
import { is } from "drizzle-orm";
import { UserAnswer } from "@/util/schema";
import moment from "moment";
import { toast } from "sonner";
import { chatSession } from "@/util/GeminiApi";
import { useUser } from "@clerk/nextjs";
import { db } from "@/util/db";

function RecordAnswerSection({
  mockInterviewQuestion,
  interviewData,
  activeQuestionIndex,
}) {
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results?.map((result) => {
      setUserAnswer((prevAns) => prevAns + result?.transcript);
    });
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      updateUserAnswer();
    }
  }, [userAnswer]);

  const updateUserAnswer = async () => {
    setLoading(true);
    const feedbackPrompt =
      "Based on the following information:Question: ${mockInterviewQuestion[activeQuestionIndex]?.question} User Answer: ${userAnswer}Please provide the following in JSON format:1. A rating for the user’s answer (out of 10) under the 'rating' field. 2. A brief, 3-5 line feedback on areas of improvement under the 'Feedback' field";

    // "Questions:" +
    // mockInterviewQuestion[activeQuestionIndex]?.question +
    // ", user answer " +
    // userAnswer +
    // ", depends on question and user answer for given interview questions " +
    // "please give us rating for answer and feedback as area of improvement if any" +
    // "in just three to five lines to improve it in JSON format with rating field and feedback field ";

    const result = await chatSession.sendMessage(feedbackPrompt);
    const mockJsonResponse = (await result.response.text())
      .replace(/```json/g, "")
      .replace(/```/g, "");
    console.log(mockJsonResponse);
    const jsonFeedbackResp = JSON.parse(mockJsonResponse);

    const resp = await db.insert(UserAnswer).values({
      mockIdRef: interviewData?.mockId,
      question: mockInterviewQuestion[activeQuestionIndex]?.question,
      correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
      userAns: userAnswer,
      feedback: jsonFeedbackResp?.feedback,
      rating: jsonFeedbackResp?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("MM-DD-YYYY"),
    });

    if (resp) {
      toast("User answer recorded successfully");
      setUserAnswer("");
      setResults([]);
    }
    setLoading(false);
  };

  const startStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col my-15 justify-center items-center bg-black rounded-lg p-2">
        <Image
          src={"/webcam.png"}
          width="150"
          height="150"
          className="absolute"
          alt="mic"
        />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="my-10"
        onClick={startStopRecording}
      >
        {isRecording ? (
          <h2 className="flex gap-2 text-red-600">
            <Mic /> Stop Recording
          </h2>
        ) : (
          "Record Answer"
        )}
      </Button>
      {/* <Button
        variant="secondary"
        onClick={() => {
          console.log(userAnswer);
        }}
      >
        show user answer
      </Button> */}
    </div>
  );
}

export default RecordAnswerSection;
