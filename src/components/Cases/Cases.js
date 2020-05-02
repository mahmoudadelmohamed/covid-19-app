import React from 'react';
import SingleCase from '../SingleCase/SingleCase';
const Cases = ({ cases }) => {
 const items_case = cases.map((items, index) => {
    return <SingleCase
      key={index}
      active_cases={items.Active}
      confirmed_cases={items.Confirmed}
      death_cases={items.Deaths}
        recoverd_cases={items.Recovered}
      date={items.Date}
     />

  })
  return (
    <div>{ items_case }</div>
  );
}
export default Cases;
