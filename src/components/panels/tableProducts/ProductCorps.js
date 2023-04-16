import ActionStructure from '@/components/generale/ActionStructure';
import { Flex } from '@chakra-ui/react';
import React from 'react';


const ProductCorps = ({ items }) => {
    return (
        <>
            <Flex
                w={'100%'} h={'3em'}
                borderBottom={'2px'} borderColor={'#e9ecef'}

            >
                <Flex
                    w={'16.66%'} h={'100%'} bg={'#fff'}
                    alignItems={'center'} justifyContent={'center'}
                >
                    {items.idPrdt}
                </Flex>

                <Flex
                    w={'16.66%'} h={'100%'} bg={'#fff'}
                    alignItems={'center'} justifyContent={'center'}
                >
                    {items.type}
                </Flex>

                <Flex
                    w={'16.66%'} h={'100%'} bg={'#fff'}
                    alignItems={'center'} justifyContent={'center'}
                >
                    {items.genre}
                </Flex>

                <Flex
                    w={'16.66%'} h={'100%'} bg={'#fff'}
                    alignItems={'center'} justifyContent={'center'}
                >
                    {items.etat}
                </Flex>

                <Flex
                    w={'16.66%'} h={'100%'} bg={'#fff'}
                    alignItems={'center'} justifyContent={'center'}
                >
                    <ActionStructure></ActionStructure>
                </Flex>

                <Flex
                    w={'16.66%'} h={'100%'} bg={'#fff'}
                    alignItems={'center'} justifyContent={'center'}
                >
                    {items.dateOf}
                </Flex>
            </Flex>
        </>
    );
};

export default ProductCorps;