import { PostData } from "@/lib/types";
import LoadingButton from "../LoadingButton";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { useDeletePostMutation } from "./mutations";
import { useState } from "react";

interface DeletePostDialogProps {
    post: PostData;
    open: boolean;
    onClose: () => void;
}

export default function DeletePostDialog({
    post,
    open,
    onClose,
}: DeletePostDialogProps) {
    const mutation = useDeletePostMutation();
    const [isClosing, setIsClosing] = useState(false);

    function handleOpenChange(open: boolean) {
        if (!open) {
            // Only allow closing if we're not in the middle of deleting
            if (!mutation.isPending) {
                setIsClosing(true);
                // Small delay to ensure smooth animation
                setTimeout(() => {
                    setIsClosing(false);
                    onClose();
                }, 100);
            }
        }
    }

    async function handleDelete() {
        try {
            await mutation.mutateAsync(post.id);
            handleOpenChange(false);
        } catch (error) {
            console.error('Failed to delete post:', error);
        }
    }

    return (
        <Dialog
            open={open}
            onOpenChange={handleOpenChange}
            modal={true}
        >
            <DialogContent
                className="sm:max-w-md"
                onInteractOutside={(e) => {
                    if (mutation.isPending) {
                        e.preventDefault();
                    }
                }}
                onEscapeKeyDown={(e) => {
                    if (mutation.isPending) {
                        e.preventDefault();
                    }
                }}
            >
                <DialogHeader>
                    <DialogTitle>Delete post?</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this post? This action cannot be
                        undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="gap-2 sm:gap-0">
                    <LoadingButton
                        variant="destructive"
                        onClick={handleDelete}
                        loading={mutation.isPending}
                        disabled={isClosing}
                        className="w-full sm:w-auto"
                    >
                        Delete
                    </LoadingButton>
                    <Button
                        variant="outline"
                        onClick={() => handleOpenChange(false)}
                        disabled={mutation.isPending || isClosing}
                        className="w-full sm:w-auto"
                    >
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}