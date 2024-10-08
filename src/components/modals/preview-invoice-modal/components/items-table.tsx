import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import { currencySymbol } from "@/lib/constants";
import { invoiceItems } from "@/lib/data";
import { cn, formatAmount } from "@/lib/utils";

const TableFooterRow = ({
  title,
  value,
  size = "small",
}: {
  title: string;
  value: string;
  size: "small" | "large";
}) => {
  return (
    <TableRow>
      <TableCell className="text-right"></TableCell>
      <TableCell colSpan={3}>
        <div className="flex justify-between">
          <h2
            className={cn(
              "uppercase ",
              size === "large" ? "text-lg text-darkGrey font-medium" : "text-sm font-normal text-grey2"
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-darkGrey tracking-[0.5px] font-normal",
              size === "large" ? "text-2xl font-bold" : "text-xl"
            )}
          >
            {value}
          </p>
        </div>
      </TableCell>
    </TableRow>
  );
};

const ItemsTable = () => {

  return (
    <Table>
      <TableBody>
        {invoiceItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium min-w-[200px] lg:max-w-[140px]">
              <h4 className="mb-1 text-base font-normal text-neutralBlack">
                {item.name}
              </h4>
              <p className="text-grey3 text-[13px]">{item.description}</p>
            </TableCell>
            <TableCell className="text-center text-base font-normal text-neutralBlack  lg:w-[150px]">
              <p>{item.unit}</p>
            </TableCell>
            <TableCell className="text-center text-base font-normal tracking-[.03rem] text-neutralBlack lg:max-w-[150px]">
              {currencySymbol}
              {formatAmount(item.price.toString(), false)}
            </TableCell>
            <TableCell className="text-right text-base font-normal tracking-[.03rem] text-neutralBlack">
              {currencySymbol}
              {formatAmount((item.price * item.unit).toString())}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableFooterRow title="" value="" size="small" />
        <TableFooterRow title="" value="" size="small" />
        <TableFooterRow
          title="Subtotal"
          value={`${currencySymbol}${formatAmount("6697200")}`}
          size="small"
        />
        <TableFooterRow
          title="discount (2.5%)"
          value={`${currencySymbol}${formatAmount("167430")}`}
          size="small"
        />
        <TableFooterRow title="" value="" size="small" />
        <TableFooterRow
          title="total amount due"
          value={`${currencySymbol}${formatAmount("6529770")}`}
          size="large"
        />
      </TableFooter>
    </Table>
  );
};

export default ItemsTable;
