import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";

const PARTNER_TYPES = [
  {
    icon: HeartHandshake,
    title: "Healthcare Partners",
    description:
      "Help families prepare financially for maternal healthcare and the costs that come with pregnancy and childbirth.",
  },
  {
    icon: Building2,
    title: "NGO & Development Partners",
    description:
      "Work with us to improve access to practical financial planning and maternal health support.",
  },
  {
    icon: Landmark,
    title: "Financial Partners",
    description:
      "Build solutions that help families plan, save, and prepare for maternal healthcare expenses.",
  },
  {
    icon: Users,
    title: "Employers & Organisations",
    description:
      "Give your teams practical tools to prepare financially for pregnancy, birth, and early motherhood.",
  },
];

const WHY_PARTNER = [
  {
    icon: ShieldCheck,
    title: "Built around real family needs",
    description:
      "Mama Sure focuses on the financial realities families face before, during, and after pregnancy.",
  },
  {
    icon: HeartHandshake,
    title: "Designed for collaboration",
    description:
      "We work with organisations that already support families, healthcare, employers, and communities.",
  },
  {
    icon: ArrowRight,
    title: "Focused on practical impact",
    description:
      "Our goal is simple: help families prepare before maternal healthcare costs become urgent.",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#F3E4F4]">
        {/* Decorative background shapes */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rotate-[28deg] rounded-[45%] border-[48px] border-[#F58DB7]/40 sm:h-[28rem] sm:w-[28rem] sm:border-[60px]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 left-[35%] h-72 w-72 rounded-full bg-white/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24">
          {/* Back link */}
          <Link
            href="/"
            className="mb-12 inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#A914C7] transition-colors hover:text-[#8E0FA8] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A914C7] sm:mb-14"
          >
            <ArrowRight className="h-4 w-4 rotate-180" aria-hidden />
            Back to Mama Sure
          </Link>

          {/* Hero content */}
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-12">
            {/* Copy */}
            <div className="relative z-10 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#A914C7]">
                Partnerships
              </p>

              <h1 className="mt-4 text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-950">
                Partner with <span className="text-[#D80A68]">Mama Sure.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-[1.7] text-slate-700 sm:text-xl">
                Together, we can help more families prepare financially for
                maternal healthcare before the expenses begin.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#partner-types"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#A914C7] px-8 text-base font-bold text-white shadow-xl shadow-fuchsia-700/20 transition-all hover:-translate-y-0.5 hover:bg-[#8E0FA8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A914C7]"
                >
                  Explore partnerships
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-purple-900/15 bg-white/70 px-8 text-base font-bold text-slate-900 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A914C7]"
                >
                  Contact us
                </Link>
              </div>
            </div>

            {/* Partnership image */}
            <div className="relative lg:-mr-16 xl:-mr-24">
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-purple-900/15">
                <Image
                  src="/partnership-hero.png"
                  alt="Mama Sure team working together with a healthcare and organisational partner"
                  width={1600}
                  height={900}
                  priority
                  className="h-auto w-full object-cover"
                />

                {/* Soft image overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#A914C7]/10 via-transparent to-white/10"
                />
              </div>

              {/* Small decorative ring */}
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full border-[16px] border-[#D80A68]/40 sm:h-32 sm:w-32 sm:border-[20px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNER TYPES
      ====================================================== */}
      <section
        id="partner-types"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#A914C7]">
            Who we work with
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Partnerships that help families prepare.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            We are open to working with organisations that share our goal of
            making maternal healthcare more financially manageable for families.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PARTNER_TYPES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3E4F4] text-[#A914C7]">
                <Icon className="h-6 w-6" aria-hidden />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">{title}</h3>

              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                {description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#A914C7]">
                Explore this partnership
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          WHY PARTNER
      ====================================================== */}
      <section className="bg-[#FBF6FC]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#A914C7]">
                Why partner with us
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Build something that makes preparation easier.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                Maternal healthcare can be a significant financial
                responsibility. Mama Sure exists to help families plan ahead,
                and strong partnerships can help us reach more of them.
              </p>
            </div>

            <div className="space-y-4">
              {WHY_PARTNER.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F3E4F4] text-[#A914C7]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-2 text-[15px] leading-7 text-slate-600">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#A914C7] px-6 py-14 text-center shadow-2xl shadow-fuchsia-900/20 sm:px-10 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border-[32px] border-white/10"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full border-[36px] border-white/10"
          />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-pink-100">
              Let&apos;s work together
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
              Interested in partnering with Mama Sure?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-purple-100 sm:text-lg">
              Tell us a little about your organisation and how you would like to
              work together.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-base font-bold text-[#8E0FA8] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-pink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Get in touch
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}