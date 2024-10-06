import InvoiceActionCard from "../cards/invoice-action-card";

const SectionTwo = () => {
  return (
    <section className="mt-8">
      <h3>Invoice Actions</h3>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InvoiceActionCard
          imagePath="./money.svg"
          title="Create New Invoice"
          description="Create new invoices easily"
          backgroundColor="bg-blue"
        />
        <InvoiceActionCard
          imagePath="./setting.svg"
          title="Change Invoice setting"
          description="Create new invoices easily"
          titleColor="text-darkGrey"
          descriptionColor="text-grey"
        />
        <InvoiceActionCard
          imagePath="./profile-user.svg"
          title="Change Invoice setting"
          description="Create new invoices easily"
          titleColor="text-darkGrey"
          descriptionColor="text-grey"
        />
      </main>
    </section>
  );
};

export default SectionTwo;
