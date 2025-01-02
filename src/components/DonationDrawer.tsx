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
    Textarea
} from "@mantine/core";

interface IProps extends Pick<DrawerProps, 'opened' | 'onClose' | 'size'> {
    campaign?: ICampaign
}

const DonationDrawer = ({campaign, ...others}: IProps) => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <Drawer
            position="bottom"
            size="100%"
            {...others}
        >
            <Container sx={{ 
                backgroundColor: '#f0fff4',
                minHeight: '100vh',
                padding: '2rem'
            }}>
                <Stack>
                    <Group position="center" align="center" sx={{ width: '100%' }}>
                        <Image src={campaign?.mainImage} height={96} width={120} fit="contain" radius="sm"/>
                        <Text>You're supporting <b>{campaign?.title}</b></Text>
                    </Group>

                    <Text align="center" size="sm" mb={30}>
                        Please make a transfer to any of these account numbers. No amount is too big or small. 
                        God blesses a cheerful giver, kindly fill the donation confirmation after making a transfer.
                    </Text>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                    }}>
                        <Card shadow="sm" p="xl" radius="md">
                            <Title order={3} size={20} mb={24} weight={600}>
                                Nigerian Account
                            </Title>
                            <Stack spacing="lg">
                                <Group position="apart">
                                    <Text color="dimmed" size="sm">Bank Name</Text>
                                    <Text weight={500}>First Bank of Nigeria</Text>
                                </Group>
                                <Divider />
                                <Group position="apart">
                                    <Text color="dimmed" size="sm">Account Name</Text>
                                    <Text weight={500}>AlaoMeHelp Foundation</Text>
                                </Group>
                                <Divider />
                                <Group position="apart">
                                    <Text color="dimmed" size="sm">Account Number</Text>
                                    <Text weight={500}>1234567890</Text>
                                </Group>
                                <Divider />
                                <Group position="apart">
                                    <Text color="dimmed" size="sm">Account Type</Text>
                                    <Text weight={500}>Current Account</Text>
                                </Group>
                            </Stack>
                        </Card>

                        <Card shadow="sm" p="xl" radius="md">
                            <Title order={3} size={20} mb={24} weight={600}>
                                International Account
                            </Title>
                            <Stack spacing="lg">
                                <Group position="apart">
                                    <Text color="dimmed" size="sm">Bank Name</Text>
                                    <Text weight={500}>Chase Bank</Text>
                                </Group>
                                <Divider />
                                <Group position="apart">
                                    <Text color="dimmed" size="sm">Account Name</Text>
                                    <Text weight={500}>AlaoMeHelp International</Text>
                                </Group>
                                <Divider />
                                <Group position="apart">
                                    <Text color="dimmed" size="sm">Account Number</Text>
                                    <Text weight={500}>987654321</Text>
                                </Group>
                                <Divider />
                                <Group position="apart">
                                    <Text color="dimmed" size="sm">Swift Code</Text>
                                    <Text weight={500}>CHASUS33</Text>
                                </Group>
                                <Divider />
                                <Group position="apart">
                                    <Text color="dimmed" size="sm">Routing Number</Text>
                                    <Text weight={500}>021000021</Text>
                                </Group>
                            </Stack>
                        </Card>
                    </div>

                    {!formSubmitted ? (
                        <Card shadow="sm" p="xl" radius="md" mt={48}>
                            <Title order={3} size={20} mb={24} weight={600}>
                                Donation Confirmation Form
                            </Title>
                            <Stack spacing="lg">
                                <Group grow>
                                    <TextInput
                                        required
                                        label="Full Name"
                                        placeholder="Enter your full name"
                                    />
                                    <TextInput
                                        required
                                        label="Email Address"
                                        placeholder="Enter your email address"
                                        type="email"
                                    />
                                </Group>
                                <Group grow>
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
                                    />
                                    <TextInput
                                        required
                                        label="Amount Donated"
                                        placeholder="Enter amount"
                                        type="number"
                                    />
                                </Group>
                                <Select
                                    required
                                    label="Payment Method"
                                    placeholder="Select payment method"
                                    data={[
                                        { value: 'bank_transfer', label: 'Bank Transfer' },
                                        { value: 'wire_transfer', label: 'Wire Transfer' }
                                    ]}
                                />
                                <Textarea
                                    label="Additional Comments"
                                    placeholder="Any additional information you'd like to share"
                                    minRows={3}
                                />
                                <Button 
                                    onClick={() => setFormSubmitted(true)}
                                    sx={{ maxWidth: '200px', margin: '0 auto' }}
                                >
                                    Confirm Donation
                                </Button>
                            </Stack>
                        </Card>
                    ) : (
                        <Card shadow="sm" p="xl" radius="md" mt={48} sx={{ textAlign: 'center' }}>
                            <Text size="xl" weight={600} color="green" mb="md">
                                Thank you for your donation!
                            </Text>
                            <Text size="md">
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