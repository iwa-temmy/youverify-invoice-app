import { Dictionary } from "@/types/dictionary";
import RecentActivitiesCard from "../cards/recent-activities-card";
import RecentInvoicesCard from "../cards/recent-invoices-card";

const SectionThree = ({ openPreviewModal }: Dictionary) => {
  return (
    <section className="flex flex-col md:flex-col xl:flex-row gap-8 mt-6">
      <RecentInvoicesCard openPreviewModal={openPreviewModal} />
      <RecentActivitiesCard />
    </section>
  );
};

export default SectionThree;
