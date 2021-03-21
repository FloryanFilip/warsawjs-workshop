import {ActionContext, ActionTree} from "vuex";
import {CreateUserFormState} from "@/store/modules/create-user-form/types/CreateUserFormState";
import {RootState} from "@/store/types";
import {Actions, Mutations} from "@/store/modules/create-user-form/types/StoreTypes";

export const actions: ActionTree<CreateUserFormState, RootState> = {
    [Actions.SET_FIRST_NAME]: ({ commit }: ActionContext<CreateUserFormState, RootState>, payload: string) => {
        commit(Mutations.MUTATE_FIRST_NAME, payload);
    },
    [Actions.SET_LAST_NAME]: ({ commit }: ActionContext<CreateUserFormState, RootState>, payload: string) => {
        commit(Mutations.MUTATE_LAST_NAME, payload);
    },
    [Actions.SET_PHONE_NUMBER]: ({ commit }: ActionContext<CreateUserFormState, RootState>, payload: string) => {
        commit(Mutations.MUTATE_PHONE_NUMBER, payload);
    },
}
