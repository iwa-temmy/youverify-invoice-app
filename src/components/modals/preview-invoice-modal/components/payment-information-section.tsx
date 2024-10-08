import InvoiceDetailsItem from "@/components/ui/invoice-details-item";
import SectionTitle from "@/components/ui/invoice-section-title";
import { currencySymbol } from "@/lib/constants";

const PaymentInformationSection = () => {
  return (
    <section className="border border-[#E3E6EF] p-6 lg:p-8 rounded-3xl mt-6">
      <SectionTitle title="payment informations" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        <InvoiceDetailsItem
          name="account name"
          value="iwaloye olawale samuel"
        />
        <InvoiceDetailsItem name="account number" value="1023902390" />
        <InvoiceDetailsItem name="ach routing no" value="May 19th 2023" />
        <InvoiceDetailsItem
          name="bank name"
          value={`USD ${currencySymbol})`}
        />
        <InvoiceDetailsItem name="bank address" value="10238903883" />
        <InvoiceDetailsItem name="account number" value="March 30th 2023" />
      </div>
    </section>
  );
};

export default PaymentInformationSection;
