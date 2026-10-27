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
        eyebrow="Η Εξειδίκευσή μας"
        title="Γνωρίστε τις Υπηρεσίες μας"
        description="Με πολυετή εμπειρία, εξειδικευμένη τεχνογνωσία και διαρκή προσήλωση στην ποιότητα, αναλαμβάνουμε την υλοποίηση κάθε έργου με συνέπεια, αξιοπιστία και επαγγελματισμό. Στόχος μας είναι η παροχή ολοκληρωμένων λύσεων, προσαρμοσμένων στις ανάγκες και τις απαιτήσεις κάθε πελάτη. Γνωρίσετε τις υπηρεσίες και τα έργα μας ή επικοινωνήστε μαζί μας για μια εξατομικευμένη προσφορά."
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
