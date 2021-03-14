import { AbstractControl, ValidatorFn } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import { Assert } from '../../assert';
import { coreConfig } from '../../core.config';
import { StringUtils } from '../../utils';

export function maxLengthValidator(maxLength: number): ValidatorFn {
  Assert.isNotNull(maxLength, 'maxLength');

  return (control: AbstractControl) => {
    const validationResult =
      control.value && control.value.trim().length < maxLength
        ? null
        : {
            maxLength: new TuiValidationError(
              StringUtils.format(
                coreConfig.forms.validators.maxLength,
                maxLength
              )
            ),
          };

    return validationResult;
  };
}
