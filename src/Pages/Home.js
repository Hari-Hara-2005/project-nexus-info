import React from 'react';
import { Box, Typography, Avatar, Icon, Button, Card, CardContent, Link, Slider, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import DiamondIcon from '@mui/icons-material/Diamond';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import GoogleIcon from '@mui/icons-material/Google';
import SpeedIcon from '@mui/icons-material/Speed';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LockIcon from '@mui/icons-material/Lock';
import BuildIcon from '@mui/icons-material/Build';
import RocketIcon from '@mui/icons-material/Rocket';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from '../Components/Navbar';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { lineHeight, styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from '../Components/Footer';
import TitleWithDescription from '../Components/TitleWithDescription ';
import KeyIcon from '@mui/icons-material/Key';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import BiotechIcon from '@mui/icons-material/Biotech';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import MmsIcon from '@mui/icons-material/Mms';
import AddchartIcon from '@mui/icons-material/Addchart';
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


const cardData = [
    {
        icon: <KeyIcon />,
        title: 'Futuristic design',
        description: 'Crafted with innovation in mind, Stratus boasts a sleek and futuristic design that captivates your visitors from the moment they land on your site. Impress with stunning visuals and user-friendly layouts that scream modernity and sophistication. No coding knowledge required!',
        link: '#',
        borderColor: '#7DD666',
        linkColor: '#7DD666',
        gradientStyle: 'gradientBackground1',
    },
    {
        icon: <PersonAddAlt1Icon />,
        title: 'Advanced customization',
        description: 'Tailor your website to perfection with our easy-to-use customization tools. No coding knowledge required! With Stratus’s intuitive interface, you can effortlessly modify colors, fonts, layouts, and more, making your site truly unique and a reflection of your brand.',
        link: '#',
        borderColor: '#FFB489',
        linkColor: '#FFB489',
        gradientStyle: 'gradientBackground2',
    },
    {
        icon: <BiotechIcon />,
        title: 'Tech-centric features',
        description: 'Built for tech enthusiasts, by tech enthusiasts, Stratus comes equipped with an array of specialized features that set you apart from the competition. Showcase your products, services, or projects with interactive portfolios, attention-grabbing sliders, and dynamic elements that engage your audience like never before.',
        link: '#',
        borderColor: '#FF72DE',
        linkColor: '#FF72DE',
        gradientStyle: 'gradientBackground3',
    },
    {
        icon: <PhonelinkIcon />,
        title: 'Mobile-first design',
        description: 'With an increasing number of users browsing on mobile devices, it’s essential to offer a seamless experience on any screen size. Stratus’s mobile-first approach ensures your website looks stunning on smartphones, tablets, and desktops alike. Helping you reach your target audience.',
        link: '#',
        borderColor: '#00C2FF',
        linkColor: '#00C2FF',
        gradientStyle: 'gradientBackground4',
    },
];

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
    transition: 'border 0.3s ease-in-out',

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


const features = [
    {
        positive: 'Stratus boasts a sleek and futuristic design that captivates your visitors from the moment they land on your site.',
        negative: 'Basic, generic designs.',
    },
    {
        positive: 'Tailor your website to perfection with our easy-to-use customization tools.',
        negative: 'Limited customization.',
    },
    {
        positive: 'Built for tech enthusiasts, by tech enthusiasts, Stratus comes equipped with an array of specialized features that set you apart from the competition.',
        negative: 'Limited mobile optimization.',
    },
    {
        positive: 'Rest easy knowing that Stratus is fortified with robust security measures, ensuring your website and sensitive data are safe from malicious threats.',
        negative: 'No demo content provided.',
    },
    {
        positive: "Stratus's lightweight architecture and optimized code guarantee lightning-fast loading times, reducing bounce rates and keeping your audience glued to your content.",
        negative: 'Slower loading times.',
    },
];
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
    const icons = [
        { icon: <SpeedIcon sx={{ fontSize: 35 }} />, title: 'Fast setup' },
        { icon: <ViewComfyIcon sx={{ fontSize: 35 }} />, title: 'Drag & drop builder' },
        { icon: <SupportAgentIcon sx={{ fontSize: 35 }} />, title: 'Amazing support' },
        { icon: <SettingsInputAntennaIcon sx={{ fontSize: 35 }} />, title: 'Mobile ready' },
        { icon: <PhotoLibraryIcon sx={{ fontSize: 35 }} />, title: 'Great demos' },
        { icon: <PsychologyIcon sx={{ fontSize: 40 }} />, title: 'Innovative solutions' },
        { icon: <GoogleIcon sx={{ fontSize: 35 }} />, title: 'Google optimized' },
        { icon: <DiamondIcon sx={{ fontSize: 35 }} />, title: 'Pixel-perfect' },
    ];

    const feature = [
        { icon: <DiamondIcon />, title: 'Cutting edge design', description: 'Sleek and futuristic design that captivates your visitors.' },
        { icon: <LockIcon />, title: 'Fortified security', description: 'Rest easy knowing that Stratus is fortified with robust security measures.' },
        { icon: <BuildIcon />, title: 'Tech-centric features', description: 'Showcase your products, services, or projects with dynamic elements.' },
        { icon: <VisibilityOffIcon />, title: 'End-to-end encryption', description: 'Sensitive data are safe from malicious threats.' },
        { icon: <RocketIcon />, title: 'Blazing-fast performance', description: 'Lightweight architecture and optimized code.' },
        { icon: <SettingsIcon />, title: 'Advanced customization', description: 'Tailor your website with our easy-to-use customization tools.' },
        { icon: <PhotoLibraryIcon />, title: 'Photo gallery', description: 'Showcase your technology in a stunning custom portfolio.' },
        { icon: <SearchIcon />, title: 'Frictionless search', description: 'Easily recall and index pages and data.' },
    ];
    const reviews = [
        {
            id: 1,
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            name: '@jaredpeters23',
            role: 'Business Owner',
            review: 'Love this theme! Really nice designs and great quality overall. The customer support answered all my questions too 😁'
        },
        {
            id: 2,
            avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
            name: '@hfeldadna',
            role: 'Developer',
            review: 'Amazing template. Amazing support. Highly recommended 😁'
        },
        {
            id: 3,
            avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
            name: '@jeff275',
            role: 'Designer',
            review: 'Very nice template, very helpful support. Can\'t wait to get the new site launched. Thank you!'
        },
        {
            id: 4,
            avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
            name: '@Ninjapete',
            role: 'Creative',
            review: 'A highly adaptable theme and very responsive, timely and comprehensive support. Thanks guys.'
        },
        {
            id: 5,
            avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
            name: '@edzheimer',
            role: 'Developer',
            review: 'Complete theme easy to install, with lots of templates to import. Thank you for the quality of this theme. I am very happy.'
        },
        {
            id: 6,
            avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
            name: '@Mer1iNN',
            role: 'Customer',
            review: 'Awesome theme! Tons of customization, easy management, bunch of templates.'
        },
        {
            id: 7,
            avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
            name: '@sc-marketing',
            role: 'Graphic Designer',
            review: 'This theme is excellent in every manner of speaking. I’ve built a number of websites with it because it’s so easy to work with.'
        },
        {
            id: 8,
            avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
            name: '@Jasonmaar',
            role: 'Customer',
            review: 'Awesome! Webflow quality at wordpress convenience. Make sure you’re using managed hosting.'
        }
    ];

    const data = [
        {
            id: 1,
            icon: <DiamondIcon fontSize="large" />,
            title: 'Premium design',
            subtitle: 'Stunning visuals and user-friendly layouts',
            description:
                'Crafted with innovation in mind, Stratus boasts a sleek and futuristic design that captivates your visitors from the moment they land on your site. Impress with stunning visuals and user-friendly layouts that scream modernity and sophistication.',
            buttonLabel: 'Learn more',
            buttonColor: '#00C2FF',
            gradient: 'radial-gradient(at top left, #00C2FF40 0%, #000000 80%)',
            imageUrl: 'Assets/design-1.png',
        },
        {
            id: 2,
            icon: <MmsIcon fontSize="large" />,
            title: 'Premium quality images',
            subtitle: 'Includes a large selection of curated images',
            description:
                'A premium WordPress theme that transforms your website into a visual masterpiece. Immerse your audience in a captivating online experience with our exceptional collection of curated images. Elevate your content effortlessly with a vast selection of stunning visuals that resonate with your brand and message.',
            buttonLabel: 'Learn more',
            buttonColor: '#7DD666',
            gradient: ' radial-gradient(at top right, #7DD66640 0%, #000000 80%)',
            imageUrl: 'Assets/Photos-1.png',
        },
        {
            id: 3,
            icon: <AddchartIcon fontSize="large" />,
            title: 'Rapid build',
            subtitle: 'Pre-designed templates in seconds',
            description:
                'You can now access a stunning array of pre-designed templates that can be applied to your website in a matter of seconds. Choose from a rich collection of meticulously crafted templates, each designed to exude professionalism and captivate your audience’s attention.',
            buttonLabel: 'Learn more',
            buttonColor: '#FFB489',
            gradient: 'radial-gradient(at top left, #FFB48940 0%, #000000 80%)',
            imageUrl: 'Assets/Library-1.png',
        },
    ];
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
                            left: { xs: '50%', md: '50%' },
                            transform: 'translate(-50%, -50%)',
                            color: '#fff',
                            textAlign: 'center',
                            zIndex: 1,
                            width: { xs: '95%', sm: '70%', md: '60%' },
                        }}
                    >
                        <Typography
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
                                sx={{
                                    fontSize: { xs: '18px', sm: '20px', md: '24px' },
                                    width: { xs: '100%', sm: '85%', md: '70%' }
                                }}
                            >
                                The premium WordPress theme designed to elevate your online presence to unparalleled heights.
                            </Typography>
                        </Box>
                        <Button
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
                        >
                            Get Started
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', py: [8, 8, 10], px: 3 }}>
                        <Box
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
                            <Box sx={{ width: { xs: '100%', md: '70%' }, color: '#fff', textAlign: { xs: 'center', md: 'left' } }}>
                                <Typography sx={{ fontSize: { xs: '20px', md: '22px' }, fontWeight: 700, pb: 2 }}>
                                    What’s new in Stratus
                                </Typography>
                                <Typography>
                                    With Stratus's intuitive interface, you can effortlessly modify colors, fonts, layouts, and more, making your site truly unique and a reflection of your brand.
                                </Typography>
                            </Box>
                            <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
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

                    <Box sx={{ backgroundColor: '#000212', color: 'white', padding: '50px 20px', textAlign: 'center' }}>
                        <TitleWithDescription
                            title="Futuristic design"
                            description="Crafted with innovation in mind, Stratus boasts a sleek and futuristic design that captivates your visitors from the moment they land on your site. Impress with stunning visuals and user-friendly layouts that scream modernity and sophistication."
                        />
                        <Box sx={{ px: { xs: 1, sm: 5, md: 10, lg: 10, xl: 40 }, py: { xs: 5, sm: 10 } }}>
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}>
                                {feature.map((feature, index) => (
                                    <Box
                                        key={index}
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
                                            {feature.icon}
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
                                            {feature.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#C4C4C8', ml: 4 }}>
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ backgroundColor: '#0B1121', color: "white", textAlign: 'center' }}>
                        <svg
                            id="wave"
                            style={{ transform: 'rotate(180deg)', transition: '0.3s' }}
                            viewBox="0 0 1440 210"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                                    <stop stopColor="rgba(0, 2, 18, 1)" offset="0%"></stop>
                                    <stop stopColor="rgba(0, 2, 18, 1)" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <path
                                style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                                fill="url(#sw-gradient-0)"
                                d="M0,42L34.3,45.5C68.6,49,137,56,206,77C274.3,98,343,133,411,147C480,161,549,154,617,136.5C685.7,119,754,91,823,73.5C891.4,56,960,49,1029,63C1097.1,77,1166,112,1234,119C1302.9,126,1371,105,1440,98C1508.6,91,1577,98,1646,101.5C1714.3,105,1783,105,1851,105C1920,105,1989,105,2057,91C2125.7,77,2194,49,2263,42C2331.4,35,2400,49,2469,63C2537.1,77,2606,91,2674,105C2742.9,119,2811,133,2880,122.5C2948.6,112,3017,77,3086,80.5C3154.3,84,3223,126,3291,122.5C3360,119,3429,70,3497,63C3565.7,56,3634,91,3703,119C3771.4,147,3840,168,3909,164.5C3977.1,161,4046,133,4114,105C4182.9,77,4251,49,4320,35C4388.6,21,4457,21,4526,17.5C4594.3,14,4663,7,4731,7C4800,7,4869,14,4903,17.5L4937.1,21L4937.1,210L4902.9,210C4868.6,210,4800,210,4731,210C4662.9,210,4594,210,4526,210C4457.1,210,4389,210,4320,210C4251.4,210,4183,210,4114,210C4045.7,210,3977,210,3909,210C3840,210,3771,210,3703,210C3634.3,210,3566,210,3497,210C3428.6,210,3360,210,3291,210C3222.9,210,3154,210,3086,210C3017.1,210,2949,210,2880,210C2811.4,210,2743,210,2674,210C2605.7,210,2537,210,2469,210C2400,210,2331,210,2263,210C2194.3,210,2126,210,2057,210C1988.6,210,1920,210,1851,210C1782.9,210,1714,210,1646,210C1577.1,210,1509,210,1440,210C1371.4,210,1303,210,1234,210C1165.7,210,1097,210,1029,210C960,210,891,210,823,210C754.3,210,686,210,617,210C548.6,210,480,210,411,210C342.9,210,274,210,206,210C137.1,210,69,210,34,210L0,210Z"
                            ></path>
                        </svg>
                        <TitleWithDescription
                            title="Loved by product people"
                            description="Here’s what people are saying about us"
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '20px',
                                pb: [5, 10],
                                px: 3
                            }}
                        >
                            {reviews.map((review) => (
                                <Box
                                    key={review.id}
                                    sx={{
                                        background: 'linear-gradient(135deg, #12173D, #111638)',
                                        borderRadius: '15px',
                                        padding: '30px',
                                        width: { xs: '100%', sm: '45%', md: '30%' },
                                        textAlign: 'left',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        color: 'white',
                                        transition: 'border 0.3s ease-in-out',
                                        border: '3px solid #0B1121',
                                        '&:hover': {
                                            border: '3px solid #6249CE'
                                        },
                                    }}
                                >
                                    <Typography sx={{ fontSize: ['15px', '18px'], lineHeight: 1.7 }} mb={2}>
                                        {review.review}
                                    </Typography>
                                    <Box display="flex" alignItems="center">
                                        <Avatar src={review.avatar} alt={review.name} sx={{ width: 50, height: 50, marginRight: '10px' }} />
                                        <Box>
                                            <Typography sx={{ color: '#9F89FF', fontWeight: 'bold', fontSize: '18px' }}>
                                                {review.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#6249CE', fontSize: '16px', fontStyle: 'italic' }}>
                                                {review.role}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
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
                        >
                            <Box sx={{ width: { xs: '100%', sm: '70%' }, color: '#fff', textAlign: { xs: 'center', sm: 'left' } }}>
                                <Typography sx={{ fontSize: { xs: '18px', md: '22px' }, fontWeight: 700, pb: 2 }}>
                                    What’s new in Stratus
                                </Typography>
                                <Typography>
                                    With Stratus's intuitive interface, you can effortlessly modify colors, fonts, layouts, and more, making your site truly unique and a reflection of your brand.
                                </Typography>
                            </Box>
                            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                                <Button
                                    variant="contained"
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

                    <Box sx={{ backgroundColor: '#000212', padding: { xs: '20px 20px', sm: '40px 20px', md: '50px 20px' } }}>
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
                                        },
                                        flexDirection: { xs: 'column', sm: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                        my: { xs: 3, sm: 4, md: 5 },
                                    }}
                                >
                                    <Box sx={{ flex: 1 }}>
                                        <Box sx={{ display: 'flex', gap: 1.5, color: card.buttonColor, alignItems: 'center', py: [1, 3], marginBottom: '10px', }}>
                                            {card.icon}
                                            <Typography
                                                sx={{ color: card.buttonColor, fontWeight: 500, fontSize: { xs: '16px', md: '17px' } }}
                                            >
                                                {card.title}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            sx={{ color: 'white', fontWeight: 'bold', marginBottom: '20px', fontSize: { xs: '20px', md: '22px' } }}
                                        >
                                            {card.subtitle}
                                        </Typography>
                                        <Typography
                                            sx={{ color: '#CDD2D4', marginBottom: '20px', fontSize: { xs: '15px', md: '17px' }, lineHeight: '27px' }}
                                        >
                                            {card.description}
                                        </Typography>
                                        <Button
                                            sx={{ color: card.buttonColor, textTransform: 'none', fontSize: { xs: '16px', md: '17px' } }}
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
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: "center" }}>
                        <Divider
                            variant="middle"
                            component="li"
                            sx={{ borderColor: '#282828', width: '80%' }}
                        />
                    </Box>
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
                                                }}
                                            >
                                                <CardContent>
                                                    <Box sx={{ display: 'flex', gap: 1.5, color: card.linkColor }}>
                                                        {card.icon}
                                                        <Typography sx={{ ...useStyles.cardTitle, color: card.linkColor }}>
                                                            {card.title}
                                                        </Typography>
                                                    </Box>
                                                    <Typography sx={useStyles.cardText}>
                                                        {card.description}
                                                    </Typography>
                                                    <Link href={card.link} sx={{ ...useStyles.link, color: card.linkColor }}>
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
                                                }}
                                            >
                                                <CardContent>
                                                    <Box sx={{ display: 'flex', gap: 1.5, color: card.linkColor }}>
                                                        {card.icon}
                                                        <Typography sx={{ ...useStyles.cardTitle, color: card.linkColor }}>
                                                            {card.title}
                                                        </Typography>
                                                    </Box>
                                                    <Typography sx={useStyles.cardText}>
                                                        {card.description}
                                                    </Typography>
                                                    <Link href={card.link} sx={{ ...useStyles.link, color: card.linkColor }}>
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
                                {icons.map((feature) => (
                                    <StyledCard>
                                        <IconWrapper>{feature.icon}</IconWrapper>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 600 }} color="white">
                                            {feature.title}
                                        </Typography>
                                    </StyledCard>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: "center" }}>
                        <Divider
                            variant="middle"
                            component="li"
                            sx={{ borderColor: '#282828', width: '80%' }}
                        />
                    </Box>
                    <Box sx={{ py: [5, 10], px: 3 }}>
                        <TitleWithDescription
                            title="Global compatibility"
                            description="Stratus is translation-ready and fully compatible with popular plugins,ensuring your website can reach a global audience, breaking language barriers,and expanding your online reach."
                        />
                        <Container>
                            <Header>
                                <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>Stratus</Typography>
                                <Typography sx={{ fontWeight: 700, fontSize: '18px' }}>Competitors</Typography>
                            </Header>
                            {features.map((feature, index) => (
                                <>
                                    <Row key={index}>
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
                                        pb: 3
                                    }}
                                >
                                    Build a better website with Stratus
                                </Typography>
                                <Button
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
