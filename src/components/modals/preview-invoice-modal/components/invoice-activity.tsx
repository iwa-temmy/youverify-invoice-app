import { invoicePreviewActivities } from "@/lib/data";

const InvoiceActivity = () => {
  return (
    <aside className="w-[40%]">
      <h4>Invoice Activity</h4>
      <section className="mt-5">
        {invoicePreviewActivities?.map((item, index) => (
          <div className="flex flex-row items-start gap-6" key={index}>
            <div className="flex flex-col gap-1 items-center">
              <img
                src={item.user_avatar}
                className="rounded-full h-10 w-12 object-cover"
                alt="user avatar"
              />
              {invoicePreviewActivities?.length - 1 !== index && (
                <span className="bg-[#E3E6EF] w-[1px] h-[4.7rem]" />
              )}
            </div>
            <div className="pb-4">
              <h4 className="text-base font-medium text-neutralBlack">
                {item.title}
              </h4>
              <p className="text-sm font-medium text-grey">{item.time}</p>
              <p className="bg-[#F6F8FA] text-sm p-3 tracking-[0.05rem] text-grey mt-2 rounded-2xl">
                Created invoice{" "}
                <span className="ml-1.5 font-medium text-neutralBlack">{`${item.invoiceId}/${item.user}`}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </aside>
  );
};

export default InvoiceActivity;
