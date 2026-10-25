import {
  BadgeCheck,
  Shield,
  Candy,
  Citrus,
  type LucideIcon,
} from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export interface UserBadge {
  id: string;
  name: string;
  description: string;
  awardedOn: string;
  icon: LucideIcon;
  color: "blue" | "green" | "pink" | "yellow";
}

interface UserBadgeCardProps {
  badges: UserBadge[];
}

const badgeColors: Record<UserBadge["color"], string> = {
  blue: "border-blue-500/50 bg-blue-500/30",
  green: "border-green-500/50 bg-green-500/30",
  pink: "border-pink-500/50 bg-pink-500/30",
  yellow: "border-yellow-500/50 bg-yellow-500/30",
};

const UserBadgeCard = ({ badges }: UserBadgeCardProps) => {
  return (
    <div className="rounded-md bg-primary-foreground p-4">
      <h2 className="font-semibold">User Badges</h2>

      {badges.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-4">
          {badges.map((badge) => {
            const Icon = badge.icon;

            return (
              <HoverCard key={badge.id}>
                <HoverCardTrigger>
                  <button
                    type="button"
                    aria-label={`View ${badge.name} badge details`}
                    className="inline-flex cursor-pointer rounded-full"
                  >
                    <Icon
                      size={36}
                      aria-hidden="true"
                      className={`rounded-full border p-1 ${badgeColors[badge.color]}`}
                    />
                  </button>
                </HoverCardTrigger>

                <HoverCardContent className="w-64">
                  <h3 className="mb-2 font-bold">{badge.name}</h3>

                  <p className="text-sm text-muted-foreground">
                    {badge.description}
                  </p>

                  <div className="mt-2 text-xs text-muted-foreground">
                    Awarded {badge.awardedOn}
                  </div>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">
          This user hasn&apos;t earned any badges yet.
        </p>
      )}
    </div>
  );
};

export default UserBadgeCard;
