import {CreateUserFormState} from "@/store/modules/create-user-form/types/CreateUserFormState";

export const state: CreateUserFormState = {
    firstName: {
        value: '',
    },
    lastName: {
        value: '',
    },
    phoneNumber: {
        value: ''
    }
}
