import type { Metadata } from "next";
import { FindMyLawnPlan } from "@/components/FindMyLawnPlan";

export const metadata: Metadata = {
  title: "Find My Lawn Plan — 30-Second Lawn Quiz",
  description:
    "Not sure what your yard needs? Answer 2 quick questions and we'll match you to the right lawn service with upfront pricing. Serving the DFW metroplex.",
  alternates: { canonical: "/find-my-lawn-plan" },
};

export default function QuizPage() {
  return <FindMyLawnPlan />;
}
