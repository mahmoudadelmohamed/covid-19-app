import React, { Component } from 'react';
import Button from '../Buttons/Buttons';
import { FaDotCircle } from 'react-icons/fa';
import "./List.scss";

class List extends Component {
  render() {
    const { list, handleClick, active_id, title } = this.props;

    const list_items = list.map(({ Country: country, Slug: slug }) => {
      return (
        <li
          className={`list_item mb-2 `}
          key={slug}
          onClick={() => {
            handleClick(country, slug);
          }}
        >
          <a rel="noopener noreferrer">
            <Button
              content={country}
              them="outline-secondary"
              size="sm"
              icon={<FaDotCircle />}
              iconMarginRight="r"
              iconMarginLeft="l"
              />
          </a>
        </li>
      );
    });
    return (
      <>
         <h3 className="title_uppercase h2-light mb-3 mt-5">{title}</h3>
         <ul className="list">{list_items}</ul>
      </>
    );
  }
}

export default List;
