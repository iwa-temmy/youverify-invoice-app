const InvoiceDetailsItem = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => {
  return (
    <div>
      <h6 className="text-[10px] uppercase text-neutralBlack tracking-[.05rem] mb-1.5">
        {name}
      </h6>
      <p className="text-neutralBlack text-xs font-medium">{value}</p>
    </div>
  );
};

export default InvoiceDetailsItem;