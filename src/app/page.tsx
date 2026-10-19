import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, DraftingCompass, Building2, ScanLine, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cta, Reveal, TextLink } from "@/components/studio/shell";
import { ProjectCard } from "@/components/studio/project-card";
import { images, pageHead, services } from "@/data/studio";
import { fetchProjects } from "@/data/projects";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  return pageHead(
    "Αρχική",
    "DESIGN CONSTRUCTION — Χαλικιώτης Θ. Γεώργιος, Πολιτικός Μηχανικός ΤΕ. Σχεδιασμός με ουσία, κατασκευή με συνέπεια.",
  );
}

const icons = [DraftingCompass, Building2, ScanLine, MessagesSquare];

export default async function Index() {
  const projects = await fetchProjects();
  return (
    <main>
      <section className="hero">
        <img
          src={images.hero.src}
          alt="Ενδεικτική αρχιτεκτονική εικόνα σύγχρονης κατοικίας δίπλα στη θάλασσα"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div className="wrap hero-content">
          <div className="eyebrow">DESIGN CONSTRUCTION · ΠΟΛΙΤΙΚΟΣ ΜΗΧΑΝΙΚΟΣ</div>
          <h1>
            <span>Κατασκευάζουμε</span>
            <br />
            με συνέπεια.
          </h1>
          <p className="hero-description">
            Η τεχνική γνώση συναντά την αισθητική.
            <br />
            Δίνουμε μορφή σε χώρους με ουσία, ποιότητα και διαχρονική αξία.
          </p>
          <div className="hero-actions">
            <Button variant="light" asChild>
              <Link href="/projects">
                Ανακαλύψτε τα έργα μας <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="glass" asChild>
              <Link href="/contact">
                Επικοινωνήστε μαζί μας <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#approach">
            ΓΝΩΡΙΣΤΕ ΤΗ ΦΙΛΟΣΟΦΙΑ ΜΑΣ <ArrowDown size={15} />
          </a>
          <span className="hero-sample">Ενδεικτική αρχιτεκτονική απεικόνιση</span>
        </div>
      </section>
      <section className="section" id="approach">
        <Reveal className="wrap intro-grid">
          <div>
            <div className="eyebrow">Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ</div>
            <h2>
              Κάθε χώρος, μια ιδέα.
              <br />
              Κάθε έργο, μια δέσμευση.
            </h2>
            <p className="copy">
              Στη DESIGN CONSTRUCTION, βλέπουμε κάθε έργο ως μια ξεχωριστή συνεργασία. Με αφετηρία
              τις ανάγκες σας, συνδυάζουμε τεχνική σκέψη, λειτουργικό σχεδιασμό και προσοχή στη
              λεπτομέρεια.
              <br />
              <br />
              Για εμάς, η ουσία βρίσκεται στους χώρους που ανταποκρίνονται στη ζωή σας — σήμερα και
              αύριο.
            </p>
            <TextLink to="/about">Γνωρίστε μας καλύτερα</TextLink>
          </div>
          <div className="intro-image">
            <img
              src={images.courtyard.src}
              alt="Ενδεικτική μεσογειακή αυλή με φυσικό φως και ελιά"
              width={1200}
              height={1408}
              loading="lazy"
            />
            <span className="image-caption">Η ΑΠΛΟΤΗΤΑ ΕΙΝΑΙ ΣΤΗ ΛΕΠΤΟΜΕΡΕΙΑ.</span>
          </div>
        </Reveal>
      </section>
      <section className="section section-ice">
        <Reveal className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">ΑΠΟ ΤΗΝ ΙΔΕΑ ΣΤΗΝ ΥΛΟΠΟΙΗΣΗ</div>
              <h2>
                Ολοκληρωμένη σκέψη.
                <br />
                Ουσιαστικές λύσεις.
              </h2>
            </div>
            <TextLink to="/services">Εξερευνήστε τις υπηρεσίες</TextLink>
          </div>
          <div className="service-grid">
            {services.map((service, i) => {
              const Icon = icons[i] ?? DraftingCompass;
              return (
                <Link href="/services" key={service.title} className="service-preview">
                  <Icon />
                  <h3>{service.title}</h3>
                  <p>{service.intro}</p>
                  <ArrowUpRight className="service-arrow" />
                </Link>
              );
            })}
          </div>
          <p className="sample-note">
            Ενδεικτικές κατηγορίες υπηρεσιών — το τελικό αντικείμενο θα επιβεβαιωθεί από την
            εταιρεία.
          </p>
        </Reveal>
      </section>
      <section className="section">
        <Reveal className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">ΧΩΡΟΙ ΜΕ ΤΑΥΤΟΤΗΤΑ</div>
              <h2>Μια ματιά στα έργα.</h2>
            </div>
            <TextLink to="/projects">Όλα τα έργα</TextLink>
          </div>
          <div className="project-grid">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard project={project} index={i} key={project.slug} />
            ))}
          </div>
        </Reveal>
      </section>
      <Cta />
    </main>
  );
}
