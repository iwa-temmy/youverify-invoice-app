import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";
import { reminderOptions } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ReminderSection = () => {
  return (
    <section className="flex gap-10 flex-wrap items-center border border-[#E3E6EF] p-6 rounded-3xl w-fit">
      <h4 className="uppercase text-xs tracking-[.07rem] text-neutralGrey">
        Reminders
      </h4>
      <div className="flex gap-5">
        {reminderOptions.map((reminder, index) => (
          <Button
            variant={index <= 1 ? "default" : "outline"}
            className={cn(
              "rounded-3xl flex gap-4 text-darkGrey font-medium lowercase shadow-none h-12 px-6",
              index <= 1 ? "bg-[#E6FFF0] hover:bg-[#E6FFF0]" : ""
            )}
            key={index}
          >
            {reminder.label}{" "}
            {index <= 1 ? (
              <Icon icon="lucide:check" className="text-[#2DB260]" />
            ) : null}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default ReminderSection;
