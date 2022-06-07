import React from 'react';
import {useTranslation} from 'react-i18next';

function Header() {
  const {i18n, t} = useTranslation();

  return (
    <>
      <h1>Today is ...</h1>
    </>
  );
};

export default Header;