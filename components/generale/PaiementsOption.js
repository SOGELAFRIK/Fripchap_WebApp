import { Box, Center, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import MobileMoney from './MobileMoney';
import CreditCard from './CreditCard';

const PaiementsOption = () => {
    return (
        <>
            <Box width={'100%'}>
                <Tabs isFitted width={'50%'} variant='enclosed'>
                    <TabList>
                        <Tab>Cart de Credit</Tab>
                        <Tab>Mobile Money</Tab>
                        <Tab>Espece</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <CreditCard></CreditCard>
                        </TabPanel>
                        <TabPanel>
                            <MobileMoney></MobileMoney>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    );
};

export default PaiementsOption;