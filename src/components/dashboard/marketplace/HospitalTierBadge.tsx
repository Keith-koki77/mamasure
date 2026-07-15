interface HospitalTierBadgeProps {
    tier: "Platinum" | "Gold" | "Silver";
  }
  
  export default function HospitalTierBadge({
    tier,
  }: HospitalTierBadgeProps) {
    const styles = {
      Platinum: {
        bg: "bg-gradient-to-r from-slate-700 to-slate-900",
        text: "text-white",
      },
  
      Gold: {
        bg: "bg-gradient-to-r from-yellow-400 to-amber-500",
        text: "text-white",
      },
  
      Silver: {
        bg: "bg-gradient-to-r from-gray-300 to-gray-500",
        text: "text-white",
      },
    };
  
    const badge = styles[tier];
  
    return (
      <span
        className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-sm ${badge.bg} ${badge.text}`}
      >
        {tier}
      </span>
    );
}