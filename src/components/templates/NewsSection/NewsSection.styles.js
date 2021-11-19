import styled from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';

export const NewsSectionWrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  color: ${theme.colors.darkGrey};
  border: 1px solid ${theme.colors.darkPurple};
  border-right-style: none;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
`;
export const ArticleTitle = styled(Title)`
  margin: 0;
`;

export const ArticleWrapper = styled(ViewWrapper)`
  max-width: 100%;
  margin: 20px 0;
  border-radius: 15px;
`;

export const TitleWrapper = styled.div`
  h3 {
    font-size: ${theme.fontSize.l};
    margin: 0;
  }
  span {
    margin: 0;
    font-size: ${theme.fontSize.xs};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  p {
    margin-right: 20px;
    flex-basis: 50%;
    font-size: ${theme.fontSize.s};
    line-height: 180%;
  }
  img {
    max-width: 50%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ArticleButton = styled(Button)`
  margin-left: 50px;
`;
