import { blockUser, getUsers } from "@/api";
import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { ColumnDef } from "@tanstack/react-table";
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

export type User = {
  chat_id: number;
  username: string;
  city: string;
  blocked: boolean;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    const getALLUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    getALLUsers();
  }, [isUserUpdated]);

  const handleDeleteUser = async (chat_id: number) => {
    const data = await deleteUser(chat_id);
    if (data) {
      alert("User deleted");
      setIsUserUpdated(!isUserUpdated);
    } else {
      alert("User not deleted");
    }
  };

  const handleBlockUser = async (chat_id: number, blocked: boolean) => {
    const data = await blockUser(chat_id, blocked);
    if (data) {
      alert("User Updated");
      setIsUserUpdated(!isUserUpdated);
    } else {
      alert("User did not update");
    }
  };

  const columns: ColumnDef<User>[] = [
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
              <DropdownMenuItem onClick={() => handleDeleteUser(user.chat_id)}>
                Delete User
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleBlockUser(user.chat_id, !user.blocked)}
              >
                {user.blocked ? "Unblock User" : "Block User"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="w-full md:w-1/2 my-4 mx-auto">
      <h2 className="text-lg font-medium">Users</h2>
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default Users;
