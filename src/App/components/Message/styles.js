import styled from "styled-components";

export const Container = styled.li`
  display:flex;
  flex-direction:column;
`;

export const Message = styled.li`
  box-shadow: 3px 3px 8px #d5dbe080;
  border-radius: ${props => props.isMy ? "10px 10px 3px 10px" : "10px 10px 10px 3px" };
  background: #fff;
  padding: 16px 24px;
  align-self: ${props => props.isMy ? "flex-end" : "start" };
  margin-bottom:10px;
`;

export const MessageOptions = styled.ul`
  display: flex;
  list-style-type: none;
  padding:0;
`;

export const MessageOption = styled.li`
  box-shadow: 3px 3px 8px #d5dbe080;
  border-radius: 10px;
  background: #fff;
  padding: 16px 24px;
  margin-right:5px;
  border:2px solid transparent;

  &:hover {
    border-color:black;
    cursor: pointer;
  }

  &.selected {
    background: blue
  }
`;