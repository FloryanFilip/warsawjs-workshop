<template>
  <section>
    <form>
      <div>
        Rejestracja nowego użytkownika
      </div>
      <div>
        <app-input
            data-testid="nameInput"
            type="text"
            placeholder="Imię"
            :value="firstName.value"
            @input="handleFirstNameInput($event.target.value)"
        >
          Imię
        </app-input>
      </div>
      <div>
        <app-input
            data-testid="lastNameInput"
            type="text"
            placeholder="Nazwisko"
            :value="lastName.value"
            @input="$emit('setLastName', $event.target.value)"
        >
          <template #default>
            Nazwisko
          </template>
        </app-input>
      </div>
      <div>
        <app-input
            data-testid="numberInput"
            type="text"
            placeholder="Numer telefonu"
            :value="phoneNumber.value"
            @input="$emit('setPhoneNumber', $event.target.value)"
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
import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import {PropType} from "vue";
import ValidateInputMixin from '@/mixins/validate-input.mixin.vue';
import {mixins} from "vue-class-component";

@Component
export default class FormComponent extends mixins(ValidateInputMixin) {
  @Prop({
    type: Object as PropType<{ value: string }>,
    validator: (firstName) => ('value') in firstName
  }) firstName!: { value: string };
  @Prop({
    type: Object as PropType<{ value: string }>,
    validator: (lastName) => ('value') in lastName
  }) lastName!: { value: string };
  @Prop({
    type: Object as PropType<{ value: string }>,
    validator: (phoneNumber) => ('value') in phoneNumber
  }) phoneNumber!: { value: string };

  firstNameError = '';

  handleFirstNameInput(value: string): void {
    if (!this.minLengthValid(value, 3)) this.firstNameError = 'Imię jest za krótkie';
    else this.firstNameError = '';
    this.emitSetFirstName(value);
  }

  @Emit('setFirstName')
  emitSetFirstName(value: string): string {
    return value;
  }
}
</script>
