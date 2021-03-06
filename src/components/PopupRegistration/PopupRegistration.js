import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./PopupRegistration.css";
import { useFormWithValidation } from "../../utils/FormValidation";

const PopupRegistration = ({ isOpenRegistr, onClose, onOpenAuthorization, onRegister, success, setSuccessOpen, error409, setSuccess, isLoading, waitResponse }) => {

//     Комментарий: если запрос на новостей, авторизация или регистрация завершился ошибкой (например если пропал интернет), то пользователь должен увидеть сообщение
//  поля формы заблокированы во время отправки запросов. 
// Комментарий: на время выполнения запроса считается хорошей практикой блокировать поля ввода и кнопку отправки формы, что бы пользователь не мог выполнить новые запросы до завершения предыдущего. Попап не должен закрыватсья до ответа сервера

    // валидатор
    const { values, handleChange, errors, isValid, resetForm, setErrors } = useFormWithValidation();
    const { email, password, name } = values;

    // записывает сообщение об ошибке при отправке пустой формы
    function handleBtnClick(e) {
        const event = e.target.closest("form").email;
        const name = event.name;
        return setErrors({ ...errors, [name]: event.validationMessage });
    }

    // в случае успешной регистрации закрывает и очищает форму, открывает попап подтверждения регистрации.
    React.useEffect(() => {
        if (success) {
            onClose();
            resetForm();
            setSuccessOpen(true);
            setSuccess(false);
        }
    }, [onClose, resetForm, setSuccessOpen, success, setSuccess]);

    function handleSubmit(e) {
        e.preventDefault();
        isValid && onRegister(name, email, password);
        handleBtnClick(e);
    }

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
            isFormValid={isValid}
            error409={error409}
            isLoading={isLoading}
            waitResponse={waitResponse}
            resetForm={resetForm}
        >
            <label className="popup__label">
                <span className="popup__input-title">Email</span>
                <input id="mailRegistration-input" autoComplete="off" name="email" placeholder="Введите почту" required type="email" className="popup__input popup__input_mail-registration" value={email || ""} onChange={handleChange} />
                <span id="emailRegistration-input-error" className={errors ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>
                    {errors.email}
                </span>
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
                    minLength="2"
                    // pattern="^[a-zA-Z\s]+$"
                    className="popup__input popup__input_password-registration"
                    value={password || ""}
                    onChange={handleChange}
                />
                <span id="passwordRegistration-input-error" className={errors ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>
                    {errors.password === "Введите данные в указанном формате." ? "Смените пожалуйста раскладку клавиатуры." : errors.password}
                </span>
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
                    minLength="2"
                    maxLength="30"
                    className="popup__input popup__input_password-registration"
                    value={name || ""}
                    onChange={handleChange}
                />
                <span id="nameRegistration-input-error" className={true ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>
                    {errors.name}
                </span>
            </label>
        </PopupWithForm>
    );
};
export default PopupRegistration;
