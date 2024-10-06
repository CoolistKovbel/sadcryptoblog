
import { create } from 'zustand'





export const useStore = create((set) => ({
    count: 0,
    incrementCount: () => set((state:any) => ({ count: state.count + 1 })),
    decrementCount: () => set((state:any) => ({ count: state.count - 1 })),
    resetCount: () => set({ count: 0 }),
}))
