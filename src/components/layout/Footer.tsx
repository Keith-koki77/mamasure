import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

/* ---------------------------------------------------------------
   Links: change them here only.
   Create these routes (or swap the hrefs) before launch.
--------------------------------------------------------------- */
const PRIVACY_HREF = "/privacy-policy";
const TERMS_HREF = "/terms";
const CONTACT_HREF = "/contact";
const PARTNERS_HREF = "/partners";

// Swap to "/#waitlist" once the on-page form is wired and has that id.
const WAITLIST_HREF = "https://surveymars.com/q/NCVBi4nlK";

// Fill in the real profile URLs. Empty entries are not rendered.
const SOCIALS = [
  {
    label: "Mama Sure on Facebook",
    href: "",
    icon: FaFacebookF,
  },
  {
    label: "Mama Sure on Instagram",
    href: "",
    icon: FaInstagram,
  },
  {
    label: "Mama Sure on LinkedIn",
    href: "",
    icon: FaLinkedinIn,
  },
].filter((s) => s.href);

const PLATFORM_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why Mama Sure", href: "/#why-mamasure" },
  { label: "FAQs", href: "/#faqs" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Partners", href: PARTNERS_HREF },
  { label: "Contact Us", href: CONTACT_HREF },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: PRIVACY_HREF },
  { label: "Terms of Service", href: TERMS_HREF },
];

const LINK =
  "inline-flex min-h-[40px] items-center text-[15px] text-slate-700 underline-offset-4 transition-colors hover:text-[#A914C7] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A914C7]";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>

      <ul className="mt-3 flex flex-col">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className={LINK}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#F3E4F4]"
      style={{
        backgroundImage:
          "radial-gradient(900px 600px at 8% 0%, #FBF1FB 0%, transparent 60%), radial-gradient(700px 500px at 60% 100%, #EBCBEF 0%, transparent 70%)",
      }}
    >
      {/* Hero ring motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rotate-[28deg] rounded-[45%] border-[44px] border-[#F58DB7]/60 sm:h-96 sm:w-96 sm:border-[56px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            STATEMENT + CTA
        ====================================================== */}
        <div className="grid gap-8 py-14 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:py-24">
          <div>
            <p className="text-sm font-semibold text-[#A914C7] sm:text-base">
              Financial Planning for Maternal Health
            </p>

            <h2 className="mt-4 text-[clamp(2.25rem,6vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-900">
              Plan. Prepare.{" "}
              <span className="text-[#D80A68]">Protect.</span>
            </h2>

            <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-slate-700 sm:text-lg">
              Prepare financially for the journey to motherhood before the
              expenses begin.
            </p>
          </div>

          <a
            href={WAITLIST_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              h-14
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              px-9
              text-[16px]
              font-bold
              text-white
              shadow-xl
              shadow-fuchsia-600/30
              transition-all
              duration-300
              active:scale-[0.98]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#A914C7]

              sm:w-auto
              motion-safe:[@media(hover:hover)]:hover:-translate-y-0.5
              [@media(hover:hover)]:hover:shadow-2xl
            "
            style={{
              background: "linear-gradient(135deg, #B31BD1, #8E0FA8)",
            }}
          >
            Join the Waitlist

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* =====================================================
            LINKS
        ====================================================== */}
        <div className="grid gap-10 border-t border-purple-900/15 py-12 sm:py-14 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Mama Sure home"
              className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A914C7]"
            >
              <Image
                src="/logo.png"
                alt="Mama Sure"
                width={180}
                height={50}
                className="h-auto w-[150px] sm:w-[170px]"
              />
            </Link>

            <p className="mt-5 max-w-sm text-[15px] leading-[1.7] text-slate-700">
              Financial planning for maternal health, built for families in
              Kenya.
            </p>

            {SOCIALS.length > 0 && (
              <ul className="mt-6 flex gap-3">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white bg-white/70 text-[#8E0FA8] shadow-sm backdrop-blur transition-colors hover:bg-[#A914C7] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A914C7]"
                    >
                      <Icon size={16} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <FooterColumn title="Platform" links={PLATFORM_LINKS} />

          <FooterColumn title="Company" links={COMPANY_LINKS} />
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="border-t border-purple-900/15 py-6">
          <div className="flex flex-col gap-5 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between">
            <p>
              © {new Date().getFullYear()} Mama Sure. All rights reserved.
            </p>

            <nav aria-label="Legal">
              <ul className="flex flex-wrap items-center gap-x-3 gap-y-1">
                {LEGAL_LINKS.map((l, i) => (
                  <li
                    key={l.label}
                    className="flex items-center gap-3"
                  >
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="h-4 w-px bg-purple-900/20"
                      />
                    )}

                    <Link
                      href={l.href}
                      className="inline-flex min-h-[40px] items-center font-medium text-slate-800 underline-offset-4 transition-colors hover:text-[#A914C7] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A914C7]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <p>
              Made with{" "}
              <span className="text-[#D80A68]">♥</span> for mothers
              and families.
            </p>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Mama Sure is not a bank.
          </p>
        </div>
      </div>
    </footer>
  );
}
