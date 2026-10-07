"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
  WalletCards,
} from "lucide-react";

import {
  createAssessment,
  getMyAssessment,
  projectPlanning,
  updateAssessment,
} from "@/features/planning/services/planning.api";

import type {
  AssessmentCreate,
  AssessmentResponse,
  ContributionFrequency,
  MotherhoodStage,
  PlanningMethod,
  PregnancyStage,
  PreparationNeed,
  ProjectionRequest,
  ProjectionResponse,
  TryingToConceiveTimeline,
} from "@/features/planning/types/planning.types";

import { ApiError } from "@/lib/api/client";

import { createPlan } from "@/features/plans/services/plans.api";

const PURPLE = "#6C4AB6";
const DARK_PURPLE = "#5A32A3";
const ROSE = "#F6A5C0";
const MINT = "#4CAF93";
const WARM_WHITE = "#FCFCFD";
const NAVY = "#23263A";
const GRAY = "#667085";
const BORDER = "#EAECF0";

type Step = 1 | 2 | 3;

const journeyOptions: {
  value: MotherhoodStage;
  title: string;
  description: string;
  icon: typeof Heart;
}[] = [
  {
    value: "preparing_for_pregnancy",
    title: "Preparing for pregnancy",
    description: "Planning ahead before you conceive.",
    icon: Heart,
  },
  {
    value: "currently_pregnant",
    title: "Currently pregnant",
    description: "Build a plan around your pregnancy journey.",
    icon: Baby,
  },
  {
    value: "already_had_baby",
    title: "I've already had a baby",
    description: "Planning for your next stage of motherhood.",
    icon: Sparkles,
  },
];

const preparationOptions: {
  value: PreparationNeed;
  title: string;
  description: string;
}[] = [
  {
    value: "ANTENATAL_CARE",
    title: "Antenatal care",
    description: "Visits, tests and routine pregnancy care.",
  },
  {
    value: "DELIVERY",
    title: "Delivery",
    description: "Prepare financially for delivery.",
  },
  {
    value: "HOSPITAL_MATERNITY_CARE",
    title: "Hospital maternity care",
    description: "Plan for maternity hospital expenses.",
  },
  {
    value: "POSTNATAL_CARE",
    title: "Postnatal care",
    description: "Prepare for care after delivery.",
  },
];

const frequencies: {
  value: ContributionFrequency;
  title: string;
  description: string;
}[] = [
  {
    value: "daily",
    title: "Daily",
    description: "Small, frequent contributions.",
  },
  {
    value: "weekly",
    title: "Weekly",
    description: "A simple weekly saving routine.",
  },
  {
    value: "monthly",
    title: "Monthly",
    description: "One contribution each month.",
  },
];

function formatKES(value: string | number) {
  const number = Number(value);

  if (!Number.isFinite(number)) return "KES 0";

  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(number);
}

