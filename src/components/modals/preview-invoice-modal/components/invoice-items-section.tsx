import ItemsTable from "./items-table";

const InvoiceItemsSection = () => {
  return (
    <section className="mt-6">
      <h2 className="flex gap-4 font-medium text-neutralBlack after:content-[''] after:h-[1px] after:bg-[#E3E6EF] after:w-full after:block after:mt-3 after:mb-9">
        Items
      </h2>
      <ItemsTable />
    </section>
  );
};

export default InvoiceItemsSection;
