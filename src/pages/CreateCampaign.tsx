import {Helmet} from "react-helmet";
import {
    Box,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PaperProps,
    Stack,
    TextInput,
    Textarea,
    Title,
    TitleProps,
    useMantineTheme
} from "@mantine/core";
import React from 'react';
import {
    IconChevronRight,
} from "@tabler/icons-react";

const CreateCampaignPage = () => {
    const theme = useMantineTheme();

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

    return (
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <Box>
                <Container my={36}>
                    <Title mb="xl" align="center">Contact Us</Title>
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

                    <Group position="center" mt="xl">
                        <Button onClick={() => {}} leftIcon={<IconChevronRight size={18}/>}>
                            Send Message
                        </Button>
                    </Group>
                </Container>
            </Box>
        </>
    );
};

export default CreateCampaignPage;