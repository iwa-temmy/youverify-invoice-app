import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

const RecentInvoicesCard = () => {
  return (
    <Card className="w-full md:w-full lg:w-[62%]">
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
  );
};

export default RecentInvoicesCard;
