"use server"

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";

export async function updateReportStatus(reportId: string, status: string) {
    const { user } = await validateRequest();

    if (!user) throw new Error("Unauthorized");

    const report = await prisma.report.findUnique({
        where: { id: reportId },
    });

    if (!report) throw new Error("Report not found");

    const updatedReport = await prisma.report.update({
        where: { id:reportId },
        data: {
            status:status
        },
    });

    return updatedReport;
}