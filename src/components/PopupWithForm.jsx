// Общий компонент попапов
export function PopupWithForm(props) {
  // Отмена стандартного действия, чтобы страница не перезагружалась после submit'a
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onSubmit(evt); // Я так понимаю, далее мы передаём функционал в ручки дочерних попапов, как там описано
  };

  // Проверка целевого элемента. Если целевой элемент события является самим оверлеем попапа (event.target === event.currentTarget), то вызывается функция props.onClose, закрывающая попап.
  function handleOverlayMouseDown(event) {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  }

  return ( // Условие попапа | isOpen ? "popup_opened" : "" | значит - если isOpen = true, попапу добавляется класс popup_opened (он открывается), иначе ничего не добавляем
    <div id={props.id} className={`popup ${props.isOpen ? "popup_opened" : ""}`} onMouseDown={handleOverlayMouseDown}> {/* Производит закрытие попапа по клику на оверлей */}
      <div className="popup__container" onClick={(e) => e.stopPropagation()} > {/* .stopPropagation() - препятствует продвижению события дальше и позволяет избежать закрытия при клике на его содержимое */}
        <h2 className="popup__title">{props.title}</h2>
        <button className="popup__button popup__button_action_close" type="button" onClick={props.onClose} aria-label="Закрыть"></button>
        <form id={`popup__${props.formId}`} className={`popup__form popup__${props.name}`} name={`${props.name}`} noValidate onSubmit={handleSubmit}>
          {props.children}
          <button className="button popup__button popup__button_action_save popup__button_valid" type="submit">{props.text}</button>
        </form>
      </div>
    </div>
  )
}