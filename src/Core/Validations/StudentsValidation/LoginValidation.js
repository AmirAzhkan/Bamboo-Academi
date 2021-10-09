import * as Yup from 'yup';

const loginValidationSchema=Yup.object({
    email: Yup.string()
    .email('آدرس ایمیل نامعتبر است')
    .required('ایمیل خود را وارد کنید') ,
    
    password:Yup.string()
    .required('رمز عبور خود را وارد کنید')
    .matches("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
    "رمز عبور نامعتبر است")
    // RegEx Meaning : Minimum Eight Characters, At Least One Letter And One Number
})

export function loginValidation(){
    return loginValidationSchema ; 
}