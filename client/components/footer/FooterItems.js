import React from 'react';
import FooterItem from './FooterItem';

const renderFooterItemList = (list) => {
  return list.map((item, i) => {
    console.log('hji"');
    const { text, link } = item;
    return <FooterItem
             key={i}
             text={text}
             link={link} />
  });
}

const FooterItems = () => {
  const list = [
    { text: 'Terms of Service', link: '/terms_of_service' },
  ];

  return (
    <ul>
      { renderFooterItemList(list) }
    </ul>
  );
}

export default FooterItems;


