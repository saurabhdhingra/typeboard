"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormEvent, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { usePathname, useRouter } from "next/navigation";
import { deleteDocument, inviteUserToDocument } from "@/actions/actions";
import { toast } from "sonner";
import { Input } from "./ui/input";

function ManageUsers() {
  const [isOpen, setIsOpen] = useState(false);

  const [isPending, startTransition] = useTransition();
  const pathName = usePathname();
  const router = useRouter();

  const handleInvite = async (e: FormEvent) => {
    const roomId = pathName.split("/").pop();
    if (!roomId) return;

    startTransition(async () => {
      const { success } = await inviteUserToDocument(roomId, email);

      if (success) {
        setIsOpen(false);
        setEmail("");
        toast.success("User added to Room successfully");
      } else {
        toast.error("Failed to add user to room!");
      }
    });
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant="outline">
        <DialogTrigger>Users</DialogTrigger>
      </Button>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Users with Access</DialogTitle>
          <DialogDescription>Below is a list of users who have access to this document.</DialogDescription>
        </DialogHeader>
        
      </DialogContent>
    </Dialog>
  );
}
export default ManageUsers;
