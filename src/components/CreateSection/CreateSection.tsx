import React from 'react';
import {Button, ButtonGroup, Input} from '@chakra-ui/react';

// import GlobalStyles from '../../GlobalStyles';

function CreateSection() {

  return (
    <div style={{
      // Style: 'Inline white',
      // Header: 'True',
      height: '460px',
      width: '344px',
      left: '16px',
      top: '120px',
      borderRadius: '4px',

    }}>
      <Input
        // label='Section title'
        style={{
          boxSizing: 'border-box',
          // position: 'absolute',
          left: '0px',
          right: '0px',
          top: '0px',
          bottom: '0px',
          background: '#FFFFFF',
          border: '1px solid #B3BAC5',
          borderRadius: '4px',
        }}
      ></Input>
      <ButtonGroup>
        <Button variant='secondary'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '6px 12px',

                  width: '67px',
                  height: '32px',

                  background: '#EBECF0',
                  borderRadius: '4px',

                  flex: 'none',
                  // order: '0',
                  // flexGrow: '0',
                }}
        >Cancel</Button>
        <Button variant='blue'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '6px 12px',

                  width: '54px',
                  height: '32px',

                  background: '#0065FF',
                  borderRadius: '4px',

                  flex: 'none',
                  // order: '1',
                  // flexGrow: '0',
                }}>Save</Button>
      </ButtonGroup>

    </div>
  );
};

export default CreateSection;