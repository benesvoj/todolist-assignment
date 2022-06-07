import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
// import Layout from './components/Layout/Layout';
import {Button, ButtonGroup, Input, Text} from '@chakra-ui/react';

import Separator from './components/Separator/Separator';

function App() {
  const {i18n, t} = useTranslation();
  const newDate = new Date();
  const date = newDate.getDate();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const weekDay = days[newDate.getDay()];
  const month = months[newDate.getMonth()];

  return (
    <>
      <Helmet
        titleTemplate={`%s - ${t('app.title')}`}
        defaultTitle={t('app.title')}
        htmlAttributes={{lang: i18n.language}}
      >
        <meta name='description' content={t('app.description')} />
      </Helmet>

      <div className='wrapper' style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#F4F5F7',
        float: 'left',
      }}>
        {/*navigation start */}
        <div className='nav navigation' style={{
          position: 'absolute',
          width: '100%',
          height: '48px',
          left: '0px',
          top: '0px',
          background: '#FFFFFF',
        }}>
          <Text variant='heading4' style={{
            position: 'absolute',
            width: '67px',
            height: '24px',
            left: '16px',
            top: 'calc(50% - 24px/2)',
            display: 'flex',
            alignItems: 'center',
            color: '#091E42',
          }}
          >{i18n.t('app.todo')}</Text>
          {/*separator start*/}
          <Separator />
          {/*separator end*/}
        </div>
        {/*navigation end*/}

        {/*header start*/}
        <div className='header' style={{
          position: 'absolute',
          display: 'table',
          // alignContent: 'center',
          height: '40px',
          left: '16px',
          right: '16px',
          top: '64px',
          width: '98%',
          // justifyContent: 'center',
          // background: 'red',
          // verticalAlign: 'middle',
        }}
        >

          <div className='header-label' style={{
            // position: 'absolute',
            display: 'table-cell',
            width: '112px',
            height: '18px',
            left: '16px',
            top: '76px',
            verticalAlign: 'middle',
          }}>
            <div style={{
              width: '112px',
              height: '18px',
              display: 'flex',
              // alignItems: 'center',
              // verticalAlign: 'middle',
              flex: 'none',
            }}>

              <Text variant='heading4'>{i18n.t('app.today')} </Text>
              <Text variant='regular'> {weekDay} {date} {month}</Text>
            </div>
          </div>

          <div className='header-buttonGroup' style={{
            display: 'table-cell',
            verticalAlign: 'middle',
            justifyContent: 'flex-end',
          }}>
            <ButtonGroup style={{
              flexDirection: 'row',
              float: 'right',
              display: 'flex',

              padding: '0px',
              gap: '8px',
              // position: 'absolute',
              // width: '72px',
              height: '32px',

              // left: '1368px',
              // top: '64px',
              right: '16px',
            }}
            >
              <Button variant='iconButton'>1</Button>
              <Button variant='iconButton'>2</Button>
            </ButtonGroup>
          </div>


          {/*<div className='header-gap' style={{*/}
          {/*  width: '80%',*/}
          {/*  display: 'table-cell',*/}
          {/*}}>*/}
          {/*</div>*/}


          <Separator />
        </div>
        {/*header end*/}

        {/*create section start*/}
        <div className='createSection' style={{
          position: 'absolute',
          marginTop: '16px',
          width: '344px',
          height: '92px',
          left: '16px',
          top: '120px',
        }}
        >
          <Text mb='8px' size='xSmall'>{i18n.t('app.sectionTitle')}</Text>
          <Input mb='8px' variant='light' />
          <div style={{
            flexDirection: 'row',
            float: 'right',
            justifyContent: 'flex-end',
          }}>
            <ButtonGroup variant='justifyRight'>
              <Button
                variant='secondary'
                size='default'
              >Cancel</Button>
              <Button
                variant='primary'
                size='default'
              >Save</Button>
            </ButtonGroup>

          </div>

        </div>
        {/*create section end*/}
      </div>

      {/*<Layout />*/}
    </>
  );
}

export default App;
