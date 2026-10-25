"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { features } from "@/components/data-table-features";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IndeterminateCheckbox } from "@/components/indeterminate-checkbox";

export interface Transaction {
  id: string;
  amount: number;
  status: "Completed" | "Pending" | "Failed";
  username: string;
  email: string;
}

const columnHelper = createColumnHelper<typeof features, Transaction>();

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);

export const columns = columnHelper.columns([
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        aria-label="Select all rows on this page"
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={
          table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
        }
        onCheckedChange={(checked) => table.toggleAllPageRowsSelected(checked)}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        aria-label={`Select transaction ${row.original.id}`}
        checked={row.getIsSelected()}
        onCheckedChange={(checked) => row.toggleSelected(checked)}
      />
    ),
  }),

  columnHelper.accessor("id", {
    header: "Transaction ID",
  }),

  columnHelper.accessor("username", {
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting()}>
        Customer
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    sortFn: "alphanumeric",
  }),

  columnHelper.accessor("email", {
    header: "Email",
  }),

  columnHelper.accessor("amount", {
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting()}>
        Amount
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => formatCurrency(getValue()),
    sortFn: "alphanumeric",
  }),

  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue();

      const variant =
        status === "Completed"
          ? "default"
          : status === "Pending"
            ? "secondary"
            : "destructive";

      return <Badge variant={variant}>{status}</Badge>;
    },
  }),
]);
