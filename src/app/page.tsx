import BasicCalculator from "@/components/BasicCalculator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Calculator",
  description:
    "A simple and advanced calculator built with Next.js and TypeScript.",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card>
        <CardHeader>
          <CardTitle className="grid place-items-center text-2xl">
            Basic Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BasicCalculator />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
