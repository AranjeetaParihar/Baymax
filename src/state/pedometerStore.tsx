import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { mmkvStorage } from "./storage";

interface PedometerStore {
    stepCount: number;
    dailyGoal: number;
    distance: string;
    startDate: string;
    addSteps: (steps: number, distance: string) => void;
    initializeSteps: () => void;
    resetSteps: () => void;
    setDailyGoal: (goal: number) => void;
}

export const usePedometerStore = create<PedometerStore>()(
    persist(
        (set, get) => ({
            stepCount: 0,
            dailyGoal: 8000,
            distance: "",
            startDate: new Date().toISOString().split("T")[0],
            initializeSteps: () => {
                const todayDate = new Date().toISOString().split("T")[0]
                const { startDate } = get()
                // moved to next day
                if (todayDate !== startDate) {
                    set({ stepCount: 0, startDate: todayDate, distance: '' })
                }
            },
            addSteps: (steps, distance) => {
                get().initializeSteps()
                set((state) => ({ stepCount: state.stepCount + steps, distance: distance }))
            },
            resetSteps: () => set({ stepCount: 0 }),
            setDailyGoal: (goal) => set({ dailyGoal: goal })
        }),
        {
            name: "pedometer-storage",
            storage: createJSONStorage(() => mmkvStorage)
        }
    )
)