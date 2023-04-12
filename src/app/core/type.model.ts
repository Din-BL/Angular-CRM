export interface Title {
    name: string,
    class: string
}

export interface Item {
    _id?: string | null,
    first?: string | null;
    last?: string | null;
    full?: string,
    phone?: string | null;
    email?: string | null,
    address?: string | null;
    birthday?: string,
    detail?: boolean,
    [key: string]: any
}