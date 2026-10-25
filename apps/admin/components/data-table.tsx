"use client";

import {
  flexRender,
  useTable,
  type ColumnDef,
  type RowData,
} from "@tanstack/react-table";
import { useState } from "react";

import { features } from "@/components/data-table-features";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<typeof features, TData, unknown>[];
  data: TData[];
  filterPlaceholder?: string;
}

export function DataTable<TData extends RowData>({
  columns,
  data,
  filterPlaceholder = "Filter...",
}: DataTableProps<TData>) {
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useTable({
    features,
    columns,
    data,
    globalFilterFn: "includesString",
    onGlobalFilterChange: setGlobalFilter,
    state: {
      globalFilter,
    },
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  });

  const rows = table.getRowModel().rows;
  const selectedRows = table.getSelectedRowModel().rows;
  const selectedCount = selectedRows.length;
  const pagination = table.state.pagination;
  const pageCount = table.getPageCount();
  const rowCount = table.getRowCount();
  const currentPage = pagination.pageIndex;

  const visiblePages = Array.from(
    { length: pageCount },
    (_, index) => index,
  ).filter(
    (page) =>
      page === 0 || page === pageCount - 1 || Math.abs(page - currentPage) <= 1,
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
      <Input
        placeholder={filterPlaceholder}
        value={globalFilter}
        onChange={(event) => {
          setGlobalFilter(event.target.value);
          table.setPageIndex(0);
        }}
        className="max-w-sm"
      />

      {selectedCount > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium">{selectedCount} row(s) selected</p>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const selectedTransactions = selectedRows.map(
                  (row) => row.original,
                );

                console.log("Bulk action rows:", selectedTransactions);
                // Replace this with your export, delete, or status-update action.
              }}
            >
              Bulk action
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => table.resetRowSelection()}
            >
              Clear selection
            </Button>
          </div>
        </div>
      )}
      </div>

      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="h-14 px-4">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {rows.length > 0 ? (
              rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getAllCells().map((cell) => (
                    <TableCell key={cell.id} className="h-14 px-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllLeafColumns().length}
                  className="h-24 text-center"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {rowCount} result(s) · Page {pageCount === 0 ? 0 : currentPage + 1} of{" "}
          {pageCount}
        </p>

        <div className="flex flex-wrap items-center justify-end gap-3">
          <div className="flex items-center gap-2">
            <label
              htmlFor="page-size"
              className="whitespace-nowrap text-sm text-muted-foreground"
            >
              Rows per page
            </label>

            <select
              id="page-size"
              className="h-9 rounded-md border bg-background px-3 text-sm"
              value={pagination.pageSize}
              onChange={(event) => {
                table.setPageSize(Number(event.target.value));
              }}
            >
              {[10, 20, 50, 100].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          {pageCount > 1 && (
            <Pagination className="mx-0 w-auto justify-end">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      if (table.getCanPreviousPage()) {
                        table.previousPage();
                      }
                    }}
                    aria-disabled={!table.getCanPreviousPage()}
                    className={
                      !table.getCanPreviousPage()
                        ? "pointer-events-none opacity-50"
                        : undefined
                    }
                  />
                </PaginationItem>

                {visiblePages.map((page, index) => {
                  const previousPage = visiblePages[index - 1];
                  const hasGap =
                    previousPage !== undefined && page - previousPage > 1;

                  return (
                    <PaginationItem key={page}>
                      {hasGap && <PaginationEllipsis />}

                      <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        aria-label={`Go to page ${page + 1}`}
                        onClick={(event) => {
                          event.preventDefault();
                          table.setPageIndex(page);
                        }}
                      >
                        {page + 1}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      if (table.getCanNextPage()) {
                        table.nextPage();
                      }
                    }}
                    aria-disabled={!table.getCanNextPage()}
                    className={
                      !table.getCanNextPage()
                        ? "pointer-events-none opacity-50"
                        : undefined
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
}
