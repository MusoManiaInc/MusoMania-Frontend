"use server"

import prisma from "@/lib/prisma";

export const fetchAllReports = async () => {

    const findAllReports = await prisma.report.findMany()

    return findAllReports

}