"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/util/db";
import { eq } from "drizzle-orm";
import { MockInterview } from "@/util/schema";
import QuestionSection from "./_component/QuestionSection";
import RecordAnswerSection from "./_component/RecordAnswerSection";

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  useEffect(() => {
    getInterviewDetails();
  }, []);
  const getInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);

    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <QuestionSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />

        <RecordAnswerSection />
      </div>
    </div>
  );
}

export default StartInterview;
