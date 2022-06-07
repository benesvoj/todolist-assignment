import React from 'react';
import {useTranslation} from 'react-i18next';

function SecondaryNavigation() {
  const {i18n, t} = useTranslation();

  return (
    <>
      <header style={{
        position: 'absolute',
        width: '100%',
        height: '48px',
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '0px',
        background: '#FFFFFF',
      }}>
        <label style={{
          position: 'absolute',
          height: '24px',
          left: '16px',
          top: 'calc(50% - 24px/2)',

          fontFamily: 'Roboto',
          fontStyle: 'normal',
          // fontWeight: '500',
          fontSize: '16px',
          lineHeight: '24px',

          display: 'flex',
          alignItems: 'center',

          color: '#091E42',

        }}>
          {t('app.todo')} |
          {t('app.author')}
        </label>
      </header>

    </>
  );
};

export default SecondaryNavigation;