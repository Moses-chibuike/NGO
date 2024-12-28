import React, { useState } from 'react';
import {
    Box,
    Container,
    Flex,
    Select,
    TextInput,
    Title,
    SimpleGrid,
    Stack,
    useMantineTheme
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Helmet } from "react-helmet";
import campaignsData from "../data/Campaigns.json";
import { CampaignCard } from "../components";

const CampaignsPage = (): JSX.Element => {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const [searchQuery, setSearchQuery] = useState('');
    const [displayCount, setDisplayCount] = useState('10');
    const [sortBy, setSortBy] = useState('featured');

    const items = campaignsData.data.map(c => (
        <CampaignCard key={c.id} data={c} showActions={true} />
    ));

    return (
        <>
            <Helmet>
                <title>Discover campaigns to fund</title>
            </Helmet>
            <Box sx={{ width: '100%', maxWidth: '100vw', overflow: 'hidden' }}>
                <Container 
                    size="lg" 
                    px={isMobile ? 'xs' : 'md'}
                    sx={{ 
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        '@media (max-width: 1200px)': {
                            maxWidth: '100%',
                            padding: isMobile ? '0 1rem' : '0 2rem'
                        }
                    }}
                >
                    <Stack 
                        spacing={isMobile ? 'md' : 'xl'}
                        sx={{ width: '100%' }}
                    >
                        {/* Header */}
                        <Box py={isMobile ? 'md' : 'xl'}>
                            <Title
                                order={1}
                                size={32}
                                weight={700}
                                align="center"
                                transform="capitalize"
                                sx={{ 
                                    lineHeight: '40px',
                                    wordWrap: 'break-word',
                                    maxWidth: '100%'
                                }}
                            >
                                Discover campaigns to fund
                            </Title>
                        </Box>

                        {/* Search and Filters */}
                        <Flex
                            direction={{ base: 'column', sm: 'row' }}
                            justify="space-between"
                            gap={{ base: 'sm', sm: 'lg' }}
                            align={{ sm: 'center' }}
                            sx={{ width: '100%' }}
                        >
                            <Box sx={{ width: '100%', maxWidth: isMobile ? '100%' : '500px' }}>
                                <TextInput
                                    placeholder="Search campaigns..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    sx={{ width: '100%' }}
                                />
                            </Box>
                            
                            <Flex 
                                align="center" 
                                gap="sm" 
                                direction={{ base: 'column', sm: 'row' }}
                                sx={{ 
                                    width: isMobile ? '100%' : 'auto',
                                    '@media (max-width: 768px)': {
                                        width: '100%'
                                    }
                                }}
                            >
                                <Select
                                    placeholder="Show count"
                                    value={displayCount}
                                    onChange={setDisplayCount}
                                    data={[
                                        { value: '10', label: 'show: 10' },
                                        { value: '25', label: 'show: 25' },
                                        { value: '50', label: 'show: 50' },
                                        { value: '100', label: 'show: 100' },
                                    ]}
                                    sx={{ 
                                        width: isMobile ? '100%' : '160px',
                                        '@media (max-width: 768px)': {
                                            width: '100%'
                                        }
                                    }}
                                />
                                <Select
                                    placeholder="Sort by"
                                    value={sortBy}
                                    onChange={setSortBy}
                                    data={[
                                        { value: 'featured', label: 'sort by: featured' },
                                        { value: 'popular', label: 'sort by: popular' },
                                        { value: 'latest', label: 'sort by: latest' },
                                    ]}
                                    sx={{ 
                                        width: isMobile ? '100%' : '160px',
                                        '@media (max-width: 768px)': {
                                            width: '100%'
                                        }
                                    }}
                                />
                            </Flex>
                        </Flex>

                        {/* Campaigns Grid */}
                        <SimpleGrid
                            cols={3}
                            spacing="lg"
                            breakpoints={[
                                { maxWidth: theme.breakpoints.md, cols: 2, spacing: 'md' },
                                { maxWidth: theme.breakpoints.sm, cols: 1, spacing: 'sm' },
                            ]}
                            sx={{ 
                                width: '100%',
                                '@media (max-width: 1200px)': {
                                    maxWidth: '100%'
                                }
                            }}
                        >
                            {items}
                        </SimpleGrid>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default CampaignsPage;