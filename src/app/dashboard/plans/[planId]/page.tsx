import PlanDetailsScreen from "@/features/plans/screens/PlanDetailsScreen";

export default async function PlanDetailsPage({
  params,
}: {
  params: Promise<{
    planId: string;
  }>;
}) {
  const { planId } = await params;

  return <PlanDetailsScreen planId={planId} />;
}