import { AbstractControl, Validators } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import { coreConfig } from '../../core.config';

export function notEmptyValidator(control: AbstractControl): Validators | null {
  const validationResult =
    control.value && control.value.trim().length > 0
      ? null
      : {
          notEmpty: new TuiValidationError(
            coreConfig.forms.validators.notEmpty
          ),
        };

  return validationResult;
}
