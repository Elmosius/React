type Register = {
    fullName: string;
    email: string;
    password: string;
}

type Login = Omit<Register, 'password'>

export type {Register, Login}