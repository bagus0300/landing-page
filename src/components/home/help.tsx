import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Help: FC = () => {
  return (
    <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '50%',
                clipPath: 'circle(60% at 50% 50%)',
              }}
            >
              <Image src="/images/home-help.jpg" width={650} height={678} quality={97} alt="Feature img" />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              How we{' '}
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
                Help <br />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    transform: 'rotate(3deg)',
                    left: 2,
                    '& img': { width: { xs: 140, md: 175 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}></Typography>
            <div>
              <h4>Our organization helps low-income communities and individuals in several ways:</h4>
              <div style={{ marginLeft: '30px' }}>
                <li>
                  By providing access to high-quality mathematics education, we help level the playing field and provide
                  equal opportunities for all students.
                </li>
                <li>
                  By offering small group tutoring sessions and online learning resources we provide personalized
                  support and flexibility for students who may not have access to these resources otherwise.
                </li>
                <li>
                  By collaboration with local schools and community organizations, we help build a supportive community
                  for mathematics education.
                </li>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Help
