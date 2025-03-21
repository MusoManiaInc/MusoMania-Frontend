import { reportPost } from "@/components/posts/actions"; 
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateReportStatus } from ".";


export function useUpdateReportPostMutation() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({ reportId, status }: { reportId: string; status: string }) => updateReportStatus(reportId, status),
        onMutate: async ({ reportId, status }) => {
            // Cancel any outgoing refetches of the "report" query (if applicable)
            const queryFilter = { queryKey: ["reports"] };

            await queryClient.cancelQueries(queryFilter);

            // Get the previous state of the report data
            const previousData = queryClient.getQueryData(queryFilter);

            // Optimistically update the cache by updating the report's status
            queryClient.setQueryData(queryFilter, (oldData) => {
                if (!oldData) return;

                return {
                    ...oldData,
                    reports: oldData.reports.map((report) =>
                        report.id === reportId ? { ...report, status } : report
                    ),
                };
            });

            // Return context to be used in case of error (for rollback)
            return { previousData, reportId, status };
        },
        onSuccess: (_, { status, reportId }) => {
            // On success, you can refetch or invalidate the reports data to ensure it's fresh
            queryClient.invalidateQueries(["reports"]);
        },
        onError: (error, { reportId, status }, context) => {
            // On error, revert the optimistic update and restore previous data
            console.error(error);
            if (context?.previousData) {
                queryClient.setQueryData(["reports"], context.previousData);
            }
        },
        onSettled: () => {
            // Ensure the query is invalidated and refetched on mutation completion (success or error)
            queryClient.invalidateQueries(["reports"]);
        },
    });

    return mutation;
}
