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
      className={`group overflow-hidden rounded-[28px] border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isOpen ? colors.border : "border-gray-100"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-6 p-7 text-left"
      >
        {/* Left */}

        <div className="flex items-center gap-5">
          {/* Icon */}

          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${colors.bg} transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className={`h-8 w-8 ${colors.icon}`} />
          </div>

          {/* Question */}

          <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
            {question}
          </h3>
        </div>

        {/* Expand */}

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen ? colors.bg : "bg-gray-50"
          }`}
        >
          {isOpen ? (
            <Minus className={`h-5 w-5 ${colors.button}`} />
          ) : (
            <Plus className={`h-5 w-5 ${colors.button}`} />
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
          <div className="px-7 pb-7 pl-[104px]">
            <p className="max-w-2xl text-lg leading-8 text-gray-600">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}