import {Module} from "vuex";
import {getters} from "@/store/modules/create-user-form/getters";
import {actions} from "@/store/modules/create-user-form/actions";
import {mutations} from "@/store/modules/create-user-form/mutations";
import {state} from "@/store/modules/create-user-form/state";
import {CreateUserFormState} from "@/store/modules/create-user-form/types/CreateUserFormState";
import {RootState} from "@/store/types";

export const store: Module<CreateUserFormState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
