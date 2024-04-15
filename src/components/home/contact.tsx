import React, { useState } from "react";
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import TextField from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
}

const HomeContact: React.FC = () => {
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "30f5bf3d-3282-4d62-92b4-b6b271ecae89",
        ...formData,
      }),
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

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
          <form onSubmit={handleSubmit}>
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
    </Box>
  );
}

export default HomeContact;
