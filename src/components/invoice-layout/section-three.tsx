import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import RecentActivitiesCard from "../cards/recent-activities-card";

const SectionThree = () => {
  return (
    <section className="flex gap-8 mt-6">
      <Card className="w-full md:w-full lg:w-[60%]">
        <CardHeader className="flex flex-row justify-between items-center">
          <h3 className="text-lg font-medium text-neutralBlack">
            Recent Invoices
          </h3>
          <Button
            variant="outline"
            className="w-fit text-blue uppercase rounded-[30px] font-medium border border-[#E3E6EF] h-12 px-12"
          >
            View all invoices
          </Button>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <RecentActivitiesCard />
    </section>
  );
};

export default SectionThree;
