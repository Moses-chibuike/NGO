import {
    Box,
    Container,
    createStyles,
    Grid,
    Paper,
    PaperProps,
    rem,
    Text,
    Title,
    Avatar,
    Group,
    Stack,
    Button,
    Overlay,
    BackgroundImage
} from "@mantine/core";
import {
    IconBrandLinkedin,
    IconBrandTwitter,
    IconMail
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
    root: {
        padding: 0,
    },

    heroSection: {
        height: '100vh',
        minHeight: rem(600),
        position: 'relative',
        backgroundImage: 'linear-gradient(rgba(88, 88, 88, 0.25), rgba(32, 32, 32, 0.03)), url("/assets/img/Alao.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        [theme.fn.smallerThan('md')]: {
            height: '100vh',
            minHeight: rem(500),
        },
        [theme.fn.smallerThan('sm')]: {
            height: '100vh',
            minHeight: rem(500),
            // Ensure proper background display on mobile
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll', // Better performance on mobile
        },
        // For very small screens
        [theme.fn.smallerThan('xs')]: {
            height: '100vh',
            minHeight: rem(450),
            backgroundPosition: 'center center',
        },
    },

    hashtagBadge: {
        position: 'absolute',
        top: rem(60),
        left: rem(60),
        width: rem(240),
        height: 'auto',
        display: 'block',
        [theme.fn.smallerThan('md')]: {
            top: rem(20),
            left: rem(20),
            width: rem(180),
        },
        [theme.fn.smallerThan('sm')]: {
            display: 'none', // Hide on mobile
        },
    },

    // New style for mobile hashtag badge inside the card
    hashtagBadgeMobile: {
        position: 'absolute',
        top: rem(10),
        left: rem(10),
        width: rem(80),
        height: 'auto',
        zIndex: 10,
        display: 'none', // Hidden by default
        [theme.fn.smallerThan('sm')]: {
            display: 'block', // Show only on mobile
        },
    },

    heroContent: {
        textAlign: 'center',
        width: '100%',
        maxWidth: rem(500),
        padding: rem(40),
        backgroundColor: 'rgba(255, 255, 255, 0.19)',
        borderRadius: rem(20),
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.38)',
        position: 'absolute',
        top: rem(100),
        right: rem(60),
        [theme.fn.smallerThan('lg')]: {
            position: 'relative',
            top: 'auto',
            right: 'auto',
            maxWidth: rem(450),
            padding: rem(30),
            margin: `0 ${rem(20)}`,
        },
        [theme.fn.smallerThan('md')]: {
            maxWidth: rem(400),
            padding: rem(25),
            margin: `0 ${rem(15)}`,
        },
        [theme.fn.smallerThan('sm')]: {
            maxWidth: '90%',
            padding: rem(20),
            margin: `0 ${rem(10)}`,
            position: 'relative', // Required for absolute positioning of children
            // Ensure the card is properly centered
            left: '50%',
            transform: 'translateX(-50%)',
        },
    },

    brandName: {
        fontSize: rem(40),
        fontWeight: 300,
        marginBottom: rem(8),
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        [theme.fn.smallerThan('md')]: {
            fontSize: rem(32),
        },
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(28),
        },
        '& span': {
            color: '#4CAF50',
        }
    },

    brandSubtitle: {
        fontSize: rem(26),
        fontStyle: 'italic',
        fontWeight: 300,
        marginBottom: rem(32),
        textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        [theme.fn.smallerThan('md')]: {
            fontSize: rem(22),
            marginBottom: rem(24),
        },
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(18),
            marginBottom: rem(16),
        },
    },

    brandLogo: {
        width: '100%',
        maxWidth: rem(350),
        height: 'auto',
        marginBottom: rem(0),
        filter: 'drop-shadow(2px 2px 4px rgba(202, 200, 200, 0.8))',
        [theme.fn.smallerThan('md')]: {
            maxWidth: rem(280),
        },
        [theme.fn.smallerThan('sm')]: {
            maxWidth: rem(220),
        },
    },

    heroTitle: {
        fontSize: rem(52),
        fontWeight: 700,
        marginBottom: rem(20),
        lineHeight: 1.1,
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        [theme.fn.smallerThan('md')]: {
            fontSize: rem(42),
            marginBottom: rem(16),
        },
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(32),
            marginBottom: rem(12),
            lineHeight: 1.2,
        },
        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
        },
    },

    heroTagline: {
        fontSize: rem(18),
        marginBottom: rem(40),
        opacity: 0.95,
        textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        [theme.fn.smallerThan('md')]: {
            fontSize: rem(16),
            marginBottom: rem(30),
        },
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(14),
            marginBottom: rem(24),
        },
    },

    startButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: `${rem(15)} ${rem(40)}`,
        fontSize: rem(18),
        height: rem(50),
        fontWeight: 600,
        borderRadius: rem(30),
        border: 'none',
        boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        [theme.fn.smallerThan('sm')]: {
            padding: `${rem(12)} ${rem(30)}`,
            fontSize: rem(16),
            height: rem(45),
        },
        '&:hover': {
            backgroundColor: '#45a049',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
        },
    },

    aboutSection: {
        padding: `${rem(80)} 0`,
        backgroundColor: 'white',
        [theme.fn.smallerThan('md')]: {
            padding: `${rem(60)} 0`,
        },
        [theme.fn.smallerThan('sm')]: {
            padding: `${rem(40)} 0`,
        },
    },

    aboutTitle: {
        fontSize: rem(64),
        fontWeight: 700,
        color: '#333',
        marginBottom: rem(40),
        [theme.fn.smallerThan('md')]: {
            fontSize: rem(48),
            marginBottom: rem(30),
            textAlign: 'center',
        },
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(36),
            marginBottom: rem(24),
        },
    },

    sectionHeading: {
        fontSize: rem(20),
        fontWeight: 600,
        color: '#333',
        marginBottom: rem(16),
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(18),
            marginBottom: rem(12),
        },
    },

    aboutText: {
        fontSize: rem(16),
        lineHeight: 1.7,
        color: '#666',
        marginBottom: rem(24),
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(14),
            marginBottom: rem(20),
            textAlign: 'left',
        },
    },

    highlightText: {
        color: '#4CAF50',
        fontWeight: 600,
    },

    missionSection: {
        backgroundColor: '#1a1a1a',
        padding: `${rem(80)} 0`,
        color: 'white',
        [theme.fn.smallerThan('md')]: {
            padding: `${rem(60)} 0`,
        },
        [theme.fn.smallerThan('sm')]: {
            padding: `${rem(40)} 0`,
        },
    },

    missionTitle: {
        fontSize: rem(48),
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: rem(80),
        color: 'white',
        [theme.fn.smallerThan('md')]: {
            fontSize: rem(36),
            marginBottom: rem(50),
        },
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(28),
            marginBottom: rem(40),
        },
    },

    missionCard: {
        marginBottom: rem(40),
        [theme.fn.smallerThan('sm')]: {
            marginBottom: rem(30),
        },
    },

    missionHeading: {
        fontSize: rem(24),
        fontWeight: 600,
        color: '#4CAF50',
        marginBottom: rem(20),
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(20),
            marginBottom: rem(16),
        },
    },

    missionText: {
        fontSize: rem(16),
        lineHeight: 1.7,
        color: '#ccc',
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(14),
        },
    },

    storySection: {
        padding: `${rem(80)} 0`,
        backgroundColor: 'white',
        [theme.fn.smallerThan('md')]: {
            padding: `${rem(60)} 0`,
        },
        [theme.fn.smallerThan('sm')]: {
            padding: `${rem(40)} 0`,
        },
    },

    storyTitle: {
        fontSize: rem(64),
        fontWeight: 700,
        color: '#333',
        marginBottom: rem(40),
        textAlign: 'center',
        [theme.fn.smallerThan('md')]: {
            fontSize: rem(48),
            marginBottom: rem(30),
            textAlign: 'left',
        },
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(36),
            marginBottom: rem(24),
            textAlign: 'center',
        },
    },

    founderCard: {
        position: 'relative',
        borderRadius: rem(16),
        overflow: 'hidden',
        height: rem(500),
        [theme.fn.smallerThan('md')]: {
            height: rem(400),
            marginBottom: rem(30),
        },
        [theme.fn.smallerThan('sm')]: {
            height: rem(350),
            marginBottom: rem(20),
        },
    },

    founderImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    founderBadge: {
        position: 'absolute',
        bottom: rem(18),
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: rem(14.4),
        borderRadius: rem(7.2),
        backdropFilter: 'blur(10px)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.fn.smallerThan('sm')]: {
            bottom: rem(12),
            padding: rem(10),
        },
    },

    founderName: {
        fontSize: rem(14.4),
        fontWeight: 600,
        marginBottom: rem(3.6),
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(12),
            marginBottom: rem(2),
        },
    },

    founderRole: {
        fontSize: rem(12.6),
        opacity: 0.8,
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(10),
        },
    },

    storyText: {
        fontSize: rem(16),
        lineHeight: 1.8,
        color: '#666',
        textAlign: 'justify',
        marginBottom: rem(24),
        paddingLeft: rem(16),
        paddingRight: rem(16),
        [theme.fn.smallerThan('md')]: {
            paddingLeft: 0,
            paddingRight: 0,
            textAlign: 'left',
        },
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(14),
            marginBottom: rem(20),
        },
    },

    storyTextUnderImage: {
        fontSize: rem(16),
        lineHeight: 1.8,
        color: '#666',
        textAlign: 'justify',
        marginBottom: rem(24),
        marginTop: rem(32),
        paddingLeft: rem(16),
        paddingRight: rem(16),
        [theme.fn.smallerThan('md')]: {
            paddingLeft: 0,
            paddingRight: 0,
            marginTop: rem(20),
            textAlign: 'left',
        },
        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(14),
            marginBottom: rem(20),
            marginTop: rem(16),
        },
    },

    bridgeSection: {
        height: rem(300),
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/assets/img/10.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        [theme.fn.smallerThan('sm')]: {
            height: rem(200),
        },
    },

    activateWindows: {
        position: 'fixed',
        bottom: rem(20),
        right: rem(20),
        color: 'rgba(255,255,255,0.6)',
        fontSize: rem(12),
        zIndex: 1000,
        [theme.fn.smallerThan('sm')]: {
            bottom: rem(10),
            right: rem(10),
            fontSize: rem(10),
        },
    },

    // Mobile-specific grid adjustments
    mobileStackedGrid: {
        [theme.fn.smallerThan('md')]: {
            '& > *': {
                marginBottom: rem(30),
            },
        },
    },
}));

