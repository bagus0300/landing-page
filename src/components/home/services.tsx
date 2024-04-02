import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const StyledSlickContainer = styled('div')(() => ({
  position: 'relative',

  '& .slick-list': { marginLeft: '-30px', marginBottom: '24px' },
}))

const HomeServices: FC = () => {
  return (
    <Box id="service" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 36, md: 46 },
                mt: { xs: 0, md: 7 },
                mb: 4,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                Services
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    left: 2,
                    '& img': { width: { xs: 130, md: 175 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
            </Typography>

            <StyledSlickContainer></StyledSlickContainer>
            <h3>
              At Math for Everyone, we offer a range of services to help low-income communities and individuals access
              high-quality mathematics education.
            </h3>
            <h3>Our services include:</h3>

            <div style={{fontSize : '18px'}}>
            <li>Small group tutoring sessions with experienced mathematics teachers.</li>
            <li>Online learning resources and practice exercises.</li>
            <li>Workshops and seminars on mathematics-related topics.</li>
            <li>Collaboration with local schools and community organizations to provide mathematics education.</li>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ width: { xs: '100%', md: '90%' } }}>
              <Image src="/images/home-testimonial.png" width={520} height={540} quality={97} alt="Testimonial img" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeServices
