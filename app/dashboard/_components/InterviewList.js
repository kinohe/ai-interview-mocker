"use client";
import { db } from "@/util/db";
import { MockInterview } from "@/util/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard";

function InterviewList() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);

  useEffect(() => {
    user && getInterviewList();
  }, [user]);
  const getInterviewList = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.createdBy, user?.primaryEmailAddress))
      .orderBy(desc(MockInterview.id));
    console.log(result);
    setInterviewList(result);
  };
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <h2 className="font-medium text-xl">Previous Mock Interviews</h2>
      {interviewList &&
        interviewList.map((interview, index) => {
          <InterviewItemCard interview={interview} key={index} />;
        })}
    </div>
  );
}

export default InterviewList;