const AshbayPage = () => {
    const { classes } = useStyles();

    const paperProps: PaperProps = {
        p: "md",
        shadow: "sm"
    }

    const handleStartNowClick = () => {
        window.open('https://calendly.com/oluseyialao24/30min?month', '_blank');
    };

    return (
        <>
            <Box className={classes.root}>
                {/* Hero Section */}
                <Box className={classes.heroSection}>
                    {/* Show hashtag badge outside card for desktop/tablet */}
                    <Box className={classes.hashtagBadge}>
                        <img 
                            src="/assets/img/explain.png" 
                            alt="AlaoMe to explain"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>
                    
                    <Container size="xl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Box className={classes.heroContent}>
                            {/* Show hashtag badge inside card for mobile only */}
                            <Box className={classes.hashtagBadgeMobile}>
                                <img 
                                    src="/assets/img/explain.png" 
                                    alt="AlaoMe to explain"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Box>
                            
                            <img 
                                src="/assets/img/11.png" 
                                alt="AlaoMe Transformation"
                                className={classes.brandLogo}
                            />
                            <Title className={classes.heroTitle}>
                                Transforming<br />
                                Lives, Differently
                            </Title>
                            <Text className={classes.heroTagline}>
                                Ready when you are.
                            </Text>
                            <Button 
                                className={classes.startButton}
                                onClick={handleStartNowClick}
                            >
                                Start Now
                            </Button>
                        </Box>
                    </Container>
                </Box>

                {/* About Section */}
                <Box className={classes.aboutSection}>
                    <Container size="xl">
                        <Grid className={classes.mobileStackedGrid}>
                            <Grid.Col md={4} sm={12}>
                                <Title className={classes.aboutTitle}>About Us</Title>
                            </Grid.Col>
                            <Grid.Col md={4} sm={12}>
                                <Box>
                                    <Text className={classes.sectionHeading}>What Sets Us Apart</Text>
                                    <Text className={classes.aboutText}>
                                        At <span className={classes.highlightText}>AlaoMe</span> Transformation, we stand out by 
                                        redefining the way personal and professional 
                                        growth is approached. Our commitment to 
                                        Transforming Lives, Differently means we go 
                                        beyond conventional methods to facilitate deep, 
                                        meaningful change. We believe that true 
                                        transformation isn't just about improvement—it's 
                                        about reimagining what's possible and aligning 
                                        every step with a higher purpose. Our unique 
                                        approach combines personalized mentorship 
                                        with innovative strategies, ensuring that each 
                                        journey is tailored to the individual's unique 
                                        needs and aspirations.
                                    </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={4} sm={12}>
                                <Text className={classes.aboutText}>
                                    What truly sets us apart is our holistic focus on 
                                    growth that empowers our clients to break free 
                                    from limitations and unlock their full potential. We 
                                    guide individuals through challenges with a blend 
                                    of wisdom, creativity, and purpose-driven 
                                    strategies, helping them not only achieve their 
                                    goals but also create success stories that reflect 
                                    their deepest calling.
                                </Text>
                                <Text className={classes.aboutText}>
                                    At <span className={classes.highlightText}>AlaoMe</span> Transformation, we are not just 
                                    mentors, we are partners in your journey, 
                                    dedicated to fostering lasting change that leaves 
                                    an enduring impact for His glory.
                                </Text>
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Box>

                {/* Mission Section */}
                <Box className={classes.missionSection}>
                    <Container size="xl">
                        <Title className={classes.missionTitle}>
                            Transforming Lives, Differently
                        </Title>
                        
                        <Grid className={classes.mobileStackedGrid}>
                            <Grid.Col md={4} sm={12}>
                                <Box className={classes.missionCard}>
                                    <Text className={classes.missionHeading}>Our Mission Statement</Text>
                                    <Text className={classes.missionText}>
                                        Our mission is to ignite profound personal and professional growth by guiding individuals through a transformative 
                                        journey. At <span className={classes.highlightText}>AlaoMe</span> Transformation, we empower people to overcome challenges, reach their fullest potential, and 
                                        create success stories that reflect a higher purpose.
                                    </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={4} sm={12}>
                                <Box className={classes.missionCard}>
                                    <Text className={classes.missionHeading}>Our Vision Statement</Text>
                                    <Text className={classes.missionText}>
                                        We envision a world where transformation goes beyond improvement—it's a reimagining of what's possible. At 
                                        <span className={classes.highlightText}> AlaoMe</span> Transformation, we inspire individuals to break free from limitations, embrace their unique paths, and lead 
                                        with purpose. Our vision is to be the guiding light for those who seek to make a difference by doing things differently, 
                                        leaving a lasting impact for His glory.
                                    </Text>
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={4} sm={12}>
                                <Box className={classes.missionCard}>
                                    <Text className={classes.missionHeading}>Our Purpose Statement</Text>
                                    <Text className={classes.missionText}>
                                        Our purpose is to be a catalyst for extraordinary change. At <span className={classes.highlightText}>AlaoMe</span> Transformation, we encourage people to shift their 
                                        mindsets, unlock their true potential, and lead impactful lives. Through personalized mentorship and innovative 
                                        strategies, we help individuals transform their careers and lives, turning their stories into testimonies of purpose and 
                                        excellence.
                                    </Text>
                                </Box>
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Box>

                {/* My Story Section */}
                <Box className={classes.storySection}>
                    <Container size="xl">
                        <Grid className={classes.mobileStackedGrid}>
                            <Grid.Col md={6} sm={12} orderSm={2} orderMd={1}>
                                <Box className={classes.founderCard}>
                                    <img 
                                        src="/assets/img/8.png" 
                                        alt="Oluseyi Ifeanyichukwu Alao" 
                                        className={classes.founderImage}
                                    />
                                    <Box className={classes.founderBadge}>
                                        <Text className={classes.founderName}>Oluseyi IfeanyiChukwu Alao</Text>
                                        <Text className={classes.founderRole}>Founder / CEO</Text>
                                    </Box>
                                </Box>
                                
                                {/* Title moved here - right after the image */}
                                <Title className={classes.storyTitle} style={{ textAlign: 'center', marginTop: '2rem' }}>My Story</Title>
                                
                                <Text className={classes.storyTextUnderImage}>
                                    Oluseyi IfeanyiChukwu Alao's journey began with a bold leap—a solo 
                                    migration to New York City eight years ago. Raised by his grandparents after losing both parents at a young age, Oluseyi 
                                    had already learned the weight of responsibility, but nothing could prepare him for the immense 
                                    challenges of adjusting to life in a new country. 
                                </Text>
                            </Grid.Col>
                            <Grid.Col md={6} sm={12} orderSm={1} orderMd={2}>
                                <Text className={classes.storyText}>
                                    Between juggling long hours at multiple jobs, 
                                    finishing business school, and providing financial support for his son, grandmother, and 
                                    extended family back home, his resilience was constantly tested.
                                    Oluseyi took his life lessons and began sharing them, creating transformative content centered 
                                    around personal growth, self-love, relationships, and spirituality. In less than a year, his social 
                                    media following grew from 900 to 5,000, and what started as sharing his story became a 
                                    thriving mentorship and coaching practice.
                                </Text>
                                <Text className={classes.storyText}>
                                    The turning point came with a profound personal loss—the mysterious death of his best friend, 
                                    his beloved grandmother and one of his Aunts who raised him. Struggling with depression and 
                                    numbing the pain with alcohol, Oluseyi realized he needed a transformation. He made a 
                                    courageous decision: he quit his two dead-end jobs, went back to school full-time, and began 
                                    focusing on personal growth. This shift didn't just change his life—it became the foundation 
                                    of his future success.
                                </Text>
                                <Text className={classes.storyText}>
                                    Today, Oluseyi is the Founder and CEO of <span className={classes.highlightText}>AlaoMe</span> Transformation, a program that reaches 
                                    individuals in over 60 countries. His AlaoMe Self-Love Course and AlaoMe Transformation 
                                    Program is transforming lives on a daily basis. More than just a businessman, Oluseyi is a 
                                    visionary leader, renowned for his authenticity, empathy, and the ability to ignite 
                                    transformation in others. His followers often describe him as the "next generation of 
                                    leadership," and his story of perseverance, transformation, and triumph is nothing short 
                                    of inspirational.
                                </Text>
                                <Text className={classes.storyText}>
                                    Through his <span className={classes.highlightText}>AlaoMe</span> Transformation Program, Oluseyi continues to transform lives, now 
                                    with the support of the woman he loves and more time to spend with his son, living proof 
                                    that no matter where you start, you can always create a life of purpose, fulfillment, and legacy.
                                </Text>
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Box>

                {/* Bridge Section */}
                <Box className={classes.bridgeSection}>
                    <Overlay opacity={0.3} color="#000" />
                </Box>
            </Box>
        </>
    );
};

export default AshbayPage;