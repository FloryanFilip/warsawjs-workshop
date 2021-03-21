<template>
  <my-form :first-name.sync="firstName" :last-name.sync="lastName" :phone-number.sync="phoneNumber"/>
</template>


<script lang="ts">

import FormComponent from "@/components/user-form.component.vue";
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {
    'my-form': FormComponent
  }
})
export default class AboutComponent extends Vue {
  firstName = '';
  lastName = '';
  phoneNumber = '';
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
