"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm text-[#1A1A1A] bg-white focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors outline-none";
const labelClass = "block text-[0.8rem] font-medium text-[#1A1A1A] mb-1";

const cardsLabelMap: Record<string, string> = {
  "50-100": "50 – 100 Cards",
  "100-200": "100 – 200 Cards",
  "200+": "200+ Cards",
  "budget": "Depends on Budget",
  "not-sure": "Not Sure Yet",
};

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cardsRequired, setCardsRequired] = useState("not-sure");
  const [message, setMessage] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Compute live WhatsApp URL containing all form fields
  const cardsText = cardsLabelMap[cardsRequired] || "Not Sure Yet";
  const fileNote = uploadedFile ? `\n📎 *Reference Image:* ${uploadedFile.name} (sharing in chat)` : "";

  const lines = [
    `*New Inquiry - Baroque Invites*`,
    ``,
    name.trim() ? `👤 *Full Name:* ${name.trim()}` : `👤 *Full Name:* Website Client`,
    phone.trim() ? `📞 *Phone Number:* ${phone.trim()}` : null,
    email.trim() ? `✉️ *E-mail:* ${email.trim()}` : null,
    `💌 *Cards Required:* ${cardsText}`,
    message.trim() ? `💬 *Message:* ${message.trim()}` : null,
    fileNote || null,
    ``,
    `Please share pricing, design samples, and details.`,
  ].filter(Boolean);

  const whatsappUrl = `https://wa.me/923177474736?text=${encodeURIComponent(lines.join("\n"))}`;

  const handleSendClick = () => {
    // Optional background sync to API
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("cardsRequired", cardsRequired);
      formData.append("message", message);
      if (uploadedFile) formData.append("file", uploadedFile);
      fetch("/api/contact", { method: "POST", body: formData }).catch(() => {});
    } catch {
      // Ignore background errors
    }
  };

  return (
    <section id="contact" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          heading="Contact Us"
          align="center"
          className="mb-8"
        />

        {/* Contact info row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-sm">
          <a
            href="tel:+923177474736"
            className="flex items-center gap-2 text-[#1A1A1A] hover:text-[#C9A84C] transition-colors"
          >
            <Phone size={15} />
            <span>+92 317 7474 736</span>
          </a>
          <span className="hidden sm:block text-gray-300">·</span>
          <a
            href="mailto:hello@baroqueinvites.com"
            className="flex items-center gap-2 text-[#1A1A1A] hover:text-[#C9A84C] transition-colors"
          >
            <Mail size={15} />
            <span>hello@baroqueinvites.com</span>
          </a>
        </div>

        {/* Form card */}
        <div className="max-w-2xl mx-auto bg-[#FAF7F2] rounded-2xl p-8 md:p-10 shadow-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappUrl, "_blank");
            }}
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+92 300 0000000"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>E-mail Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            {/* Cards Required */}
            <div>
              <label className={labelClass}>Cards Required?</label>
              <select
                value={cardsRequired}
                onChange={(e) => setCardsRequired(e.target.value)}
                className={inputClass}
              >
                <option value="50-100">50 – 100 Cards</option>
                <option value="100-200">100 – 200 Cards</option>
                <option value="200+">200+ Cards</option>
                <option value="budget">Depends on Budget</option>
                <option value="not-sure">Not Sure Yet</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className={labelClass}>Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Tell us about your vision, theme, date..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* File upload */}
            <div>
              <label className={labelClass}>Reference Image (optional)</label>
              <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-200 rounded-lg py-6 px-4 cursor-pointer hover:border-[#C9A84C] transition-colors bg-white">
                <span className="text-[#6B6B6B] text-sm text-center">
                  {uploadedFile ? (
                    <span className="text-[#C9A84C] font-medium">{uploadedFile.name}</span>
                  ) : (
                    <>Click to upload or drag &amp; drop</>
                  )}
                </span>
                <span className="text-xs text-[#6B6B6B]/60 mt-1">PNG, JPG, WEBP</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
                />
              </label>
            </div>

            {/* Direct WhatsApp Action Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSendClick}
              className="w-full bg-[#C9A84C] hover:bg-[#B8963D] text-white font-semibold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 mt-2 shadow-md cursor-pointer text-center text-sm font-sans hover:shadow-lg active:scale-[0.99]"
            >
              Send Inquiry →
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

