import type { Metadata } from "next";
import hero from "@/assets/architecture-hero.jpg";
import courtyard from "@/assets/architecture-courtyard.jpg";
import residence from "@/assets/architecture-residence.jpg";
import interior from "@/assets/architecture-interior.jpg";

export const images = { hero, courtyard, residence, interior };

export const services = [
  {
    title: "Μελέτες & σχεδιασμός",
    intro: "Από την πρώτη ιδέα, σε ένα ολοκληρωμένο σχέδιο.",
    detail:
      "Ενδεικτική κατηγορία για αρχιτεκτονικές και τεχνικές μελέτες. Εδώ θα προστεθούν το ακριβές αντικείμενο των παρεχόμενων μελετών, τα επιμέρους στάδια και οι πληροφορίες που χρειάζεται ο ιδιοκτήτης πριν από την έναρξη ενός έργου.",
  },
  {
    title: "Κατασκευή έργων",
    intro: "Η λεπτομέρεια κάνει τη διαφορά στην υλοποίηση.",
    detail:
      "Ενδεικτική κατηγορία για την υλοποίηση κατασκευαστικών έργων. Η τελική περιγραφή θα διευκρινίζει το εύρος εργασιών, τη διαδικασία οργάνωσης και τον τρόπο συνεργασίας, σύμφωνα με τις επιβεβαιωμένες υπηρεσίες της εταιρείας.",
  },
  {
    title: "Επίβλεψη έργων",
    intro: "Συνέπεια και προσοχή σε κάθε στάδιο.",
    detail:
      "Ενδεικτική κατηγορία τεχνικής επίβλεψης. Το περιεχόμενο θα συμπληρωθεί με τις πραγματικές υπηρεσίες παρακολούθησης, τον έλεγχο εφαρμογής των μελετών και τις αντίστοιχες αρμοδιότητες.",
  },
  {
    title: "Τεχνική συμβουλευτική",
    intro: "Σαφείς απαντήσεις. Τεκμηριωμένες αποφάσεις.",
    detail:
      "Ενδεικτική κατηγορία συμβουλευτικών υπηρεσιών για ιδιοκτήτες και συνεργάτες. Εδώ θα περιγραφούν τα επιβεβαιωμένα πεδία υποστήριξης και οι προϋποθέσεις μιας αρχικής τεχνικής συζήτησης.",
  },
];

export const sampleNotice =
  "Ενδεικτικό περιεχόμενο και εικόνες — δεν αποτελούν πραγματοποιημένα έργα της εταιρείας.";

export function pageHead(title: string, description: string): Metadata {
  const fullTitle = `${title} | DESIGN CONSTRUCTION`;
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}
