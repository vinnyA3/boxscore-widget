import React, { useState } from 'react';
import {
  tabContainer,
  tabContainerInline,
  tab,
  tabInline,
  active,
} from './styles';

export const Tabs = props => {
  const [activeTabIndex, setActiveTab] = useState(0);
  const onClick = (i, title) =>
    props.run ? (props.run(title), setActiveTab(i)) : setActiveTab(i);

  return (
    <ul
      className={`${tabContainer} ${!!props.inline ? tabContainerInline : ''}`}
    >
      {props.children.map((el, i) => (
        <li
          className={`${tab} ${!!props.inline ? tabInline : ''} ${
            activeTabIndex === i ? active : ''
          }`}
          key={i}
          onClick={() => onClick(i, el.props.title)}
        >
          {el.props.title}
        </li>
      ))}
    </ul>
  );
};
