import InvoiceActionCard from "../cards/invoice-action-card";

const SectionTwo = () => {
  return (
    <section className="mt-8">
      <h3 className="text-lg font-medium text-neutralBlack mb-4">Invoice Actions</h3>
      <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-6">
        <InvoiceActionCard
          imagePath="./money.svg"
          title="Create New Invoice"
          description="Create new invoices easily"
          backgroundColor="bg-blue"
        />
        <InvoiceActionCard
          imagePath="./setting.svg"
          title="Change Invoice settings"
          description="Customize your invoices"
          titleColor="text-darkGrey"
          descriptionColor="text-grey"
        />
        <InvoiceActionCard
          imagePath="./profile-user.svg"
          title="Manage Customer list"
          description="Add and remove customers"
          titleColor="text-darkGrey"
          descriptionColor="text-grey"
        />
      </main>
    </section>
  );
};

export default SectionTwo;
