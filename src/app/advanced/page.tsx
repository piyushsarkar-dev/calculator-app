import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Basic Calculator
          </CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  );
};

export default page;
