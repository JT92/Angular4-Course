import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

    static validPassword(control: AbstractControl) : Promise<ValidationErrors | null>  {
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve({ isIncorrect: true });
            else
                resolve(null);
        });
    }

    static passwordShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value)
            return {passwordsDoNotMatch: true};
        return null;
    }
} 