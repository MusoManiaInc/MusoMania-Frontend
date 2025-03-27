export type Report = {
    id: string
    postId: string
    userId: string
    reason: "Spam" | "Inappropriate" | "Other"
    createdAt: Date
    status: "Received" | "Under Review" | "Violation" | "Passed" 
}