import Icon from "../../icon";
import { Button } from "../../ui/button";
import { Dialog, DialogHeader, DialogContent } from "../../ui/dialog";
import StatusTag from "../../ui/status-tag";
import SendCustomerSection from "./components/sender-customer-section";
import ReminderSection from "./components/reminders-section";
import NotesSection from "./components/notes-section";
import PaymentInformationSection from "./components/payment-information-section";
import InvoiceActivity from "./components/invoice-activity";
import InvoiceItemsSection from "./components/invoice-items-section";

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
        <DialogContent className="border-none w-[90vw] flex flex-col md:w-[85vw] lg:w-[85vw] xl:w-[85vw] h-[84%] !pt-10 !pb-10 px-6 md:px-10 max-w-[100vw] overflow-hidden">
          <Button
            className="absolute -top-14 bg-white hover:bg-white rounded-full h-12 w-12 right-0"
            onClick={handleClose}
          >
            <Icon icon="lucide:cancel" className="text-[48px] text-grey" />
          </Button>
          <div>
            <DialogHeader className="!space-y-0 flex-col lg:flex-row justify-between items-start lg:items-center h-fit mb-4">
              <div>
                <h2 className="text-xl md:text-[1.75rem] text-left text-neutralBlack font-semibold">
                  Invoice - 1023494 - 2304
                </h2>
                <p>View the details and activity of this invoice</p>
              </div>
              <div className="flex flex-wrap gap-y-2 gap-x-1 md:gap-5">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase w-fit text-blue xl:w-[240px] font-medium rounded-[40px]"
                >
                  Download as Pdf
                </Button>
                <Button
                  size="lg"
                  className="w-fit uppercase rounded-[40px] xl:w-[230px] font-medium bg-blue text-white"
                >
                  Send Invoice
                </Button>
                <Button
                  size="lg"
                  className="w-fit uppercase md:w-[100px] rounded-[40px] font-medium text-darkGrey"
                  variant="outline"
                >
                  More
                </Button>
              </div>
            </DialogHeader>
            <StatusTag status="partial payment" />
            <div className="h-[calc(75vh-120px)] overflow-hidden overflow-y-auto">
              <ReminderSection />
              <section className="flex flex-col lg:flex-row mt-6 gap-8">
                <main className="w-full lg:w-[60%] border border-[#E3E6EF] p-6 rounded-[40px]">
                  <SendCustomerSection />
                  <InvoiceItemsSection />
                  <PaymentInformationSection />
                  <NotesSection />
                </main>
                <InvoiceActivity />
              </section>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PreviewInvoiceModal;
