"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isTyping, setIsTyping] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const offsetX = ((cursor.x / window.innerWidth) - 0.5) * 40;
    const offsetY = ((cursor.y / window.innerHeight) - 0.5) * 20;
    setEyePos({ x: offsetX, y: offsetY });
  }, [cursor]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", projectType: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="flex-grow pt-16">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-xl md:py-24">
        <div className="max-w-3xl">
          <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-surface mb-md">
            Let's build something meaningful.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            We partner with ambitious enterprises to engineer digital products that define industries. Reach out to discuss your next strategic initiative.
          </p>
        </div>
      </section>

      {/* Contact Content Split */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-xl md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-xl">
        {/* Left Column: Form */}
        <div className="md:col-span-7 lg:col-span-8">
          <div className="bg-surface border border-outline-variant/30 rounded-xl p-md md:p-lg">
            {status === "success" && (
              <div className="mb-md p-md bg-primary/10 text-primary rounded-lg border border-primary/20">
                Thank you! Your message has been received. We will be in touch shortly.
              </div>
            )}
            {status === "error" && (
              <div className="mb-md p-md bg-error/10 text-error rounded-lg border border-error/20">
                Oops! Something went wrong. Please try again later.
              </div>
            )}

            <div className="flex justify-center mb-8">
              {/* Cartoon Face */}
              <div className="relative w-[280px] h-[160px] rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30 bg-surface-container-low">
                <img
                  src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/cloud.jpg"
                  alt="cartoon cloud"
                  className="w-full h-full object-cover"
                />

                {["left", "right"].map((side, idx) => (
                  <div
                    key={side}
                    className="absolute flex justify-center items-end overflow-hidden"
                    style={{
                      top: 60,
                      left: idx === 0 ? 80 : 160,
                      width: 28,
                      height: isTyping
                        ? 4 // fully closed when typing details
                        : blink
                        ? 6 // temporary blink
                        : 40, // open eye
                      borderRadius: isTyping || blink ? "2px" : "50% / 60%",
                      backgroundColor: isTyping ? "black" : "white",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {!isTyping && (
                      <div
                        className="bg-black"
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          marginBottom: 4,
                          transform: `translate(${eyePos.x}px, ${eyePos.y}px)`,
                          transition: "all 0.1s ease",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-lg">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="font-label text-label text-on-surface uppercase tracking-widest block" htmlFor="name">Full Name</label>
                  <input className="w-full border border-outline-variant/50 rounded-lg p-sm bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Jane Doe" required type="text" />
                </div>
                <div className="space-y-xs">
                  <label className="font-label text-label text-on-surface uppercase tracking-widest block" htmlFor="email">Work Email</label>
                  <input className="w-full border border-outline-variant/50 rounded-lg p-sm bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="jane@company.com" required type="email" />
                </div>
              </div>

              {/* Row 2: Company & Project Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="font-label text-label text-on-surface uppercase tracking-widest block" htmlFor="company">Company</label>
                  <input className="w-full border border-outline-variant/50 rounded-lg p-sm bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Organization Name" type="text" />
                </div>
                <div className="space-y-xs">
                  <label className="font-label text-label text-on-surface uppercase tracking-widest block" htmlFor="projectType">Project Type</label>
                  <div className="relative">
                    <select className="w-full border border-outline-variant/50 rounded-lg p-sm bg-surface-container-lowest appearance-none cursor-pointer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" id="projectType" name="projectType" value={formData.projectType} onChange={handleChange}>
                      <option disabled value="">Select an area of interest</option>
                      <option value="strategy">Digital Strategy</option>
                      <option value="design">Product Design</option>
                      <option value="engineering">Engineering</option>
                      <option value="ai">AI Integration</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Budget */}
              <div className="space-y-xs">
                <label className="font-label text-label text-on-surface uppercase tracking-widest block mb-sm">Estimated Budget (USD)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
                  {["50k-100k", "100k-250k", "250k-500k", "500k+"].map((val) => (
                    <label key={val} className="cursor-pointer">
                      <input className="peer sr-only" name="budget" type="radio" value={val} checked={formData.budget === val} onChange={handleChange} />
                      <div className="h-[44px] flex items-center justify-center border border-outline-variant/30 rounded bg-surface-container-lowest peer-checked:border-primary-container peer-checked:bg-primary/10 peer-checked:text-primary transition-all font-small text-small text-on-surface-variant">
                        ${val}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 4: Details */}
              <div className="space-y-xs">
                <label className="font-label text-label text-on-surface uppercase tracking-widest block" htmlFor="message">Project Details</label>
                <textarea className="w-full border border-outline-variant/50 rounded-lg p-sm bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" id="message" name="message" value={formData.message} onChange={handleChange} onFocus={() => setIsTyping(true)} onBlur={() => setIsTyping(false)} placeholder="Tell us about your objectives, timeline, and current challenges..." rows={5} required></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-sm">
                <button disabled={status === "loading"} className="bg-primary-container text-on-primary font-small text-small px-lg py-[12px] rounded hover:bg-primary-container/90 transition-colors flex items-center justify-center gap-xs w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
                  {status === "loading" ? "Sending..." : "Start the Conversation"}
                  {!status.includes("loading") && <span className="material-symbols-outlined text-[18px]">arrow_forward</span>}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Contact Info */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-lg">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md md:p-lg h-full flex flex-col justify-between">
            <div className="space-y-xl">
              <div>
                <h3 className="font-label text-label text-on-surface uppercase tracking-widest mb-sm text-on-surface-variant">General Inquiries</h3>
                <a className="font-h4 text-h4 text-on-surface hover:text-primary transition-colors block" href="mailto:hello@fill.com">hello@fill.com</a>
              </div>
              <div>
                <h3 className="font-label text-label text-on-surface uppercase tracking-widest mb-sm text-on-surface-variant">Global Headquarters</h3>
                <address className="not-italic font-body text-body text-on-surface">
                  100 Innovation Drive<br />
                  Suite 400<br />
                  San Francisco, CA 94103<br />
                  United States
                </address>
              </div>
              <div>
                <h3 className="font-label text-label text-on-surface uppercase tracking-widest mb-sm text-on-surface-variant">Connect</h3>
                <div className="flex gap-md">
                  <a className="text-on-surface hover:text-primary transition-colors flex items-center gap-xs font-small text-small" href="#">
                    LinkedIn <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                  <a className="text-on-surface hover:text-primary transition-colors flex items-center gap-xs font-small text-small" href="#">
                    Twitter <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
