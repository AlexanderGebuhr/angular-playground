import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

export const errorTemplate =
  (strings: TemplateStringsArray, ...keys: string[]) =>
  (values: any) =>
    keys
      .reduce(
        (result, key, index) => {
          const partialKeys = key.split('.');
          const value = partialKeys.slice(1).reduce((res, k) => res[k], values[partialKeys[0]]);
          result.push(value, strings[index + 1]);
          return result;
        },
        [strings[0]],
      )
      .join('');

export const ERROR_TEMPLATES = {
  required: errorTemplate`The ${'inputName'} is required`,
  email: errorTemplate`The ${'inputName'} is not an email`,
  pattern: errorTemplate`The ${'inputName'} does not fit the pattern`,
  min: errorTemplate`The ${'inputName'} is less than ${'error.min'}`,
  max: errorTemplate`The ${'inputName'} is greater than ${'error.max'}`,
  minlength: errorTemplate`The ${'inputName'} must have a min length of ${'error.requiredLength'}`,
  maxlength: errorTemplate`The ${'inputName'} must have a max length of ${'error.requiredLength'}`,
  usernameUnique: errorTemplate`The username is already taken`,
  equal: errorTemplate`The '${'error.p1.name'}' needs to equal the '${'error.p2.name'}`,
};

@Pipe({ standalone: true, name: 'errorMessage' })
export class ErrorMessagePipe implements PipeTransform {
  transform(errors: ValidationErrors | null, fieldName?: string): string | undefined {
    if (!errors) {
      return undefined;
    }
    const inputName = fieldName ? `'${fieldName}'` : 'input';
    const templateEntry = Object.entries(ERROR_TEMPLATES).find(([key]) => !!errors[key]);
    if (templateEntry) {
      const [key, template] = templateEntry;
      return template({ inputName, error: errors[key] });
    }
    return `The ${inputName} is invalid`;
  }
}
