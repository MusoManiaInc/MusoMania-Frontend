import { PostsPage } from "@/lib/types";
import {
    InfiniteData,
    QueryFilters,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { deletePost } from "./actions";
import { reportPost } from "./actions";

export function useDeletePostMutation() {
    const { toast } = useToast();

    const queryClient = useQueryClient();

    const router = useRouter();
    const pathname = usePathname();

    const mutation = useMutation({
        mutationFn: deletePost,
        onSuccess: async (deletedPost) => {
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
                            posts: page.posts.filter((p) => p.id !== deletedPost.id),
                        })),
                    };
                },
            );

            toast({
                description: "Post deleted",
            });

            if (pathname === `/posts/${deletedPost.id}`) {
                router.push(`/users/${deletedPost.user.username}`);
            }
        },
        onError(error) {
            console.error(error);
            toast({
                variant: "destructive",
                description: "Failed to delete post. Please try again.",
            });
        },
    });

    return mutation;
}

export function useReportPostMutation() {
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({ postId, reason }: { postId: string; reason: string }) => reportPost(postId, reason),
        onMutate: async ({ postId, reason }) => {
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

            return { postId, reason };
        },
        onSuccess: (_, { reason }) => {
            toast({
                description: `Post reported for ${reason}`,
            });
        },
        onError(error) {
            console.error(error);
            toast({
                variant: "destructive",
                description: "Failed to report post. Please try again.",
            });
        },
    });

    return mutation;
}

