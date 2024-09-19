import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getWeekPendingGoals } from "../../functions/get-week-pending-goal";

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async (app) => {
  app.get("/pending-goals", async () => {
    const { pendingGoal } = await getWeekPendingGoals();
    return pendingGoal;
  });
};