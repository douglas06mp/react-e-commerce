import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  CategoryContainer,
  BackgroundImg,
  Content,
  Title,
  Subtitle,
} from './Category.style';

export const Category = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => {
  return (
    <CategoryContainer
      id="Category"
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImg id="CategoryBackground" imageUrl={imageUrl} />
      <Content>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </CategoryContainer>
  );
};

export default withRouter(Category);
