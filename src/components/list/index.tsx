import React from "react";
import { ListItem, ListWrapper } from "./styles";
import { ReactComponent as ListIcon } from "./../../core/assets/icons/list-icon.svg";

const List = () => {
  return (
    <ListWrapper>
      <ListItem>
        <ListIcon />
        <div className={"listItem__group"}>
          <div className={"listItem__header"}>Цифровые документы</div>
          <div className={"listItem__text"}>
            Подписывайте контракты, обменивайтесь документами онлайн.
          </div>
        </div>
      </ListItem>
      <ListItem>
        <ListIcon />
        <div className={"listItem__group"}>
          <div className={"listItem__header"}>Безопасная сделка</div>
          <div className={"listItem__text"}>
            RUKKI обеспечивает безопасность сделки для каждого участника.
          </div>
        </div>
      </ListItem>
      <ListItem>
        <ListIcon />
        <div className={"listItem__group"}>
          <div className={"listItem__header"}>Личный кабинет</div>
          <div className={"listItem__text"}>
            За два клика оформите заказ. Мы назначим исполнителя сразу.
          </div>
        </div>
      </ListItem>
    </ListWrapper>
  );
};

export default List;
