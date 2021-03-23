import styled from "styled-components";

export const Header = styled.header`
  background:white;
  border-bottom:1px solid #e8e8e8;
  padding:16px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  font-size:20px;
`;

export const BotImage = styled.div`
  background-image: ${props => `url('${props.photo}')`};
  border-radius:50%;
  width:45px;
  height:45px;
  background-position:center;
  border:1px solid #efefef;
`;

export const BotName = styled.h2`
  font-size:20px;
  margin:0;
  padding-left:20px;
`;