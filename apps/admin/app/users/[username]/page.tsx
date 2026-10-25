import CardList from "@/components/CardList";
import UserBadgeCard, { UserBadge } from "@/components/UserBadgeCard";

import UserInformationCard from "@/components/UserInformationCard";
import { Candy, BadgeCheck, Shield, Citrus } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";

interface UserPageProps {
  params: Promise<{
    username: string;
  }>;
}

export const defaultUserBadges: UserBadge[] = [
  {
    id: "verified",
    name: "Verified User",
    description: "This user has been verified by the admin.",
    awardedOn: "December 2021",
    icon: BadgeCheck,
    color: "blue",
  },
  {
    id: "trusted",
    name: "Trusted Member",
    description:
      "This user has maintained a positive record and follows the community guidelines.",
    awardedOn: "March 2022",
    icon: Shield,
    color: "green",
  },
  {
    id: "contributor",
    name: "Community Contributor",
    description:
      "This user actively helps others and contributes positively to the community.",
    awardedOn: "June 2022",
    icon: Candy,
    color: "pink",
  },
  {
    id: "ideas",
    name: "Fresh Ideas",
    description:
      "This user regularly shares creative ideas and innovative solutions.",
    awardedOn: "September 2022",
    icon: Citrus,
    color: "yellow",
  },
];

const UserPage = async ({ params }: UserPageProps) => {
  const { username } = await params;
  const decodedUsername = decodeURIComponent(username);

  return (
    <div className="space-y-6 px-6 py-3">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          User: {decodedUsername}
        </h1>

        <div className="mt-4 flex flex-col gap-8 xl:flex-row">
          {/* Left Container */}
          <div className="w-full space-y-6 xl:w-1/3">
            {/* User Badges Container */}
            <UserBadgeCard badges={defaultUserBadges} />

            {/* Information Container */}
            <UserInformationCard
              initialUser={{
                username: decodedUsername,
                email: "user@example.com",
                phoneNumber: "+91 98765 43210",
                location: "Delhi, India",
                role: "Admin",
              }}
              joinedOn="July 26, 2026"
            />

            {/* Recent Transactions */}
            <div className="rounded-md bg-primary-foreground p-4">
              <CardList title="Latest Transactions" />
            </div>
          </div>

          {/* Right Container */}
          <div className="w-full space-y-6 xl:w-2/3">
            {/* User Card Container */}
            <div className="rounded-md bg-primary-foreground p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Avatar className="size-12">
                  <AvatarImage
                    src="/path/to/avatar.jpg"
                    alt={decodedUsername}
                  />
                  <AvatarFallback>{decodedUsername[0]}</AvatarFallback>
                </Avatar>

                <h1 className="text-xl font-semibold">{decodedUsername}</h1>
              </div>
              <p className="text-sm text-muted-foreground">
                Description about the user goes here.
              </p>
            </div>

            {/* Chart Container */}
            <div className="rounded-md bg-primary-foreground p-4">
              <AppLineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
