import InvoiceDetailsItem from "@/components/ui/invoice-details-item";
import SectionTitle from "@/components/ui/invoice-section-title";
import { currencySymbol } from "@/lib/constants";

const SendCustomerSection = () => {
  return (
    <section className="bg-fuschia60 p-8 rounded-[40px]">
      <article className="flex justify-between">
        <div className="w-[70%]">
          <SectionTitle title="sender" />
          <article className="flex gap-4 mt-2.5">
            <aside className="bg-white h-[60px] w-[60px] flex rounded-2xl justify-center items-center">
              <img src="/banana.svg" alt="banana" className="w-10 h-10" />
            </aside>
            <main className="flex flex-col gap-1.5 text-xs text-grey">
              <h2 className="text-base text-neutralBlack font-medium">
                Fabulous Enterprise
              </h2>
              <p>+386 989 271 3115</p>
              <p>1331 Hart Ridge Road 48436 Gaines, MI</p>
              <p>info@fabulousenterise.co</p>
            </main>
          </article>
        </div>
        <div className="w-[30%]">
          <SectionTitle title="customer" />
          <main className="flex flex-col gap-1.5 text-xs text-grey mt-2.5">
            <h2 className="text-base text-neutralBlack font-medium">
              Olaniyi Ojo Adewale
            </h2>
            <p>+386 989 271 3115</p>
            <p>info@fabulousenterise.co</p>
          </main>
        </div>
      </article>
      <article className="mt-6">
        <SectionTitle title="invoice details" />
        <section className="grid grid-cols-4 mt-2">
          <InvoiceDetailsItem name="invoice no" value="83777737377" />
          <InvoiceDetailsItem name="issue date" value="83777737377" />
          <InvoiceDetailsItem name="due date" value="83777737377" />
          <InvoiceDetailsItem
            name="billing currency"
            value={`USD ${currencySymbol}`}
          />
        </section>
      </article>
    </section>
  );
};

export default SendCustomerSection;
