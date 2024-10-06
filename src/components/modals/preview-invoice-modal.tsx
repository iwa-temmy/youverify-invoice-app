import Icon from "../icon";
import { Button } from "../ui/button";
import { Dialog, DialogHeader, DialogTitle, DialogContent } from "../ui/dialog";

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
        <DialogContent className="border-none w-[90vw] flex flex-col md:w-[90vw] lg:w-[90vw] xl:w-[90vw] h-[430px] !pt-10 !pb-0 px-6 md:px-20 max-w-[100vw]">
          <Button
            className="absolute -top-20 bg-white rounded-full h-14 w-14 right-0"
            onClick={handleClose}
          >
            <Icon icon="lucide:cancel" className="text-darkGrey" />
          </Button>
          <DialogHeader className="!space-y-0 h-fit">
            <DialogTitle className="text-[27px] text-[#1C1C1C] font-normal">
              Assign Data
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PreviewInvoiceModal;
