"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2 } from "lucide-react";

// Utility for merging classes
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const steps = [
  { id: "personal", title: "Personal Info" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "availability", title: "Availability" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  degree: string;
  university: string;
  gradYear: string;
  interestArea: string;
  skills: string[];
  portfolio: string;
  projectDescription: string;
  startDate: string;
  duration: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

export default function InternshipForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    degree: "",
    university: "",
    gradYear: "",
    interestArea: "",
    skills: [],
    portfolio: "",
    projectDescription: "",
    startDate: "",
    duration: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleSkill = (skill: string) => {
    setFormData((prev) => {
      const skills = [...prev.skills];
      if (skills.includes(skill)) {
        return { ...prev, skills: skills.filter((s) => s !== skill) };
      } else {
        return { ...prev, skills: [...skills, skill] };
      }
    });
  };

  const nextStep = () => {
    if (isStepValid()) {
      setShowErrors(false);
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    } else {
      setShowErrors(true);
    }
  };

  const prevStep = () => {
    setShowErrors(false);
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!isStepValid()) {
      setShowErrors(true);
      return;
    }
    
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/internship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit. Check your connection or try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if step is valid for next button
  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() !== "" && 
               formData.email.trim() !== "" && 
               formData.email.toLowerCase().includes("@gmail.com") &&
               formData.linkedin.trim() !== "" && 
               formData.linkedin.includes("linkedin.com");
      case 1:
        return formData.degree.trim() !== "" && formData.university.trim() !== "" && formData.gradYear !== "";
      case 2:
        return formData.interestArea !== "" && formData.skills.length > 0;
      case 3:
        return formData.portfolio.trim() !== "" &&
               formData.portfolio.toLowerCase().includes("github.com") &&
               formData.projectDescription.trim() !== "";
      case 4:
        return formData.startDate !== "" && formData.duration !== "";
      default:
        return true;
    }
  };

  const getErrorClass = (condition: boolean) => {
    return showErrors && condition ? "border-red-500 ring-2 ring-red-500/20" : "border-gray-300 focus:border-[#00346b] focus:ring-2 focus:ring-[#00346b]/20";
  };

  if (submitted) {
    return (
      <div className="w-full max-w-lg mx-auto py-16 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100 flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <Check className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Received!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying, {formData.name.split(" ")[0]}. We've received your application and our team will be in touch soon.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-[#00346b] hover:bg-[#002855] text-white rounded-full font-medium transition-colors"
          >
            Return to Homepage
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4">
      {/* Progress indicator */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between mb-3 relative z-10 px-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative"
            >
              <div
                className={cn(
                  "w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center z-10 border-2",
                  index < currentStep
                    ? "bg-[#00346b] border-[#00346b] text-white"
                    : index === currentStep
                      ? "bg-white border-[#00346b] ring-4 ring-[#00346b]/20"
                      : "bg-white border-gray-300"
                )}
              >
                {index < currentStep && <Check className="w-3 h-3" />}
              </div>
              <span
                className={cn(
                  "text-xs mt-2 hidden sm:block absolute top-6 whitespace-nowrap",
                  index === currentStep
                    ? "text-[#00346b] font-semibold"
                    : index < currentStep 
                      ? "text-gray-700" 
                      : "text-gray-400"
                )}
              >
                {step.title}
              </span>
            </div>
          ))}
          {/* Background Line */}
          <div className="absolute top-[9px] left-4 right-4 h-0.5 bg-gray-200 -z-10"></div>
          {/* Active Line */}
          <motion.div
            className="absolute top-[9px] left-4 h-0.5 bg-[#00346b] -z-10"
            initial={{ width: 0 }}
            animate={{ width: `calc(${(currentStep / (steps.length - 1)) * 100}% - 2rem)` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8"
      >
        <div className="bg-white border border-gray-100 shadow-xl rounded-3xl overflow-hidden flex flex-col">
          <div className="p-8 md:p-10 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
              >
                {/* Step 1: Personal Info */}
                {currentStep === 0 && (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                      <p className="text-gray-500 mt-1">Let's start with the basics.</p>
                    </div>
                    <div className="space-y-5">
                      <motion.div variants={fadeInUp} className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Full Name *</label>
                        <input
                          type="text"
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          className={cn("w-full px-4 py-3 rounded-xl border outline-none transition-all", getErrorClass(formData.name.trim() === ""))}
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700 flex justify-between">
                          <span>Gmail Address *</span>
                          {showErrors && (!formData.email.toLowerCase().includes("@gmail.com") || formData.email.trim() === "") && (
                            <span className="text-red-500 text-xs">Valid Gmail required</span>
                          )}
                        </label>
                        <input
                          type="email"
                          placeholder="jane@gmail.com"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          className={cn("w-full px-4 py-3 rounded-xl border outline-none transition-all", getErrorClass(formData.email.trim() === "" || !formData.email.toLowerCase().includes("@gmail.com")))}
                        />
                      </motion.div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <motion.div variants={fadeInUp} className="space-y-1.5">
                          <label className="text-sm font-medium text-gray-700">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => updateFormData("phone", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#00346b] focus:ring-2 focus:ring-[#00346b]/20 outline-none transition-all"
                          />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-1.5">
                          <label className="text-sm font-medium text-gray-700 flex justify-between">
                            <span>LinkedIn URL *</span>
                            {showErrors && (!formData.linkedin.includes("linkedin.com") || formData.linkedin.trim() === "") && (
                              <span className="text-red-500 text-xs">Valid LinkedIn URL required</span>
                            )}
                          </label>
                          <input
                            type="url"
                            placeholder="linkedin.com/in/janedoe"
                            value={formData.linkedin}
                            onChange={(e) => updateFormData("linkedin", e.target.value)}
                            className={cn("w-full px-4 py-3 rounded-xl border outline-none transition-all", getErrorClass(formData.linkedin.trim() === "" || !formData.linkedin.includes("linkedin.com")))}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </>
                )}

                {/* Step 2: Education */}
                {currentStep === 1 && (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900">Education</h2>
                      <p className="text-gray-500 mt-1">Tell us about your academic background.</p>
                    </div>
                    <div className="space-y-5">
                      <motion.div variants={fadeInUp} className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Current Degree Program *</label>
                        <input
                          type="text"
                          placeholder="e.g. B.S. Computer Science"
                          value={formData.degree}
                          onChange={(e) => updateFormData("degree", e.target.value)}
                          className={cn("w-full px-4 py-3 rounded-xl border outline-none transition-all", getErrorClass(formData.degree.trim() === ""))}
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">University / Institution *</label>
                        <input
                          type="text"
                          placeholder="e.g. Stanford University"
                          value={formData.university}
                          onChange={(e) => updateFormData("university", e.target.value)}
                          className={cn("w-full px-4 py-3 rounded-xl border outline-none transition-all", getErrorClass(formData.university.trim() === ""))}
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Expected Graduation Year *</label>
                        <select
                          value={formData.gradYear}
                          onChange={(e) => updateFormData("gradYear", e.target.value)}
                          className={cn("w-full px-4 py-3 rounded-xl border outline-none transition-all bg-white", getErrorClass(formData.gradYear === ""))}
                        >
                          <option value="" disabled>Select a year</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028+">2028 or later</option>
                        </select>
                      </motion.div>
                    </div>
                  </>
                )}

                {/* Step 3: Skills */}
                {currentStep === 2 && (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900">Skills & Interests</h2>
                      <p className="text-gray-500 mt-1">What are you passionate about?</p>
                    </div>
                    <div className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-3">
                        <label className="text-sm font-medium text-gray-700">Primary Area of Interest *</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            { value: "frontend", label: "Frontend Engineering" },
                            { value: "backend", label: "Backend / Infrastructure" },
                            { value: "ai-ml", label: "AI & Machine Learning" },
                            { value: "design", label: "Product Design (UI/UX)" }
                          ].map((area) => (
                            <label 
                              key={area.value}
                              className={cn(
                                "flex items-center space-x-3 p-4 border rounded-xl cursor-pointer transition-all hover:bg-gray-50",
                                formData.interestArea === area.value ? "border-[#00346b] bg-blue-50/50 ring-1 ring-[#00346b]" : "border-gray-200",
                                showErrors && formData.interestArea === "" && "border-red-500"
                              )}
                            >
                              <input 
                                type="radio" 
                                name="interestArea"
                                value={area.value}
                                checked={formData.interestArea === area.value}
                                onChange={(e) => updateFormData("interestArea", e.target.value)}
                                className="w-4 h-4 text-[#00346b] focus:ring-[#00346b]"
                              />
                              <span className="font-medium text-gray-900">{area.label}</span>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                      
                      <motion.div variants={fadeInUp} className="space-y-3">
                        <label className="text-sm font-medium text-gray-700">Key Technologies / Skills *</label>
                        <div className={cn("flex flex-wrap gap-2 p-2 rounded-xl border", showErrors && formData.skills.length === 0 ? "border-red-500" : "border-transparent")}>
                          {[
                            "React / Next.js", "TypeScript", "Python", "Node.js", 
                            "Go", "Docker", "Figma", "Tailwind CSS", "SQL", "Machine Learning"
                          ].map((skill) => {
                            const isSelected = formData.skills.includes(skill);
                            return (
                              <button
                                key={skill}
                                type="button"
                                onClick={() => toggleSkill(skill)}
                                className={cn(
                                  "px-4 py-2 rounded-full text-sm font-medium transition-all border",
                                  isSelected 
                                    ? "bg-[#00346b] border-[#00346b] text-white" 
                                    : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                                )}
                              >
                                {skill}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>
                  </>
                )}

                {/* Step 4: Experience */}
                {currentStep === 3 && (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
                      <p className="text-gray-500 mt-1">Show us what you've built.</p>
                    </div>
                    <div className="space-y-5">
                      <motion.div variants={fadeInUp} className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700 flex justify-between">
                          <span>GitHub URL *</span>
                          {showErrors && (!formData.portfolio.toLowerCase().includes("github.com") || formData.portfolio.trim() === "") && (
                            <span className="text-red-500 text-xs">Valid GitHub URL required</span>
                          )}
                        </label>
                        <input
                          type="url"
                          placeholder="github.com/janedoe"
                          value={formData.portfolio}
                          onChange={(e) => updateFormData("portfolio", e.target.value)}
                          className={cn("w-full px-4 py-3 rounded-xl border outline-none transition-all", getErrorClass(formData.portfolio.trim() === "" || !formData.portfolio.toLowerCase().includes("github.com")))}
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Tell us about a project you're proud of *</label>
                        <textarea
                          placeholder="Describe a recent project, your role in it, and the technologies used."
                          value={formData.projectDescription}
                          onChange={(e) => updateFormData("projectDescription", e.target.value)}
                          className={cn("w-full px-4 py-3 rounded-xl border outline-none transition-all min-h-[120px] resize-y", getErrorClass(formData.projectDescription.trim() === ""))}
                        />
                      </motion.div>
                    </div>
                  </>
                )}

                {/* Step 5: Availability */}
                {currentStep === 4 && (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900">Availability</h2>
                      <p className="text-gray-500 mt-1">When can you join us?</p>
                    </div>
                    <div className="space-y-6">
                      <motion.div variants={fadeInUp} className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">Earliest Start Date *</label>
                        <input
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => updateFormData("startDate", e.target.value)}
                          className={cn("w-full px-4 py-3 rounded-xl border outline-none transition-all bg-white", getErrorClass(formData.startDate === ""))}
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-3">
                        <label className="text-sm font-medium text-gray-700">Available Duration *</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            { value: "3-months", label: "3 Months" },
                            { value: "6-months", label: "6 Months" },
                            { value: "1-year", label: "1 Year +" }
                          ].map((duration) => (
                            <label 
                              key={duration.value}
                              className={cn(
                                "flex items-center space-x-3 p-4 border rounded-xl cursor-pointer transition-all hover:bg-gray-50",
                                formData.duration === duration.value ? "border-[#00346b] bg-blue-50/50 ring-1 ring-[#00346b]" : "border-gray-200",
                                showErrors && formData.duration === "" && "border-red-500"
                              )}
                            >
                              <input 
                                type="radio" 
                                name="duration"
                                value={duration.value}
                                checked={formData.duration === duration.value}
                                onChange={(e) => updateFormData("duration", e.target.value)}
                                className="w-4 h-4 text-[#00346b] focus:ring-[#00346b]"
                              />
                              <span className="font-medium text-gray-900">{duration.label}</span>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="bg-gray-50 border-t border-gray-100 p-6 sm:px-10 flex items-center justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all",
                currentStep === 0 
                  ? "text-gray-400 cursor-not-allowed" 
                  : "text-gray-700 hover:bg-gray-200"
              )}
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            
            <button
              type="button"
              onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
              disabled={isSubmitting}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all shadow-sm",
                isSubmitting
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#00346b] hover:bg-[#002855] text-white hover:shadow-md"
              )}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  {currentStep === steps.length - 1 ? "Submit Application" : "Continue"}
                  {currentStep === steps.length - 1 ? (
                    <Check className="w-4 h-4 ml-1" />
                  ) : (
                    <ChevronRight className="w-4 h-4 ml-1" />
                  )}
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
