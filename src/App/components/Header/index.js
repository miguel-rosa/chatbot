import React from "react";
import * as S from "./styles";

const Header = props => {
  const { user } = props;
  return (
    <S.Header>
        <S.BotImage photo={user.photo} />
        <S.BotName>{user.name}</S.BotName>
      </S.Header>
)}

export default Header;