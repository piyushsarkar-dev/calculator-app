import AdvancedCalculator from "@/components/AdvancedCalculator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Calculator",
  description:
    "A simple and advanced calculator built with Next.js and TypeScript.",
};
const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Advanced Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AdvancedCalculator />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
