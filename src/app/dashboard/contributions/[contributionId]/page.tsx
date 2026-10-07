import ContributionDetailsScreen from "@/features/contributions/screens/ContributionDetailsScreen";

export default async function ContributionDetailsPage({
  params,
}: {
  params: Promise<{
    contributionId: string;
  }>;
}) {
  const { contributionId } = await params;

  return (
    <ContributionDetailsScreen
      contributionId={contributionId}
    />
  );
}