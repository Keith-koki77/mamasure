import Image from "next/image";
import { ReactNode } from "react";

interface ProblemCardProps {
  icon: ReactNode;
  image: string;
  title: string;
  description: string;
  footer: string;
  footerColor: string;

  statistic: string;
  statisticLabel: string;
}

export default function ProblemCard({
  icon,
  image,
  title,
  description,
  footer,
  footerColor,
  statistic,
  statisticLabel,
}: ProblemCardProps) {
  return (
    <div className="group overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(108,74,182,0.18)]">

      {/* IMAGE */}

      <div className="relative overflow-hidden">

        <Image
          src={image}
          alt={title}
          width={600}
          height={420}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Editorial Purple Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/45 via-purple-900/10 to-transparent" />

        {/* Floating Icon */}

        <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 backdrop-blur shadow-xl">

          {icon}

        </div>

        {/* Statistic Card */}

        <div className="absolute right-5 top-5 w-[160px] rounded-2xl border border-white/40 bg-white/95 p-4 shadow-xl backdrop-blur-md">

          <p className="text-3xl font-extrabold text-purple-700">
            {statistic}
          </p>

          <p className="mt-2 text-xs leading-5 text-gray-500">
            {statisticLabel}
          </p>

        </div>

      </div>

      {/* CONTENT */}

      <div className="p-8">

        <h3 className="text-3xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-gray-600">
          {description}
        </p>

      </div>

      {/* FOOTER */}

      <div
        className={`${footerColor} mx-6 mb-6 rounded-2xl px-5 py-4 text-center font-semibold`}
      >
        {footer}
      </div>

    </div>
  );
}