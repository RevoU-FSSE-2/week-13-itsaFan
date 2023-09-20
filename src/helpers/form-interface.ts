export type RegistrationProps =  {
    initialValues: {
        username: string;
        email: string;
        password: string;
    }
    onRegister: (data: {username: string; email: string; password: string}) => void;
}