import React from 'react';
import './category.styles.scss';

const CategoryPage = ({ match }) => {
  console.log(match);
  return (
    <div className="category">
      <h2>category</h2>
    </div>
  );
};

export default CategoryPage;
