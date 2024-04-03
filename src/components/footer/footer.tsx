import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import address from '../../components/home/address.json';

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 5 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Box sx={{ width: { xs: '100%', md: 660 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                Math for Everyone
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Math for Every is a non-profit organization that promotes learning and education in communities and
                areas with low socio-economic conditions.
              </Typography>
              
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
            <Grid item xs={12} md={8}>
              <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
                  contactus@mathforeveryone.com
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
                  {address.address}
              </Typography>
            </Grid>
          </Grid>
      </Container>
    </Box>
  )
}

export default Footer
