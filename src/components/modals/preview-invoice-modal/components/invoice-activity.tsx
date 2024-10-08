import { invoicePreviewActivities } from "@/lib/data";
import { Dictionary } from "@/types/dictionary";

const ActivityItem = ({
  item,
  isLastItem,
}: {
  item: Dictionary;
  isLastItem: boolean;
}) => {
  return (
    <div className="flex flex-row items-start gap-6">
      <div className="flex flex-col gap-1 items-center">
        <img
          src={item.user_avatar}
          className="rounded-full h-10 w-12 object-cover"
          alt="user avatar"
        />
        {!isLastItem && <span className="bg-[#E3E6EF] w-[1px] h-[4.7rem]" />}
      </div>
      <div className="pb-4 w-full">
        <h4 className="text-base font-medium text-neutralBlack">
          {item.title}
        </h4>
        <p className="text-sm font-medium text-grey">{item.time}</p>
        <ActivityDetails item={item} />
      </div>
    </div>
  );
};

const ActivityDetails = ({ item }: Dictionary) => {
  if (!item.confirmation) {
    return (
      <p className="bg-[#F6F8FA] text-sm p-3 tracking-[0.05rem] text-grey mt-2 rounded-2xl">
        {item.action}
        <span className="ml-1.5 font-medium text-neutralBlack">
          {item.action_details}
        </span>
      </p>
    );
  }

  return (
    <p className="bg-[#F6F8FA] text-sm p-3 tracking-[0.05rem] text-grey mt-2 rounded-2xl">
      {item.action}
      <span className="ml-1.5 font-medium text-neutralBlack">
        {item.from} <span className="text-grey">to</span> {item.to}
      </span>
    </p>
  );
};

const InvoiceActivity = () => {
  return (
    <aside className="w-full lg:w-[40%]">
      <h4>Invoice Activity</h4>
      <section className="mt-5">
        {invoicePreviewActivities?.map((item, index) => (
          <ActivityItem
            key={index}
            item={item}
            isLastItem={index === invoicePreviewActivities.length - 1}
          />
        ))}
      </section>
    </aside>
  );
};

export default InvoiceActivity;
