export interface IUser {
    id: number;
    name: string;
    username: string;
    email?: string;
}

export const USERS: IUser[] = [
    {
        id: 1011,
        name: "Vlad Tm",
        email: "super@ukr.net",
        username: "Admin"
    },
    {
        id: 3433,
        name: "Nazar Lub",
        email: "gigig@ukr.net",
        username: "Manager"
    },
    {
        id: 1299,
        name: "Olga Fed",
        email: "ffgg@ukr.net",
        username: "User"
    },
    {
        id: 3488,
        name: "Olga Fed",
        email: "ffgg@ukr.net",
        username: "Admin"
    }
]