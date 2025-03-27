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
} from "../ui/dialog";
import { useState } from "react";
import { useReportPostMutation } from "./mutations";

interface ReportPostDialogProps {
    post: PostData;
    open: boolean;
    onClose: () => void;
}

export default function ReportPostDialog({
    post,
    open,
    onClose,
}: ReportPostDialogProps) {
    const [isReporting, setIsReporting] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    

    function handleOpenChange(open: boolean) {
        if (!open) {
            if (!isReporting) {
                setIsClosing(true);
                setTimeout(() => {
                    setIsClosing(false);
                    onClose();
                }, 100);
            }
        }
    }

    async function handleReport(reason: string) {
        try {
            setIsReporting(true);
            await mutation.mutateAsync({ postId: post.id, reason });
            setSuccessMessage("Your report has been submitted successfully!");
        } catch (error) {
            console.error("Failed to report post:", error);
            setSuccessMessage("There was an error while submitting your report. Please try again.");
        } finally {
            setIsReporting(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange} modal={true}>
            <DialogContent
                className="sm:max-w-md"
                onInteractOutside={(e) => {
                    if (isReporting) {
                        e.preventDefault();
                    }
                }}
                onEscapeKeyDown={(e) => {
                    if (isReporting) {
                        e.preventDefault();
                    }
                }}
            >
                <DialogHeader>
                    <DialogTitle>Report post?</DialogTitle>
                    <DialogDescription>
                        {successMessage ? (
                            <span className="text-green-600">{successMessage}</span>
                        ) : (
                            "Please select a reason for reporting this post."
                        )}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="gap-2 sm:gap-0">
                    {!successMessage && (
                        <>
                            <LoadingButton
                                variant="destructive"
                                onClick={() => handleReport("Spam")}
                                loading={isReporting}
                                disabled={isClosing}
                                className="w-full sm:w-auto"
                            >
                                Spam
                            </LoadingButton>
                            <LoadingButton
                                variant="destructive"
                                onClick={() => handleReport("Inappropriate")}
                                loading={isReporting}
                                disabled={isClosing}
                                className="w-full sm:w-auto"
                            >
                                Inappropriate
                            </LoadingButton>
                            <LoadingButton
                                variant="destructive"
                                onClick={() => handleReport("Other")}
                                loading={isReporting}
                                disabled={isClosing}
                                className="w-full sm:w-auto"
                            >
                                Other
                            </LoadingButton>
                        </>
                    )}
                    <Button
                        variant="outline"
                        onClick={() => handleOpenChange(false)}
                        disabled={isReporting || isClosing}
                        className="w-full sm:w-auto"
                    >
                        {successMessage ? "Close" : "Cancel"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}