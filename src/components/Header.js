import FlashOnIcon from '@mui/icons-material/FlashOn'
import HomeIcon from '@mui/icons-material/Home'
import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import swal from 'sweetalert'

// import './Header.css'
import { ConnectButton } from 'web3uikit'
import { Link } from '@mui/material'

function Header() {
  const [value, setValue] = React.useState(0)
  const ref = React.useRef(null)

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'flex', top: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction label="Home" href="/#" icon={<HomeIcon />} />
          <BottomNavigationAction
            label="Launchpad"
            href="/launchpad"
            icon={<FlashOnIcon />}
          />
          <div
            style={{
              display: 'responsive',
              paddingLeft: '1500px',
              marginTop: '8px',
            }}
          >
            <ConnectButton style={{ marginTop: '5px' }} />
          </div>
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default Header
