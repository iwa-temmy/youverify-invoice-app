import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { CardContent } from "../ui/card";

interface InvoiceActionCardProps {
  imagePath: string;
  title: string;
  description: string;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}
const InvoiceActionCard = ({
  imagePath,
  title,
  description,
  backgroundColor,
  titleColor,
  descriptionColor,
}: InvoiceActionCardProps) => {
  return (
    <Card
      className={cn(
        " text-white h-[13.56rem]",
        backgroundColor ? backgroundColor : ""
      )}
    >
      <CardContent className="py-6 px-8">
        <img src={imagePath} className="w-[5.62rem] h-[5.62rem]" alt="money" />
        <h2
          className={cn(
            "mb-1 text-xl font-medium pt-4",
            titleColor ? titleColor : ""
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "text-xs tracking-[1px]",
            descriptionColor ? descriptionColor : ""
          )}
        >
          {description}y
        </p>
      </CardContent>
    </Card>
  );
};

export default InvoiceActionCard;
