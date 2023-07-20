// Попап результата регистрации
import { PopupWithForm } from "./PopupWithForm"
import successfully from "../images/successfully.svg"
import unsuccessfully from "../images/unsuccessfully.svg"

export const InfoTooltip = ({ isOpen, onClose, result, error }) => { // Передаётся текущее значение свойств isOpen и onClose
  return( // В строке ниже передаём значения пропсов попапа в общую структуру/компонент попапа PopupWithForm
    <PopupWithForm
      id="InfoTooltip"
      formId="InfoTooltip"
      // title={result ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."} 
      title={result ? "Вы успешно зарегистрировались!" : `${error}`}
      name="InfoTooltip"
      src={result ? successfully : unsuccessfully}
      class="info-tooltip"
      isOpen={isOpen}
      onClose={onClose} >
    </PopupWithForm>
  )
}