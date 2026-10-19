import type { Metadata } from "next";
import { Cta, PageHeading, Reveal } from "@/components/studio/shell";
import { images, pageHead } from "@/data/studio";

export function generateMetadata(): Metadata {
  return pageHead(
    "Σχετικά με εμάς",
    "Γνωρίστε τον Χαλικιώτη Θ. Γεώργιο και τη φιλοσοφία της DESIGN CONSTRUCTION.",
  );
}

export default function About() {
  return (
    <main>
      <PageHeading
        eyebrow="Ο ΑΝΘΡΩΠΟΣ ΠΙΣΩ ΑΠΟ ΤΟ ΕΡΓΟ"
        title="Τεχνική σκέψη. Ανθρώπινη προσέγγιση."
        description="Πιστεύουμε ότι ένας σωστά σχεδιασμένος χώρος ξεκινά από την κατανόηση των ανθρώπων που θα τον ζήσουν."
      />
      <section className="section">
        <Reveal className="wrap intro-grid">
          <div>
            <div className="eyebrow">DESIGN CONSTRUCTION</div>
            <h2 className="profile-name">ΧΑΛΙΚΙΩΤΗΣ Θ. ΓΕΩΡΓΙΟΣ</h2>
            <p className="eyebrow">ΠΟΛΙΤΙΚΟΣ ΜΗΧΑΝΙΚΟΣ ΤΕ</p>
            <p className="copy">
              Η DESIGN CONSTRUCTION εκφράζει μια προσέγγιση που δίνει χώρο στη λεπτομέρεια, τη
              λειτουργικότητα και την ουσιαστική συνεργασία. Στο επίκεντρο κάθε συζήτησης βρίσκονται
              οι πραγματικές ανάγκες του έργου και οι προσδοκίες του ανθρώπου που το εμπιστεύεται.
            </p>
            <h3>Επαγγελματική διαδρομή</h3>
            <p className="copy">
              Το αναλυτικό επαγγελματικό προφίλ θα συμπληρωθεί με επιβεβαιωμένα στοιχεία για την
              εκπαίδευση, την εμπειρία και τη διαδρομή του μηχανικού.
            </p>
            <p className="sample-note">Κείμενο παρουσίασης προς επιβεβαίωση από την εταιρεία.</p>
          </div>
          <div>
            <img
              className="editorial-image"
              src={images.courtyard.src}
              alt="Ενδεικτική αρχιτεκτονική σύνθεση με φως και φυσικά υλικά"
              width={1200}
              height={1408}
              loading="lazy"
            />
            <p className="sample-note">Ενδεικτική αρχιτεκτονική εικόνα.</p>
          </div>
        </Reveal>
      </section>
      <section className="section section-ice">
        <Reveal className="wrap">
          <div className="eyebrow">ΟΙ ΑΞΙΕΣ ΜΑΣ</div>
          <h2>
            Η ποιότητα δεν είναι μια λεπτομέρεια.
            <br />
            Είναι ο τρόπος που σκεφτόμαστε.
          </h2>
          <div className="values-grid">
            {[
              {
                title: "Ποιότητα με ουσία",
                text: "Προσοχή στον σχεδιασμό και στις επιλογές που καθορίζουν την καθημερινή χρήση ενός χώρου.",
              },
              {
                title: "Λειτουργικότητα & αισθητική",
                text: "Η ομορφιά έχει αξία όταν συνοδεύεται από άνεση, σαφή οργάνωση και σεβασμό στις ανάγκες σας.",
              },
              {
                title: "Συνέπεια & εμπιστοσύνη",
                text: "Καθαρή επικοινωνία, προσεκτική προσέγγιση και μια συνεργασία που βασίζεται στην αμοιβαία κατανόηση.",
              },
            ].map((v, i) => (
              <div className="value" key={v.title}>
                <span>0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="section">
        <Reveal className="wrap intro-grid">
          <img
            src={images.interior.src}
            className="editorial-image"
            alt="Ενδεικτικός φωτεινός εσωτερικός χώρος"
            width={1408}
            height={1104}
            loading="lazy"
          />
          <div>
            <div className="eyebrow">Η ΠΡΟΣΕΓΓΙΣΗ ΜΑΣ</div>
            <h2>
              Ακούμε. Μελετάμε.
              <br />
              Δίνουμε μορφή.
            </h2>
            <p className="copy">
              Κάθε χώρος έχει τις δικές του δυνατότητες. Η προσέγγισή μας ξεκινά με μια προσεκτική
              συζήτηση, εξελίσσεται με τεκμηριωμένη σκέψη και παραμένει προσηλωμένη σε ένα ξεκάθαρο
              ζητούμενο: ένα λειτουργικό, αξιόπιστο και διαχρονικό αποτέλεσμα.
            </p>
          </div>
        </Reveal>
      </section>
      <Cta />
    </main>
  );
}
