import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useTheme, styled } from '@mui/material/styles'
import { IconButton, useMediaQuery } from '@mui/material'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'

import { data } from './mission.data'
import { CourseCardItem } from '@/components/course'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-70px !important', md: '-28px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const HomeMissions: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  return (
    <Box
      id="mission"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: '100%',
                width: { xs: '100%', md: '90%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
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
                Our{' '}
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
                  Mission <br />
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
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Slider {...sliderConfig}>
              {data.map((item) => (
                <CourseCardItem key={String(item.id)} item={item} />
              ))}
            </Slider>
          </Grid>
        </Grid>
        <Grid>
          <Box
            sx={{
              height: '100%',
              width: { xs: '100%', md: '90%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              mt: [10],
              fontSize: [20],
            }}
          >
            Our mission at Math for Everyone is to provide high-quality mathematics education to low-income populations,
            regardless of their background or location. We believe that mathematics is a gateway to the new world, and
            that everyone deserves access to the opportunities and resources it provides so that they can overcome the
            challenges they face and unlock their full potential.
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeMissions
