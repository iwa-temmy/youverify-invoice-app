import { invoiceActivities } from "@/lib/data";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

const RecentActivitiesCard = () => {
  return (
    <Card className="w-full md:w-full xl:w-[38%] px-4 py-2">
      <CardHeader className="flex flex-row justify-between items-center">
        <h3 className="text-xl font-medium text-neutralBlack">
          Recent Activities
        </h3>
        <Button
          variant="outline"
          className="w-fit text-xs text-blue uppercase rounded-[30px] font-medium border border-[#E3E6EF] h-12 px-8"
        >
          View all
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 mt-2">
        {invoiceActivities?.map((item, index) => (
          <div className="flex items-start gap-6" key={index}>
            <img
              src={item.user_avatar}
              className="rounded-full h-10 w-10"
              alt="user avatar"
            />
            <div>
              <h4 className="text-base font-medium text-neutralBlack">{item.action}</h4>
              <p className="text-sm font-medium text-grey">{item.time}</p>
              <p className="bg-[#F6F8FA] text-sm p-3 tracking-[0.07rem] text-grey mt-2 rounded-2xl">
                Created invoice{" "}
                <span className="ml-1.5 font-medium text-neutralBlack">{`${item.invoiceId}/${item.user}`}</span>
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivitiesCard;
