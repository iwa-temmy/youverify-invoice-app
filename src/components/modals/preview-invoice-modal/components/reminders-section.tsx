import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";
import { reminderOptions } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ReminderSection = () => {
  return (
    <section className="flex gap-10 flex-wrap items-center border border-[#E3E6EF] p-4 lg:p-6 rounded-3xl w-fit mt-6">
      <h4 className="uppercase text-xs tracking-[.07rem] text-neutralGrey">
        Reminders
      </h4>
      <div className="flex flex-wrap gap-y-2 gap-x-1 lg:gap-5">
        {reminderOptions.map((reminder, index) => (
          <Button
            variant={index <= 1 ? "default" : "outline"}
            className={cn(
              "rounded-3xl flex gap-2 lg:gap-4 text-darkGrey font-medium lowercase shadow-none h-10 lg:h-12 px-3 lg:px-6",
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
