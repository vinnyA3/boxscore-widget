import React, { useState } from 'react';

export const Tabs = props => {
  const [activeTabIndex, setActiveTab] = useState(0);

  return (
    <ul>
      {props.children.map((el, i) => (
        <span key={i} onClick={() => setActiveTab(i)}>
          {el.props.title}
        </span>
      ))}
    </ul>
  );
};
