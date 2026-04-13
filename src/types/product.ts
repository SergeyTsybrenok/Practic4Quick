export interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    salePrice?: number;
    switch: string;
    color: string;
    size: number;
    keycaps: string;
    wireless: boolean;
    split: boolean;
    hotswap: boolean;
}