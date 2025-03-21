import { reportPost } from "@/components/posts/actions";
import { PostsPage } from "@/lib/types";
import { InfiniteData, QueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost } from ".";

export function useReportPostMutation() {
    
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({ postId, status }: { postId: string; status: string }) => updatePost(postId, status),
        onMutate: async ({ postId, status }) => {
            const queryFilter: QueryFilters = { queryKey: ["post-feed"] };

            await queryClient.cancelQueries(queryFilter);

            queryClient.setQueriesData<InfiniteData<PostsPage, string | null>>(
                queryFilter,
                (oldData) => {
                    if (!oldData) return;

                    return {
                        pageParams: oldData.pageParams,
                        pages: oldData.pages.map((page) => ({
                            nextCursor: page.nextCursor,
                            posts: page.posts.map((p) =>
                                p.id === postId ? { ...p, isReported: true } : p,
                            ),
                        })),
                    };
                },
            );

            return { postId, status };
        },
        onSuccess: (_, { status }) => {
            
        },
        onError(error) {
            console.error(error);
            
        },
    });

    return mutation;
}