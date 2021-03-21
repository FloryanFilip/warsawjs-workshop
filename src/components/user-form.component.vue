<template>
  <section>
    <form>
      <div>
        Rejestracja nowego użytkownika
      </div>
      <div>
        <label>
          Imię
          <input v-model="firstName"/>
        </label>
      </div>
      <div>
        <app-input value="Filip"/>
      </div>
      <div>
        <label>
          Numer telefonu
          <input v-model="phoneNumber"/>
        </label>
      </div>
      <div>
        <button type="submit">Potwierdz</button>
        <button type="button">Anuluj</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class FormComponent extends Vue {
  @Prop({
    type: String
  }) firstName!: string;
  @Prop({
    type: String
  }) lastName!: string;
  @Prop({
    type: String
  }) phoneNumber!: string;
}
</script>
