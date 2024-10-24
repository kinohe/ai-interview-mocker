import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "../header/page";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Component() {
  const faqs = [
    {
      question: "What is an AI interview mocker?",
      answer:
        "An AI interview mocker is a tool that simulates job interviews using artificial intelligence. It helps candidates practice and prepare for real interviews by providing realistic questions and feedback on their responses.",
    },
    {
      question: "How does the AI interview mocker work?",
      answer:
        "Our AI interview mocker uses advanced natural language processing to understand your responses and provide tailored feedback. It analyzes your answers for content, clarity, and confidence, offering suggestions for improvement.",
    },
    {
      question: "Is my interview data kept confidential?",
      answer:
        "Yes, we take your privacy seriously. All your interview responses and personal data are encrypted and stored securely. We do not share your information with third parties.",
    },
    {
      question: "Can I customize the interview questions?",
      answer:
        "You can select from various interview types (e.g., behavioral, technical) and job roles to tailor the questions to your specific needs.",
    },
    {
      question: "How accurate is the AI feedback?",
      answer:
        "Our AI model is trained on thousands of real interview scenarios and is continuously updated. While it provides highly accurate and helpful feedback, we always recommend combining AI practice with human feedback for the best preparation.",
    },
  ];

  return (
    <>
      <Header />
      <Card className="w-full max-w-5xl mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-600">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
}
