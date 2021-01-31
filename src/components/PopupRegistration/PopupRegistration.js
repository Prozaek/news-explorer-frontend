import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./PopupRegistration.css";

const PopupRegistration = ({isOpenRegistr, onClose, onOpenAuthorization, setIsSignupSuccessPopupOpen}) => {

  function handleSubmit(e) {
    e.preventDefault();
    onClose();
    setIsSignupSuccessPopupOpen(true);
  }

  const validators = {
    email: {
      required:  (value) => {return value === ""},
      minLength: (value) => {return value.length < 3},
      isEmail: (value) => {return !/^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z.]*[a-zA-Z]$/.test(value);} 
    },
    password: {
      required: (value) => {return value === ""},
      minLength: (value) => {return value.length < 3}
    },
    name: {
      required: (value) => {return value === ""},
      minLength: (value) => {return value.length < 3}
    }
  }

  const [formValues, setFormValues ] = React.useState({
    email: '',
    password: '',
    name: ''
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
  },
  name: {
    required: true,
    minLength: true,
  }
});

const handleInputChange = React.useCallback((e) => {
  const {name, value} = e.target;
  setFormValues(prevState => ({...prevState, [name]: value}))
}, [setFormValues]) 

const {email, password, name } = formValues;

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

  const nameValidationResult = Object.keys(validators.name).map(errorKey => {
    const errorResult = validators.name[errorKey](name);
    return { [errorKey]: errorResult }
  }).reduce((acc, el) => ({...acc, ...el}), {});
  
  setErrors({
    email: emailValidationResult,
    password: passwordValidationResult,
    name: nameValidationResult
  })
  
  }, [formValues, setErrors] );
   
  
  const isEmailNameInvalid = Object.values(errors.email).some(Boolean);
  const isPasswordNameInvalid = Object.values(errors.password).some(Boolean);
  const isNameNameInvalid = Object.values(errors.name).some(Boolean);
  

  return (
    <PopupWithForm
      name="registration"
      nameBtn="Зарегистрироваться"
      textUnderBtn="Войти"
      title="Регистрация"
      isOpen={isOpenRegistr}  
      onClose={onClose}
      onOpenAuthorization={onOpenAuthorization}
      onSubmit={handleSubmit}
      isEmailNameInvalid={isEmailNameInvalid}
      isPasswordNameInvalid={isPasswordNameInvalid}
      isNameNameInvalid={isNameNameInvalid}
    >
      <label className="popup__label">
      <span className="popup__input-title">Email</span>
        <input
          id="mailRegistration-input"
          autoComplete="off"
          name="email"
          placeholder="Введите почту"
          required
          type="email"
          className="popup__input popup__input_mail-registration"
          value={email}
          onChange={handleInputChange}
        />
        <span id="emailRegistration-input-error" className={errors.email.isEmail ?"popup__input-error popup__input-error_visible" : "popup__input-error"}>Введите корректный адрес email</span>
      </label>
      <label className="popup__label">
      <span className="popup__input-title">Пароль</span>
        <input
          id="passwordRegistration-input"
          autoComplete="off"
          name="password"
          placeholder="Введите пароль"
          required
          type="password"
          minLength='2'
          className="popup__input popup__input_password-registration"
          value={password}
          onChange={handleInputChange}
        />
        <span id="mailRegistration-input-error" className={errors.password.minLength ?"popup__input-error popup__input-error_visible" : "popup__input-error"}>Недостаточная длина пароля</span>
      </label>

      <label className="popup__label">
      <span className="popup__input-title">Имя</span>
        <input
          id="nameRegistration-input"
          autoComplete="off"
          name="name"
          placeholder="Введите свое имя"
          required
          type="text"
          minLength='2' 
          maxLength='30'
          className="popup__input popup__input_password-registration"
          value={name}
          onChange={handleInputChange}
        />
        <span id="mailRegistration-input-error" className={errors.name.minLength ?"popup__input-error popup__input-error_visible" : "popup__input-error"}>Слишком короткое имя</span>
      </label>
      
    </PopupWithForm>
  );
};
export default PopupRegistration;
