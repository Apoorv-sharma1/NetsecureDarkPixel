import { useState, FormEvent, ReactNode } from "react";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "date";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  span?: 1 | 2;
};

export function LeadForm({
  fields,
  submitLabel = "Submit",
  successMessage = "Thank you! Our team will be in touch within 48 hours.",
  intro,
}: {
  fields: Field[];
  submitLabel?: string;
  successMessage?: string;
  intro?: ReactNode;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission. Wire to backend later via Lovable Cloud.
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      toast.success("Submission received", { description: successMessage });
      (e.target as HTMLFormElement).reset();
    }, 700);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-teal" />
        <h3 className="mt-4 font-display text-xl font-bold">You're in.</h3>
        <p className="mt-2 text-sm text-muted-foreground">{successMessage}</p>
        <button
          onClick={() => setDone(false)}
          className="mt-6 text-sm font-semibold text-teal underline-offset-4 hover:underline"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {intro}
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={f.span === 2 || f.type === "textarea" ? "md:col-span-2" : ""}>
            <label htmlFor={f.name} className="mb-1.5 block text-sm font-medium text-foreground">
              {f.label} {f.required && <span className="text-saffron">*</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={f.name}
                name={f.name}
                required={f.required}
                rows={4}
                placeholder={f.placeholder}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/30"
              />
            ) : f.type === "select" ? (
              <select
                id={f.name}
                name={f.name}
                required={f.required}
                defaultValue=""
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/30"
              >
                <option value="" disabled>Choose…</option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                placeholder={f.placeholder}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/30"
              />
            )}
          </div>
        ))}
        {/* honeypot */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-lg bg-saffron px-6 py-3.5 text-base font-bold text-saffron-foreground transition hover:brightness-110 disabled:opacity-60 md:w-auto"
      >
        {submitting ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
