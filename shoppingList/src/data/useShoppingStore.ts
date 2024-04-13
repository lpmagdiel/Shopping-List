import { create } from "zustand";
import { tProduct, tStore } from "./types";

export const useStore = create<tStore>() ((set) => ({
    products: [{id: 1234, name:"aguacate", quantity: 6, price:15,checked:false}],
    update: (newProducts: tProduct[]) => set( () => ({products: newProducts})),
    clear: () => set(() => ({products: []})),
}));