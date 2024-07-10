export interface Clients {
    client: string;
}

export interface Items {
    item: string;
    price: string;
}

export interface Invoice {
    number: number;
    client: string;
    items: Items[];
}
