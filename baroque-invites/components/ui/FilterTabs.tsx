"use client";

interface FilterTabsProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function FilterTabs({ categories, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
            ${active === cat
              ? "border border-[#C9A84C] text-[#C9A84C] bg-[#C9A84C]/5"
              : "border border-gray-200 text-[#6B6B6B] hover:border-[#C9A84C] hover:text-[#C9A84C]"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

