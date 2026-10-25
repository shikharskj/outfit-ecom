import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

type CardListProps = {
  title: "Popular Content" | "Latest Transactions";
};

type ContentItem = {
  title: string;
  description: string;
  image: string;
  footer: string;
};

const popularContent: ContentItem[] = [
  {
    title: "Modern Dashboard Design",
    description: "Explore modern dashboard layouts and UI patterns.",
    image: "/images/dashboard.jpg",
    footer: "Updated 2 hours ago",
  },
  {
    title: "E-commerce Analytics",
    description: "Track sales, revenue, and customer behavior.",
    image: "/images/analytics.jpg",
    footer: "Updated 5 hours ago",
  },
  {
    title: "Product Management",
    description: "Organize products and manage your inventory.",
    image: "/images/products.jpg",
    footer: "Updated yesterday",
  },
  {
    title: "Marketing Insights",
    description: "Discover trends and improve campaign performance.",
    image: "/images/marketing.jpg",
    footer: "Updated 2 days ago",
  },
];

const latestTransactions: ContentItem[] = [
  {
    title: "Order #1001",
    description: "Customer: Rahul Sharma",
    image: "/images/order.jpg",
    footer: "₹2,499 · Completed",
  },
  {
    title: "Order #1002",
    description: "Customer: Priya Verma",
    image: "/images/payment.jpg",
    footer: "₹1,799 · Pending",
  },
  {
    title: "Order #1003",
    description: "Customer: Amit Singh",
    image: "/images/shopping.jpg",
    footer: "₹3,299 · Completed",
  },
  {
    title: "Order #1004",
    description: "Customer: Neha Gupta",
    image: "/images/transaction.jpg",
    footer: "₹999 · Processing",
  },
];

const CardList = ({ title }: CardListProps) => {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;

  return (
    <div className="card-list space-y-3">
      <h1 className="text-lg font-medium">{title}</h1>

      <div className="flex flex-col gap-3">
        {list.map((item) => (
          <Card key={item.title}>
            <CardHeader className="flex flex-row items-center gap-3 space-y-0">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </CardContent>

            <CardFooter className="text-xs text-muted-foreground">
              {item.footer}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
