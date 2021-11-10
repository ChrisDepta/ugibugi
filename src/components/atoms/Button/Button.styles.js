import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 15px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
