import {GetterTree} from "vuex";
import {CreateUserFormState} from "@/store/modules/create-user-form/types/CreateUserFormState";
import {RootState} from "@/store/types/RootState";
import { Getters } from '@/store/modules/create-user-form/types/StoreTypes';

export const getters: GetterTree<CreateUserFormState, RootState> = {
    [Getters.GET_FIRST_NAME]: (state: CreateUserFormState) => state.firstName,
    [Getters.GET_LAST_NAME]: (state: CreateUserFormState) => state.lastName,
    [Getters.GET_PHONE_NUMBER]: (state: CreateUserFormState) => state.phoneNumber,
}
