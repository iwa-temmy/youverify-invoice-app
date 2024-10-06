import { useEffect, useState } from "react";
import loadingAnimation from "@/assets/lotties/loading.json";
import SectionOne from "@/components/invoice-layout/section-one";
import SectionThree from "@/components/invoice-layout/section-three";
import SectionTwo from "@/components/invoice-layout/section-two";
import PreviewInvoiceModal from "@/components/modals/preview-invoice-modal";
import { Button } from "@/components/ui/button";
import LottieAnimation from "@/components/ui/lottie-animation";

const Invoice = () => {
  const [loading, setLoading] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);

  const openPreviewModal = () => {
    setPreviewModalOpen(true);
  };

  const closePreviewModal = () => {
    setPreviewModalOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    new Promise(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    });
  }, []);
  return (
    <section>
      <header className="flex items-center justify-between">
        <h1 className="text-xl md:text-3xl font-medium text-[#1F1F23]">
          Invoice
        </h1>
        <div className="flex gap-3">
          <Button
            className="uppercase rounded-[40px] w-[140px] md:w-[220px] text-grey text-xs md:text-sm px-6"
            size="lg"
            variant="outline"
          >
            See what's new
          </Button>
          <Button
            size="lg"
            className="uppercase bg-blue px-10 w-[100px] md:w-[210px] text-xs md:text-sm  rounded-[40px]"
          >
            Create
          </Button>
        </div>
      </header>
      {loading ? (
        <div className="h-[calc(100vh-200px)] flex justify-center items-center">
          <LottieAnimation animationData={loadingAnimation} height={280} />
        </div>
      ) : (
        <>
          <SectionOne />
          <SectionTwo />
          <SectionThree openPreviewModal={openPreviewModal} />
        </>
      )}

      <PreviewInvoiceModal
        open={previewModalOpen}
        handleClose={closePreviewModal}
      />
    </section>
  );
};

export default Invoice;
