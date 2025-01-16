import { Helmet } from "react-helmet";
import {
    AspectRatio,
    Box,
    BoxProps,
    Button,
    Card,
    CardProps,
    Container,
    Divider,
    Group,
    Image,
    ImageProps,
    List,
    ListProps,
    SimpleGrid,
    Stack,
    Text,
    Title,
    TitleProps,
    TextInput,
    Select,
    Textarea
} from "@mantine/core";
import { useState } from "react";
import AddImg from "../assets/img/add-campaign.png";
import MoneyImg from "../assets/img/money-income.png";
import ShareImg from "../assets/img/share-campaign.png";
import TestimonialsSection from "../sections/Home/Testimonials";
import { Link } from "react-router-dom";

const HowItWorksPage = (): JSX.Element => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        country: '',
        amount: '',
        paymentMethod: '',
        comments: ''
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formElement = e.target as HTMLFormElement;
        
        try {
            const response = await fetch('https://formspree.io/f/xgvvpzvk', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: new FormData(formElement)
            });

            if (response.ok) {
                setFormSubmitted(true);
            } else {
                alert('There was an error submitting the form. Please try again.');
            }
        } catch (error) {
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const boxProps: BoxProps = {
        mt: 96,
        mb: 136,
        py: 48
    };

    const titleProps: TitleProps = {
        size: 32,
        weight: 800,
        mb: "xl",
        transform: 'capitalize',
        sx: { lineHeight: '40px' }
    };

    const listProps: Omit<ListProps, 'children'> = {
        size: "sm",
        withPadding: true
    };

    const cardProps: Omit<CardProps, 'children'> = {
        radius: "sm",
        shadow: "md",
        padding: "lg",
        sx: {
            backdropFilter: `blur(16px) saturate(180%)`,
            backgroundColor: `rgba(255, 255, 255, 0.75)`,
            border: `none`,
        }
    };

    const imageProps: ImageProps = {
        height: 160,
        fit: "contain",
        py: "xl"
    };

    return (
        <>
            <Helmet>
                <title>How it works</title>
            </Helmet>
            <Box>
                <Container>
                    {/* Payment Information Cards */}
                    <Box mt={48} mb={64}>
                        <Title order={2} align="center" mb={24} sx={(theme) => ({
                            fontSize: 28,
                            fontWeight: 700,
                            color: theme.black
                        })}>
                            Payment Information
                        </Title>

                        <Text align="center" size="sm" mb={70} sx={{ maxWidth: '800px', margin: '0 auto' }}>
                            Please make a transfer to any of these account numbers. No amount is too big or small. 
                            God blesses a cheerful giver, kindly fill the donation confirmation after making a transfer.
                        </Text>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem',
                            width: '100%',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}>
                            

                            <Card
                                radius="md"
                                shadow="sm"
                                p="xl"
                                sx={{
                                    backgroundColor: 'white',
                                    height: '100%',
                                    border: '1px solid #e9ecef'
                                }}
                            >
                                <Title order={3} size={20} mb={24} weight={600} color="dark">
                                    Bank Account Details
                                </Title>
                                <Stack spacing="lg">
                                    <Group position="apart">
                                        <Text color="dimmed" size="sm">Bank Name</Text>
                                        <Text weight={500}>First Bank of Nigeria</Text>
                                    </Group>
                                    <Divider />
                                    <Group position="apart">
                                        <Text color="dimmed" size="sm">Name</Text>
                                        <Text weight={500}>Alao Oluseyi Joseph</Text>
                                    </Group>
                                    <Divider />
                                    <Group position="apart">
                                        <Text color="dimmed" size="sm">Account Number</Text>
                                        <Text weight={500}>3083465203</Text>
                                    </Group>
                                </Stack>
                            </Card>
                        </div>

                        {/* Enhanced Donation Form */}
                        <Box mt={48}>
                            {!formSubmitted ? (
                                <Card radius="md" shadow="sm" p="xl" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                                    <Title order={3} size={20} mb={24} weight={600} color="dark">
                                        Donation Confirmation Form
                                    </Title>
                                    <form onSubmit={handleSubmit}>
                                        <Stack spacing="lg">
                                            <SimpleGrid cols={2} spacing="lg" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                                                <TextInput
                                                    required
                                                    name="fullName"
                                                    label="Full Name"
                                                    placeholder="Enter your full name"
                                                    value={formData.fullName}
                                                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                                                />
                                                <TextInput
                                                    required
                                                    name="email"
                                                    label="Email Address"
                                                    placeholder="Enter your email address"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                                />
                                                <Select
                                                    required
                                                    name="country"
                                                    label="Country/Region"
                                                    placeholder="Select your country"
                                                    value={formData.country}
                                                    onChange={(value) => handleInputChange('country', value || '')}
                                                    data={[
                                                        { value: 'nigeria', label: 'Nigeria' },
                                                        { value: 'usa', label: 'United States' },
                                                        { value: 'uk', label: 'United Kingdom' },
                                                        { value: 'canada', label: 'Canada' },
                                                        { value: 'other', label: 'Other' }
                                                    ]}
                                                />
                                                <TextInput
                                                    required
                                                    name="amount"
                                                    label="Amount Donated"
                                                    placeholder="Enter amount"
                                                    type="number"
                                                    min={0}
                                                    value={formData.amount}
                                                    onChange={(e) => handleInputChange('amount', e.target.value)}
                                                />
                                            </SimpleGrid>
                                            <Select
                                                required
                                                name="paymentMethod"
                                                label="Payment Method"
                                                placeholder="Select payment method"
                                                value={formData.paymentMethod}
                                                onChange={(value) => handleInputChange('paymentMethod', value || '')}
                                                data={[
                                                    { value: 'bank_transfer', label: 'Bank Transfer' },
                                                    { value: 'wire_transfer', label: 'Wire Transfer' }
                                                ]}
                                            />
                                            <Textarea
                                                name="comments"
                                                label="Additional Comments"
                                                placeholder="Any additional information you'd like to share"
                                                minRows={3}
                                                value={formData.comments}
                                                onChange={(e) => handleInputChange('comments', e.target.value)}
                                            />
                                            <Button 
                                                type="submit"
                                                size="md" 
                                                loading={isSubmitting}
                                                sx={{ maxWidth: '200px', marginLeft: 'auto', marginRight: 'auto' }}
                                            >
                                                {isSubmitting ? 'Sending...' : 'Confirm Donation'}
                                            </Button>
                                        </Stack>
                                    </form>
                                </Card>
                            ) : (
                                <Card radius="md" shadow="sm" p="xl" sx={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                                    <Text size="xl" weight={600} color="green" mb="md">
                                        Thank you for your donation!
                                    </Text>
                                    <Text size="md">
                                        Your generosity helps us continue our mission of supporting those in need. 
                                        May your kindness be richly rewarded.
                                    </Text>
                                </Card>
                            )}
                        </Box>
                    </Box>

                    <AspectRatio ratio={1904 / 768} mx="auto">
                        <iframe
                            width="600"
                            height="400"
                            src="https://www.youtube.com/embed/ut8___4PI2A"
                            title="Baby Shark Dance + More Songs | Compilation for Kids | Pinkfong Baby Shark"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen />
                    </AspectRatio>

                    <TestimonialsSection boxProps={boxProps} titleProps={titleProps} />

                    <Box {...boxProps}>
                        <SimpleGrid
                            cols={2}
                            breakpoints={[
                                { maxWidth: 'sm', cols: 1, spacing: 0 },
                            ]}
                        >
                            <Card
                                shadow="md"
                                radius="sm"
                                component={Link}
                                to="/campaigns"
                            >
                                <Card.Section>
                                    <Image
                                        src="https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                                </Card.Section>
                                <Stack spacing="sm" align="start" mt="md">
                                    <Text size="lg" fw={500}>Discover amazing fundraising campaigns</Text>
                                    <Button size="md" component={Link} to="/campaigns">Fund Someone</Button>
                                </Stack>
                            </Card>
                            <Card
                                shadow="md"
                                radius="sm"
                                component={Link}
                                to="/create-campaign"
                            >
                                <Card.Section>
                                    <Image
                                        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                                </Card.Section>
                                <Stack spacing="sm" align="start" mt="md">
                                    <Text size="lg" fw={500}>Create your campaign</Text>
                                    <Button size="md">Start Fundraising</Button>
                                </Stack>
                            </Card>
                        </SimpleGrid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default HowItWorksPage;