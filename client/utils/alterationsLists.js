import React from 'react';

export const getAlterationsList = items => {
  return items
    .map((item, index) => {
      return item.alterations.map((alt, index) => {
        return alt.name;
      });
    })
    .join()
    .split(',');
};

export const renderAlterationListItems = (alterations, className) => {
  return alterations.map((alt, index) => {
    return (
      <li className={`${className}-li`} key={index}>
        {alt}
      </li>
    );
  });
};

export const renderAlterationList = (items, className) => {
  console.log(items);
  const alterations = renderAlterationListItems(
    getAlterationsList(items),
    className
  );
  return <ul className={`${className}-ul`}>{alterations}</ul>;
};
