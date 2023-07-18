// Попап открытия карточки
export function ImagePopup({ card, onClose }) { // затем из пропса card берутся данные и подставляются в нужные поля
  return ( // В строке ниже условие | Object.keys(card).length !== 0 ? "popup_opened" : "" | если значение card не пустое, открываем попап, иначе - оставляем закрытым
    <div id="openCard" name="openCardForm" className={`popup ${Object.keys(card).length !== 0 ? "popup_opened" : ""}`} onClick={onClose}> {/* onClick={props.onClose} - производит закрытие попапа по клику на оверлей */}
      <div className="popup__image-desription" onClick={(e) => e.stopPropagation()} > {/* .stopPropagation() - препятствует продвижению события дальше и позволяет избежать закрытия при клике на его содержимое */}
        <img className="popup__image-card" src={card.link} alt={card.name} />
        <p className="popup__image-subtitle">{card.name}</p>
        <button className="popup__button popup__button_action_close" type="button" onClick={onClose} aria-label="Закрыть"></button>
      </div>
    </div>
  )
}