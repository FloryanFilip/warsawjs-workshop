export interface CreateUserFormState {
    firstName: {
        value: string;
        errors?: string[];
    }
    lastName: {
        value: string;
    }
    phoneNumber: {
        value: string;
    };
}
