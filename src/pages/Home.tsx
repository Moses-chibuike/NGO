import HeroSection from "../sections/Home/Hero";
import {Box, BoxProps, Container, Text, TextProps, Title, TitleProps} from "@mantine/core";
import {TitleBadge} from "../components";
import FeaturesSection from "../sections/Home/Features";
import StatsSection from "../sections/Home/Stats";
import JoinUsSection from "../sections/Home/JoinUs";
import WaysToFundSection from "../sections/Home/WaysToFund";
import CampaignsSection from "../sections/Home/Campaigns";
import GetStartedSection from "../sections/Home/GetStarted";
import TestimonialsSection from "../sections/Home/Testimonials";
import {Helmet} from "react-helmet";

const HomePage = (): JSX.Element => {
    const boxProps: BoxProps = {
        mt: 96,
        mb: 136,
        py: 48
    }

    const titleProps: TitleProps = {
        size: 32,
        weight: 800,
        mb: "lg",
        transform: 'capitalize',
        sx: {lineHeight: '40px'}
    }

    const subTitleProps: TextProps = {
        size: 20,
        weight: 700,
        mb: "md",
        sx: {lineHeight: '28px'}
    }

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Box>
                <HeroSection/>
                <Container>
                    <Box {...boxProps}>
                        <TitleBadge title="About us"/>
                        <Title {...titleProps}>We are an independent NGO</Title>
                        <Text
  {...subTitleProps}
  style={{ color: '#6c757d' }} // Mid-gray color from the Bootstrap palette or use Mantine gray scale
>
  Welcome to AlaoMeHelp, an independent NGO dedicated to bringing hope and support to some of the most vulnerable members of our society. Founded on the principles of compassion and solidarity, we strive to create a brighter future for those in need by bridging the gap between generosity and the lives it transforms.

  At AlaoMeHelp, we focus our efforts on supporting widows, empowering them to rebuild their lives through tailored assistance and opportunities. We provide care and resources to orphans, ensuring they thrive and have access to a nurturing environment. Our support extends to single mothers, offering relief as they navigate the challenges of raising children independently. We are also committed to promoting education by assisting school children with the resources they need to succeed academically.

  We believe that everyone deserves a chance to rise above life's challenges, and our mission is to make that possible. By gathering funds from the general public, we ensure transparency and direct impact, channeling your contributions to where they matter most. Join us in making a difference—together, we can transform lives and build stronger, more resilient communities.
</Text>       </Box>
                    <FeaturesSection boxProps={boxProps} subtitleProps={subTitleProps}/>
                    <StatsSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps}/>
                    <JoinUsSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps}/>
                </Container>
                <WaysToFundSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps}/>
                <Container>
                    <TestimonialsSection boxProps={boxProps} titleProps={titleProps}/>
                    <CampaignsSection boxProps={boxProps} titleProps={titleProps} subtitleProps={subTitleProps}/>
                    <GetStartedSection boxProps={boxProps} titleProps={titleProps}/>
                </Container>
            </Box>
        </>
    );
};

export default HomePage;
