"use client";

import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().trim().min(2, "Συμπληρώστε το ονοματεπώνυμό σας.").max(100),
  email: z.string().trim().email("Συμπληρώστε ένα έγκυρο email.").max(255),
  phone: z
    .string()
    .trim()
    .max(25)
    .refine((v) => !v || /^[+\d\s()-]{7,25}$/.test(v), "Συμπληρώστε έναν έγκυρο αριθμό τηλεφώνου."),
  subject: z.string().trim().min(2, "Συμπληρώστε το θέμα.").max(150),
  message: z.string().trim().min(10, "Το μήνυμα χρειάζεται τουλάχιστον 10 χαρακτήρες.").max(3000),
});

const fields = [
  { name: "name", label: "Ονοματεπώνυμο", type: "text", max: 100, autocomplete: "name" },
  { name: "email", label: "Email", type: "email", max: 255, autocomplete: "email" },
  { name: "phone", label: "Τηλέφωνο (προαιρετικό)", type: "tel", max: 25, autocomplete: "tel" },
  { name: "subject", label: "Θέμα", type: "text", max: 150, autocomplete: "off" },
] as const;

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [checking, setChecking] = useState(false);
  const [status, setStatus] = useState("");

  async function validate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const issues: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        issues[String(issue.path[0])] = issue.message;
      });
      setErrors(issues);
      return;
    }
    setErrors({});
    setChecking(true);
    await new Promise((resolve) => setTimeout(resolve, 350));
    setChecking(false);
    setStatus(
      "Τα πεδία είναι έγκυρα. Δεν έχει αποσταλεί μήνυμα: η φόρμα δεν έχει συνδεθεί ακόμη με υπηρεσία αποστολής.",
    );
  }

  return (
    <div>
      <h2 className="mt-0">Το μήνυμά σας.</h2>
      <p className="sample-note mb-8">
        Προεπισκόπηση φόρμας — η αποστολή δεν είναι ακόμη διαθέσιμη. Μπορείτε μόνο να ελέγξετε τα
        πεδία.
      </p>
      <form onSubmit={validate} noValidate>
        <div className="form-grid">
          {fields.map((field) => (
            <div className="form-field" key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                maxLength={field.max}
                autoComplete={field.autocomplete}
                required={field.name !== "phone"}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              />
              {errors[field.name] && (
                <span className="field-error" id={`${field.name}-error`}>
                  {errors[field.name]}
                </span>
              )}
            </div>
          ))}
          <div className="form-field wide">
            <label htmlFor="message">Μήνυμα</label>
            <textarea
              id="message"
              name="message"
              maxLength={3000}
              required
              aria-invalid={Boolean(errors["message"])}
              aria-describedby={errors["message"] ? "message-error" : undefined}
            />
            {errors["message"] && (
              <span className="field-error" id="message-error">
                {errors["message"]}
              </span>
            )}
          </div>
        </div>
        <Button variant="studio" type="submit" className="mt-6" disabled={checking}>
          {checking ? (
            <>
              <LoaderCircle className="animate-spin" />
              Έλεγχος πεδίων…
            </>
          ) : (
            <>
              Έλεγχος πεδίων — χωρίς αποστολή <ArrowUpRight />
            </>
          )}
        </Button>
        <div aria-live="polite">
          {status && <p className="form-status">{status}</p>}
          {Object.keys(errors).length > 0 && (
            <p className="field-error mt-4" role="alert">
              Ελέγξτε τα επισημασμένα πεδία.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
