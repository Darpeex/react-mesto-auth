// Попап результата регистрации
import { PopupWithForm } from "./PopupWithForm"
import successfully from "../images/successfully.svg"
import unsuccessfully from "../images/unsuccessfully.svg"

export const InfoTooltip = ({ isOpen, onClose, onResult }) => { // Передаётся текущее значение свойств isOpen и onClose
  // console.log(onResult)
  return( // В строке ниже передаём значения пропсов попапа в общую структуру/компонент попапа PopupWithForm
    <PopupWithForm
      id="InfoTooltip"
      formId="InfoTooltip"
      title={onResult ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
      name="InfoTooltip"
      src={onResult ? successfully : unsuccessfully}
      class="info-tooltip"
      isOpen={isOpen}
      onClose={onClose} >
    </PopupWithForm>
  )
}