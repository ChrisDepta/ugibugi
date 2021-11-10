import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.li`
  height: 8vh;
  display: flex;
  align-items: center;
  positioon: relative;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};

  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.white};
    width: 30px;
    height: 30px;
    background-color: ${({ average }) => {
      if (parseInt(average) >= 4) return theme.colors.success;
      else if (parseInt(average) >= 3) return theme.colors.warning;
      else if (parseInt(average) >= 2) return theme.colors.error;
    }};
    padding: 10px;
    margin-right: 20px;
    border-radius: 50%;
    border-style: none;
  }

  div:nth-child(2) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    span:nth-child(1) 
      font-size: ${({ theme }) => theme.fontSize.l};
      font-weight: bold;
    }
    span:nth-child(2) {
      font-size: ${({ theme }) => theme.fontSize.m};
      font-weight: normal;
    }
  }

  $:not(:last-child)::after {
    content: '';
    positioon: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;
