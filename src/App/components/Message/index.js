import React, { useState } from "react";
import * as S from "./styles";

const Message = props => {
  const { item } = props;
  
  const [selected, setSelected] = useState([]);
  return (
    <S.Container>
      <S.Message isMy={item.sender === "user"}>
        {
          item.message
        }
      </S.Message>
      {
        item.options && <S.MessageOptions>
          {
            item.options.map(option => (
              <S.MessageOption onClick={() => setSelected(true)}>
                {option.text}
              </S.MessageOption>
            ))
          }
        </S.MessageOptions>
      }
    </S.Container>
)}

export default Message;