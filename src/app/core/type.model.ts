export interface Title {
    name: string,
    class: string
}

export interface Person {
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

export interface User {
    _id?: string | null,
    name?: string | null;
    email: string;
    password: string;
    token?: string | null;
}