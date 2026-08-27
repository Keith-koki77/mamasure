"use client";

import { useState } from "react";
import { LucideIcon, Minus, Plus } from "lucide-react";

interface FAQItemProps {
  icon: LucideIcon;
  question: string;
  answer: string;
  color?: "purple" | "pink";
  defaultOpen?: boolean;
}

export default function FAQItem({
  icon: Icon,
  question,
  answer,
  color = "purple",
  defaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const theme = {
    purple: {
      bg: "bg-purple-100",
      icon: "text-purple-700",
      border: "border-purple-200",
      button: "text-purple-600",
    },
    pink: {
      bg: "bg-pink-100",
      icon: "text-pink-500",
      border: "border-pink-200",
      button: "text-pink-500",
    },
  };

  const colors = theme[color];

  return (
    <div
      className={`group overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[28px] border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isOpen ? colors.border : "border-gray-100"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start sm:items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 lg:p-7 text-left"
      >
        {/* Left Section */}
        <div className="flex items-center gap-3 sm:gap-5 flex-1">
          {/* Icon */}
          <div
            className={`flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl sm:rounded-full ${colors.bg} transition-transform duration-300 group-hover:scale-105`}
          >
            <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${colors.icon}`} />
          </div>

          {/* Question */}
          <h3 className="text-base sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug">
            {question}
          </h3>
        </div>

        {/* Expand/Collapse Toggle */}
        <div
          className={`flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 mt-1 sm:mt-0 ${
            isOpen ? colors.bg : "bg-gray-50"
          }`}
        >
          {isOpen ? (
            <Minus className={`h-4 w-4 sm:h-5 sm:w-5 ${colors.button}`} />
          ) : (
            <Plus className={`h-4 w-4 sm:h-5 sm:w-5 ${colors.button}`} />
          )}
        </div>
      </button>

      {/* Content */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-5 sm:px-6 sm:pb-6 lg:pb-7 lg:pl-[104px]">
            <p className="max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}