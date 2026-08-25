import InternshipForm from "@/components/ui/internship-form";

export default function Internships() {
  return (
    <main className="pt-[120px] pb-xl flex-grow min-h-screen bg-slate-50">
      <div className="text-center px-4 mb-8">
        <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-surface mb-4">
          Internship Application
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Join our team and kickstart your career. We are looking for passionate individuals ready to solve hard problems.
        </p>
      </div>
      
      <InternshipForm />
    </main>
  );
}
