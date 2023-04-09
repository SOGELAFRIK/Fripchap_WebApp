import InputBar from '@/components/InputBar';
import Navbar from '@/components/Navbar';
import LocationForm from '@/components/generale/LocationForm';
import PaiementsOption from '@/components/generale/PaiementsOption';
import ResumeCommande from '@/components/generale/ResumeCommande';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Avatar, AvatarGroup, Box, Center, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaCreditCard, FaSearchLocation } from 'react-icons/fa';

const Paiments = () => {
    const [isLagerThan768] = useMediaQuery('(min-width: 768px)')
    const [tabIndex, setTabIndex] = useState(0)
    const handleTabsChange = (index) => {
        setTabIndex(index)
    }
    return (
        <>
            {/* <Navbar />*/}
            <InputBar />
            {isLagerThan768 ? <Navbar></Navbar> : <></>}

            <Center mt={'2em'} width={'100%'}>
                <HStack width={'80%'}>
                    <Tabs isFitted variant='line' colorScheme='blue' width={'100%'} >
                        <TabList>
                            <Tab flexDirection={'column'}>
                                <Avatar bg='blue.300' icon={<FaSearchLocation fontSize='1.5rem' />} />
                                <Text>Ajouter une nouvelle adresse</Text>
                            </Tab>
                            <Tab flexDirection={'column'}>
                                <Avatar bg='blue.300' icon={<FaCreditCard fontSize='1.5rem' />} />
                                <Text>Option de paiements</Text>
                            </Tab>
                            <Tab flexDirection={'column'}>
                                <Avatar bg='blue.300' icon={<HamburgerIcon fontSize='1.5rem' />} />
                                <Text>Resumé de la commande</Text>
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <LocationForm setTabIndex1={setTabIndex}></LocationForm>
                            </TabPanel>

                            <TabPanel>
                                <PaiementsOption></PaiementsOption>
                            </TabPanel>

                            <TabPanel>
                                <ResumeCommande></ResumeCommande>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </HStack>
            </Center>
        </>
    );
};

export default Paiments;