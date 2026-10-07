import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const GENERAL_EMAIL = "";
const PARTNERSHIPS_EMAIL = "";

const CONTACT_OPTIONS = [
  {
    icon: MessageCircle,
    eyebrow: "General Enquiries",
    title: "Have a question?",
    description:
      "For questions about Mama Sure, how it works, joining the platform, or anything else on your mind.",
    email: GENERAL_EMAIL,
    label: "Email Mama Sure",
  },
  {
    icon: HeartHandshake,
    eyebrow: "Partnerships",
    title: "Want to work with us?",
    description:
      "For healthcare organisations, employers, NGOs, financial institutions, and other organisations interested in partnering with Mama Sure.",
    email: PARTNERSHIPS_EMAIL,
    label: "Talk about a partnership",
  },
];

const QUICK_INFO = [
  {
    icon: Clock3,
    title: "We'll get back to you",
    description:
      "Send us an email and our team will get back to you as soon as possible.",
  },
  {
    icon: ShieldCheck,
    title: "Your privacy matters",
    description:
      "We treat your questions and personal information with care.",
  },
  {
    icon: MapPin,
    title: "Built for Kenya",
    description:
      "Mama Sure is focused on helping families across Kenya prepare financially for maternal healthcare.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#F3E4F4]">
        {/* Decorative ring */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rotate-[28deg] rounded-[45%] border-[48px] border-[#F58DB7]/45 sm:h-[28rem] sm:w-[28rem] sm:border-[60px]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-[35%] h-72 w-72 rounded-full bg-white/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24">
          {/* Back */}
          <Link
            href="/"
            className="mb-12 inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#A914C7] transition-colors hover:text-[#8E0FA8] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A914C7] sm:mb-16"
          >
            <ArrowRight className="h-4 w-4 rotate-180" aria-hidden />
            Back to Mama Sure
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
            {/* Copy */}
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#A914C7]">
                Contact Mama Sure
              </p>

              <h1 className="mt-4 text-[clamp(3rem,7vw,5.75rem)] font-extrabold leading-[0.96] tracking-[-0.055em] text-slate-950">
                Let&apos;s{" "}
                <span className="text-[#D80A68]">talk.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-[1.7] text-slate-700 sm:text-xl">
                Whether you have a question, need help understanding Mama Sure,
                or want to explore a partnership, we&apos;d love to hear from
                you.
              </p>
            </div>

            {/* Image / visual */}
            <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-purple-900/10">
                <Image
                  src="/contact-hero.png"
                  alt="A mother and family connecting with Mama Sure"
                  width={1000}
                  height={900}
                  priority
                  className="h-auto w-full object-cover"
                />

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#8E0FA8]/15 via-transparent to-white/10"
                />
              </div>

              {/* Floating message card */}
              <div className="absolute -bottom-5 -left-4 flex max-w-[230px] items-center gap-3 rounded-2xl border border-white/80 bg-white px-4 py-3 shadow-xl sm:-left-7">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E4F4] text-[#A914C7]">
                  <Mail className="h-5 w-5" aria-hidden />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    We&apos;re here to help
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Start a conversation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT OPTIONS
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#A914C7]">
            How can we help?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-4xl">
            Choose what you&apos;re reaching out about.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            This helps us get your message to the right people on our team.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {CONTACT_OPTIONS.map(
            ({
              icon: Icon,
              eyebrow,
              title,
              description,
              email,
              label,
            }) => (
              <article
                key={eyebrow}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl sm:p-9"
              >
                {/* Accent */}
                <div
                  aria-hidden
                  className="absolute right-0 top-0 h-28 w-28 translate-x-12 -translate-y-12 rounded-full bg-[#F3E4F4]"
                />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3E4F4] text-[#A914C7]">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.13em] text-[#A914C7]">
                    {eyebrow}
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.025em] text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-3 min-h-[96px] text-[15px] leading-7 text-slate-600">
                    {description}
                  </p>

                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#A914C7] px-6 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#8E0FA8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A914C7]"
                    >
                      {label}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </a>
                  ) : (
                    <div className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-slate-100 px-6 text-sm font-semibold text-slate-500">
                      Email coming soon
                    </div>
                  )}
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      {/* =====================================================
          QUICK INFO
      ====================================================== */}
      <section className="bg-[#FBF6FC]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {QUICK_INFO.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-3xl border border-purple-100 bg-white/70 p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E4F4] text-[#A914C7]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {title}
                </h3>

                <p className="mt-2 text-[15px] leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNERSHIP CTA
      ====================================================== */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#A914C7] px-6 py-14 text-center shadow-2xl shadow-fuchsia-900/20 sm:px-10 sm:py-16">
          {/* Decorative shapes */}
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
              Partnerships
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
              Looking to do more together?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-purple-100 sm:text-lg">
              Explore how your organisation can help more families prepare
              financially for maternal healthcare.
            </p>

            <Link
              href="/partners"
              className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-base font-bold text-[#8E0FA8] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-pink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore partnerships
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}