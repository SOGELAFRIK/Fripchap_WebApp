import Logo from '@/components/generale/Logo';
import { Box, Button, Center, Flex, Input, Link, Stack, Text } from '@chakra-ui/react';

const Connexion = () => {
    return (
        <>
            {/* le main  */}
            <Center
                width={'100%'} height={'100vh'}
            >

                {/* la premier box grise  */}
                <Flex
                    width={{ base: '90%', md: '70%', xl: '50%', '2xl': '40%' }} height={{ base: '90vh', md: '90vh', lg: '70vh', xl: '65vh', '2xl': '70vh' }} bg={'#dee2e6'}
                    borderRadius={'2em'} direction={'column'}
                >

                    {/* premiere ligne  */}
                    <Stack
                        w={'100%'} h={'4em'} direction={'row'}
                        mt={'1em'} alignItems={'center'}
                    >

                        <Box ml={'1em'}>
                            <Logo></Logo>
                        </Box>

                        <Center w={'full'}>
                            <Text
                                color={'#0077b6'} fontWeight={'bold'} fontSize={'2em'}

                            >
                                Admin
                            </Text>
                        </Center>

                    </Stack>

                    {/* les deux inputs  */}
                    <Flex
                        w={'100%'} alignItems={'center'} justifyContent={'center'}
                        flexDirection={'column'}
                    >

                        {/* input email */}
                        <Stack
                            direction={'column'} w={{ base: '90%' }}
                            mt={'2em'}
                        >
                            <Text
                                fontWeight={'bold'} fontSize={'1.5em'}
                            >E-mail</Text>
                            <Input
                                w={'100%'} h={'4em'} bg={'#fff'} borderRadius={'full'}
                                placeholder='votre e-mail' _placeholder={{ color: '#000' }}
                            ></Input>
                        </Stack>

                        {/* input mot de pass */}
                        <Stack
                            direction={'column'} w={{ base: '90%' }}
                            mt={'2em'}
                        >
                            <Text
                                fontWeight={'bold'} fontSize={'1.5em'}
                            >Mot de Passe</Text>
                            <Input
                                w={'100%'} h={'4em'} bg={'#fff'} borderRadius={'full'}
                                placeholder='mot de passe' _placeholder={{ color: '#000' }}
                            ></Input>
                        </Stack>

                    </Flex>

                    <Center
                        mt={'2em'} w={'100%'}
                    >

                        <Link
                            w={'50%'} h={{ base: '3em' }}
                            _hover={{ textDecoration: 'none' }}
                            href='./Dashboard'
                        >
                            <Button
                                w={'full'} h={'full'} colorScheme='blue'
                                borderRadius={'full'} fontSize={'1.5em'}
                            >
                                Connexion
                            </Button>

                        </Link>

                    </Center>

                    <Link
                        color={'#0077b6'} textAlign={'center'}
                        fontWeight={'bold'} mt={'1em'}
                        _hover={{ textDecoration: 'none' }}
                    >
                        Mot de passe oublié ?
                    </Link>

                </Flex>

            </Center>
        </>
    );
};

export default Connexion;