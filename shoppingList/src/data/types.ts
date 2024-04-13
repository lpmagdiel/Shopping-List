export type tProduct = {
    id: number;
    name: string;
    price: number;
    checked: boolean;
    quantity: number;
};

export type tStore = {
    products: tProduct[];
    update: (products: tProduct[])=>void;
};