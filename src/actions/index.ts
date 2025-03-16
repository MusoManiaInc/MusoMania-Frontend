// Fetching the Total Number of Users in DB
"use server"

import { useSession } from "@/app/feed/SessionProvider";
import prisma from "@/lib/prisma";
import { endOfMonth, startOfMonth, subMonths } from "date-fns";

export const fetchCountOfAllUsers = async () => {

    const countOfAllUsers = await prisma.user.count();
        return countOfAllUsers;

}
export const fetchCountOfActiveUsers = async () => {
    const now = new Date();
    const countOfActiveUsers = await prisma.session.count({
        where: {
            expiresAt: {
                gt: now, 
            }
        }
    });
        return countOfActiveUsers;

}
export const fetchListOfTopUsers = async () => {

    const listOfTopUsers = await prisma.user.findMany({
        take:5,
        orderBy:{
            followers:{_count:"desc"}
        },
        include:{
            followers:true
        }
    })
    return listOfTopUsers;
}

export const fetchUsersByMonth = async () => {
    
    const now = new Date();
    const months = Array.from({ length: 12 }, (_, index) => {
        const date = new Date(now.getFullYear(), index,1); 
        return {
            month: date.toLocaleString("en-US", { month: "long" }), 
            startDate: startOfMonth(date),
            endDate: endOfMonth(date),
        };
    }); 

    const usersByMonth = await Promise.all(
        months.map(async ({ month, startDate, endDate }) => {
            const desktop = await prisma.user.count({
                where: {
                    createdAt: {
                        gte: startDate,
                        lt: endDate,
                    },
                },
            });
            return { month, desktop };
        })
    );

    return usersByMonth;
};