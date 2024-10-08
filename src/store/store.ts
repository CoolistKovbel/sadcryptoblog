import { create } from "zustand";

// Set cookie function
const SetlocalStorageCookie = async () => {
  console.log("logging the cookies");
  window.localStorage.setItem(
    "CookieStorage",
    JSON.stringify({ name: "lyub" })
  );
};

export const useStore = create((set) => ({
  count: 0,
  userState: {
    username: "",
    email: "",
    metaAddress: "",
  },
  setLocalStorage: async () => await SetlocalStorageCookie(),
  setUserState: (username: string, email: string, metaAddress: string) =>
    set(
      (state: any) =>
        (state.userState = {
          username,
          email,
          metaAddress,
        })
    ),
    // Possbile
  incrementCount: () => set((state: any) => ({ count: state.count + 1 })),
  decrementCount: () => set((state: any) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
  setCount: () => set({ count: 1 }),
}));
