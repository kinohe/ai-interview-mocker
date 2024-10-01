"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/util/db";
import { eq } from "drizzle-orm";
import { UserAnswer } from "@/util/schema";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter;
  useEffect(() => {
    GetFeedback();
  }, []);
  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    setFeedbackList(result);
  };
  return (
    <div className="p-10">
      {feedbackList?.length === 0 ? (
        <h2 className="text-xl font-bold text-gray-500">
          No interview record found
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500">Congratulations</h2>
          <h2 className="text-2xl font-bold">
            Here is your interview feedback
          </h2>
          <h2 className="text-blue-600 text-lg my-3">
            Your overall rating <strong>7/10</strong>
          </h2>
          <h2 className="text-sm text-gray-500">
            Find below your interview question with correct answer, your answer
            and feedback for further improvement
          </h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-7">
                <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7">
                  {item.question} <ChevronsUpDown className="h-4 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-red-500 rounded-lg border p-2">
                      <strong>Rating:</strong>
                      {item.rating}
                    </h2>
                    <h2 className="p-2 bg-red-50 text-sm rounded-lg text-red-500">
                      <strong>Your Answer:</strong>
                      {item.userAnswer}
                    </h2>
                    <h2 className="p-2 bg-green-50 text-sm rounded-lg text-green-500">
                      <strong>Correct Answer:</strong>
                      {item.correctAns}
                    </h2>
                    <h2 className="p-2 bg-blue-50 text-sm rounded-lg text-blue-500">
                      <strong>Feedback:</strong>
                      {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}
      <Button onClick={() => router.replace("/dashboard")}>Go Home</Button>
    </div>
  );
}

export default Feedback;
