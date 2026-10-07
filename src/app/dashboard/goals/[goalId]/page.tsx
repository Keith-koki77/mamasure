import GoalDetailsScreen from "@/features/goals/screens/GoalDetailsScreen";

interface GoalDetailsPageProps {
  params: Promise<{
    goalId: string;
  }>;
}

export default async function GoalDetailsPage({
  params,
}: GoalDetailsPageProps) {
  const { goalId } = await params;

  return <GoalDetailsScreen goalId={goalId} />;
}