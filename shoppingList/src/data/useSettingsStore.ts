import { create } from "zustand";

type tSettings = {
    productPopUp: boolean;
    changeProductPopUp: () => void;
}

export const useSettings = create<tSettings>() ((set) => ({
    productPopUp: false,
    changeProductPopUp: () => set( (state)=> ({productPopUp: !state.productPopUp}))
}));