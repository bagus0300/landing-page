import React, { FC, useState } from 'react'
import emailjs from 'emailjs-com'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import TextField from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const HomeNewsLetter: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  })

  const [alert, setAlert] = useState<{
    open: boolean
    message: string
    severity: 'success' | 'error' | 'warning' | 'info'
  }>({
    open: false,
    message: '',
    severity: 'success',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = (): boolean => {
    return formData.name.trim() !== '' && formData.email.trim() !== '' && formData.message.trim() !== ''
  }

  const handleCloseAlert = (): void => {
    setAlert({ ...alert, open: false })
  }

  const sendEmail = (e: React.FormEvent): void => {
    e.preventDefault()

    if (!validateForm()) {
      setAlert({
        open: true,
        message: 'Please fill out all required fields.',
        severity: 'error',
      })
      return
    }

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text)
        setAlert({
          open: true,
          message: 'Email sent successfully!',
          severity: 'success',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          message: '',
        })
      })
      .catch((error) => {
        console.error('Email error:', error)
        setAlert({
          open: true,
          message: 'Failed to send email. Please try again later.',
          severity: 'error',
        })
      })
  }

  return (
    <Box id='contact' sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Contact Us
          </Typography>
          <Typography sx={{ mb: 6 }}>
            If you are interested in learning more about Math for Everyone or would like to get involved, please fill
            out the form below. We would be happy to hear from you and discuss how we can work together to provide
            high-quality mathematics education to low income communities.
          </Typography>

          <form onSubmit={sendEmail}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'col' },
                justifyContent: 'space-around',
                width: { xs: '100%', md: 560 },
                mx: 'auto',
              }}
            >
              <InputBase
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  width: '100%',
                  height: 48,
                  px: 2,
                  mr: { xs: 0, md: 3 },
                  mb: 2,
                }}
                placeholder="Enter your Name"
                required
              />
              <InputBase
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  width: '100%',
                  height: 48,
                  px: 2,
                  mr: { xs: 0, md: 3 },
                  mb: 2,
                }}
                placeholder="Enter your Email Address"
                required
              />
              <InputBase
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  width: '100%',
                  height: 48,
                  px: 2,
                  mr: { xs: 0, md: 3 },
                  mb: 2,
                }}
                placeholder="Enter your Phone Number"
              />
              <InputBase
                name="location"
                value={formData.location}
                onChange={handleChange}
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  width: '100%',
                  height: 48,
                  px: 2,
                  mr: { xs: 0, md: 3 },
                  mb: 2,
                }}
                placeholder="Enter your Location"
              />
              <TextField
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={6}
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  width: '100%',
                  height: 'auto',
                  px: 2,
                  mr: { xs: 0, md: 3 },
                  mb: 2,
                }}
                placeholder="Enter your Message"
                required
              />
              <Box>
                <StyledButton type="submit" size="large">
                  Send
                </StyledButton>
              </Box>
            </Box>
          </form>
        </Box>
      </Container>
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default HomeNewsLetter
