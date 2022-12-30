export interface IEntityUser {
    id: number;
    email: string;
    username: string;
    password: string;
    salt: string;
}

export type IResponseUser = Partial<IEntityUser>