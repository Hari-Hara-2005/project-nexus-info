import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Navbar from '../Components/Navbar';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function Home() {
    const theme = createTheme({
        typography: {
            fontFamily: `'Source Sans 3', sans-serif`,
        },
    });
    return (
        <>
            <video autoPlay muted loop id="myVideo">
                <source src="Assets/bg-video.mp4" type="video/mp4" />
            </video>
            <ThemeProvider theme={theme}>
                <Box sx={{ bgcolor: '#000212' }}>
                    <Navbar color="#fff" />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#fff',
                            textAlign: 'center',
                            zIndex: 1,
                        }}
                    >
                        <Typography sx={{ fontWeight: 600, fontSize: '80px', lineHeight: '80px', pb: 3 }}>Stratus is a better way to build websites</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', pb: 5 }}>
                            <Typography sx={{ fontSize: '24px', width: '70%' }}>The premium WordPress theme designed to elevate your online presence to unparalleled heights.</Typography>
                        </Box>
                        <Button
                            variant="contained"
                            endIcon={
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '5rem',
                                        fontWeight: 600
                                    }}
                                >
                                    <ChevronRightIcon />
                                </Box>
                            }
                            sx={{
                                background: 'linear-gradient(45deg, #6249C0, #6249C0)',
                                color: '#fff',
                                padding: '10px 25px',
                                borderRadius: '50px',
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                transition: '0.3s',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #6249C0, #9174CA)',
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }} >
                        <Box
                            sx={{
                                width: '900px',
                                height: '180px',
                                bgcolor: '#000212',
                                display: 'flex',
                                gap: 10,
                                p: 5,
                                border: '3px solid #6249C0',
                                borderRadius: '20px',
                                alignItems: 'center',
                                zIndex: 1,
                                transition: 'box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    boxShadow: ' 0px 0px 103px -25px rgba(125,125,125,1)',
                                },
                            }}
                        >
                            <Box sx={{ width: '70%', color: '#fff' }}>
                                <Typography sx={{ fontSize: '22px', fontWeight: 700, pb: 2 }}>What’s new in Stratus</Typography>
                                <Typography>With Stratus's intuitive interface, you can effortlessly modify colors, fonts, layouts, and more, making your site truly unique and a reflection of your brand.</Typography>
                            </Box>
                            <Box >
                                <Button
                                    variant="contained"
                                    sx={{
                                        background: 'linear-gradient(45deg, #6249C0, #9174CA)',
                                        color: '#fff',
                                        padding: '8px 30px',
                                        borderRadius: '50px',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        transition: '0.3s',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #9174CA, #6249C0)',
                                        },
                                    }}
                                >
                                    Read More
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
}

export default Home;
