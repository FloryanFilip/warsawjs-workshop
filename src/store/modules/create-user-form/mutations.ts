import {MutationTree} from "vuex";
import {CreateUserFormState} from "@/store/modules/create-user-form/types/CreateUserFormState";
import {Mutations} from "@/store/modules/create-user-form/types/StoreTypes";

export const mutations: MutationTree<CreateUserFormState> = {
    [Mutations.MUTATE_FIRST_NAME]: (state: CreateUserFormState, payload: string) => {
        state.firstName.value = payload;
    },
    [Mutations.MUTATE_LAST_NAME]: (state: CreateUserFormState, payload: string) => {
        state.lastName.value = payload;
    },
    [Mutations.MUTATE_PHONE_NUMBER]: (state: CreateUserFormState, payload: string) => {
        state.phoneNumber.value = payload;
    },
}
