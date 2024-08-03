export interface InProduct {
    _id?: string;
    title: string;
    price: number;
    category: {title: string};
    description?: string;
    thumbnail?: string;
}