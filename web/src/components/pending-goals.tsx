import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { getPendingGoal } from "../http/get-pending-goals";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createGoalCompletion } from "../http/create-goal-completion";

export function PendingGoals() {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["pending-goal"],
    queryFn: getPendingGoal,
    staleTime: 1000 * 60, // 60 seconds
  });

  if (!data) return null;

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId);

    queryClient.invalidateQueries({ queryKey: ["pending-goal"] });
    queryClient.invalidateQueries({ queryKey: ["summary"] });
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {data.map((goal) => (
        <div key={goal.id} className="relative">
          <OutlineButton
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            onClick={() => handleCompleteGoal(goal.id)}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
          {goal.desiredWeeklyFrequency - goal.completionCount > 0 && (
            <span className="absolute top-[-5px] right-0 bg-zinc-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {goal.desiredWeeklyFrequency - goal.completionCount}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
