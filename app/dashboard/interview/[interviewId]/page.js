"use client";
import { db } from "@/util/db";
import { eq } from "drizzle-orm";
import { MockInterview } from "@/util/schema";
import { useEffect, useState } from "react";
import { LightbulbIcon, WebcamIcon } from "lucide-react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Interview({ params }) {
  const [interviewDetail, setInterviewDetail] = useState({});
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    getInterviewDetails();
  }, []);
  const getInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    setInterviewDetail(result[0]);
  };

  return (
    <div className="my-10 ">
      <h2 className="font-bold text-2xl">Let's get started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5  ">
          <div className="flex flex-col gap-5 p-5 rounded-lg border">
            <h2 className="text-lg">
              <strong>Job Role/Position:</strong>
              {interviewDetail.jobPosition}
            </h2>
            <h2 className="text-lg">
              <strong>Job Description:</strong>
              {interviewDetail.jobDesc}
            </h2>
            <h2 className="text-lg">
              <strong>Job Experience:</strong>
              {interviewDetail.jobExperience}
            </h2>
          </div>
          <div className="p-5 mt-3 rounded-lg border border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-2 items-center text-yellow-500">
              <LightbulbIcon />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-yellow-500">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>
        <div>
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => {
                setWebCamEnabled(true);
              }}
              onUserMediaError={() => {
                setWebCamEnabled(false);
              }}
              mirrored={true}
              style={{
                height: 300,
                width: 300,
              }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setWebCamEnabled(true)}
              >
                Enable web cam and microphone
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-end items-end">
        <Link href={"./dashboard/interview/" + params.interviewId + "/start"}>
          <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
