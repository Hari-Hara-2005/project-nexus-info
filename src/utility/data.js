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
import KeyIcon from '@mui/icons-material/Key';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import BiotechIcon from '@mui/icons-material/Biotech';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import MmsIcon from '@mui/icons-material/Mms';
import AddchartIcon from '@mui/icons-material/Addchart';
export const data = [
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

export const icons = [
    { icon: <SpeedIcon sx={{ fontSize: 35 }} />, title: 'Fast setup' },
    { icon: <ViewComfyIcon sx={{ fontSize: 35 }} />, title: 'Drag & drop builder' },
    { icon: <SupportAgentIcon sx={{ fontSize: 35 }} />, title: 'Amazing support' },
    { icon: <SettingsInputAntennaIcon sx={{ fontSize: 35 }} />, title: 'Mobile ready' },
    { icon: <PhotoLibraryIcon sx={{ fontSize: 35 }} />, title: 'Great demos' },
    { icon: <PsychologyIcon sx={{ fontSize: 40 }} />, title: 'Innovative solutions' },
    { icon: <GoogleIcon sx={{ fontSize: 35 }} />, title: 'Google optimized' },
    { icon: <DiamondIcon sx={{ fontSize: 35 }} />, title: 'Pixel-perfect' },
];

export const feature = [
    { icon: <DiamondIcon />, title: 'Cutting edge design', description: 'Sleek and futuristic design that captivates your visitors.' },
    { icon: <LockIcon />, title: 'Fortified security', description: 'Rest easy knowing that Stratus is fortified with robust security measures.' },
    { icon: <BuildIcon />, title: 'Tech-centric features', description: 'Showcase your products, services, or projects with dynamic elements.' },
    { icon: <VisibilityOffIcon />, title: 'End-to-end encryption', description: 'Sensitive data are safe from malicious threats.' },
    { icon: <RocketIcon />, title: 'Blazing-fast performance', description: 'Lightweight architecture and optimized code.' },
    { icon: <SettingsIcon />, title: 'Advanced customization', description: 'Tailor your website with our easy-to-use customization tools.' },
    { icon: <PhotoLibraryIcon />, title: 'Photo gallery', description: 'Showcase your technology in a stunning custom portfolio.' },
    { icon: <SearchIcon />, title: 'Frictionless search', description: 'Easily recall and index pages and data.' },
];


export const features = [
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


export const cardData = [
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

export const values = [
    {
        title: 'Authenticity',
        description: 'Aliquam mollis quam sed mattis sodales. Morbi accumsan posuere iaculis. Donec a scelerisque magna.',
        icon: '💎',
    },
    {
        title: 'Togetherness',
        description: 'Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent pulvinar congue risus, in tristique.',
        icon: '🤝',
    },
    {
        title: 'Gratitude',
        description: 'Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu.',
        icon: '🏆',
    },
    {
        title: 'Transparency',
        description: 'Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent pulvinar congue risus, in tristique.',
        icon: '📊',
    },
    {
        title: 'Inspiration',
        description: 'Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu.',
        icon: '⛵',
    },
    {
        title: 'Service',
        description: 'Aliquam mollis quam sed mattis sodales. Morbi accumsan posuere iaculis. Donec a scelerisque magna.',
        icon: '📞',
    },
];

