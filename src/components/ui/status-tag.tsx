import { cn } from "@/lib/utils";

const StatusTag = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-[#E6FFF0] text-green border-[#12904333]";
      case "overdue":
        return "text-red bg-[#FFF4F5] border-[#FF566333]";
      case "draft":
        return "text-darkGrey bg-[#F6F8FA] border-[#373B4733]";
      case "pending payment":
        return "text-orange border-[#D98F0033] bg-[#FFF8EB]";
      case "partial payment":
        return "text-blue border-[#003EFF33] bg-[#F2FBFF]";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };
  return (
    <div
      className={cn(
        "border-[0.75px] rounded-3xl w-fit text-[10px] uppercase px-4 !h-[1.68rem] font-medium flex justify-center items-center",
        getStatusColor(status) ? getStatusColor(status) : ""
      )}
    >
      {status}
    </div>
  );
};

export default StatusTag;
