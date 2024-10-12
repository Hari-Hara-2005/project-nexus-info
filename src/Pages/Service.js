import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import TitleWithDescription from '../Components/TitleWithDescription '
import Footer from '../Components/Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import Review from '../Components/Review'
import Slider from '../Components/Slider'
const logos = [
    'Assets/leaf-50.png',
    'Assets/fox-hub-50.png',
    'Assets/lighting-50.png',
    'Assets/towers-50.png',
    'Assets/treva-50.png',
    'Assets/volicity9-50.png',
];
const Service = () => {
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
                    <Typography sx={{ fontWeight: 'bold', fontSize: ['40px', '50px', '60px'] }} data-aos="fade-right" data-aos-duration="1200">
                        Services
                    </Typography>
                </Box>

                <Box
                    sx={{
                        backgroundColor: '#000212',
                        color: 'white',
                        padding: ['40px 2rem', '40px 2rem', '90px 5rem', '90px 5rem', '80px 13rem'],
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <Box sx={{ marginBottom: '50px', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', pb: [5, 10] }} data-aos="fade-up" data-aos-duration="1100">
                        <Typography sx={{ fontWeight: 'bold', width: { xs: '100%', md: '30%' }, fontSize: { xs: '30px', md: '47px' } }}>
                            Web Development Services
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '20px', width: { xs: '100%', md: '50%' }, fontSize: { xs: '16px', md: '24px' }, lineHeight: 1.7 }} data-aos="fade-up" data-aos-duration="1200">
                            Get innovative, SEO friendly, responsive and user friendly website development services.
                        </Typography>
                    </Box>
                    <TitleWithDescription title="Web Development Company" />

                    <Box sx={{ pb: [10, 20] }}>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, backgroundColor: '#000212' }} data-aos="fade-up" data-aos-duration="1200">
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    color: '#fff',
                                }}
                            >
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '5px', textTransform: 'uppercase' }} data-aos="fade-right" data-aos-duration="1300">
                                    Stratus info
                                </Typography>
                                <Typography sx={{ fontWeight: 700, marginBottom: '15px', fontSize: { xs: '28px', md: '40px' }, textTransform: 'uppercase' }} data-aos="fade-right" data-aos-duration="1400">
                                    OUR APPROACH
                                </Typography>
                                <Typography sx={{ marginBottom: '30px', fontSize: { xs: '14px', md: '18px' }, lineHeight: 1.9 }} data-aos="fade-up" data-aos-duration="1500">
                                    Stratus is a well-known web development company in India that provides web development services across various industries.<br /><br />We provide the best quality services, practical ideas, creative designs, cost-effective and economical prices, time-bound & quick delivery.<br /><br />We have the expertise to design and develop an eye-catching website. We provide custom web development services tailored to your business needs.<br /> <br />We can develop websites for startups to large enterprises. Our team of expert web developers delivers proficient web solutions.<br /><br />We have delivered the best solutions to clients across multiple market sectors with proven outcomes. We use the latest and most advanced technologies.
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
                                    data-aos="fade-up" data-aos-duration="1600"
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
                                    mt: [5, 0]
                                }}
                            >
                                <Box
                                    component="img"
                                    sx={{
                                        width: ['80%', '80%'],
                                        objectFit: 'cover',
                                    }}
                                    alt="Team meeting"
                                    src="Assets/development.png"
                                    data-aos="zoom-in" data-aos-duration="1700"
                                />
                            </Box>
                        </Box>
                    </Box>
                    <TitleWithDescription title="Our Expertise" />
                    <Box>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, backgroundColor: '#000212' }} data-aos="fade-up" data-aos-duration="1800">
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
                                        width: ['80%', '70%'],
                                        objectFit: 'cover',
                                        pb: [5, 0]
                                    }}
                                    alt="Team meeting"
                                    src="Assets/Rectangle-7.png"
                                    data-aos="fade-right" data-aos-duration="1900"
                                />
                            </Box>
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    color: '#fff',
                                }}
                            >
                                <Typography
                                    sx={{
                                        marginBottom: '30px',
                                        fontSize: { xs: '14px', md: '18px' },
                                        lineHeight: 1.9
                                    }}
                                    data-aos="fade-left" data-aos-duration="2000"
                                >
                                    <span style={{ fontWeight: 'bold' }}>UX Designers:</span><br />
                                    At Stratus, our UX designers use a variety of research techniques to understand the target audience and design superior user experiences. Since 2019, we have been delivering professional UX services to enhance customer satisfaction and engagement.
                                    <br /><br />

                                    <span style={{ fontWeight: 'bold' }}>UI Designers:</span><br />
                                    Our UI designers transform UX recommendations into visually stunning and intuitive interface designs, ensuring a seamless and enjoyable experience for users.
                                    <br /><br />

                                    <span style={{ fontWeight: 'bold' }}>Back-end Developers:</span><br />
                                    We have a skilled team of back-end developers proficient in a range of technologies, including .Net, Java, Python, Node.js, PHP, and Go, ensuring robust and scalable server-side solutions.
                                    <br /><br />

                                    <span style={{ fontWeight: 'bold' }}>Front-end Developers:</span><br />
                                    Our front-end developers utilize modern JavaScript frameworks such as React, Meteor, Vue, Next, and Ember to create dynamic and responsive web applications that offer a smooth user experience.
                                    <br /><br />

                                    <span style={{ fontWeight: 'bold' }}>Web Architects:</span><br />
                                    With 4-5 years of experience, our web architects specialize in designing the structure and infrastructure of websites, ensuring they are built on solid foundations for performance and scalability.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Review />
            </Box>
            <Box>
                <Slider />
            </Box>
            <Footer />
        </>
    )
}

export default Service
