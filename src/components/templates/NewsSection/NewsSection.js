import React, { useEffect, useState } from 'react';
import { NewsSectionWrapper } from './NewsSection.styles';
import { ArticleButton } from './NewsSection.styles';
import { ArticleWrapper, ArticleTitle, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import axios from 'axios';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log(process.env.REACT_APP_DATOCMS_TOKEN);
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }`
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`
          }
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError('Sorry... somthing went wrong..!');
      });
  }, []);

  return (
    <NewsSectionWrapper>
      <ArticleTitle>News Articles</ArticleTitle>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <span>{category}</span>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="any foto roto toto" /> : null}
            </ContentWrapper>
            <ArticleButton isBig>Read more...</ArticleButton>
          </ArticleWrapper>
        ))
      ) : (
        <ArticleTitle>{error ? error : 'Is Loading...'}</ArticleTitle>
      )}
    </NewsSectionWrapper>
  );
};

export default NewsSection;
