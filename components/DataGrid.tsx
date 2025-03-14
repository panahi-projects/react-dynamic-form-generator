"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Assuming you have a UI library or custom components
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
// import { Input } from '@/components/ui/input'; // Assuming you have a UI library or custom components
import { Button } from "@/components/ui/button"; // Assuming you have a UI library or custom components
import { useRouter } from "next/navigation";

interface DataGridProps {
  columns: string[];
  data: any[];
  filterBy?: string;
  filterByPlaceholder?: string;
}

export const DataGrid: React.FC<DataGridProps> = ({
  columns,
  data,
  filterBy,
  filterByPlaceholder,
}) => {
  const router = useRouter();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const tableColumns: ColumnDef<any>[] = columns.map((col) => ({
    accessorKey: col,
    header: col,
  }));

  const table = useReactTable({
    data,
    columns: tableColumns,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handleRedirect = () => {
    router.push("/submit-application");
  };
  return (
    <div className="p-2">
      <div className="flex justify-between items-center py-4">
        <input
          placeholder={`Filter by ${filterByPlaceholder || "Full Name"}...`}
          value={
            (table
              .getColumn(filterBy || "Full Name")
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn(filterBy || "Full Name")
              ?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Button variant="outline" size="sm" onClick={handleRedirect}>
          + New Application
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {typeof header.column.columnDef.header === "function"
                          ? header.column.columnDef.header({
                              column: header.column,
                              header: header,
                              table: table,
                            })
                          : header.column.columnDef.header}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {cell.renderValue() as React.ReactNode}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
