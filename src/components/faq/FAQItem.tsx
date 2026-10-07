"use client";

import { ChevronDown, Clock, type LucideIcon } from "lucide-react";

interface FAQItemProps {
  id: number;
  icon: LucideIcon;
  question: string;
  answer: string;
  color?: "purple" | "pink";
  status?: "answered" | "pending";
  isOpen: boolean;
  onToggle: () => void;
}

const THEME = {
  purple: { circle: "bg-[#DDA9E5]", icon: "text-[#7A1B99]" },
  pink: { circle: "bg-[#F9B4D1]", icon: "text-[#B22E73]" },
} as const;

/**
 * An open accordion row (hairline-separated), not a card.
 * Controlled by the parent so only one answer is open at a time.
 */
export default function FAQItem({
  id,
  icon: Icon,
  question,
  answer,
  color = "purple",
  status = "answered",
  isOpen,
  onToggle,
}: FAQItemProps) {
  const t = THEME[color];
  const buttonId = `faq-button-${id}`;
  const panelId = `faq-panel-${id}`;
  const pending = status === "pending";

  return (
    <div className="border-t border-purple-900/15 last:border-b">
      <h4>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="
            group
            flex
            w-full
            items-start
            gap-4
            py-5
            text-left
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#A914C7]

            sm:gap-5
            sm:py-6
          "
        >
          {/* Icon */}
          <span
            className={`
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border-[3px]
              border-white
              shadow-sm
              transition-colors
              duration-300
              motion-reduce:transition-none
              sm:h-12
              sm:w-12
              ${
                isOpen
                  ? "bg-gradient-to-br from-purple-600 to-pink-500"
                  : t.circle
              }
            `}
          >
            <Icon
              className={`h-[18px] w-[18px] transition-colors duration-300 sm:h-5 sm:w-5 ${
                isOpen ? "text-white" : t.icon
              }`}
            />
          </span>

          {/* Question (+ status tag) */}
          <span className="min-w-0 flex-1">
            <span className="block text-[17px] font-bold leading-snug tracking-tight text-slate-900 sm:text-xl">
              {question}
            </span>

            {pending && (
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-purple-900/15 bg-white/60 px-2.5 py-1 text-[12px] font-semibold text-slate-600">
                <Clock className="h-3 w-3" />
                Answer coming soon
              </span>
            )}
          </span>

          {/* Toggle */}
          <span
            className={`
              mt-0.5
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              transition-colors
              duration-300
              motion-reduce:transition-none
              sm:h-10
              sm:w-10
              ${
                isOpen
                  ? "border-transparent bg-white text-[#A914C7] shadow-sm"
                  : "border-purple-900/15 text-slate-600 [@media(hover:hover)]:group-hover:bg-white/70"
              }
            `}
          >
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 motion-reduce:transition-none ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>
      </h4>

      {/* Answer */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${
          isOpen
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`pb-6 pl-14 pr-2 text-[15px] leading-[1.7] sm:pb-7 sm:pl-[4.25rem] sm:pr-14 sm:text-base ${
              pending ? "text-slate-600" : "text-slate-700"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}