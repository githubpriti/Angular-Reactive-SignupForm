import { FormGroup } from "@angular/forms";

export function PasswordChecker(
    controlName: string,     //parameter usually type string
    CompareControlName:string
    ){
        return(formGroup: FormGroup) => {
            const password = formGroup.controls[controlName];  //decode values from parameter
            const confPassword = formGroup.controls[CompareControlName];

            if (password.value !== confPassword.value){
                confPassword.setErrors({mustmatch: true});
            }else{
                confPassword.setErrors(null);
            }
        };
    }