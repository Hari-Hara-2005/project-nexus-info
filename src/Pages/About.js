import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Navbar from '../Components/Navbar';

const AboutUs = () => {
    return (
        <>
            <Box sx={{ minHeight: '100vh', overflow: 'hidden' }}>
                <Box
                    sx={{
                        position: 'relative',
                        backgroundImage: 'url(/Assets/overlay-2.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        padding: '50px 10rem',
                        height: '55vh',
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
                    <Typography sx={{ fontWeight: 'bold', fontSize: '60px' }}>
                        About Us
                    </Typography>
                </Box>

                <Box
                    sx={{
                        backgroundColor: '#000212',
                        color: 'white',
                        padding: '80px 13rem',
                    }}
                >
                    <Box sx={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: 'bold', width: '30%', fontSize: '47px' }}>
                            We're building the modern web
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '20px', width: '50%', fontSize: '24px', lineHeight: 1.7 }}>
                            We collaboratively administrate empowered markets through existing channels and new opportunities on the horizon. We can quickly maximize the timely deliverables for real-time presentations to deliver outstanding ROI.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            py: 10
                        }}
                    >
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography sx={{ color: '#26e7a6', fontSize: '48px', fontWeight: 700 }}>2010</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Year we were founded</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography sx={{ color: '#26e7a6', fontSize: '48px', fontWeight: 700 }}>5m</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Monthly active users</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography sx={{ color: '#26e7a6', fontSize: '48px', fontWeight: 700 }}>100+</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Members in our remote team</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography sx={{ color: '#26e7a6', fontSize: '48px', fontWeight: 700 }}>67</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>Countries using our products</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box sx={{ display: 'flex', backgroundColor: '#1A202C', height: '570px' }}>
                    <Box
                        sx={{
                            flex: 1,
                            padding: '50px 12rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            color: '#fff',
                        }}
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            OUR APPROACH
                        </Typography>
                        <Typography sx={{ fontWeight: 700, marginBottom: '15px', fontSize: '40px' }}>
                            Results oriented
                        </Typography>
                        <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: 1.7 }}>
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Donec ac enim ante. Aliquam eu congue justo, in varius diam fusce tellus.
                        </Typography>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#26e7a6',
                                color: '#26e7a6',
                                backgroundColor: 'transparent',
                                width: '200px',
                                height: '50px',
                                borderRadius: '25px',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: '#26e7a6',
                                    color: 'white',
                                },
                            }}
                        >
                            FIND OUT MORE
                        </Button>

                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            alt="Team meeting"
                            src="Assets/Agency-1.jpg"
                        />
                    </Box>
                </Box>
            </Box>
            <Box >
                <Box sx={{ display: 'flex', backgroundColor: '#000212', py: 10 }}>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            alt="Team meeting"
                            src="Assets/Agency-1.jpg"
                        />
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            padding: '50px 12rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            color: '#fff',
                        }}
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '5px', textTransform: 'uppercase' }}>
                            The human element
                        </Typography>
                        <Typography sx={{ fontWeight: 700, marginBottom: '15px', fontSize: '40px' }}>
                            What's our secret? Great people.
                        </Typography>
                        <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: 1.7 }}>
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac enim ante. Aliquam eu congue justo, in varius diam fusce tellus.
                        </Typography>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#26e7a6',
                                color: '#26e7a6',
                                backgroundColor: 'transparent',
                                width: '200px',
                                height: '50px',
                                borderRadius: '25px',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: '#26e7a6',
                                    color: 'white',
                                },
                            }}
                        >
                            MEET THE TEAM
                        </Button>

                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: 'url(/Assets/overlay-2.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    padding: '50px 10rem',
                    height: '35vh',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 1,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#32C797',
                        opacity: 0.85,
                        zIndex: -1,
                    }
                }}
            >
                <Typography sx={{ fontWeight: 700, fontSize: '40px' }}>
                    Ready to take your startup to the next level?
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: '#fff',
                        color: '#fff',
                        backgroundColor: 'transparent',
                        width: '200px',
                        height: '60px',
                        borderRadius: '30px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#26e7a6',
                        },
                    }}
                >
                    CONTACT US
                </Button>
            </Box>
        </>
    );
};

export default AboutUs;
