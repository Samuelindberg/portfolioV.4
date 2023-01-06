import React from "react";
import ContactIntro from "./ContactIntro";
import ContactInfo from "./ContactInfo";
export default function ContactPage() {
  return (
    <section className="contact-section flex-center-column">
      <ContactIntro />
      <ContactInfo />
    </section>
  );
}
