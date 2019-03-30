import React from 'react';
import './List.css';

const List = props => {
  return (
    <ul>
      {
        props.items.map((item, index) =>
        <li key={index}>{item}</li>)
      }
    </ul>
  )
}
export default List;
