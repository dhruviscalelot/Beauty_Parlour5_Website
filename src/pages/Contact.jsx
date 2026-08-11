import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]{10,15}$/, "Please enter a valid phone number")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export function Contact() {
  const [sent, setSent] = useState(false);

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Contact form submitted:", values);
    setSent(true);
    resetForm();
  };

  return (
    <>
      <PageHero
        eyebrow="Visit Luxé"
        title="We'd love to welcome you."
        subtitle="Reach out — we usually reply within an hour during salon hours."
      />

      <section className="py-20">
        <div className="container-lux grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl text-cocoa">Get in touch</h2>
            <p className="mt-3 text-muted-foreground">
              Prefer WhatsApp? Tap the green button — we usually reply within 15 minutes.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: MapPin,
                  label: "Studio",
                  value: "12 Rose Avenue, Bandra West, Mumbai 400050",
                },
                { icon: Phone, label: "Call", value: "+91 98765 43210", href: "tel:+919876543210" },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+91 98765 43210",
                  href: "https://wa.me/919876543210",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "care@luxesalon.in",
                  href: "mailto:care@luxesalon.in",
                },
                { icon: Clock, label: "Hours", value: "Mon – Sun · 10 AM – 9 PM" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href || "#"}
                  className="flex gap-4 items-start p-4 rounded-xl border border-border bg-card hover:border-gold transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blush grid place-items-center text-rose shrink-0">
                    <c.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="eyebrow">{c.label}</div>
                    <div className="mt-1 text-cocoa">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-card">
            <h3 className="font-serif text-2xl text-cocoa">Send us a note</h3>
            {sent ? (
              <div className="mt-8 text-center py-10">
                <div className="font-serif text-3xl text-rose">Thank you!</div>
                <p className="mt-3 text-muted-foreground">
                  We've received your message and will reply shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 btn-ghost !py-2 !px-5 text-xs"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="mt-6">
                    <div className="w-full p-1.5 xl:p-2.5 2xl:p-3.5 relative">
                      <label className="eyebrow">Name</label>
                      <Field
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        className="input"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>


                    <div className="w-full p-1.5 xl:p-2.5 2xl:p-3.5 relative">
                      <label className="eyebrow">Phone</label>
                      <Field
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="input"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="w-full p-1.5 xl:p-2.5 2xl:p-3.5 relative">
                      <label className="eyebrow">Email</label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="input"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>

                    <div className="w-full p-1.5 xl:p-2.5 2xl:p-3.5 relative">
                      <label className="eyebrow">Message</label>
                      <Field
                        name="message"
                        as="textarea"
                        rows={4}
                        placeholder="Write your message or inquiry here..."
                        className="input"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="error"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full mt-2"
                    >
                      Send Message
                    </button>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-lux">
          <div className="rounded-2xl overflow-hidden border border-border aspect-[16/7]">
            <iframe
              title="Luxé Salon location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.499!2d72.8296!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBandra%20West!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
