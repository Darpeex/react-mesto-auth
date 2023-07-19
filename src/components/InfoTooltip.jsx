// Попап результата регистрации
import { PopupWithForm } from "./PopupWithForm"
import successfully from "../images/successfully.svg"
import unsuccessfully from "../images/unsuccessfully.svg"

export const InfoTooltip = ({ isOpen, onClose, loggedIn }) => { // Передаётся текущее значение свойств isOpen и onClose
  return( // В строке ниже передаём значения пропсов попапа в общую структуру/компонент попапа PopupWithForm
    <PopupWithForm
      id="InfoTooltip"
      formId="InfoTooltip"
      title={loggedIn ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
      name="InfoTooltip"
      src={loggedIn ? successfully : unsuccessfully}
      class="info-tooltip"
      isOpen={isOpen}
      onClose={onClose} >
    </PopupWithForm>
  )
}