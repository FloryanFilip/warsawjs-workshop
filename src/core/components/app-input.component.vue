<template>
  <label data-testid="label" @click.stop>
    <slot>Domyślny label</slot>
    <input v-bind="$attrs" v-on="$listeners"/>
  </label>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class AppInputComponent extends Vue {

}
</script>
