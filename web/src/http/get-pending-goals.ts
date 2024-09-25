type PendingGoalResponse = {
  id:string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
}[];

export async function getPendingGoal(): Promise<PendingGoalResponse>{
  const response = await fetch("http://localhost:3333/pending-goals");
  const data = await response.json();
  console.log(data);
  console.log(data)
  const pendingGoals = data

  return pendingGoals;
}
