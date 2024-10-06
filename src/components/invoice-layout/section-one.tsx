import { Card, CardContent } from "../ui/card";

const SectionOne = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      <Card className="h-[204px]">
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
      <Card className="h-[204px]">
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
      <Card className="h-[204px]">
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
      <Card className="h-[204px]">
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default SectionOne;
