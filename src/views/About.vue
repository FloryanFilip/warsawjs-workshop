<template>
  <my-form :first-name.sync="firstName" :last-name.sync="lastName" :phone-number.sync="phoneNumber"/>
</template>


<script lang="ts">

import FormComponent from "@/components/user-form.component.vue";
import {Component, Vue} from "vue-property-decorator";
import {namespace} from "vuex-class";
import {Getters} from "@/store/modules/create-user-form/types/StoreTypes";

const formModule = namespace('createUserForm')

@Component({
  components: {
    'my-form': FormComponent
  }
})
export default class AboutComponent extends Vue {
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
