<template>
  <my-form
      :first-name="firstName"
      :last-name="lastName"
      :phone-number="phoneNumber"
      @setFirstName="setFirstName"
      @setLastName="setLastName"
      @setPhoneNumber="setPhoneNumber"
  />
</template>


<script lang="ts">

import FormComponent from "@/components/user-form.component.vue";
import {Component, Vue} from "vue-property-decorator";
import {namespace} from "vuex-class";
import {Actions, Getters} from "@/store/modules/create-user-form/types/StoreTypes";

const formModule = namespace('createUserForm')

@Component({
  components: {
    'my-form': FormComponent
  }
})
export default class AboutComponent extends Vue {
  @formModule.Action(Actions.SET_FIRST_NAME) setFirstName!: (payload: string) => void;
  @formModule.Action(Actions.SET_LAST_NAME) setLastName!: (payload: string) => void;
  @formModule.Action(Actions.SET_PHONE_NUMBER) setPhoneNumber!: (payload: string) => void;

  @formModule.Getter(Getters.GET_FIRST_NAME) firstName!: { value: string };
  @formModule.Getter(Getters.GET_LAST_NAME) lastName!: { value: string };
  @formModule.Getter(Getters.GET_PHONE_NUMBER) phoneNumber!: { value: string };
}
// export default {
//   components: {
//
//   },
//   data() {
//     return {
//
//     }
//   },
//   methods: {
//
//   },
//   created() {
//
//   }
// }
</script>
