import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Card, CardContent, Typography, Box, Button, TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const theme = createTheme({
    typography: {
        fontFamily: `'Jost', sans-serif`,
    },
});

const CustomTextField = ({ label, required = false }) => (
    <TextField
        label={label}
        required={required}
        variant="filled"
        fullWidth
        InputProps={{
            disableUnderline: true,
        }}
        sx={{
            bgcolor: '#fff',
            '& .MuiFilledInput-root': {
                borderBottom: '1px solid black',
                '&:hover': {
                    borderBottom: '1px solid black',
                },
                '&.Mui-focused': {
                    borderBottom: '2px solid black',
                },
            },
            '& .MuiInputLabel-root': {
                color: 'grey',
            },
            '& .MuiInputLabel-root.Mui-focused': {
                color: 'black',
            },
        }}
    />
);


const ContactUs = () => {
    const [formData] = useState({
        name: '',
        email: '',
        phone: '',
        guests: '',
        date: '',
        message: '',
    });
    const [setErrors] = useState({});

    const contactInfo = [
        {
            icon: <HomeIcon style={{ fontSize: '40px' }} />,
            title: 'Our Headquarters',
            content: (
                <>
                    1234 Tech Avenue, <br /> Silicon Valley, USA
                </>
            ),
        },
        {
            icon: <PhoneIcon style={{ fontSize: '40px' }} />,
            title: 'Call Us',
            content: (
                <>
                    +1 234 567 890 <br /> +1 987 654 321
                </>
            ),
        },
        {
            icon: <MailOutlineIcon style={{ fontSize: '40px' }} />,
            title: 'Email Us',
            content: (
                <>
                    contact@webcompany.com <br /> support@webcompany.com
                </>
            ),
        },
    ];

    useEffect(() => {
        document.title = "Contact Us";
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        for (const [key, value] of Object.entries(formData)) {
            if (!value) {
                newErrors[key] = 'This field is required';
            }
        }

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted', formData);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box>
                    <Box
                        sx={{
                            position: 'relative',
                            backgroundImage: 'url(/Assets/overlay-2.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: 'white',
                            padding: { xs: '30px 1rem', md: '50px 10rem' },
                            height: { xs: '50vh', md: '55vh' },
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            zIndex: 1,
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#0B1121',
                                opacity: 0.85,
                                zIndex: -1,
                            }
                        }}
                    >
                        <Navbar color="#fff" />
                        <Typography sx={{ fontWeight: 'bold', fontSize: ['40px', '50px', '60px'] }}>
                            Contact Us
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ backgroundColor: '#000212' }}>
                    <Box sx={{ pt: 10 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography data-aos="zoom-in-up" data-aos-duration="2000" sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#fff', textAlign: 'center', lineHeight: 1.4, mb: 2, width: ['90%', '90%', '90%', '90%', '40%'] }}>Let’s Build Innovative Web Solutions Together</Typography>
                        </Box>
                        <Typography data-aos="zoom-in-up" data-aos-duration="2500" sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8, fontWeight: '500', }}>Reach out for project inquiries, collaborations, or just to say hello. We’re here to help.</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, px: [3, 3, 10, 10, 36], py: 5 }}>
                        <Grid container spacing={10} justifyContent="center"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2500">
                            {contactInfo.map((info, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            minHeight: '250px',
                                            textAlign: 'center',
                                            backgroundColor: '#D3D6DB ',
                                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                                            padding: '20px',
                                        }}
                                    >
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                {info.icon}
                                            </Box>
                                            <Typography variant="h6" component="div" gutterBottom>
                                                {info.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {info.content}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box sx={{ pt: 5 }}>
                        <Typography data-aos="zoom-in-up" data-aos-duration="2000" sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#fff', textAlign: 'center', lineHeight: 1.4, my: 8 }}>Get in Touch with Stratus Web Solutions</Typography>
                    </Box>
                    <Box
                        sx={{ pb: 10 }}
                        data-aos="fade-down"
                        data-aos-duration="2500"
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: [2, 4, 10],
                                flexWrap: 'wrap',
                                px: [2, 4],
                            }}
                        >
                            <Box
                                sx={{
                                    bgcolor: '#D3D6DB ',
                                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                                    width: ['100%', '100%', '100%', '680px'],
                                    height: ['auto', 'auto', 'auto', '729px'],
                                    p: [2, 5, 8],
                                    mb: [4, 0],
                                }}
                            >
                                <Typography
                                    sx={{
                                        mb: [4, 6, 8],
                                        fontWeight: '600',
                                        fontSize: ['18px', '22px', '24px'],
                                        width: ['100%', '80%', '65%'],
                                    }}
                                >
                                    Seamless Collaboration for Web Development Success
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <Box sx={{ display: 'flex', gap: [2, 3, 5], flexDirection: ['column', 'row'] }}>
                                        <CustomTextField label="Your Name" required fullWidth />
                                        <CustomTextField label="Your Email" required fullWidth />
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: [2, 3, 5], mt: [3, 4], flexDirection: ['column', 'row'] }}>
                                        <CustomTextField label="Phone Number" required fullWidth />
                                        <CustomTextField label="Meeting Date" required fullWidth />
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: [2, 3, 5], mt: [3, 4], flexDirection: ['column'] }}>
                                        <CustomTextField label="Number of Guests" required fullWidth />
                                        <CustomTextField label="Message" required fullWidth multiline rows={4} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', my: [5, 5] }}>
                                        <Button
                                            fullWidth
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                bgcolor: "#000212",
                                                textTransform: "none",
                                                color: "#fff",
                                                fontWeight: "bold",
                                                border: "1px solid #000212",
                                                py: 1.5,
                                                "&:hover": {
                                                    bgcolor: "transparent",
                                                    borderColor: '#000212',
                                                    color:'#000'
                                                },
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </Box>
                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default ContactUs;
