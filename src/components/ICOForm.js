import React, { useState } from 'react'
import { ListItemText, Paper } from '@mui/material'
import { Box, Slider } from '@mui/material'
import { Form, TextArea, Button, Row, Typography, Card } from 'web3uikit'
import CssBaseline from '@mui/material/CssBaseline'

export default function ICOForm() {
  const [liqPerc, setLiqPerc] = useState()
  const [listingRate, setListingRate] = useState()

  function handleLiqPerc(e) {
    setLiqPerc(e.value)
    console.log(e)
    console.log(liqPerc)
  }
  function handleListingRate(e) {
    setLiqPerc(e.value)
    console.log(e)
    console.log(liqPerc)
  }
  console.log(liqPerc)
  function valuetext(value) {
    return `${value}%`
  }
  const dial = (
    <>
      <div
        style={{
          marginBottom: '15px',
          position: 'top',
          display: 'flex-wrap',
        }}
      >
        <div
          style={{
            border: 'none',
            boxSizing: 'borderbox',
            lineHeight: '1',
            outline: 'none',
            padding: '0',
            borderRadius: '16px',
            display: '-webkit-box',
            display: '-webkit-flex',
            display: '-ms-flexbox',
            display: 'flex',
            maxwidth: '100%',
            minwidth: '-webkit-fit-content',
            minwidth: '-moz-fit-content',
            minwidth: 'fit-content',
            outline: '1px solid',
            position: 'relative',
            justifyContent: 'space-between',
            transition: 'all 0.1s linear',
            outlineColor: '#C5CDD9',
            height: '40px',
            padding: '8px 16px',
            marginBottom: '30px',
            width: '800px',
          }}
        >
          <Typography>
            Percentage of raised tokens added to liquidity?
          </Typography>
          <div style={{ display: 'flex', marginTop: '5px' }}>{liqPerc}%</div>
          <Box width={360}>
            <Slider
              defaultValue={25}
              aria-label="Default"
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              step={1}
              min={0}
              max={100}
              onChange={(e) => setLiqPerc(e.target.value)}
            />
          </Box>
        </div>
        <div style={{ marginLeft: '15px', marginTop: '10px' }}>
          <Paper
            style={{ width: 'auto', height: 'auto', backgroundColor: 'aqua' }}
          >
            // TODO: Calculations for caps and issuance
          </Paper>
        </div>
      </div>
      <div
        style={{
          marginBottom: '15px',
          position: 'top',
          display: 'flex-wrap',
        }}
      >
        <div
          style={{
            border: 'none',
            boxSizing: 'borderbox',
            lineHeight: '1',
            outline: 'none',
            borderRadius: '16px',
            display: '-webkit-box',
            display: '-webkit-flex',
            display: '-ms-flexbox',
            display: 'flex',
            maxwidth: '100%',
            minwidth: '-webkit-fit-content',
            minwidth: '-moz-fit-content',
            minwidth: 'fit-content',
            outline: '1px solid',
            position: 'relative',
            justifyContent: 'space-between',
            transition: 'all 0.1s linear',
            outlineColor: '#C5CDD9',
            height: '40px',
            marginBottom: '30px',
            padding: '8px 16px',
            width: '800px',
          }}
        >
          <Typography>
            Percentage of raised tokens added to liquidity?
          </Typography>
          <div style={{ display: 'flex', marginTop: '5px' }}>
            {listingRate ? listingRate : 0}%
          </div>
          <Box style={{ width: '360px' }}>
            <Slider
              defaultValue={25}
              aria-label="Default"
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              step={1}
              min={0}
              max={100}
              onChange={(e) => setListingRate(e.target.value)}
            />
          </Box>
        </div>
        <div style={{ marginLeft: '15px', marginTop: '10px' }}>
          <Paper
            style={{ width: 'auto', height: 'auto', backgroundColor: 'aqua' }}
          >
            // TODO: Calculations for caps and issuance
          </Paper>
        </div>
      </div>
      <div style={{ display: 'flex-wrap' }}>
        <Button type="submit" text="submit" theme="primary"></Button>
      </div>
    </>
  )
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
            name: 'ILO name',
            type: 'text',
            value: '',
            validation: {
              required: true,
            },
          },
          {
            inputWidth: '100%',
            name: 'Token address',
            type: 'text',
            value: '',
            validation: {
              required: true,
            },
          },
          {
            name: 'How many tokens allocated to presale?',
            type: 'number',
            value: '',
            validation: {
              required: true,
            },
          },
          {
            name: 'Soft Cap (Minimum per person)?',
            type: 'number',
            value: '',
            validation: {
              required: true,
            },
          },
          {
            name: 'Hard Cap (Maximum per person)?',
            type: 'number',
            value: '',
            validation: {
              required: true,
            },
          },
        ]}
        customFooter={dial}
        onSubmit={function noRefCheck() {}}
        title="Test form"
      />
    </>
  )
}
