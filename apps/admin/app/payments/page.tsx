import { columns, type Transaction } from "./columns";
import { DataTable } from "@/components/data-table";

const transactions: Transaction[] = [
  {
    id: "TXN-1001",
    amount: 2499,
    status: "Completed",
    username: "Aarav Sharma",
    email: "aarav.sharma@example.com",
  },
  {
    id: "TXN-1002",
    amount: 1599.5,
    status: "Pending",
    username: "Priya Verma",
    email: "priya.verma@example.com",
  },
  {
    id: "TXN-1003",
    amount: 4999,
    status: "Completed",
    username: "Rohan Gupta",
    email: "rohan.gupta@example.com",
  },
  {
    id: "TXN-1004",
    amount: 799,
    status: "Failed",
    username: "Ananya Singh",
    email: "ananya.singh@example.com",
  },
  {
    id: "TXN-1005",
    amount: 3250.75,
    status: "Pending",
    username: "Kabir Mehta",
    email: "kabir.mehta@example.com",
  },
  {
    id: "TXN-1006",
    amount: 1899,
    status: "Completed",
    username: "Ishita Patel",
    email: "ishita.patel@example.com",
  },
  {
    id: "TXN-1007",
    amount: 650,
    status: "Failed",
    username: "Aditya Mishra",
    email: "aditya.mishra@example.com",
  },
  {
    id: "TXN-1008",
    amount: 5499.99,
    status: "Completed",
    username: "Meera Joshi",
    email: "meera.joshi@example.com",
  },
  {
    id: "TXN-1009",
    amount: 1200,
    status: "Pending",
    username: "Vikram Rao",
    email: "vikram.rao@example.com",
  },
  {
    id: "TXN-1010",
    amount: 2750,
    status: "Completed",
    username: "Sana Khan",
    email: "sana.khan@example.com",
  },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-6 px-6 py-3">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Payments</h1>
        <p className="text-sm text-muted-foreground">
          View and manage customer transactions.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={transactions}
        filterPlaceholder="Search transactions..."
      />
    </div>
  );
}
