import React, { useEffect } from 'react';
import { Box, Typography, Icon, Button, Card, CardContent, Link, Divider } from '@mui/material';
import Navbar from '../Components/Navbar';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from '../Components/Footer';
import TitleWithDescription from '../Components/TitleWithDescription ';
import Review from '../Components/Review';
import { feature, cardData, icons, features, data } from '../utility/data'
const useStyles = {
    container: {
        padding: '50px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        color: 'white',
        fontSize: '36px',
        marginBottom: '20px',
        textAlign: 'center',
        '@media (max-width: 600px)': {
            fontSize: '28px',
        },
    },
    subheading: {
        color: '#AAA',
        fontSize: '16px',
        marginBottom: '40px',
        textAlign: 'center',
        '@media (max-width: 600px)': {
            fontSize: '14px',
        },
    },
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '20px',
        flexWrap: 'wrap',
    },
    card: {
        borderRadius: '20px',
        border: '3px solid',
        minWidth: '250px',
        maxWidth: '100%',
        height: 'auto',
        padding: '25px',
        flex: '1 1 calc(25% - 20px)',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 0px 103px -25px rgba(125,125,125,1)',
        },
        '@media (max-width: 1200px)': {
            flex: '1 1 calc(33% - 20px)',
        },
        '@media (max-width: 900px)': {
            flex: '1 1 calc(48% - 20px)',
        },
        '@media (max-width: 600px)': {
            flex: '1 1 100%',
            padding: '12px',
        },
    },
    cardTitle: {
        fontWeight: 800,
        fontSize: '18px',
        marginBottom: '25px',
        '@media (max-width: 1200px)': {
            fontSize: '16px',
        },
        '@media (max-width: 900px)': {
            fontSize: '15px',
        },
        '@media (max-width: 600px)': {
            fontSize: '17px',
            marginBottom: '10px',
        },
    },
    cardText: {
        color: '#fff',
        fontSize: '17px',
        lineHeight: 1.7,
        marginBottom: '20px',
        '@media (max-width: 1200px)': {
            fontSize: '16px',
        },
        '@media (max-width: 900px)': {
            fontSize: '15px',
        },
        '@media (max-width: 600px)': {
            fontSize: '16px',
            lineHeight: 1.5
        },
    },
    link: {
        marginTop: '20px',
        fontWeight: 'bold',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    gradientBackground1: {
        background: 'radial-gradient(at top left, #7DD66640 0%, #000000 80%)',
    },
    gradientBackground2: {
        background: 'radial-gradient(at top left, #FFB48940 0%, #000000 80%)',
    },
    gradientBackground3: {
        background: 'radial-gradient(at top left, #FF72DE40 0%, #000000 80%)',
    },
    gradientBackground4: {
        background: 'radial-gradient(at top left, #00C2FF40 0%, #000000 80%)',
    },
};
const StyledCard = styled(Card)(({ theme }) => ({
    background: 'radial-gradient(at center left, #0F1642 0%, #1E244D61 100%)',
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
    padding: '25px',
    width: '205px',
    height: '125px',
    boxShadow: 'none',
    borderRadius: '20px',
    transition: 'transform 0.3s ease',
    border: '3px solid #1E244D61',

    '&:hover': {
        transform: 'scale(1.05)',
        border: '3px solid #6249CE',
    },
    [theme.breakpoints.down('lg')]: {
        width: '180px',
        height: '115px',
        padding: '20px',
    },
    [theme.breakpoints.down('md')]: {
        width: '160px',
        height: '105px',
        padding: '15px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '45%',
        height: '105px',
        padding: '10px',
    },
}));
const Container = styled(Box)(({ theme }) => ({
    backgroundColor: '#0F1642',
    borderRadius: '15px',
    padding: '2rem',
    color: 'white',
    maxWidth: '930px',
    height: '825px',
    margin: 'auto',
    border: '2px solid #6249CE',
    [theme.breakpoints.down('md')]: {
        maxWidth: '700px',
        height: 'auto',
        padding: '1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        padding: '1rem',
        height: 'auto',
    },
}));
const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    fontSize: '1.5rem',
    fontWeight: 600,
    borderBottom: '1px solid #6249CE',
});
const Row = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.4rem 0',
    position: 'relative',
});
const Column = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '45%',

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
}));
const VerticalDivider = styled(Box)(({ theme }) => ({
    width: '2px',
    height: '10rem',
    backgroundColor: '#6249CE',
    position: 'absolute',
    left: '50%',

    [theme.breakpoints.down('sm')]: {
        height: '18rem',
    },
}));
const PlusIcon = styled(AddIcon)({
    color: '#0FD5BE',
    marginRight: '10px',
});
const MinusIcon = styled(RemoveIcon)({
    color: '#22A8A7',
    marginRight: '10px',
});
const DividerWithSpace = styled(Divider)({
    backgroundColor: '#6249CE',
    margin: '0 0 1rem 0',
});
const IconWrapper = styled(Box)(({ theme }) => ({
    marginBottom: 5,
    fontWeight: 900,
}));
function Home() {
    const theme = createTheme({
        typography: {
            fontFamily: `'Source Sans 3', sans-serif`,
        },
    });
    useEffect(() => {
        document.title = "Home";
    }, []);

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <>
            <video autoPlay muted loop id="myVideo">
                <source src="Assets/bg-video.mp4" type="video/mp4" />
            </video>
            <ThemeProvider theme={theme}>
                <Box sx={{ backgroundColor: '#000212' }}>
                    <Navbar color="#fff" />
                    {/* Home Section*/}
                    <Box id='#Home'
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: { xs: '50%', md: '50%' },
                            transform: 'translate(-50%, -50%)',
                            color: '#fff',
                            textAlign: 'center',
                            zIndex: 1,
                            width: { xs: '95%', sm: '70%', md: '50%' },
                        }}
                    >
                        <Typography
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            sx={{
                                fontWeight: 600,
                                fontSize: { xs: '45px', sm: '50px', md: '80px' },
                                lineHeight: { xs: '50px', sm: '50px', md: '80px' },
                                pb: 3
                            }}
                        >
                            Stratus is a better way to build websites
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', pb: 5 }}>
                            <Typography
                                data-aos="zoom-in"
                                data-aos-duration="1200"
                                data-aos-delay="300"
                                sx={{
                                    fontSize: { xs: '18px', sm: '20px', md: '24px' },
                                    width: { xs: '100%', sm: '85%', md: '70%' }
                                }}
                            >
                                The premium WordPress theme designed to elevate your online presence to unparalleled heights.
                            </Typography>
                        </Box>
                        <Button
                            data-aos="zoom-in-up" data-aos-duration="2000"
                            variant="contained"
                            href='#Compare'
                            onClick={(e) => handleClick(e, 'Compare')}
                            endIcon={
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: { xs: '3rem', md: '5rem' },
                                        fontWeight: 600
                                    }}
                                >
                                    <ChevronRightIcon />
                                </Box>
                            }
                            sx={{
                                background: 'linear-gradient(45deg, #6249C0, #6249C0)',
                                color: '#fff',
                                padding: { xs: '8px 20px', md: '10px 25px' },
                                borderRadius: '50px',
                                textTransform: 'none',
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                transition: '0.3s',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #6249C0, #9174CA)',
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>
                    {/* Home Section*/}
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: [8, 8, 10], px: 3 }}>
                        <Box
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            sx={{
                                width: { xs: '100%', sm: '90%', md: '900px' },
                                height: 'auto',
                                bgcolor: '#000212',
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: { xs: 5, md: 10 },
                                p: [4, 5],
                                border: '3px solid #6249C0',
                                borderRadius: '20px',
                                alignItems: 'center',
                                zIndex: 1,
                                transition: 'box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    boxShadow: '0px 0px 103px -25px rgba(125,125,125,1)',
                                },
                            }}
                        >
                            <Box
                                data-aos="fade-right"
                                data-aos-duration="1200"
                                data-aos-delay="300"
                                sx={{ width: { xs: '100%', md: '70%' }, color: '#fff', textAlign: { xs: 'center', md: 'left' } }}
                            >
                                <Typography sx={{ fontSize: { xs: '20px', md: '22px' }, fontWeight: 700, pb: 2 }}>
                                    What’s new in Stratus
                                </Typography>
                                <Typography>
                                    With Stratus's intuitive interface, you can effortlessly modify colors, fonts, layouts, and more, making your site truly unique and a reflection of your brand.
                                </Typography>
                            </Box>
                            <Box
                                data-aos="fade-left"
                                data-aos-duration="1200"
                                data-aos-delay="400"
                                sx={{ textAlign: { xs: 'center', md: 'right' } }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={(e) => handleClick(e, 'Futuristic')}
                                    href='#Futuristic'
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
                    {/* Futuristic design Section*/}
                    <Box id='Futuristic' sx={{ backgroundColor: '#000212', color: 'white', padding: '50px 20px', textAlign: 'center' }}>
                        <TitleWithDescription
                            title="Futuristic design"
                            description="Crafted with innovation in mind, Stratus boasts a sleek and futuristic design that captivates your visitors from the moment they land on your site. Impress with stunning visuals and user-friendly layouts that scream modernity and sophistication."
                        />
                        <Box sx={{ px: { xs: 1, sm: 5, md: 10, lg: 10, xl: 40 }, py: { xs: 5, sm: 10 } }}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                {feature.map((featureItem, index) => (
                                    <Box
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        data-aos-delay={index * 100}
                                        sx={{
                                            width: { xs: '100%', sm: '50%', md: '25%' },
                                            borderLeft: '1px solid #333',
                                            borderBottom: {
                                                xs: index < 7 ? '1px solid #333' : 'none',
                                                sm: index < 4 ? '1px solid #333' : 'none',
                                            },
                                            padding: ['25px 0px', '30px 0px'],
                                            boxSizing: 'border-box',
                                            textAlign: 'start',
                                            transition: 'background 0.3s ease',
                                            '&:hover': {
                                                background: 'linear-gradient(270deg, #FFFFFF00 0%, #0F1642 100%)',
                                            },
                                        }}
                                    >
                                        <Icon sx={{ color: '#fff', mb: 2, ml: 3 }}>
                                            {featureItem.icon}
                                        </Icon>
                                        <Typography
                                            sx={{
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                marginBottom: '10px',
                                                borderLeft: '5px solid #7A4DFF',
                                                paddingLeft: '25px',
                                                color: '#fff'
                                            }}
                                        >
                                            {featureItem.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#C4C4C8', ml: 4 }}>
                                            {featureItem.description}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    {/* People Review Section*/}
                    <Box>
                        <Review />
                    </Box>
                    {/* design Section*/}
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: { xs: 5, sm: 8, md: 10 }, px: 3 }}>
                        <Box
                            sx={{
                                width: { xs: '100%', sm: '90%', md: '900px' },
                                height: { xs: 'auto', md: '180px' },
                                bgcolor: '#000212',
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: { xs: 3, md: 10 },
                                p: { xs: 3, sm: 4, md: 5 },
                                border: '3px solid #6249C0',
                                borderRadius: '20px',
                                alignItems: 'center',
                                zIndex: 1,
                                transition: 'box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    boxShadow: '0px 0px 103px -25px rgba(125,125,125,1)',
                                },
                            }}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <Box
                                sx={{
                                    width: { xs: '100%', sm: '70%' },
                                    color: '#fff',
                                    textAlign: { xs: 'center', sm: 'left' },
                                }}
                                data-aos="zoom-in"
                                data-aos-duration="800"
                                data-aos-delay="300"
                            >
                                <Typography sx={{ fontSize: { xs: '18px', md: '22px' }, fontWeight: 700, pb: 2 }}>
                                    What’s new in Stratus
                                </Typography>
                                <Typography>
                                    With Stratus's intuitive interface, you can effortlessly modify colors, fonts, layouts, and more, making your site truly unique and a reflection of your brand.
                                </Typography>
                            </Box>
                            <Box
                                sx={{ textAlign: { xs: 'center', sm: 'left' } }}
                                data-aos="fade-down"
                                data-aos-duration="800"
                                data-aos-delay="400"
                            >
                                <Button
                                    variant="contained"
                                    onClick={(e) => handleClick(e, 'Work')}
                                    href='#Work'
                                    sx={{
                                        background: 'linear-gradient(45deg, #6249C0, #9174CA)',
                                        color: '#fff',
                                        padding: { xs: '8px 20px', sm: '8px 30px' },
                                        borderRadius: '50px',
                                        textTransform: 'none',
                                        fontSize: { xs: '0.9rem', sm: '1rem' },
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
                    {/* Work  Section*/}
                    <Box id='Work' sx={{ backgroundColor: '#000212', padding: { xs: '20px 20px', sm: '40px 20px', md: '50px 20px' } }}>
                        <TitleWithDescription
                            title="Laser focused on WordPress"
                            description="Unleash the full potential of your tech-oriented website with Stratus!"
                        />
                        {data.map((card, index) => (
                            <Box key={card.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: card.gradient,
                                        padding: { xs: '30px', sm: '40px', md: '50px' },
                                        gap: { xs: 3, md: 5 },
                                        borderRadius: '10px',
                                        border: `3px solid ${card.buttonColor}`,
                                        marginBottom: { xs: '20px', sm: '30px', md: '40px' },
                                        width: { xs: '100%', sm: '90%', md: '1270px' },
                                        height: { xs: 'auto', md: '380px' },
                                        textAlign: 'start',
                                        transition: 'box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            boxShadow: '0px 0px 103px -25px rgba(125,125,125,1)',
                                            transform: 'scale(1.02)',
                                        },
                                        flexDirection: { xs: 'column', sm: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                        my: { xs: 3, sm: 4, md: 5 },
                                    }}
                                    data-aos={index % 2 === 0 ? 'fade-up' : 'zoom-in'}
                                    data-aos-duration="800"
                                    data-aos-delay={index * 100 + 300}
                                >
                                    <Box sx={{ flex: 1 }}>
                                        <Box sx={{ display: 'flex', gap: 1.5, color: card.buttonColor, alignItems: 'center', py: [1, 3], marginBottom: '10px', }}>
                                            {card.icon}
                                            <Typography
                                                sx={{
                                                    color: card.buttonColor,
                                                    fontWeight: 500,
                                                    fontSize: { xs: '16px', md: '17px' },
                                                }}
                                                data-aos="fade-right"
                                                data-aos-duration="800"
                                                data-aos-delay={index * 100 + 400}
                                            >
                                                {card.title}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            sx={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                                marginBottom: '20px',
                                                fontSize: { xs: '20px', md: '22px' },
                                                transition: 'transform 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.03)',
                                                }
                                            }}
                                            data-aos="fade-up"
                                            data-aos-duration="800"
                                            data-aos-delay={index * 100 + 500}
                                        >
                                            {card.subtitle}
                                        </Typography>
                                        <Typography
                                            sx={{ color: '#CDD2D4', marginBottom: '20px', fontSize: { xs: '15px', md: '17px' }, lineHeight: '27px' }}
                                        >
                                            {card.description}
                                        </Typography>

                                        <Button
                                            href='/about'
                                            sx={{
                                                color: card.buttonColor,
                                                textTransform: 'none',
                                                fontSize: { xs: '16px', md: '17px' },
                                                marginBottom: '10px',
                                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                },
                                            }}
                                            data-aos="fade-left"
                                            data-aos-duration="800"
                                            data-aos-delay={index * 100 + 600}
                                        >
                                            {card.buttonLabel}
                                        </Button>
                                    </Box>

                                    <Box sx={{ flex: 1 }}>
                                        <img
                                            src={card.imageUrl}
                                            alt="Stunning visuals"
                                            style={{ width: '100%', borderRadius: '10px' }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    {/*Divider*/}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: "center", my: 4 }}>
                        <Divider
                            variant="middle"
                            component="li"
                            sx={{
                                borderColor: '#282828',
                                width: '80%',
                                position: 'relative',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scaleY(1.1)',
                                },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '30%',
                                    height: '2px',
                                    backgroundColor: '#FFD700',
                                    top: '50%',
                                    left: '0',
                                    transform: 'translateY(-50%)',
                                    transition: 'width 0.3s ease',
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '30%',
                                    height: '2px',
                                    backgroundColor: '#FFD700',
                                    top: '50%',
                                    right: '0',
                                    transform: 'translateY(-50%)',
                                    transition: 'width 0.3s ease',
                                },
                                '&:hover::before, &:hover::after': {
                                    width: '40%',
                                },
                            }}
                        />
                    </Box>
                    {/* Features Section*/}
                    <Box sx={{ backgroundColor: '#000212', color: 'white', py: [5, 10] }}>
                        <TitleWithDescription
                            title="Your ultimate tech powerhouse!"
                            description="Unlock the true potential of your tech-focused website with Stratus – the cutting-edge premium WordPress theme designed to elevate your online presence to unparalleled heights."
                        />
                        <Box sx={useStyles.container}>
                            <Box sx={{ px: { xs: 0.5, sm: 3, md: 20, lg: 10, xl: 37 } }}>
                                <Box sx={useStyles.cardsContainer}>
                                    <Box sx={useStyles.row}>
                                        {cardData.slice(0, 2).map((card, index) => (
                                            <Card
                                                key={index}
                                                sx={{
                                                    ...useStyles.card,
                                                    borderColor: card.borderColor,
                                                    ...(useStyles[card.gradientStyle]),
                                                    position: 'relative',
                                                }}
                                                data-aos={index % 2 === 0 ? 'flip-left' : 'flip-left'}
                                                data-aos-delay={`${(index + 1) * 200}`}
                                                data-aos-duration="800"
                                            >
                                                <CardContent>
                                                    <Box
                                                        sx={{ display: 'flex', gap: 1.5, color: card.linkColor }}
                                                        data-aos="fade-up"
                                                        data-aos-delay="300"
                                                        data-aos-duration="800"
                                                    >
                                                        {card.icon}
                                                        <Typography sx={{ ...useStyles.cardTitle, color: card.linkColor }}>
                                                            {card.title}
                                                        </Typography>
                                                    </Box>
                                                    <Typography
                                                        sx={useStyles.cardText}
                                                        data-aos="fade-up"
                                                        data-aos-delay="400"
                                                        data-aos-duration="800"
                                                    >
                                                        {card.description}
                                                    </Typography>
                                                    <Link
                                                        href={'/service'}
                                                        sx={{ ...useStyles.link, color: card.linkColor }}
                                                        data-aos="fade-up"
                                                        data-aos-delay="500"
                                                        data-aos-duration="800"
                                                        style={{ textDecoration: 'none' }}
                                                    >
                                                        Learn more
                                                    </Link>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </Box>
                                    <Box sx={useStyles.row}>
                                        {cardData.slice(2, 4).map((card, index) => (
                                            <Card
                                                key={index}
                                                sx={{
                                                    ...useStyles.card,
                                                    borderColor: card.borderColor,
                                                    ...(useStyles[card.gradientStyle]),
                                                    position: 'relative',
                                                }}
                                                data-aos={index % 2 === 0 ? 'flip-left' : 'flip-left'}
                                                data-aos-delay={`${(index + 1) * 200}`}
                                                data-aos-duration="800"
                                            >
                                                <CardContent>
                                                    <Box
                                                        sx={{ display: 'flex', gap: 1.5, color: card.linkColor }}
                                                        data-aos="fade-up"
                                                        data-aos-delay="300"
                                                        data-aos-duration="800"
                                                    >
                                                        {card.icon}
                                                        <Typography sx={{ ...useStyles.cardTitle, color: card.linkColor }}>
                                                            {card.title}
                                                        </Typography>
                                                    </Box>
                                                    <Typography
                                                        sx={useStyles.cardText}
                                                        data-aos="fade-up"
                                                        data-aos-delay="400"
                                                        data-aos-duration="800"
                                                    >
                                                        {card.description}
                                                    </Typography>
                                                    <Link
                                                        href={'/service'}
                                                        sx={{ ...useStyles.link, color: card.linkColor }}
                                                        data-aos="fade-up"
                                                        data-aos-delay="500"
                                                        data-aos-duration="800"
                                                        style={{ textDecoration: 'none' }}
                                                    >
                                                        Learn more
                                                    </Link>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* Technology used Section*/}
                    <Box sx={{ backgroundColor: '#000212', padding: '50px 20px' }}>
                        <Box textAlign="center" mb={5}>
                            <TitleWithDescription
                                title="Unlike any theme you’ve used before"
                                description="Unlock the true potential of your tech-focused website with Stratus – the cutting-edge premium WordPress theme designed to elevate your online presence to unparalleled heights."
                            />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', py: [5, 10] }}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexWrap="wrap"
                                gap="1.5rem"
                                maxWidth="900px">
                                {icons.map((feature, index) => (
                                    <StyledCard
                                        key={feature.title}
                                        data-aos="zoom-in"
                                        data-aos-delay={`${index * 100}`}
                                        data-aos-duration="600"
                                        sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                                    >
                                        <IconWrapper
                                            data-aos="fade-up"
                                            data-aos-duration="600"
                                            data-aos-delay={`${(index + 1) * 100}`}
                                        >
                                            {feature.icon}
                                        </IconWrapper>
                                        <Typography
                                            data-aos="fade-up"
                                            data-aos-duration="600"
                                            data-aos-delay={`${(index + 1) * 100}`}
                                            sx={{ fontSize: '16px', fontWeight: 600, color: 'white' }}
                                        >
                                            {feature.title}
                                        </Typography>
                                    </StyledCard>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    {/*Divider*/}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: "center", my: 4 }}>
                        <Divider
                            variant="middle"
                            component="li"
                            sx={{
                                borderColor: '#282828',
                                width: '80%',
                                position: 'relative',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scaleY(1.1)',
                                },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '30%',
                                    height: '2px',
                                    backgroundColor: '#FFD700',
                                    top: '50%',
                                    left: '0',
                                    transform: 'translateY(-50%)',
                                    transition: 'width 0.3s ease',
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '30%',
                                    height: '2px',
                                    backgroundColor: '#FFD700',
                                    top: '50%',
                                    right: '0',
                                    transform: 'translateY(-50%)',
                                    transition: 'width 0.3s ease',
                                },
                                '&:hover::before, &:hover::after': {
                                    width: '40%',
                                },
                            }}
                        />
                    </Box>
                    {/* Compare Section*/}
                    <Box id='Compare' sx={{ py: [5, 10], px: 3 }}>
                        <TitleWithDescription
                            title="Global compatibility"
                            description="Stratus is translation-ready and fully compatible with popular plugins, ensuring your website can reach a global audience, breaking language barriers, and expanding your online reach."
                        />
                        <Container>
                            <Header>
                                <Typography sx={{ fontWeight: 700, fontSize: '18px' }} data-aos="fade-right">Stratus</Typography>
                                <Typography sx={{ fontWeight: 700, fontSize: '18px' }} data-aos="fade-left">Competitors</Typography>
                            </Header>
                            {features.map((feature, index) => (
                                <>
                                    <Row key={index} data-aos="fade-up">
                                        <Column>
                                            <PlusIcon />
                                            <Typography sx={{ fontSize: ['14.5px', '17px'], fontWeight: 300, lineHeight: 1.6 }}>{feature.positive}</Typography>
                                        </Column>
                                        <VerticalDivider />
                                        <Column>
                                            <MinusIcon />
                                            <Typography sx={{ fontSize: ['14.5px', '17px'], fontWeight: 300, lineHeight: 1.6 }}>{feature.negative}</Typography>
                                        </Column>
                                    </Row>
                                    {index !== features.length - 1 && <DividerWithSpace />}
                                </>
                            ))}
                        </Container>
                        <Box sx={{ display: 'flex', justifyContent: 'center', py: [10, 10, 10, 10, 20], backgroundColor: '#020213' }}>
                            <Box
                                sx={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    width: { xs: '90%', sm: '70%', md: '40%' },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: { xs: '45px', sm: '50px', md: '70px' },
                                        lineHeight: { xs: '50px', sm: '50px', md: '80px' },
                                        pb: 3,
                                    }}
                                    data-aos="zoom-in"
                                >
                                    Build a better website with Stratus
                                </Typography>
                                <Button
                                    href='/contactus'
                                    variant="contained"
                                    endIcon={
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: { xs: '3rem', md: '5rem' },
                                                fontWeight: 600
                                            }}
                                        >
                                            <ChevronRightIcon />
                                        </Box>
                                    }
                                    sx={{
                                        background: 'linear-gradient(45deg, #6249C0, #6249C0)',
                                        color: '#fff',
                                        padding: { xs: '8px 20px', md: '10px 25px' },
                                        borderRadius: '50px',
                                        textTransform: 'none',
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        transition: '0.3s',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #6249C0, #9174CA)',
                                        },
                                    }}
                                    data-aos="fade-up"
                                >
                                    Get Started
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Divider
                        sx={{ borderColor: '#282828' }}
                    />
                    <Footer />
                </Box>
            </ThemeProvider>
        </>
    );
}

export default Home;
