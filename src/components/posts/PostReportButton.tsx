import { PostData } from "@/lib/types";
import { Flag } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import ReportPostDialog from "./ReportPostDialog";

export default function PostReportButton({
    post,
    className,
}: {
    post: PostData;
    className?: string;
}) {
    const [showReportDialog, setShowReportDialog] = useState(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild onClick={() => setShowReportDialog(true)}>
                    <Button variant="ghost" className={className}>
                        <Flag className="size-4 text-muted-foreground" />
                        <span className="text-gray-500">Report</span>
                    </Button>
                </DropdownMenuTrigger>
            </DropdownMenu>
            <ReportPostDialog
                post={post}
                open={showReportDialog}
                onClose={() => setShowReportDialog(false)}
            />
        </>
    );
}