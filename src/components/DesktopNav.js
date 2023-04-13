import { Avatar, Button, Center, Flex, Input, InputGroup, InputRightElement, Link, Menu, MenuButton, MenuItem, MenuList, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react';
import { ChevronDownIcon, EmailIcon, Search2Icon } from '@chakra-ui/icons';
import { faBell, faHomeLgAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DashBoardPanels from './panels/DashBoardPanels';
import ProduitsPanels from './panels/ProduitsPanels';
import CommandesPanels from './panels/CommandesPanels';
import UtilisateursPanels from './panels/UtilisateursPanels';
import EmployePanels from './panels/EmployePanels';
import AdminProfilePanels from './panels/AdminProfilePanels';

const DesktopNav = () => {
    return (
        <>
            <Stack
                w={'100%'} h={'auto'} direction={'column'} spacing={'0'}
            >
                <Stack
                    w={'100%'} direction={'row'} spacing={'0'}
                >

                    {/* la box du logo  */}
                    <Center
                        w={'14.5%'} h={'5em'}
                    >
                        <Center
                            h={'4.5em'} w={'8em'} borderRadius={'70%'} bg={'#0077b6'}
                            color={'#fff'} mt={'.5em'}
                        >
                            <Text>FripChap</Text>
                        </Center>
                    </Center>

                    {/* la box de l'input  */}
                    <Flex
                        alignItems={'center'} justifyContent={'space-between'}
                        w={'85.5%'}
                    >
                        <InputGroup
                            w={'20em'} ml={'1em'}
                        >
                            <Input
                                type='tel' placeholder='Recherche...'
                                bg={'#dee2e6'} borderRadius={'5px'}
                                _placeholder={{ fontWeight: 'bold' }}
                            />
                            <InputRightElement
                                bg={'#0077b6'} color={'#fff'}
                                borderTopRightRadius={'5px'}
                                borderBottomRightRadius={'5px'}
                            >
                                <Search2Icon />
                            </InputRightElement>
                        </InputGroup>

                        {/* icone button's */}
                        <Flex
                            w={'20em'} alignItems={'center'} justifyContent={'space-around'}
                        >
                            <Link>
                                <FontAwesomeIcon icon={faHomeLgAlt} color='#6c757d'></FontAwesomeIcon>
                            </Link>

                            <Link>
                                <FontAwesomeIcon icon={faBell} color='#6c757d'></FontAwesomeIcon>
                            </Link>
                            <Flex
                                alignItems={'center'} justifyContent={'center'}

                            >
                                <Link>
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' mr={'1em'} />
                                </Link>

                                <Menu>
                                    <MenuButton
                                        as={Button} rightIcon={<ChevronDownIcon />}
                                        variant='outline'
                                    >
                                        Admin
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                        <MenuItem>Mark as Draft</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem>Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        </Flex>

                    </Flex>
                </Stack>




                <Tabs
                    variant='unstyled' display={'flex'} flexDirection={'row'}
                    w={'100%'} h={'150vh'}
                >
                    <TabList
                        w={'17%'} h={'100%'}
                        flexDirection={'column'} bg={'#fff'}
                    >

                        <Tab
                            w={{ md: '90%', lg: '80%' }} h={'3em'} ml={{ md: '5%', lg: '10%' }} borderRadius={'10px'}
                            color={'#0077b6'} fontWeight={'bold'} mt={'2em'}
                            _selected={{ color: '#fff', bg: '#0077b6' }}
                        >
                            <EmailIcon /> <Text ml={{ md: '0.5em', lg: '1em' }}>Dashboard</Text>
                        </Tab>

                        <Tab
                            _selected={{ color: 'blue' }} mt={'3em'}
                        >
                            Table des produits
                        </Tab>

                        <Tab
                            _selected={{ color: 'blue' }}

                        >
                            Commandes
                        </Tab>

                        <Tab
                            _selected={{ color: 'blue' }}

                        >
                            Les Utilisateurs
                        </Tab>

                        <Tab
                            _selected={{ color: 'blue' }}

                        >
                            Les Employes
                        </Tab>

                        <Tab
                            _selected={{ color: 'blue' }}

                        >
                            Profile Admin
                        </Tab>
                    </TabList>

                    <TabPanels
                        bg={'#e9ecef'}
                    >
                        {/* dashboard  */}
                        <TabPanel
                            w={'100%'} h={'100%'}
                        >
                            <DashBoardPanels></DashBoardPanels>
                        </TabPanel>

                        {/* table des produits  */}
                        <TabPanel
                            w={'100%'} h={'100%'}
                        >
                            <ProduitsPanels></ProduitsPanels>
                        </TabPanel>

                        {/* commandes  */}
                        <TabPanel
                            w={'100%'} h={'100%'}
                        >
                            <CommandesPanels></CommandesPanels>
                        </TabPanel>

                        {/* utilisateurs  */}
                        <TabPanel
                            w={'100%'} h={'100%'}
                        >
                            <UtilisateursPanels></UtilisateursPanels>
                        </TabPanel>

                        {/* employes  */}
                        <TabPanel
                            w={'100%'} h={'100%'}
                        >
                            <EmployePanels></EmployePanels>
                        </TabPanel>

                        {/* profile admin  */}
                        <TabPanel
                            w={'100%'} h={'100%'}
                        >
                            <AdminProfilePanels></AdminProfilePanels>
                        </TabPanel>

                    </TabPanels>
                </Tabs>
            </Stack>
        </>
    );
};

export default DesktopNav;