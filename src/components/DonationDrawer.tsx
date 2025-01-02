import {useState} from 'react';
import {
    Card,
    Container,
    Drawer,
    DrawerProps,
    Stack,
    Title,
    Text,
    Image,
    Group,
    Divider,
    Button,
    TextInput,
    Select,
    Textarea,
    Box
} from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';

interface ICampaign {
    title?: string;
    mainImage?: string;
}

interface IProps extends Pick<DrawerProps, 'opened' | 'onClose' | 'size'> {
    campaign?: ICampaign;
}

const DonationDrawer = ({campaign, ...others}: IProps) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Drawer
            position="bottom"
            size="100%"
            {...others}
        >
            <Container 
                sx={{ 
                    backgroundColor: '#f0fff4',
                    minHeight: '100vh',
                    padding: isMobile ? '1rem' : '2rem',
                    maxWidth: '100%'
                }}
            >
                <Stack spacing={isMobile ? "md" : "xl"}>
                    {/* Header Section */}
                    <Group 
                        position="center" 
                        align="center" 
                        sx={{ 
                            width: '100%',
                            flexDirection: isMobile ? 'column' : 'row'
                        }}
                    >
                        <Image 
                            src={campaign?.mainImage} 
                            height={isMobile ? 80 : 96} 
                            width={isMobile ? 100 : 120} 
                            fit="contain" 
                            radius="sm"
                        />
                        <Text align={isMobile ? "center" : "left"} size={isMobile ? "sm" : "md"}>
                            You're supporting <b>{campaign?.title}</b>
                        </Text>
                    </Group>

                    <Text 
                        align="center" 
                        size={isMobile ? "xs" : "sm"} 
                        mb={isMobile ? 20 : 30}
                    >
                        Please make a transfer to any of these account numbers. No amount is too big or small. 
                        God blesses a cheerful giver, kindly fill the donation confirmation after making a transfer.
                    </Text>

                    {/* Account Cards Section */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: isMobile 
                            ? '1fr' 
                            : 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: isMobile ? '1rem' : '2rem',
                    }}>
                        {/* Nigerian Account Card */}
                        <Card shadow="sm" p={isMobile ? "md" : "xl"} radius="md">
                            <Title order={3} size={isMobile ? 18 : 20} mb={isMobile ? 16 : 24} weight={600}>
                                Nigerian Account
                            </Title>
                            <Stack spacing={isMobile ? "md" : "lg"}>
                                <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                    <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Bank Name</Text>
                                    <Text weight={500} size={isMobile ? "sm" : "md"}>First Bank of Nigeria</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                    <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Account Name</Text>
                                    <Text weight={500} size={isMobile ? "sm" : "md"}>AlaoMeHelp Foundation</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                    <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Account Number</Text>
                                    <Text weight={500} size={isMobile ? "sm" : "md"}>1234567890</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                    <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Account Type</Text>
                                    <Text weight={500} size={isMobile ? "sm" : "md"}>Current Account</Text>
                                </Group>
                            </Stack>
                        </Card>

                        {/* International Account Card */}
                        <Card shadow="sm" p={isMobile ? "md" : "xl"} radius="md">
                            <Title order={3} size={isMobile ? 18 : 20} mb={isMobile ? 16 : 24} weight={600}>
                                International Account
                            </Title>
                            <Stack spacing={isMobile ? "md" : "lg"}>
                                <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                    <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Bank Name</Text>
                                    <Text weight={500} size={isMobile ? "sm" : "md"}>Chase Bank</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                    <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Account Name</Text>
                                    <Text weight={500} size={isMobile ? "sm" : "md"}>AlaoMeHelp International</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                    <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Account Number</Text>
                                    <Text weight={500} size={isMobile ? "sm" : "md"}>987654321</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                    <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Swift Code</Text>
                                    <Text weight={500} size={isMobile ? "sm" : "md"}>CHASUS33</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" spacing={isMobile ? "xs" : "md"}>
                                    <Text color="dimmed" size={isMobile ? "xs" : "sm"}>Routing Number</Text>
                                    <Text weight={500} size={isMobile ? "sm" : "md"}>021000021</Text>
                                </Group>
                            </Stack>
                        </Card>
                    </Box>

                    {/* Donation Form Section */}
                    {!formSubmitted ? (
                        <Card shadow="sm" p={isMobile ? "md" : "xl"} radius="md" mt={isMobile ? 24 : 48}>
                            <Title order={3} size={isMobile ? 18 : 20} mb={isMobile ? 16 : 24} weight={600}>
                                Donation Confirmation Form
                            </Title>
                            <Stack spacing={isMobile ? "md" : "lg"}>
                                <Stack spacing={isMobile ? "xs" : "md"}>
                                    <TextInput
                                        required
                                        label="Full Name"
                                        placeholder="Enter your full name"
                                        size={isMobile ? "sm" : "md"}
                                    />
                                    <TextInput
                                        required
                                        label="Email Address"
                                        placeholder="Enter your email address"
                                        type="email"
                                        size={isMobile ? "sm" : "md"}
                                    />
                                </Stack>
                                <Stack spacing={isMobile ? "xs" : "md"}>
                                    <Select
                                        required
                                        label="Country/Region"
                                        placeholder="Select your country"
                                        data={[
                                            { value: 'nigeria', label: 'Nigeria' },
                                            { value: 'usa', label: 'United States' },
                                            { value: 'uk', label: 'United Kingdom' },
                                            { value: 'other', label: 'Other' }
                                        ]}
                                        size={isMobile ? "sm" : "md"}
                                    />
                                    <TextInput
                                        required
                                        label="Amount Donated"
                                        placeholder="Enter amount"
                                        type="number"
                                        size={isMobile ? "sm" : "md"}
                                    />
                                </Stack>
                                <Select
                                    required
                                    label="Payment Method"
                                    placeholder="Select payment method"
                                    data={[
                                        { value: 'bank_transfer', label: 'Bank Transfer' },
                                        { value: 'wire_transfer', label: 'Wire Transfer' }
                                    ]}
                                    size={isMobile ? "sm" : "md"}
                                />
                                <Textarea
                                    label="Additional Comments"
                                    placeholder="Any additional information you'd like to share"
                                    minRows={isMobile ? 2 : 3}
                                    size={isMobile ? "sm" : "md"}
                                />
                                <Button 
                                    onClick={() => setFormSubmitted(true)}
                                    sx={{ 
                                        maxWidth: isMobile ? '100%' : '200px',
                                        margin: '0 auto',
                                        marginTop: isMobile ? '1rem' : '1.5rem'
                                    }}
                                    size={isMobile ? "sm" : "md"}
                                >
                                    Confirm Donation
                                </Button>
                            </Stack>
                        </Card>
                    ) : (
                        <Card 
                            shadow="sm" 
                            p={isMobile ? "md" : "xl"} 
                            radius="md" 
                            mt={isMobile ? 24 : 48} 
                            sx={{ textAlign: 'center' }}
                        >
                            <Text 
                                size={isMobile ? "lg" : "xl"} 
                                weight={600} 
                                color="green" 
                                mb={isMobile ? "sm" : "md"}
                            >
                                Thank you for your donation!
                            </Text>
                            <Text size={isMobile ? "sm" : "md"}>
                                Your generosity helps us continue our mission of supporting those in need. 
                                May your kindness be richly rewarded.
                            </Text>
                        </Card>
                    )}
                </Stack>
            </Container>
        </Drawer>
    );
};

export default DonationDrawer;