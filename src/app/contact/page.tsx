import type { Metadata } from "next";
import { Mail, MapPin, Share2 } from "lucide-react";
import { PageHeading } from "@/components/studio/shell";
import { ContactForm } from "@/components/studio/contact-form";
import { pageHead } from "@/data/studio";

export function generateMetadata(): Metadata {
  return pageHead(
    "Επικοινωνία",
    "Συζητήστε την επόμενη ιδέα σας με τη DESIGN CONSTRUCTION. Χαλικιώτης Θ. Γεώργιος — Πολιτικός Μηχανικός ΤΕ.",
  );
}

export default function Contact() {
  return (
    <main>
      <PageHeading
        eyebrow="ΑΣ ΞΕΚΙΝΗΣΟΥΜΕ ΜΙΑ ΣΥΖΗΤΗΣΗ"
        title="Δώστε χώρο στην επόμενη ιδέα σας."
        description="Μοιραστείτε μαζί μας τις σκέψεις σας, τις ανάγκες του χώρου και όσα θέλετε να δημιουργήσετε."
      />
      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">DESIGN CONSTRUCTION</div>
            <h2>
              Κάθε έργο ξεκινά
              <br />
              με επικοινωνία.
            </h2>
            <p className="copy">
              ΧΑΛΙΚΙΩΤΗΣ Θ. ΓΕΩΡΓΙΟΣ
              <br />
              ΠΟΛΙΤΙΚΟΣ ΜΗΧΑΝΙΚΟΣ ΤΕ
            </p>
            <div className="contact-block">
              <h3>
                <Mail size={18} /> Στοιχεία επικοινωνίας
              </h3>
              <p>Το τηλέφωνο και το email της εταιρείας θα προστεθούν μόλις επιβεβαιωθούν.</p>
            </div>
            <div className="contact-block">
              <h3>
                <MapPin size={18} /> Έδρα & τοποθεσία
              </h3>
              <p>
                Η διεύθυνση και ο χάρτης θα συμπληρωθούν με τα πραγματικά στοιχεία της εταιρείας.
              </p>
            </div>
            <div className="contact-block">
              <h3>
                <Share2 size={18} /> Κοινωνικά δίκτυα
              </h3>
              <p>Οι επίσημοι λογαριασμοί θα προστεθούν όταν γίνουν διαθέσιμοι.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
