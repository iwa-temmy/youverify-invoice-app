import { currencySymbol } from "@/lib/constants";
import { Card, CardContent } from "../ui/card";

const SectionOne = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 mt-10">
      <Card className="h-fit md:h-[180px]">
        <CardContent className="py-4 md:py-8 px-4 md:px-10 flex flex-col gap-2.5">
          <img src="/category.svg" alt="category" className="w-10 h-10" />
          <div className="flex gap-2 items-center">
            <p className="uppercase text-xs font-normal text-grey">
              Total paid
            </p>
            <p className="px-3 py-1 bg-lightGreen text-darkGrey text-sm font-medium tracking-[-0.43px] rounded-3xl">
              1,289
            </p>
          </div>
          <p className="text-xl md:text-[1.623rem] tracking-wide font-medium">
            {currencySymbol}4,120,102.<span className="text-sm">76</span>
          </p>
        </CardContent>
      </Card>
      <Card className="h-fit md:h-[180px]">
        <CardContent className="py-4 md:py-8  px-4 md:px-10 flex flex-col gap-2.5">
          <img src="/category.svg" alt="category" className="w-10 h-10" />
          <div className="flex gap-2 items-center">
            <p className="uppercase text-xs font-normal text-grey">
              Total Overdue
            </p>
            <p className="px-3 py-1 bg-lightRed text-darkGrey text-sm font-medium tracking-[-0.43px] rounded-3xl">
              13
            </p>
          </div>
          <p className="text-xl md:text-[1.623rem] tracking-wide font-medium">
            {currencySymbol}4,120,102.<span className="text-sm">76</span>
          </p>
        </CardContent>
      </Card>
      <Card className="h-fit md:h-[180px]">
        <CardContent className="py-4 md:py-8  px-4 md:px-10 flex flex-col gap-2.5">
          <img src="/category.svg" alt="category" className="w-10 h-10" />
          <div className="flex gap-2 items-center">
            <p className="uppercase text-xs font-normal text-grey">
              Total Draft
            </p>
            <p className="px-3 py-1 bg-lightGrey text-darkGrey text-sm font-medium tracking-[-0.43px] rounded-3xl">
              08
            </p>
          </div>
          <p className="text-xl md:text-[1.623rem] tracking-wide font-medium">
            {currencySymbol}4,120,102.<span className="text-sm">76</span>
          </p>
        </CardContent>
      </Card>
      <Card className="h-fit md:h-[180px]">
        <CardContent className="py-4 md:py-8 px-4 md:px-10 flex flex-col gap-2.5">
          <img src="/category.svg" alt="category" className="w-10 h-10" />
          <div className="flex gap-2 items-center">
            <p className="uppercase text-xs font-normal text-grey">
              Total Unpaid
            </p>
            <p className="px-3 py-1 bg-lightYellow text-darkGrey text-sm font-medium tracking-[-0.43px] rounded-3xl">
              06
            </p>
          </div>
          <p className="text-xl md:text-[1.623rem] tracking-wide font-medium">
            {currencySymbol}4,120,102.<span className="text-sm">76</span>
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default SectionOne;
