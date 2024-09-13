"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/util/GeminiApi";
import { LoaderCircle } from "lucide-react";
import { db } from "@/util/db";
import { MockInterview } from "@/util/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDescription, setJobDescription] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);

  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const inputPrompt = `JobPosition:${jobPosition} jobDescription: ${jobDescription}, years of experience: ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} depending on this information please give me 5 interview questions with answer format of json give question and answer in json format`;

    const result = await chatSession.sendMessage(inputPrompt);
    const MockJsonResp = result.response
      .text()
      .replace(/```json/g, "")
      .replace(/```/g, "");

    console.log(JSON.parse(MockJsonResp));

    setJsonResponse(MockJsonResp);
    if (MockJsonResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDescription,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-YYYY"),
        })
        .returning({ mockId: MockInterview.mockId });

      console.log("InsertedId :", resp);
      if (resp) {
        setOpenDialog(false);
        router.push("/dashboard/interview/" + resp[0]?.mockId);
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-14 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        <h2 className="font-bold text-lg text-center ">+Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about job interviewing
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add Details About Your Job Position/Role, Job Description
                  </h2>
                  <div className="mt-7 my-3">
                    <label>Job Role/ Job Position</label>
                    <Input
                      onChange={(e) => {
                        setJobPosition(e.target.value);
                      }}
                      placeholder="Ex. Full Stack Developer"
                      required
                    />
                  </div>
                  <div className=" my-3">
                    <label>Job Description/ Tech Stack</label>
                    <Textarea
                      onChange={(e) => {
                        setJobDescription(e.target.value);
                      }}
                      placeholder="Ex. React, Angular, NodeJs, SQL etc..."
                    />
                  </div>
                  <div className="my-2">
                    <label>Years Of Experience </label>
                    <Input
                      onChange={(e) => {
                        setJobExperience(e.target.value);
                      }}
                      placeholder="5"
                      max="50"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disable={loading}>
                    {loading ? (
                      <>
                        {" "}
                        <LoaderCircle className="animate-spin" /> "Generating
                        from AI"
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
