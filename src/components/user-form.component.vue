<template>
  <section>
    <form>
      <div>
        Rejestracja nowego użytkownika
      </div>
      <div>
        <app-input
            type="text"
            placeholder="Imię"
            :value="firstName"
            @input="firstName = $event.target.value"
        >
          Imie
        </app-input>
      </div>
      <div>
        <app-input
            type="text"
            placeholder="Nazwisko"
            :value="lastName"
            @input="lastName = $event.target.value"
        >
          Nazwisko
        </app-input>
      </div>
      <div>
        <app-input
            type="text"
            placeholder="Numer telefonu"
            :value="phoneNumber"
            @input="phoneNumber = $event.target.value"
        >
          Numer telefonu
        </app-input>
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
import {PropType} from "vue";

@Component
export default class FormComponent extends Vue {
  @Prop({
    type: Object as PropType<{ value: string }>
  }) firstName!: { value: string };
  @Prop({
    type: Object as PropType<{ value: string }>
  }) lastName!: { value: string };
  @Prop({
    type: Object as PropType<{ value: string }>
  }) phoneNumber!: { value: string };
}
</script>
