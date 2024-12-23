import {Helmet} from "react-helmet";
import {
    ActionIcon,
    Alert,
    Anchor,
    Box,
    Button,
    Checkbox,
    Container,
    Flex,
    Group,
    NumberInput,
    Paper,
    PaperProps,
    Radio,
    SegmentedControl,
    Select,
    SimpleGrid,
    Stack,
    Stepper,
    Text,
    TextInput,
    Textarea,
    Title,
    TitleProps,
    useMantineTheme
} from "@mantine/core";
import React, { useState } from 'react';
import {
    IconChevronLeft,
    IconChevronRight,
    IconCheck
} from "@tabler/icons-react";

const CreateCampaignPage = () => {
    const theme = useMantineTheme();
    const [active, setActive] = useState(0);

    const titleProps: TitleProps = {
        size: 24,
        mb: "md"
    }

    const paperProps: PaperProps = {
        p: "md",
        withBorder: false,
        shadow: 'sm',
        mb: "md",
        sx: {backgroundColor: theme.white}
    }

    const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <Box>
                <Container my={36}>
                    <Title mb="xl" align="center">Contact Us</Title>
                    <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                        <Stepper.Step>
                            <Paper {...paperProps}>
                                <Stack spacing="lg">
                                    <TextInput
                                        label="Full Name"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                    
                                    <TextInput
                                        label="Email"
                                        placeholder="your.email@example.com"
                                        required
                                        type="email"
                                    />
                                    
                                    <TextInput
                                        label="Subject"
                                        placeholder="How can we help you?"
                                        required
                                    />
                                    
                                    <Textarea
                                        label="Message"
                                        placeholder="Type your message here..."
                                        minRows={4}
                                        required
                                    />
                                </Stack>
                            </Paper>

                            <Paper {...paperProps}>
                                <Stack spacing="sm">
                                    <Checkbox
                                        label="I agree to be contacted about my inquiry"
                                    />
                                </Stack>
                            </Paper>
                        </Stepper.Step>
                        
                        <Stepper.Completed>
                            <Title {...titleProps} align="center" my="xl">
                                Thank you for your message. We'll get back to you soon!
                            </Title>
                        </Stepper.Completed>
                    </Stepper>

                    <Group position="center" mt="xl">
                        <Button
                            variant="default"
                            onClick={prevStep}
                            leftIcon={<IconChevronLeft size={18}/>}
                        >
                            Back
                        </Button>
                        {active < 4 ?
                            <Button onClick={nextStep} leftIcon={<IconChevronRight size={18}/>}>
                                {active === 0 ? 'Send Message' : 'Next step'}
                            </Button> :
                            <Button component="a" href="/dashboard" leftIcon={<IconCheck size={18}/>}>
                                Return Home
                            </Button>
                        }
                    </Group>
                </Container>
            </Box>
        </>
    );
};

export default CreateCampaignPage;