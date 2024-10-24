import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Mic, Brain, BarChart } from "lucide-react";
import Header from "../../header/page";

export default function HowItWorks() {
  const steps = [
    {
      icon: <CheckCircle className="w-10 h-10 text-green-500" />,
      title: "Select Interview Type",
      description:
        "Choose from various interview types such as behavioral, technical, or role-specific interviews.",
    },
    {
      icon: <Mic className="w-10 h-10 text-blue-500" />,
      title: "Answer Questions",
      description:
        "Respond to AI-generated questions as if you were in a real interview. Speak clearly and confidently.",
    },
    {
      icon: <Brain className="w-10 h-10 text-purple-500" />,
      title: "AI Analysis",
      description:
        "Our advanced AI analyzes your responses, considering factors like content, clarity, and confidence.",
    },
    {
      icon: <BarChart className="w-10 h-10 mb-5 text-orange-500" />,
      title: "Receive Feedback",
      description:
        "Get detailed feedback and suggestions for improvement on each of your answers.",
    },
  ];

  return (
    <>
      <Header />
      {/* <Card className="w-full max-w-4xl mx-auto mt-10"> */}
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          How It Works
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-muted rounded-lg"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
      {/* </Card> */}
    </>
  );
}
