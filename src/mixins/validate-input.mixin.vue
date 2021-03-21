<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class ValidateInputMixin extends Vue {
  minLengthValid(value: string, minLength: number): boolean {
    return value.length >= minLength;
  }

  maxLengthValid(value: string, maxLength: number): boolean {
    return value.length <= maxLength;
  }
}
</script>
