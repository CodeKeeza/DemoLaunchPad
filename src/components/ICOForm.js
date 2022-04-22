import * as React from 'react'
import { ListItemText, Paper } from '@mui/material'
import { Box } from '@mui/material'
import { Form, TextArea } from 'web3uikit'
import CssBaseline from '@mui/material/CssBaseline'

export default function ICOForm() {
  return (
    <>
      <CssBaseline />
      <Form
        buttonConfig={{
          onClick: function noRefCheck() {},
          theme: 'primary',
        }}
        data={[
          {
            inputWidth: '100%',
            name: 'Token Name',
            type: 'text',
            value: '',
          },
          {
            inputWidth: '100%',
            name: 'Token Address',
            type: 'text',
            value: '',
          },
          {
            name: 'your digits',
            type: 'tel',
            validation: {
              required: true,
            },
            value: '',
          },
          {
            name: 'your password',
            type: 'password',
            validation: {
              characterMaxLength: 20,
              characterMinLength: 6,
              required: true,
            },
            value: '',
          },
          {
            name: 'Rate our form? 1-10',
            type: 'number',
            validation: {
              numberMax: 10,
              numberMin: 1,
              required: true,
            },
            value: '',
          },
          {
            name: 'pizza fav',
            options: ['pineapple', 'peppers', 'chillies'],
            type: 'box',
            value: 'what toppings do you like?',
          },
          {
            name: 'Morning checklist',
            options: ['say GM', 'make coffee', 'build killer web3uiKit'],
            type: 'switch',
            validation: {
              required: true,
            },
            value: 'Check list',
          },
          {
            name: 'pokemon',
            options: ['charmander', 'squirtle', 'bulbasaur'],
            type: 'radios',
            value: "who's that pokemon?",
          },
          {
            inputWidth: '100%',
            name: 'Any more comments?',
            type: 'textarea',
            validation: {
              required: true,
            },
            value: '',
          },
        ]}
        onSubmit={function noRefCheck() {}}
        title="Test form"
      />
    </>
  )
}
