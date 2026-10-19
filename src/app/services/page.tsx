import type { Metadata } from "next";
import { Cta, PageHeading } from "@/components/studio/shell";
import { ServicesView } from "@/components/studio/services-view";
import { pageHead } from "@/data/studio";

export function generateMetadata(): Metadata {
  return pageHead(
    "Υπηρεσίες",
    "Εξερευνήστε ενδεικτικές κατηγορίες μελέτης, κατασκευής, επίβλεψης και τεχνικής συμβουλευτικής.",
  );
}

export default function Services() {
  return (
    <main>
      <PageHeading
        eyebrow="ΜΕΛΕΤΗ · ΣΧΕΔΙΑΣΜΟΣ · ΥΛΟΠΟΙΗΣΗ"
        title="Η ιδέα σας. Μια ολοκληρωμένη προσέγγιση."
        description="Κάθε έργο έχει διαφορετικές ανάγκες. Η σωστή αφετηρία είναι η κατανόηση του χώρου, του στόχου και των δυνατοτήτων του."
      />
      <section className="section">
        <div className="wrap">
          <ServicesView />
        </div>
      </section>
      <Cta />
    </main>
  );
}
