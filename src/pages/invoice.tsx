import SectionOne from "@/components/invoice-layout/section-one";
import SectionTwo from "@/components/invoice-layout/section-two";
import { Button } from "@/components/ui/button";

const Invoice = () => {
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
      <SectionOne />
      <SectionTwo />
    </section>
  );
};

export default Invoice;
