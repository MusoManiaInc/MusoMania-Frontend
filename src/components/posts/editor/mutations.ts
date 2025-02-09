import { useToast } from "@/components/ui/use-toast";
import { PostsPage } from "@/lib/types";
import {
    InfiniteData,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import { submitPost } from "./actions";

export function useSubmitPostMutation() {
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: submitPost,
        onSuccess: async (newPost) => {
            // Cancel any queries with this key
            await queryClient.cancelQueries({ queryKey: ["post-feed", "for-you"] });

            // Update the cache with our new post optimistically
            queryClient.setQueriesData<InfiniteData<PostsPage, string | null>>(
                { queryKey: ["post-feed", "for-you"] },
                (oldData) => {
                    if (!oldData) return oldData;

                    const firstPage = oldData.pages[0];
                    if (!firstPage) return oldData;

                    return {
                        pageParams: oldData.pageParams,
                        pages: [
                            {
                                posts: [newPost, ...firstPage.posts],
                                nextCursor: firstPage.nextCursor,
                            },
                            ...oldData.pages.slice(1),
                        ],
                    };
                },
            );

            // Invalidate queries that have no data yet, so they can refetch
            queryClient.invalidateQueries({
                queryKey: ["post-feed", "for-you"],
                predicate: (query) => !query.state.data,
            });

            toast({
                description: "Post created",
            });
        },
        onError(error) {
            console.error(error);
            toast({
                variant: "destructive",
                description: "Failed to post. Please try again.",
            });
        },
    });

    return mutation;
}
