import { groupedTranslations } from "@mongez/localization";

// Add only common localization
groupedTranslations({
  description: {
    en: "Description",
    ar: "الوصف",
  },
  createAccount: {
    en: "Create Account",
    ar: "إنشاء حساب",
  },
  doViaEmail: {
    en: "Or do it via E-mail",
    ar: "أو قم بذلك عبر البريد الإلكتروني",
  },
  firstName: {
    en: "First Name *",
    ar: "الاسم الأول *",
  },
  lastName: {
    en: "Last Name *",
    ar: "الاسم الأخير *",
  },
  phoneNumber: {
    en: "Phone Number *",
    ar: "رقم الهاتف *",
  },
  emailAddress: {
    en: "Email Address *",
    ar: "عنوان البريد الإلكتروني *",
  },
  password: {
    en: "Password *",
    ar: "كلمة المرور *",
  },
  confirmPassword: {
    en: "Confirm Password *",
    ar: "تأكيد كلمة المرور *",
  },
  signInAlready: {
    en: `Already have an account?`,
    ar: `هل لديك حساب؟`,
  },
  login: {
    en: "Sign In",
    ar: "تسجيل دخول",
  },
  firstNameRequired: {
    en: "First name is required",
    ar: "الاسم الأول مطلوب",
  },
  lastNameRequired: {
    en: "Last name is required",
    ar: "الاسم الأخير مطلوب",
  },
  phoneRequired: {
    en: "Phone number is required",
    ar: "رقم الهاتف مطلوب",
  },
  phoneValidate: {
    en: "Phone number must be exactly 11 digits",
    ar: "يجب ان يكون رقم الهاتف 11 رقم",
  },
  emailRequired: {
    en: "Email is required",
    ar: "البريد الإلكتروني مطلوب",
  },
  invalidEmail: {
    en: "Invalid email address",
    ar: "بريد غير صحيح",
  },
  passwordRequired: {
    en: "Password is required",
    ar: "كلمة المرور مطلوبة",
  },
  passwordMin: {
    en: "Password must be at least 8 characters",
    ar: "يجب ان تكون كلمة السر ٨ احرف علي الاقل",
  },
  passwordValidate: {
    en: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ar: "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل، وحرف صغير واحد على الأقل، ورقم واحد على الأقل، وحرف خاص واحد على الأقل.",
  },
  cPasswordRequired: {
    en: "Confirm password is required",
    ar: "تأكيد كلمة المرور مطلوب",
  },
  cPasswordValidate: {
    en: "Passwords must match",
    ar: "كلمات المرور غير متطابقة",
  },
});
