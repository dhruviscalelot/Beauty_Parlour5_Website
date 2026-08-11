import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { services, team } from "@/lib/site-data";
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

const times = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"];

export function Book() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    service: "",
    staff: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const canNext = useMemo(() => {
    if (step === 0) return !!data.service;
    if (step === 1) return !!data.staff;
    if (step === 2) return !!data.date && !!data.time;
    if (step === 3) return !!data.name && !!data.phone;
    return true;
  }, [step, data]);

  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Book your Luxé experience"
        subtitle="Takes under a minute. Confirmation sent via WhatsApp."
      />

      <section className="py-20">
        <div className="container-lux max-w-3xl">
          {/* Stepper */}
          <ol className="flex items-center justify-between mb-14">
            {["Service", "Expert", "Date & Time", "Details", "Done"].map((label, i) => (
              <li key={label} className="flex-1 flex items-center">
                <div
                  className={`w-9 h-9 shrink-0 rounded-full grid place-items-center text-xs font-medium border transition-colors ${
                    i <= step
                      ? "bg-rose text-ivory border-rose"
                      : "bg-card border-border text-muted-foreground"
                  }`}
                >
                  {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                </div>
                {i < 4 && (
                  <div
                    className={`flex-1 h-px mx-2 ${i < step ? "bg-rose" : "bg-border"}`}
                  />
                )}
              </li>
            ))}
          </ol>

          <div className="p-8 md:p-10 rounded-3xl bg-card border border-border">
            {step === 0 && (
              <div>
                <h2 className="font-serif text-3xl mb-6 text-cocoa">Choose a service</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map((s) => (
                    <button
                      key={s.slug}
                      type="button"
                      onClick={() => setData({ ...data, service: s.name })}
                      className={`text-left p-5 rounded-xl border transition-all ${
                        data.service === s.name
                          ? "border-rose bg-blush/50"
                          : "border-border hover:border-gold"
                      }`}
                    >
                      <div className="eyebrow">{s.category}</div>
                      <div className="font-serif text-xl mt-1 text-cocoa">{s.name}</div>
                      <div className="text-sm mt-2 flex justify-between text-muted-foreground">
                        <span>{s.duration}</span>
                        <span className="text-rose font-medium">{s.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="font-serif text-3xl mb-6 text-cocoa">Pick your expert</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    {
                      name: "Any available expert",
                      role: "We'll assign the best-suited artist",
                      exp: "",
                    },
                    ...team,
                  ].map((m) => (
                    <button
                      key={m.name}
                      type="button"
                      onClick={() => setData({ ...data, staff: m.name })}
                      className={`text-left p-5 rounded-xl border transition-all ${
                        data.staff === m.name
                          ? "border-rose bg-blush/50"
                          : "border-border hover:border-gold"
                      }`}
                    >
                      <div className="font-serif text-xl text-cocoa">{m.name}</div>
                      <div className="text-sm text-muted-foreground mt-1">{m.role}</div>
                      {m.exp && <div className="text-xs text-rose mt-1">{m.exp} experience</div>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-serif text-3xl mb-6 text-cocoa">Select date &amp; time</h2>
                <label className="eyebrow">Date</label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={data.date}
                  onChange={(e) => setData({ ...data, date: e.target.value })}
                  className="mt-1.5 w-full px-4 py-3 rounded-lg border border-border bg-ivory focus:outline-none focus:border-gold text-cocoa"
                />
                <label className="eyebrow mt-6 block">Available time slots</label>
                <div className="mt-2 grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setData({ ...data, time: t })}
                      className={`py-3 rounded-lg border text-sm transition-colors ${
                        data.time === t
                          ? "border-rose bg-rose text-ivory"
                          : "border-border hover:border-gold text-cocoa"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-serif text-3xl mb-6 text-cocoa">Your details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="eyebrow">Full name</label>
                    <input
                      value={data.name}
                      placeholder="e.g. Ananya Sharma"
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      className="mt-1.5 w-full px-4 py-3 rounded-lg border border-border bg-ivory focus:outline-none focus:border-gold text-cocoa"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="eyebrow">Phone</label>
                      <input
                        value={data.phone}
                        placeholder="+91 98765 43210"
                        onChange={(e) => setData({ ...data, phone: e.target.value })}
                        className="mt-1.5 w-full px-4 py-3 rounded-lg border border-border bg-ivory focus:outline-none focus:border-gold text-cocoa"
                      />
                    </div>
                    <div>
                      <label className="eyebrow">Email</label>
                      <input
                        value={data.email}
                        placeholder="you@example.com"
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        type="email"
                        className="mt-1.5 w-full px-4 py-3 rounded-lg border border-border bg-ivory focus:outline-none focus:border-gold text-cocoa"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="eyebrow">Notes (optional)</label>
                    <textarea
                      value={data.notes}
                      onChange={(e) => setData({ ...data, notes: e.target.value })}
                      rows={3}
                      placeholder="Any specific requests or preferences..."
                      className="mt-1.5 w-full px-4 py-3 rounded-lg border border-border bg-ivory focus:outline-none focus:border-gold text-cocoa"
                    />
                  </div>
                </div>

                <div className="mt-8 p-5 rounded-xl bg-blush/50 text-sm space-y-1 text-cocoa">
                  <div className="eyebrow mb-2">Appointment summary</div>
                  <div>
                    <b>Service:</b> {data.service}
                  </div>
                  <div>
                    <b>Expert:</b> {data.staff}
                  </div>
                  <div>
                    <b>Date & Time:</b> {data.date} · {data.time}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-blush grid place-items-center mx-auto text-rose">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h2 className="font-serif text-4xl mt-6 text-cocoa">
                  You're booked, {data.name.split(" ")[0] || "beautiful"}!
                </h2>
                <p className="mt-4 text-muted-foreground">
                  A confirmation has been sent to {data.phone} via WhatsApp. We can't wait to
                  welcome you.
                </p>
                <div className="mt-6 max-w-sm mx-auto p-5 rounded-xl bg-blush/50 text-sm text-left space-y-1 text-cocoa">
                  <div>
                    <b>Service:</b> {data.service}
                  </div>
                  <div>
                    <b>Expert:</b> {data.staff}
                  </div>
                  <div>
                    <b>When:</b> {data.date} at {data.time}
                  </div>
                </div>
              </div>
            )}

            {step < 4 && (
              <div className="mt-10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-rose disabled:opacity-30 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={!canNext}
                  className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  {step === 3 ? "Confirm booking" : "Continue"} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Book;
