import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
    config: {initialColorMode: 'light', useSystemColorMode: false},
    colors: {
      'priority.high': '#E32C1E',
      'priority.medium': '#FF9800',
      'priority.low': '#24A148',

      checkBoxColor: {
        50: '#0065FF',
        100: '#0065FF',
        200: '#0065FF',
        300: '#0065FF',
        400: '#0065FF',
        500: '#0065FF',
        600: '#0065FF',
        700: '#0065FF',
        800: '#0065FF',
        900: '#0065FF',
      },
    },
    components: {
      Button: {
        sizes: {
          default: {
            h: '32px',
            w: '67px',
          },
        },
        variants: {
          primary: {
            padding: '6px 12px 6px 12px',
            bg: '#0065FF',
            borderRadius: '4px',
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: '14px',
            color: '#FFFFFF',
            lineHeight: '20px',
          },
          secondary: {
            padding: '6px 12px 6px 12px',
            background: '#EBECF0',
            borderRadius: '4px',
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '20px',
          },
          iconButton: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px',
            gap: '8px',
            width: '32px',
            height: '32px',
            background: '#EBECF0',
            borderRadius: '4px',
          },
        },
      },
      ButtonGroup: {
        variants: {
          justifyRight: {


            // alignItems: 'flex-start',
            padding: '0px',
            gap: '8px',
            // position: 'absolute',
            width: '129px',
            height: '32px',
            left: '231px',
            top: '180px',
          },
        },
      },
      Input: {
        variants: {
          light: {
            borderColor: '#B3BAC5',
            bg: '#FFFFFF',
            borderRadius: '4px',
            border: '1px',
            height: '32px',
            width: '344px',
          },
        },
      },
      Text: {
        sizes: {
          xSmall: {
            //styleName: Body/body-x-small/Roboto/Regular;
            fontSize: '12px',
            width: '344px',
            height: '16px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '16px',
            display: 'flex',
            alignItems: 'center',
            color: '#42526E',
            flex: 'none',
            order: '1',
            flexGrow: '1',
          },
          heading4: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#000000',
            background: 'transparent',
          },
          regular: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '16px',
            display: 'flex',
            alignItems: 'center',
            color: '#000000',
            flex: 'none',
          },
        },
      },
      GridItem: {
        variants: {
          justifyRight: {
            display: 'flex',
            justifyContent: 'flex-end',
          },
        },
      },
    },
  })
;

export default theme;
