import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./PopupAuthorization.css";

const PopupAuthorization = ({isOpenAuthor, onClose, onOpenRegistration, setIsAuthorBtnChange}) => {

  const validators = {
    email: {
      required:  (value) => {return value === ""},
      minLength: (value) => {return value.length < 3},
      isEmail: (value) => {return !/^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z.]*[a-zA-Z]$/.test(value)}, 
    },
    password: {
      required: (value) => {return value === ""},
      minLength: (value) => {return value.length < 3 },
      pattern: (value) => {return !/^[A-Za-z0-9]+$/.test(value)}
    }
  }

  const [formValues, setFormValues ] = React.useState({
    email: '',
    password: ''
  })

   

const [errors, setErrors] = React.useState({
  email: {
    required: true,
    minLength: true,
    isEmail: true,
  },
  password: {
    required: true,
    minLength: true,
    pattern: true,
  }
});

const handleInputChange = React.useCallback((e) => {
  const {name, value} = e.target;
  setFormValues(prevState => ({...prevState, [name]: value}))
}, [setFormValues]) 

const {email, password } = formValues;

React.useEffect(function validateInputs() {
const {email, password } = formValues;

const emailValidationResult = Object.keys(validators.email).map(errorKey => {
  const errorResult = validators.email[errorKey](email);
  return { [errorKey]: errorResult }
}).reduce((acc, el) => ({...acc, ...el}), {});

const passwordValidationResult = Object.keys(validators.password).map(errorKey => {
  const errorResult = validators.password[errorKey](password);
  return { [errorKey]: errorResult }
}).reduce((acc, el) => ({...acc, ...el}), {});

setErrors({
  email: emailValidationResult,
  password: passwordValidationResult
})

}, [formValues, setErrors] )


const isEmailNameInvalid = Object.values(errors.email).some(Boolean);
const isPasswordNameInvalid = Object.values(errors.password).some(Boolean);


  function handleSubmit(e) {
    e.preventDefault();
    onClose();
    setIsAuthorBtnChange(true);
  }

  let passwordErrorMessage = '';
  errors.password.pattern && (passwordErrorMessage ="Смените раскладку клавиатуры");
  errors.password.minLength && (passwordErrorMessage= "Слишком короткий пароль");

  return (
    <PopupWithForm
      name="authorization"
      nameBtn="Войти"
      textUnderBtn="Зарегистрироваться"
      title="Вход"
      isOpen={isOpenAuthor}  
      onClose={onClose}
      onOpenRegistration={onOpenRegistration}
      onSubmit={handleSubmit}

      isEmailNameInvalid={isEmailNameInvalid}
      isPasswordNameInvalid={isPasswordNameInvalid}
    >
      <label className="popup__label">
      <span className="popup__input-title">Email</span>
      
        <input
          id="emailAuthorization-input"
          autoComplete="off"
          name="email"
          placeholder="Введите почту"
          required
          type="email"
          className="popup__input popup__input_mail-authorization"
          value={email}
          onChange={handleInputChange}
        />
        <span id="emailAuthorization-input-error" className={isEmailNameInvalid ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>Введите корректный email</span>
      </label>
      <label className="popup__label">
      <span className="popup__input-title">Пароль</span>
        <input
          id="passwordAuthorization-input"
          autoComplete="off"
          name="password"
          placeholder="Введите пароль"
          required
          type="password"
          className="popup__input popup__input_password-authorization"
          value={password}
          onChange={handleInputChange}
        />
        <span id="mailAuthorization-input-error" className={isPasswordNameInvalid ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>{passwordErrorMessage}</span>
      </label>
      
    </PopupWithForm>
  );
};
export default PopupAuthorization;
