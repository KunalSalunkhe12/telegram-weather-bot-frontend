import { ColumnDef } from "@tanstack/react-table";
import { User } from "./Users";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteUser } from "@/api";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "chat_id",
    header: "Chat ID",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "blocked",
    header: "Blocked",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => deleteUser(user.chat_id)}>
              Delete User
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Block User</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
