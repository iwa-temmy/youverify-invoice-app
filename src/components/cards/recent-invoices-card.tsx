import { invoices } from "@/lib/data";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Dictionary } from "@/types/dictionary";
import { format } from "date-fns";
import { currencySymbol } from "@/lib/constants";
import StatusTag from "../ui/status-tag";
const RecentInvoicesCard = ({
  openPreviewModal,
}: {
  openPreviewModal: () => void;
}) => {
  const sortedInvoices = invoices.sort((a, b) => {
    const dateA = new Date(a?.date_created);
    const dateB = new Date(b?.date_created);
    return dateA.getTime() - dateB.getTime();
  });

  const groupedInvoices = sortedInvoices.reduce(
    (groups: Dictionary, invoice) => {
      const date = invoice.date_created.split("-").slice(0, 3).join("-");

      if (!groups[date]) {
        groups[date] = [];
      }

      groups[date].push(invoice);

      return groups;
    },
    {}
  );

  return (
    <>
      <Card className="w-full md:w-full xl:w-[62%] md:px-4 py-2">
        <CardHeader className="flex flex-row justify-between items-center">
          <h3 className="text-xl font-medium text-neutralBlack">
            Recent Invoices
          </h3>
          <Button
            variant="outline"
            className="w-fit text-blue uppercase rounded-[30px] text-xs font-medium border border-[#E3E6EF] h-12 px-6 md:px-12"
          >
            View all invoices
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 mt-2.5">
          {Object.entries(groupedInvoices).map(([date, invoices], index) => (
            <div key={index}>
              <h4 className="my-4 text-xs text-neutralBlack font-medium uppercase">{`${
                date === "2022-11-27" ? "Today" : ""
              } ${format(new Date(date), "do MMMM, yyyy")}`}</h4>
              <div className="flex flex-col gap-6 pl-2 md:pl-5 md:pr-4 text-sm">
                {invoices.map((invoice: Dictionary, idx: number) => (
                  <div
                    className="flex flex-row justify-between items-center hover:bg-lightGrey/20 p-2 cursor-pointer"
                    key={idx}
                    onClick={openPreviewModal}
                  >
                    <div className="flex flex-row justify-between w-[60%] md:w-1/2">
                      <div className="flex flex-col gap-2 text-darkGrey font-medium">
                        <p>Invoice -</p>
                        <p>{`${invoice.invoiceId}`}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-[0.625rem] uppercase text-neutralGrey font-normal tracking-[.1rem]">
                          Due Date
                        </p>
                        <p className="text-sm font-medium text-grey">
                          {format(new Date(invoice.due_date), "MMMM, do, yyyy")}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <p className="text-darkGrey text-base font-medium">
                        {currencySymbol} {invoice.total}
                      </p>
                      <div className="flex justify-end">
                        <StatusTag status={invoice.status} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default RecentInvoicesCard;
