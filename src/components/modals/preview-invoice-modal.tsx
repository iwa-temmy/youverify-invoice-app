import Icon from "../icon";
import { Button } from "../ui/button";
import { Dialog, DialogHeader, DialogContent } from "../ui/dialog";
import StatusTag from "../ui/status-tag";
import SendCustomerSection from "./components/sender-customer-section";
import ReminderSection from "./components/reminders-section";
import NotesSection from "./components/notes-section";
import PaymentInformationSection from "./components/payment-information-section";

const PreviewInvoiceModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="border-none w-[90vw] flex flex-col md:w-[90vw] lg:w-[90vw] xl:w-[90vw] h-[80%] !pt-10 !pb-10 px-6 md:px-10 max-w-[100vw] overflow-y-auto">
          <Button
            className="absolute -top-14 bg-white hover:bg-white rounded-full h-12 w-12 right-0"
            onClick={handleClose}
          >
            <Icon icon="lucide:cancel" className="text-[48px] text-grey" />
          </Button>
          <DialogHeader className="!space-y-0 flex-row justify-between items-center h-fit">
            <div>
              <h2 className="text-[1.75rem] text-neutralBlack font-semibold">
                Invoice - 1023494 - 2304
              </h2>
              <p>View the details and activity of this invoice</p>
            </div>
            <div className="flex gap-5">
              <Button
                variant="outline"
                size="lg"
                className="uppercase w-fit text-blue xl:w-[240px] rounded-[40px]"
              >
                Download as Pdf
              </Button>
              <Button
                size="lg"
                className="w-fit uppercase rounded-[40px] xl:w-[230px] bg-blue text-white"
              >
                Send Invoice
              </Button>
              <Button
                size="lg"
                className="w-fit uppercase md:w-[100px] rounded-[40px] text-darkGrey"
                variant="outline"
              >
                More
              </Button>
            </div>
          </DialogHeader>
          <StatusTag status="partial payment" />
          <ReminderSection />
          <section className="flex ">
            <main className="w-[60%] border border-[#E3E6EF] p-6 rounded-[40px]">
              <SendCustomerSection />
              <PaymentInformationSection />
              <NotesSection />
            </main>
            <aside className="w-[40%]">Dolapo</aside>
          </section>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PreviewInvoiceModal;
