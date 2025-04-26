import styled from 'styled-components';
import { Button } from '../common/Button';

export const StyledTaskInput = styled.input`
  width: 30%;
  height: 2.5rem;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1.2;
`;

export const StyledTaskInputDate = styled.input`
  width: 20%;
  height: 2.5rem;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1.2;
`;

export const StyledTaskInputPriority = styled.select`
  width: 10%;
  height: 2.5rem;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const StyledInputButton = styled(Button)`
  height: 2.5rem;
  padding: 10px 20px;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1.2;
  background-color: #007bff;
  color: #fff;
  border: none;

  &:hover {
    background-color: #0056b3;
  }
`;
