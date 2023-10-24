import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type Control<TValue> = [TValue] extends [string | number | boolean | undefined]
  ? FormControl<TValue>
  : TValue extends (infer TItem)[]
    ? FormArray<Control<TItem>>
    : FormGroup<{ [Key in keyof TValue]: Control<TValue[Key]> }>;
