import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import React from "react";

function InterviewItemCard({ interview }) {
  const router = useRouter();

  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };
  const onFeedback = () => {
    router.push("/dashboard/interview/" + interview?.mockId + "/feedback");
  };
  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-blue-500">{interview?.jobPosition}</h2>
      <h2 className="text-sm text-gray-600">
        {interview?.jobExperience}Years of experience
      </h2>
      <h2 className="text-xs text-gray-300">
        Created at:{interview.createdAt}{" "}
      </h2>
      <div className="flex justify-between mt-2 gap-5">
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={onFeedback}
        >
          Feedback
        </Button>
        <Button size="sm" className="w-full" onClick={onStart}>
          Start
        </Button>
      </div>
    </div>
  );
}

export default InterviewItemCard;
