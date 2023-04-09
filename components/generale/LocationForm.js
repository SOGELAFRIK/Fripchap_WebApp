import { Button, Center, Input, InputGroup, InputLeftElement, Stack, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import { FaLocationArrow, FaSearchLocation } from 'react-icons/fa';

const LocationForm = ({setTabIndex1}) => {
    return (
        <>
            <Center width={'100%'}>
                <Stack direction={'column'} w={'40%'} spacing={'2em'}>
                    {/* ville */}
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                        >
                            <FaSearchLocation />
                        </InputLeftElement>
                        <Input
                            type='text'
                            placeholder='Ville'
                            _placeholder={{ color: 'black' }}
                            variant={'outline'}
                            color={'black'}
                            borderRadius={'10px'}
                        />
                    </InputGroup>

                    {/* commune  */}
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                        >
                            <FaSearchLocation />
                        </InputLeftElement>
                        <Input
                            type='text'
                            placeholder='Commune'
                            _placeholder={{ color: 'black' }}
                            variant={'outline'}
                            color={'black'}
                            borderRadius={'10px'}
                        />
                    </InputGroup>

                    {/* ville */}
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                        >
                            <FaSearchLocation />
                        </InputLeftElement>
                        <Input
                            type='text'
                            placeholder='Quartier'
                            _placeholder={{ color: 'black' }}
                            variant={'outline'}
                            color={'black'}
                            borderRadius={'10px'}
                        />
                    </InputGroup>

                    <InputGroup>
                        <Textarea
                            type=''
                            placeholder='Description'
                            _placeholder={{ color: 'black' }}
                            variant={'outline'}
                            color={'black'}
                            borderRadius={'10px'}
                        />
                    </InputGroup>

                    <Text mt={'2em'} mb={'2em'} textAlign={'center'}>ou</Text>

                    <Button colorScheme='blue'>Suivant</Button>
                </Stack>
            </Center>
        </>
    );
};

export default LocationForm;