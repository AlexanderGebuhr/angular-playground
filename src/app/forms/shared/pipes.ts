import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({ name: 'errorMessage' })
export class ErrorMessagePipe implements PipeTransform {
  transform(errors: ValidationErrors | null, fieldName?: string): string | undefined {
    if (!errors) {
      return undefined;
    }
    const inputName = fieldName ? `'${fieldName}'` : 'input';
    if (errors['required']) {
      return `The ${inputName} is required`;
    }
    if (errors['email']) {
      return `The ${inputName} is not an email`;
    }
    if (errors['pattern']) {
      return `The ${inputName} does not fit the pattern`;
    }
    if (errors['min']) {
      return `The ${inputName} is less than ${errors['min']['min']}`;
    }
    if (errors['max']) {
      return `The ${inputName} is greater than ${errors['max']['max']}`;
    }
    if (errors['minlength']) {
      return `The ${inputName} must have a min length of ${errors['minlength']['requiredLength']}`;
    }
    if (errors['maxlength']) {
      return `The ${inputName} must have a max length of ${errors['maxlength']['requiredLength']}`;
    }
    if (errors['usernameUnique']) {
      return `username is already taken`;
    }
    if (errors['equal']) {
      const name1 = errors['equal']['p1']['name'];
      const name2 = errors['equal']['p2']['name'];
      return `The '${name1}' needs to equal the '${name2}'`;
    }
    return `The ${inputName} is invalid`;
  }
}

const pipes = [ ErrorMessagePipe ];

@NgModule({
  declarations: pipes,
  exports: pipes
})
export class FormPipesModule {}