export default function PlanningScreen() {
  const [step, setStep] = useState<Step>(1);

  const [motherhoodStage, setMotherhoodStage] =
    useState<MotherhoodStage | null>(null);

  const [pregnancyStage, setPregnancyStage] =
    useState<PregnancyStage | null>(null);

  const [expectedDeliveryDate, setExpectedDeliveryDate] =
    useState("");

  const [tryingTimeline, setTryingTimeline] =
    useState<TryingToConceiveTimeline | null>(null);

  const [insurance, setInsurance] = useState<boolean | null>(null);

  const [preparationNeeds, setPreparationNeeds] = useState<
    PreparationNeed[]
  >([]);

  const [targetAmount, setTargetAmount] = useState("");
  const [targetDate, setTargetDate] = useState("");

  const [planningMethod, setPlanningMethod] =
    useState<PlanningMethod>("goal_based");

  const [affordableContribution, setAffordableContribution] =
    useState("");

  const [frequency, setFrequency] =
    useState<ContributionFrequency>("weekly");

  const [projection, setProjection] =
    useState<ProjectionResponse | null>(null);

  const [assessmentExists, setAssessmentExists] = useState(false);
  const [loadingAssessment, setLoadingAssessment] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const progress = useMemo(() => {
    return (step / 3) * 100;
  }, [step]);

  useEffect(() => {
    async function loadAssessment() {
      setLoadingAssessment(true);
      setError("");

      try {
        const assessment = await getMyAssessment();

        setAssessmentExists(true);
        populateAssessment(assessment);
      } catch (err) {
        if (err instanceof ApiError && err.status === 404) {
          setAssessmentExists(false);
        } else {
          console.error(
            "Failed to load planning assessment:",
            err,
          );

          setError(
            "We couldn't load your planning assessment. Please try again.",
          );
        }
      } finally {
        setLoadingAssessment(false);
      }
    }

    loadAssessment();
  }, []);

  function populateAssessment(
    assessment: AssessmentResponse,
  ) {
    setMotherhoodStage(assessment.motherhood_stage);

    setPregnancyStage(
      assessment.pregnancy_stage ?? null,
    );

    setExpectedDeliveryDate(
      assessment.expected_delivery_date ?? "",
    );

    setTryingTimeline(
      assessment.trying_to_conceive_timeline ?? null,
    );

    setInsurance(
      assessment.insurance_coverage_status ?? null,
    );

    setPreparationNeeds(
      assessment.preparation_needs ?? [],
    );
  }

  function togglePreparationNeed(value: PreparationNeed) {
    setPreparationNeeds((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  }

  function validateStepOne() {
    if (!motherhoodStage) {
      setError(
        "Choose the stage that best describes your journey.",
      );

      return false;
    }

    if (motherhoodStage === "currently_pregnant") {
      if (!pregnancyStage) {
        setError("Choose your pregnancy trimester.");
        return false;
      }

      if (!expectedDeliveryDate) {
        setError("Add your expected delivery date.");
        return false;
      }
    }

    if (
      motherhoodStage === "preparing_for_pregnancy" &&
      !tryingTimeline
    ) {
      setError(
        "Choose your trying-to-conceive timeline.",
      );

      return false;
    }

    setError("");
    return true;
  }

  function validateStepTwo() {
    if (preparationNeeds.length === 0) {
      setError(
        "Select at least one area you want to prepare for.",
      );

      return false;
    }

    if (insurance === null) {
      setError(
        "Tell us whether you currently have insurance.",
      );

      return false;
    }

    setError("");
    return true;
  }

  function validateStepThree() {
    if (!targetAmount || Number(targetAmount) <= 0) {
      setError(
        "Enter a target amount greater than zero.",
      );

      return false;
    }

    if (!targetDate) {
      setError("Choose a target date.");
      return false;
    }

    if (planningMethod === "affordability_based") {
      if (
        !affordableContribution ||
        Number(affordableContribution) <= 0
      ) {
        setError(
          "Enter the amount you can comfortably contribute.",
        );

        return false;
      }
    }

    setError("");
    return true;
  }

  async function handleNext() {
    setError("");

    if (step === 1) {
      if (!validateStepOne()) return;

      setStep(2);
      return;
    }

    if (step === 2) {
      if (!validateStepTwo()) return;

      setStep(3);
      return;
    }

    if (!validateStepThree()) return;

    setLoading(true);

    try {
      const assessmentPayload: AssessmentCreate = {
        motherhood_stage: motherhoodStage!,
        pregnancy_stage:
          motherhoodStage === "currently_pregnant"
            ? pregnancyStage
            : null,
        expected_delivery_date:
          motherhoodStage === "currently_pregnant"
            ? expectedDeliveryDate
            : null,
        trying_to_conceive_timeline:
          motherhoodStage === "preparing_for_pregnancy"
            ? tryingTimeline
            : null,
        insurance_coverage_status: insurance,
        preparation_needs: preparationNeeds,
      };

      if (assessmentExists) {
        await updateAssessment(assessmentPayload);
      } else {
        try {
          await createAssessment(assessmentPayload);
          setAssessmentExists(true);
        } catch (err) {
          /*
           * If another request created the assessment between
           * our initial GET and this POST, recover gracefully
           * by switching to PATCH.
           */
          if (
            err instanceof ApiError &&
            err.status === 409
          ) {
            await updateAssessment(assessmentPayload);
            setAssessmentExists(true);
          } else {
            throw err;
          }
        }
      }

      const planningPayload: ProjectionRequest = {
        target_amount: targetAmount,
        target_date: targetDate,
        contribution_frequency: frequency,
        planning_method: planningMethod,
        affordable_contribution:
          planningMethod === "affordability_based"
            ? affordableContribution
            : null,
      };

      const result = await projectPlanning(
        planningPayload,
      );

      setProjection(result);
    } catch (err) {
      console.error(
        "Failed to save assessment or create projection:",
        err,
      );

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while creating your plan.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleBack() {
    setError("");

    if (projection) {
      setProjection(null);
      return;
    }

    if (step > 1) {
      setStep((current) => (current - 1) as Step);
    }
  }

  if (loadingAssessment) {
    return (
      <main
        className="flex min-h-screen items-center justify-center px-4"
        style={{ backgroundColor: WARM_WHITE }}
      >
        <div className="text-center">
          <div
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{
              backgroundColor: "#F1EEF9",
              color: PURPLE,
            }}
          >
            <ShieldCheck size={22} />
          </div>

          <p
            className="mt-4 text-sm font-semibold"
            style={{ color: NAVY }}
          >
            Loading your planning assessment...
          </p>

          <p
            className="mt-1 text-xs"
            style={{ color: GRAY }}
          >
            Just a moment.
          </p>
        </div>
      </main>
    );
  }

  if (projection) {
    return (
      <main
        className="min-h-screen px-4 py-6 sm:px-6 lg:px-8"
        style={{ backgroundColor: WARM_WHITE }}
      >
        <div className="mx-auto max-w-4xl">
          <button
            onClick={handleBack}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-70"
            style={{ color: PURPLE }}
          >
            <ArrowLeft size={18} />
            Back to planning
          </button>

          <section
            className="overflow-hidden rounded-3xl border bg-white shadow-sm"
            style={{ borderColor: BORDER }}
          >
            <div
              className="px-5 py-8 sm:px-8 sm:py-10"
              style={{
                background: "linear-gradient(135deg, #6C4AB6 0%, #5A32A3 100%)",
              }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Target size={28} />
              </div>

              <p className="mb-2 text-sm font-medium text-white/75">
                Your MamaSure plan
              </p>

              <h1 className="max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Your savings path is ready.
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                Here is a practical contribution plan based on your target,
                timeline and preferred saving frequency.
              </p>
            </div>

            <div className="p-5 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <SummaryCard
                  icon={<CircleDollarSign size={21} />}
                  label="Target amount"
                  value={formatKES(projection.target_amount)}
                  accent={PURPLE}
                />

                <SummaryCard
                  icon={<WalletCards size={21} />}
                  label="Contribution"
                  value={formatKES(projection.calculated_installment_amount)}
                  accent={MINT}
                />

                <SummaryCard
                  icon={<CalendarDays size={21} />}
                  label="Total instalments"
                  value={String(projection.total_instalments)}
                  accent={ROSE}
                />
              </div>

              <div
                className="mt-6 rounded-2xl border p-5 sm:p-6"
                style={{
                  borderColor: BORDER,
                  backgroundColor: "#FAF9FE",
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: "#EEE9F9",
                      color: PURPLE,
                    }}
                  >
                    <Sparkles size={19} />
                  </div>

                  <div>
                    <h2 className="font-semibold" style={{ color: NAVY }}>
                      Your plan at a glance
                    </h2>

                    <p
                      className="mt-1 text-sm leading-6"
                      style={{ color: GRAY }}
                    >
                      {projection.summary_message}
                    </p>
                  </div>
                </div>
              </div>

              {projection.schedule_preview?.length > 0 && (
                <div className="mt-8">
                  <div className="mb-4">
                    <h2
                      className="text-lg font-semibold"
                      style={{ color: NAVY }}
                    >
                      Upcoming contributions
                    </h2>

                    <p className="mt-1 text-sm" style={{ color: GRAY }}>
                      A preview of how your plan starts.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-2xl border">
                    {projection.schedule_preview.map((installment, index) => (
                      <div
                        key={installment.installment_number}
                        className={`flex items-center justify-between gap-4 px-4 py-4 sm:px-5 ${
                          index !== projection.schedule_preview.length - 1
                            ? "border-b"
                            : ""
                        }`}
                        style={{
                          borderColor: BORDER,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                            style={{
                              backgroundColor: "#F1EEF9",
                              color: PURPLE,
                            }}
                          >
                            {installment.installment_number}
                          </div>

                          <div>
                            <p
                              className="text-sm font-medium"
                              style={{ color: NAVY }}
                            >
                              Contribution {installment.installment_number}
                            </p>

                            <p className="text-xs" style={{ color: GRAY }}>
                              {new Date(
                                installment.due_date
                              ).toLocaleDateString("en-KE", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>

                        <p
                          className="text-sm font-semibold"
                          style={{ color: NAVY }}
                        >
                          {formatKES(installment.amount)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  backgroundColor: PURPLE,
                }}
                disabled={loading}
                onClick={async () => {
                  if (!projection) return;

                  setLoading(true);
                  setError("");

                  try {
                    const plan = await createPlan({
                      target_amount: projection.target_amount,
                      target_date: projection.target_date,
                      contribution_frequency: projection.contribution_frequency,
                      contribution_amount:
                        projection.calculated_installment_amount,
                      planning_method: projection.planning_method,
                    });

                    window.location.href = `/dashboard/plans/${plan.id}`;
                  } catch (err) {
                    console.error("Failed to create MamaSure plan:", err);

                    setError(
                      err instanceof Error
                        ? err.message
                        : "We couldn't create your plan. Please try again."
                    );
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                {loading ? (
                  "Creating your plan..."
                ) : (
                  <>
                    Continue to my plan
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen px-4 py-5 sm:px-6 lg:px-8 lg:py-8"
      style={{ backgroundColor: WARM_WHITE }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 sm:mb-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p
                className="text-sm font-semibold"
                style={{ color: PURPLE }}
              >
                MamaSure planning
              </p>

              <h1
                className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl"
                style={{ color: NAVY }}
              >
                Let&apos;s build your plan
              </h1>
            </div>

            <div
              className="hidden h-11 w-11 items-center justify-center rounded-xl sm:flex"
              style={{
                backgroundColor: "#F1EEF9",
                color: PURPLE,
              }}
            >
              <ShieldCheck size={22} />
            </div>
          </div>

          <p
            className="max-w-2xl text-sm leading-6 sm:text-base"
            style={{ color: GRAY }}
          >
            A few questions will help us understand your
            journey and create a savings plan that fits your
            situation.
          </p>
        </div>

        <div
          className="mb-6 rounded-2xl border bg-white p-4 sm:p-5"
          style={{ borderColor: BORDER }}
        >
          <div className="mb-3 flex items-center justify-between">
            <span
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: GRAY }}
            >
              Step {step} of 3
            </span>

            <span
              className="text-xs font-medium"
              style={{ color: PURPLE }}
            >
              {step === 1
                ? "Your journey"
                : step === 2
                  ? "Your needs"
                  : "Your savings"}
            </span>
          </div>

          <div
            className="h-2 overflow-hidden rounded-full"
            style={{ backgroundColor: "#EEEAF6" }}
          >
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
                backgroundColor: PURPLE,
              }}
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Journey", "Needs", "Savings"].map(
              (label, index) => {
                const number = index + 1;
                const active = number <= step;

                return (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-xs font-medium"
                    style={{
                      color: active ? PURPLE : GRAY,
                    }}
                  >
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold"
                      style={{
                        backgroundColor: active
                          ? PURPLE
                          : "#F2F4F7",
                        color: active ? "white" : GRAY,
                      }}
                    >
                      {number < step ? (
                        <Check size={13} />
                      ) : (
                        number
                      )}
                    </span>

                    <span className="hidden sm:inline">
                      {label}
                    </span>
                  </div>
                );
              },
            )}
          </div>
        </div>

        {error && (
          <div
            className="mb-5 rounded-xl border px-4 py-3 text-sm"
            style={{
              borderColor: "#F2C4D2",
              backgroundColor: "#FFF6F8",
              color: "#9B2948",
            }}
          >
            {error}
          </div>
        )}

        <section
          className="rounded-3xl border bg-white shadow-sm"
          style={{ borderColor: BORDER }}
        >
          {step === 1 && (
            <div className="p-5 sm:p-8">
              <StepHeading
                eyebrow="Step 1"
                title="Where are you in your motherhood journey?"
                description="This helps us tailor your planning experience."
              />

              <div className="mt-7 grid gap-3">
                {journeyOptions.map((option) => {
                  const Icon = option.icon;
                  const selected =
                    motherhoodStage === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setMotherhoodStage(
                          option.value,
                        );
                        setError("");
                      }}
                      className="flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition sm:p-5"
                      style={{
                        borderColor: selected
                          ? PURPLE
                          : BORDER,
                        backgroundColor: selected
                          ? "#F7F4FC"
                          : "white",
                      }}
                    >
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: selected
                            ? "#EDE7F8"
                            : "#F5F6F8",
                          color: selected
                            ? PURPLE
                            : GRAY,
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p
                          className="font-semibold"
                          style={{ color: NAVY }}
                        >
                          {option.title}
                        </p>

                        <p
                          className="mt-1 text-sm leading-5"
                          style={{ color: GRAY }}
                        >
                          {option.description}
                        </p>
                      </div>

                      <div
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                        style={{
                          borderColor: selected
                            ? PURPLE
                            : BORDER,
                          backgroundColor: selected
                            ? PURPLE
                            : "white",
                        }}
                      >
                        {selected && (
                          <Check
                            size={14}
                            color="white"
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {motherhoodStage ===
                "currently_pregnant" && (
                <div className="mt-7 space-y-5">
                  <FieldLabel label="Which trimester are you in?" />

                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      [
                        "first_trimester",
                        "First trimester",
                      ],
                      [
                        "second_trimester",
                        "Second trimester",
                      ],
                      [
                        "third_trimester",
                        "Third trimester",
                      ],
                    ].map(([value, label]) => (
                      <ChoiceButton
                        key={value}
                        selected={
                          pregnancyStage === value
                        }
                        onClick={() =>
                          setPregnancyStage(
                            value as PregnancyStage,
                          )
                        }
                        label={label}
                      />
                    ))}
                  </div>

                  <div>
                    <FieldLabel label="Expected delivery date" />

                    <div className="relative mt-2">
                      <CalendarDays
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2"
                        style={{ color: GRAY }}
                      />

                      <input
                        type="date"
                        value={expectedDeliveryDate}
                        onChange={(event) =>
                          setExpectedDeliveryDate(
                            event.target.value,
                          )
                        }
                        className="w-full rounded-xl border bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:ring-2"
                        style={
                          {
                            borderColor: BORDER,
                            color: NAVY,
                            "--tw-ring-color":
                              "#DCD1F0",
                          } as React.CSSProperties
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {motherhoodStage ===
                "preparing_for_pregnancy" && (
                <div className="mt-7">
                  <FieldLabel label="How soon are you hoping to conceive?" />

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {[
                      [
                        "0_3_months",
                        "Within 3 months",
                      ],
                      [
                        "3_6_months",
                        "3 to 6 months",
                      ],
                      [
                        "6_12_months",
                        "6 to 12 months",
                      ],
                      [
                        "over_a_year",
                        "More than a year",
                      ],
                    ].map(([value, label]) => (
                      <ChoiceButton
                        key={value}
                        selected={
                          tryingTimeline === value
                        }
                        onClick={() =>
                          setTryingTimeline(
                            value as TryingToConceiveTimeline,
                          )
                        }
                        label={label}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="p-5 sm:p-8">
              <StepHeading
                eyebrow="Step 2"
                title="What would you like to prepare for?"
                description="Choose the areas you want your MamaSure plan to cover."
              />

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {preparationOptions.map((option) => {
                  const selected =
                    preparationNeeds.includes(
                      option.value,
                    );

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        togglePreparationNeed(
                          option.value,
                        )
                      }
                      className="flex items-start gap-3 rounded-2xl border p-4 text-left transition"
                      style={{
                        borderColor: selected
                          ? PURPLE
                          : BORDER,
                        backgroundColor: selected
                          ? "#F7F4FC"
                          : "white",
                      }}
                    >
                      <div
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border"
                        style={{
                          borderColor: selected
                            ? PURPLE
                            : BORDER,
                          backgroundColor: selected
                            ? PURPLE
                            : "white",
                        }}
                      >
                        {selected && (
                          <Check
                            size={14}
                            color="white"
                          />
                        )}
                      </div>

                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: NAVY }}
                        >
                          {option.title}
                        </p>

                        <p
                          className="mt-1 text-xs leading-5"
                          style={{ color: GRAY }}
                        >
                          {option.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8">
                <FieldLabel label="Do you currently have insurance?" />

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <ChoiceButton
                    selected={insurance === true}
                    onClick={() => setInsurance(true)}
                    label="Yes, I have insurance"
                  />

                  <ChoiceButton
                    selected={insurance === false}
                    onClick={() => setInsurance(false)}
                    label="No, I don't"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-5 sm:p-8">
              <StepHeading
                eyebrow="Step 3"
                title="How much would you like to prepare?"
                description="Set your target and we'll work out a contribution plan."
              />

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <FieldLabel label="Target amount" />

                  <div className="relative mt-2">
                    <span
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold"
                      style={{ color: GRAY }}
                    >
                      KES
                    </span>

                    <input
                      type="number"
                      min="1"
                      inputMode="decimal"
                      placeholder="e.g. 120000"
                      value={targetAmount}
                      onChange={(event) =>
                        setTargetAmount(
                          event.target.value,
                        )
                      }
                      className="w-full rounded-xl border py-3 pl-14 pr-3 text-sm outline-none transition focus:ring-2"
                      style={
                        {
                          borderColor: BORDER,
                          color: NAVY,
                          "--tw-ring-color":
                            "#DCD1F0",
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>

                <div>
                  <FieldLabel label="Target date" />

                  <input
                    type="date"
                    value={targetDate}
                    onChange={(event) =>
                      setTargetDate(event.target.value)
                    }
                    className="mt-2 w-full rounded-xl border bg-white px-3 py-3 text-sm outline-none transition focus:ring-2"
                    style={
                      {
                        borderColor: BORDER,
                        color: NAVY,
                        "--tw-ring-color":
                          "#DCD1F0",
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>

              <div className="mt-8">
                <FieldLabel label="How would you like us to calculate your plan?" />

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <MethodCard
                    selected={
                      planningMethod === "goal_based"
                    }
                    onClick={() =>
                      setPlanningMethod("goal_based")
                    }
                    icon={<Target size={20} />}
                    title="Goal based"
                    description="We'll calculate what you need to contribute to reach your target."
                  />

                  <MethodCard
                    selected={
                      planningMethod ===
                      "affordability_based"
                    }
                    onClick={() =>
                      setPlanningMethod(
                        "affordability_based",
                      )
                    }
                    icon={<WalletCards size={20} />}
                    title="Based on affordability"
                    description="Tell us what you can contribute and we'll project your timeline."
                  />
                </div>
              </div>

              {planningMethod ===
                "affordability_based" && (
                <div className="mt-5">
                  <FieldLabel label="How much can you comfortably contribute?" />

                  <div className="relative mt-2">
                    <span
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold"
                      style={{ color: GRAY }}
                    >
                      KES
                    </span>

                    <input
                      type="number"
                      min="1"
                      inputMode="decimal"
                      placeholder="e.g. 2500"
                      value={affordableContribution}
                      onChange={(event) =>
                        setAffordableContribution(
                          event.target.value,
                        )
                      }
                      className="w-full rounded-xl border py-3 pl-14 pr-3 text-sm outline-none transition focus:ring-2"
                      style={
                        {
                          borderColor: BORDER,
                          color: NAVY,
                          "--tw-ring-color":
                            "#DCD1F0",
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>
              )}

              <div className="mt-8">
                <FieldLabel label="How often would you like to contribute?" />

                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {frequencies.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setFrequency(option.value)
                      }
                      className="rounded-2xl border p-4 text-left transition"
                      style={{
                        borderColor:
                          frequency === option.value
                            ? PURPLE
                            : BORDER,
                        backgroundColor:
                          frequency === option.value
                            ? "#F7F4FC"
                            : "white",
                      }}
                    >
                      <p
                        className="text-sm font-semibold"
                        style={{ color: NAVY }}
                      >
                        {option.title}
                      </p>

                      <p
                        className="mt-1 text-xs leading-5"
                        style={{ color: GRAY }}
                      >
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div
            className="flex flex-col-reverse gap-3 border-t p-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
            style={{ borderColor: BORDER }}
          >
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 1 || loading}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-40"
              style={{ color: GRAY }}
            >
              <ArrowLeft size={17} />
              Back
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={loading}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              style={{ backgroundColor: PURPLE }}
            >
              {loading ? (
                "Saving your plan..."
              ) : step === 3 ? (
                <>
                  Create my plan
                  <ArrowRight size={17} />
                </>
              ) : (
                <>
                  Continue
                  <ChevronRight size={17} />
                </>
              )}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

function StepHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p
        className="text-xs font-bold uppercase tracking-wider"
        style={{ color: PURPLE }}
      >
        {eyebrow}
      </p>

      <h2
        className="mt-2 max-w-2xl text-xl font-bold tracking-tight sm:text-2xl"
        style={{ color: NAVY }}
      >
        {title}
      </h2>

      <p
        className="mt-2 max-w-2xl text-sm leading-6"
        style={{ color: GRAY }}
      >
        {description}
      </p>
    </div>
  );
}

function FieldLabel({ label }: { label: string }) {
  return (
    <label
      className="text-sm font-semibold"
      style={{ color: NAVY }}
    >
      {label}
    </label>
  );
}

function ChoiceButton({
  selected,
  onClick,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-12 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition"
      style={{
        borderColor: selected ? PURPLE : BORDER,
        backgroundColor: selected
          ? "#F7F4FC"
          : "white",
        color: NAVY,
      }}
    >
      <span>{label}</span>

      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border"
        style={{
          borderColor: selected ? PURPLE : BORDER,
          backgroundColor: selected
            ? PURPLE
            : "white",
        }}
      >
        {selected && (
          <Check size={12} color="white" />
        )}
      </span>
    </button>
  );
}

function MethodCard({
  selected,
  onClick,
  icon,
  title,
  description,
}: {
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-3 rounded-2xl border p-4 text-left transition"
      style={{
        borderColor: selected ? PURPLE : BORDER,
        backgroundColor: selected
          ? "#F7F4FC"
          : "white",
      }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
        style={{
          backgroundColor: selected
            ? "#EDE7F8"
            : "#F5F6F8",
          color: selected ? PURPLE : GRAY,
        }}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p
          className="text-sm font-semibold"
          style={{ color: NAVY }}
        >
          {title}
        </p>

        <p
          className="mt-1 text-xs leading-5"
          style={{ color: GRAY }}
        >
          {description}
        </p>
      </div>

      <div
        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border"
        style={{
          borderColor: selected ? PURPLE : BORDER,
          backgroundColor: selected
            ? PURPLE
            : "white",
        }}
      >
        {selected && (
          <Check size={12} color="white" />
        )}
      </div>
    </button>
  );
}

function SummaryCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div
      className="rounded-2xl border p-4"
      style={{ borderColor: BORDER }}
    >
      <div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
        style={{
          backgroundColor: `${accent}15`,
          color: accent,
        }}
      >
        {icon}
      </div>

      <p
        className="text-xs font-medium"
        style={{ color: GRAY }}
      >
        {label}
      </p>

      <p
        className="mt-1 text-xl font-bold tracking-tight"
        style={{ color: NAVY }}
      >
        {value}
      </p>
    </div>
  );
}