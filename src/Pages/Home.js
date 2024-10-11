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
        title: '🚀 Futuristic design',
        description: 'Crafted with innovation in mind, Stratus boasts a sleek and futuristic design that captivates your visitors from the moment they land on your site. Impress with stunning visuals and user-friendly layouts that scream modernity and sophistication. No coding knowledge required!',
        link: '#',
        borderColor: '#7DD666',
        linkColor: '#7DD666',
        gradientStyle: 'gradientBackground1',
    },
    {
        title: '🛠️ Advanced customization',
        description: 'Tailor your website to perfection with our easy-to-use customization tools. No coding knowledge required! With Stratus’s intuitive interface, you can effortlessly modify colors, fonts, layouts, and more, making your site truly unique and a reflection of your brand.',
        link: '#',
        borderColor: '#FFB489',
        linkColor: '#FFB489',
        gradientStyle: 'gradientBackground2',
    },
    {
        title: '💡 Tech-centric features',
        description: 'Built for tech enthusiasts, by tech enthusiasts, Stratus comes equipped with an array of specialized features that set you apart from the competition. Showcase your products, services, or projects with interactive portfolios, attention-grabbing sliders, and dynamic elements that engage your audience like never before.',
        link: '#',
        borderColor: '#FF72DE',
        linkColor: '#FF72DE',
        gradientStyle: 'gradientBackground3',
    },
    {
        title: '📱 Mobile-first design',
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
            title: '💎 Premium design',
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
            title: '🖼️ Premium quality images',
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
            title: '🖼️ Rapid build',
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
                            width: { xs: '90%', sm: '70%', md: '60%' },
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
                                width: { xs: '100%', sm: '80%', md: '900px' },
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
                        <Box sx={{ px: { xs: 1, sm: 20, md: 40 }, py: { xs: 5, sm: 10 } }}>
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}>
                                {feature.map((feature, index) => (
                                    <Box key={index} sx={{
                                        width: { xs: '100%', sm: '50%', md: '25%' },
                                        borderLeft: '1px solid #333',
                                        borderBottom: {
                                            xs: (index < 7) ? '1px solid #333' : 'none',
                                            sm: (index < 4) ? '1px solid #333' : 'none'
                                        },
                                        padding: ['25px 0px', '30px 0px'],
                                        boxSizing: 'border-box',
                                        textAlign: 'start'
                                    }}>
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

                    <Box sx={{ backgroundColor: '#0B1121', color: "white", padding: '50px 20px', textAlign: 'center' }}>
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
                                        <Typography
                                            sx={{ color: card.buttonColor, fontWeight: 500, marginBottom: '10px', fontSize: { xs: '16px', md: '17px' }, py: [1, 3] }}
                                        >
                                            {card.title}
                                        </Typography>
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
                    <Box sx={{ backgroundColor: '#000212', color: 'white', py: 10 }}>
                        <TitleWithDescription
                            title="Your ultimate tech powerhouse!"
                            description="Unlock the true potential of your tech-focused website with Stratus – the cutting-edge premium WordPress theme designed to elevate your online presence to unparalleled heights."
                        />
                        <Box sx={useStyles.container}>
                            <Box sx={{ px: { xs: 0.5, sm: 8, md: 20, lg: 37 } }}>
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
                                                    <Typography sx={{ ...useStyles.cardTitle, color: card.linkColor }}>
                                                        {card.title}
                                                    </Typography>
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
                                                    <Typography sx={{ ...useStyles.cardTitle, color: card.linkColor }}>
                                                        {card.title}
                                                    </Typography>
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
                            <Typography variant="h4" color="white" gutterBottom>
                                Unlike any theme you’ve used before
                            </Typography>
                            <Typography variant="body1" color="#AAAAAA">
                                Designed to the last pixel and engineered with unforgiving precision,
                                Stratus combines UI elegance with world-class performance.
                            </Typography>
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
                    <Box sx={{ py: 10, px: 3 }}>
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
                    </Box>
                    <Footer />
                </Box>
            </ThemeProvider>
        </>
    );
}

export default Home;
