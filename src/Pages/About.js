import React, { useEffect } from 'react';
import { Box, Typography, Button, CardMedia, Card, CardContent, CardActionArea, CardActions, IconButton } from '@mui/material';
import Navbar from '../Components/Navbar';
import "swiper/css";
import "swiper/css/pagination";
import Footer from '../Components/Footer';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon } from '@mui/icons-material';
import Slider from '../Components/Slider';

import { values } from '../utility/data'

const cardData = [
    {
        id: 1,
        title: 'Sheryl Graham',
        description: 'Sheryl oversees the firm’s business operations including sales, marketing, business development, and communications.',
        image: 'Assets/Team-1.jpg',
    },
    {
        id: 2,
        title: 'Chris Anderson',
        description: 'Susan is CFO at Stratus, where she leads the finance, facilities, and information technology teams across all locations nationwide.',
        image: 'Assets/Team-2.jpg',
    },
    {
        id: 3,
        title: 'Susan Cox',
        description: 'Chris leads Product Management, Design, and Marketing functions globally. He is responsible for the core products and features.',
        image: 'Assets/Team-3.jpg',
    },
];

const About = () => {
    useEffect(() => {
        document.title = "About";
    }, []);
    return (
        <>
            <Box sx={{ minHeight: "100vh", overflow: "hidden" }}>
                <Box
                    sx={{
                        position: "relative",
                        backgroundImage: "url(/Assets/overlay-2.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "white",
                        padding: { xs: "30px 1rem", md: "50px 10rem" },
                        height: { xs: "50vh", md: "55vh" },
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        zIndex: 1,
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#0B1121",
                            opacity: 0.85,
                            zIndex: -1,
                        },
                    }}
                >
                    <Navbar color="#fff" />
                    <Typography
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="0"
                        sx={{ fontWeight: "bold", fontSize: ["40px", "50px", "60px"] }}
                    >
                        About
                    </Typography>
                </Box>

                <Box
                    sx={{
                        backgroundColor: "#000212",
                        color: "white",
                        padding: ["40px 2rem", "40px 2rem", "90px 5rem", "90px 5rem", "80px 13rem"],
                    }}
                >
                    <Box
                        sx={{ marginBottom: "50px", display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between" }}
                    >
                        <Typography
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            sx={{ fontWeight: "bold", width: { xs: "100%", md: "30%" }, fontSize: { xs: "30px", md: "47px" } }}
                        >
                            We're building the modern web
                        </Typography>
                        <Typography
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            variant="body1"
                            sx={{ marginBottom: "20px", width: { xs: "100%", md: "50%" }, fontSize: { xs: "16px", md: "24px" }, lineHeight: 1.7 }}
                        >
                            We collaboratively administrate empowered markets through existing channels and new opportunities on the horizon. We can quickly maximize the timely deliverables for real-time presentations to deliver outstanding ROI.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            py: 10,
                        }}
                    >
                        <Box sx={{ textAlign: "start", mb: { xs: 4, sm: 0 } }} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                            <Typography sx={{ color: "#26e7a6", fontSize: { xs: "36px", md: "48px" }, fontWeight: 700 }}>2010</Typography>
                            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>Year we were founded</Typography>
                        </Box>
                        <Box sx={{ textAlign: "start", mb: { xs: 4, sm: 0 } }} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                            <Typography sx={{ color: "#26e7a6", fontSize: { xs: "36px", md: "48px" }, fontWeight: 700 }}>5m</Typography>
                            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>Monthly active users</Typography>
                        </Box>
                        <Box sx={{ textAlign: "start", mb: { xs: 4, sm: 0 } }} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                            <Typography sx={{ color: "#26e7a6", fontSize: { xs: "36px", md: "48px" }, fontWeight: 700 }}>100+</Typography>
                            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>Members in our remote team</Typography>
                        </Box>
                        <Box sx={{ textAlign: "start", mb: { xs: 4, sm: 0 } }} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
                            <Typography sx={{ color: "#26e7a6", fontSize: { xs: "36px", md: "48px" }, fontWeight: 700 }}>67</Typography>
                            <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>Countries using our products</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        backgroundColor: '#1A202C',
                        height: '570px',
                    }}
                >
                    <Box
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-delay="1000"
                        sx={{
                            flex: 1,
                            padding: { xs: '20px 1.7rem', md: '50px 5rem', xl: '50px 12rem' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            color: '#fff',
                        }}
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            OUR APPROACH
                        </Typography>
                        <Typography sx={{ fontWeight: 700, marginBottom: '15px', fontSize: { xs: '28px', md: '40px' } }}>
                            Results oriented
                        </Typography>
                        <Typography sx={{ marginBottom: '30px', fontSize: { xs: '14px', md: '18px' }, lineHeight: 1.7 }}>
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
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-delay="1000"
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
                                height: { xs: '250px', md: '100%' },
                                objectFit: 'cover',
                            }}
                            alt="Team meeting"
                            src="Assets/Agency-1.jpg"
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: '#0B1121', color: 'white' }}>
                <Box
                    display="flex"
                    flexDirection={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    padding={{ xs: '40px 2rem', md: '50px 2rem', xl: '80px 13rem' }}
                    alignItems="center"
                >
                    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center">
                        <Box sx={{ paddingBottom: { xs: '20px', sm: '0' } }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                            <CardMedia
                                component="img"
                                image="Assets/Agency-3.jpg"
                                alt="Team Member 1"
                                sx={{ borderRadius: '10px', width: ['100%', '90%'] }}
                            />
                        </Box>
                        <Box display="flex" flexDirection="column" sx={{ paddingBottom: { xs: '30px', sm: '0' } }} gap={2}>
                            <Box data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <CardMedia
                                    component="img"
                                    image="Assets/Agency-5.jpg"
                                    alt="Team Member 2"
                                    sx={{ borderRadius: '10px', width: ['100%', '75%'] }}
                                />
                            </Box>
                            <Box data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                <CardMedia
                                    component="img"
                                    image="Assets/Agency-4.jpg"
                                    alt="Team Member 3"
                                    sx={{ borderRadius: '10px', width: ['100%', '75%'] }}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            color: '#fff',
                            padding: { xs: '20px 0', md: '0' }
                        }}
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '5px', textTransform: 'uppercase' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                            The human element
                        </Typography>
                        <Typography sx={{ fontWeight: 700, marginBottom: '15px', fontSize: { xs: '30px', md: '40px' } }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                            What's our secret? Great people.
                        </Typography>
                        <Typography sx={{ marginBottom: '30px', fontSize: { xs: '16px', md: '18px' }, lineHeight: 1.7 }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
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
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="1200"
                        >
                            MEET THE TEAM
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: '#1A202C', color: 'white', padding: ['40px 2rem', '40px 2rem', '90px 5rem', '90px 5rem', '80px 13rem'] }}>
                <Box textAlign="left" mb={5}>
                    <Typography
                        sx={{ fontWeight: 'bold', mb: 2, fontSize: ['30px', '48px'] }}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-aos-delay="800"
                    >
                        Our values
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                        flexWrap: 'wrap',
                        padding: ['10px 0rem', '10px 0rem', '10px 0rem', '10px 0rem', '10px 10rem'],
                        justifyContent: 'space-between',
                        gap: 3,
                    }}
                >
                    {values.map((value, index) => (
                        <Card
                            key={index}
                            sx={{
                                backgroundColor: '#0B1121',
                                color: 'white',
                                flex: '1 1 calc(33.333% - 20px)',
                                width: ['100%', '400px'],
                                height: '280px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.43)',
                                p: 2,
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay={index * 250}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        fontSize: 40,
                                        color: '#00FFB9',
                                        mb: 2,
                                    }}
                                    data-aos="zoom-in"
                                    data-aos-duration="1500"
                                    data-aos-delay={index * 250 + 100}
                                >
                                    {value.icon}
                                </Box>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 'bold', mb: 2 }}
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-delay={index * 250 + 200}
                                >
                                    {value.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    data-aos-delay={index * 250 + 300}
                                >
                                    {value.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
            <Box>
                <Slider />
            </Box>
            <Box sx={{ backgroundColor: '#1A202C', color: 'white', padding: ['40px 2rem', '40px 2rem', '90px 5rem', '90px 5rem', '90px 13rem'] }}>
                <Box textAlign="left" mb={5}>
                    <Typography
                        sx={{ fontWeight: 'bold', mb: 2, fontSize: ['30px', '48px'] }}
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        Leadership
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                        flexWrap: 'wrap',
                        gap: ['20px', '20px', '20px', '20px', '40px'],
                        justifyContent: 'center',
                    }}
                >
                    {cardData.map((card, index) => (
                        <Card
                            key={card.id}
                            sx={{ width: ['360px', '330px', '360px'], boxShadow: 3, borderRadius: '10px' }}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={index * 150}
                            data-aos-offset="200"
                            data-aos-easing="ease-in-out"
                        >
                            <CardActionArea>
                                <CardMedia component="img" height="280px" image={card.image} alt={card.title} />
                                <CardContent sx={{ backgroundColor: '#0B1121', p: 4 }}>
                                    <Typography
                                        gutterBottom
                                        component="div"
                                        color="#fff"
                                        sx={{ fontWeight: 500, fontSize: '22px' }}
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                    >
                                        {card.title}
                                    </Typography>
                                    <Typography
                                        sx={{ fontSize: '15px', color: '#CCCCCC' }}
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                    >
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{ backgroundColor: '#0B1121', px: 4, pb: 3 }}>
                                <IconButton
                                    size="small"
                                    sx={{
                                        color: 'grey',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: '#3b5998',
                                        },
                                    }}
                                >
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton
                                    size="small"
                                    sx={{
                                        color: 'grey',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: '#00acee',
                                        },
                                    }}
                                >
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton
                                    size="small"
                                    sx={{
                                        color: 'grey',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: '#C13584',
                                        },
                                    }}
                                >
                                    <InstagramIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: 'url(/Assets/overlay-2.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    padding: { xs: '20px 2rem', sm: '30px 2.5rem', md: '50px 10rem' },
                    height: { xs: '30vh', md: '35vh' },
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row', md: 'row' },
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
                    },
                }}
            >
                <Typography
                    sx={{ fontWeight: 700, fontSize: { xs: '25px', sm: '40px', md: '40px' } }}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"                 >
                    Ready to take your startup to the next level?
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: '#fff',
                        color: '#fff',
                        backgroundColor: 'transparent',
                        width: { xs: '100%', sm: '80%', md: '200px' },
                        height: '60px',
                        borderRadius: '30px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#26e7a6',
                        },
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-out"
                >
                    CONTACT US
                </Button>
            </Box>
            <Footer />
        </>
    );
};

export default About;
