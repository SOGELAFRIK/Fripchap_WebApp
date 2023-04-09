import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const MobileMoney = () => {
    return (
        <>
            <Text textAlign={'center'}>Veuillez Selectione un moyen de paiements</Text>
            <Stack direction={'row'} spacing={'2em'} mt={'2em'}>
                <HStack h={'4em'}>
                    <Box h={'100%'} width={'4em'} bg={'orange'}></Box>
                    <Text fontWeight={'bold'}>Orange Money</Text>
                </HStack>

                <HStack h={'4em'}>
                    <Box h={'100%'} width={'4em'} bg={'blue.200'}></Box>
                    <Text fontWeight={'bold'}>Moov Money</Text>
                </HStack>

                <HStack h={'4em'}>
                    <Box h={'100%'} width={'4em'} bg={'blue.100'}></Box>
                    <Text fontWeight={'bold'}>Wave</Text>
                </HStack>
            </Stack>
            <Button colorScheme='blue' mt={'2em'}>Suivant</Button>
        </>
    );
};

export default MobileMoney;