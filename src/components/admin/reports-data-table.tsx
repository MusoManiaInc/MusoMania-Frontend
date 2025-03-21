"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, Check, ChevronDown, MoreHorizontal, MoveVertical } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Report } from "@/app/types"
import { useToast } from "../ui/use-toast"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export function ReportsDataTable({reports}:{reports:Report[]}) {
  const statusOptions = ["Received", "Under Review", "Violation", "Passed"];
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [selectedReport, setSelectedReport] = React.useState<Report | null>(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [pagination, setPagination] = React.useState({ pageIndex: 0, pageSize: 5 });
  const [status, setStatus] = React.useState(selectedReport?.status || "Received" );
  const columns: ColumnDef<Report>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "postId",
      header: "Post Id",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("postId")}</div>
      ),
    },
    {
        accessorKey: "userId",
        header: "Reporter User Id",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("userId")}</div>
        ),
    },
    {
        accessorKey: "reason",
        header: "Reason",
        cell: ({ row }) => {
        const reason = row.getValue("reason") as string;
        
        const bgColor = reason === "Spam"
            ? "bg-red-200 text-red-700 py-0.5 w-[60px]"
            : reason === "Inappropriate"
            ? "bg-blue-200 text-blue-700 py-0.5 w-[100px]"
            : reason === "Other"
            ? "bg-gray-200 text-gray-700 py-0.5 w-[60px]"
            : "bg-transparent";

        return (
            <div className={`capitalize text-center flex justify-center  rounded-full ${bgColor}`}>
                {reason}
            </div>
        );
        },

    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
      const reason = row.getValue("status") as string;
      
      const bgColor = reason === "Received"
        ? "bg-gray-200 text-gray-700 py-0.5 w-[80px]"
        : reason === "Under Review"
        ? "bg-blue-200 text-blue-700 py-0.5 w-[110px]" 
        : reason === "Violation"
        ? "bg-red-200 text-red-700 py-0.5 w-[90px]" 
        : reason === "Passed"
        ? "bg-green-200 text-green-700 py-0.5 w-[80px]" 
        : "bg-transparent";


      return (
          <div className={`capitalize text-center flex justify-center  rounded-full ${bgColor}`}>
              {reason}
          </div>
      );
      },

  },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) => {
          const createdAt = row.getValue("createdAt") as Date;
          return <div>{new Date(createdAt).toLocaleString()}</div>;
        },
      },
      
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const report = row.original
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                    toast("Report Id Copied")
                    navigator.clipboard.writeText(report.id)
                }}
                className="cursor-pointer"

              >
                Copy report ID
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
  const table = useReactTable({
    data: reports, // Use full dataset, not a sliced version
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination, // Use pagination state
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  return (
    <div className="w-full px-10">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Reports..."
          value={(table.getColumn("reason")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("reason")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedReport(row.original);
                    setOpenDialog(true);
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <span className="text-xs">
            Page {pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
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
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Report Details</DialogTitle>
            <DialogDescription>View report details below.</DialogDescription>
          </DialogHeader>
          {selectedReport && (
            <div className="grid gap-4 py-4">
                <form className="flex flex-col gap-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Post ID</Label>
                        <Input readOnly value={selectedReport.postId} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">User ID</Label>
                        <Input readOnly value={selectedReport.userId} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Reason</Label>
                        <Input readOnly value={selectedReport.reason} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Created At</Label>
                        <Input readOnly value={new Date(selectedReport.createdAt).toLocaleString()} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label className="text-right">Status</Label>
                      <div className="col-span-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full justify-between">
                              {selectedReport.status} 
                              <ChevronDown className="h-3 w-3 opacity-50" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="!w-[300px]">
                            {statusOptions.map((option) => (
                              <DropdownMenuItem 
                                key={option} 
                                onClick={() => setStatus(option)} 
                                className="justify-between cursor-pointer"
                              >
                                {option}
                                {selectedReport.status === option && <Check className="w-4 h-4 text-[#5046E4]" />}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                </form>
              
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setOpenDialog(false)} className="">Save</Button>
            <Button onClick={() => setOpenDialog(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
