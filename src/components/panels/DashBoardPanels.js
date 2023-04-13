import { Box, Center, Container, Flex, Heading, Link, Stack, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ProduitsLesPlusVenndus from '../ProduitsLesPlusVenndus';
import CourbesVentes from '../CoubesVentes';
import Facture from '../Facture';

export function RecapItemsCorp({ items }) {

    return (
        <>
            <Flex
                w={'20%'} h={'10em'} bg={'#fff'}
                borderRadius={'10px'} alignItems={'center'}
                justifyContent={'center'} flexDirection={'row'}
                boxShadow={'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}
            >
                {/* le container  */}
                <Flex
                    w={'90%'} h={'90%'}
                >
                    {/* les stats  */}
                    <Flex
                        w={'80%'} h={'100%'}
                        flexDirection={'column'}
                        justifyContent={'space-between'}
                    >
                        <Stat
                            w={'100%'} h={'100%'}
                            display={'flex'} flexDirection={'row'}
                            justifyContent={'space-between'}
                        >
                            <StatLabel>{items.tittle}</StatLabel>
                            <StatNumber fontSize={'4xl'} fontWeight={'bold'}>{items.number}</StatNumber>
                            <StatHelpText
                                color={'#0077b6'} display={'flex'} flexDirection={'row'}
                                justifyContent={'center'} alignItems={'center'}
                            >
                                <StatArrow type="increase" />
                                {items.secondNumber} <Text fontWeight={'semibold'} ml={'1em'}>{items.DaysMonth}</Text>
                            </StatHelpText>
                        </Stat>
                    </Flex>

                    {/* la couleurs  */}
                    <Box
                        w={'20%'} h={'100%'}
                    >
                        <Box w={'95%'} h={'2.5em'} bg={items.colorsDecor} borderRadius={'5px'}></Box>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

const recapItems = [
    {
        id: 1,
        tittle: 'Total de Ventes',
        number: `${10000} $`,
        secondNumber: `${+2.5}%`,
        DaysMonth: "pour Aujoud'hui",
        colorsDecor: '#b5179e'
    },
    {
        id: 2,
        tittle: 'Total de Commandes',
        number: `${5000} $`,
        secondNumber: `${+3.0}%`,
        DaysMonth: "pour Aujoud'hui",
        colorsDecor: '#0077b6'
    },
    {
        id: 3,
        tittle: 'Reduction',
        number: `${860} $`,
        secondNumber: `${+2.5}%`,
        DaysMonth: "pour Aujoud'hui",
        colorsDecor: '#ffba08'
    },
    {
        id: 4,
        tittle: 'Commandes Annuler',
        number: `${500} $`,
        secondNumber: `${+2.5}%`,
        DaysMonth: "pour Aujoud'hui",
        colorsDecor: '#4cc9f0'
    },
]

const DashBoardPanels = () => {

    return (
        <>

            <Flex
                w={'100%'} h={'100%'}
                flexDirection={'column'}
            >
                {/* première partie  */}
                <Flex
                    w={'100%'}
                    flexDirection={'row'} justifyContent={'space-between'}
                >
                    {
                        recapItems.map((items) => (
                            <RecapItemsCorp key={items.id} items={items}></RecapItemsCorp>
                        ))
                    }
                </Flex>

                {/* deuxime partie  */}
                <Flex
                    w={'100%'} mt={'1em'}
                    alignItems={'center'} justifyContent={'center'}
                >
                    {/* container  */}
                    <Flex
                        w={'97%'} h={'90%'}
                    >

                        {/* partie1 */}
                        <Flex
                            w={'70%'} h={'100%'}
                            alignItems={'center'} justifyContent={'center'}
                            flexDirection={'column'}
                        >
                            {/* produits les plus vendus  */}
                            <ProduitsLesPlusVenndus></ProduitsLesPlusVenndus>

                            {/* courbes de ventes  */}
                            <CourbesVentes></CourbesVentes>
                        </Flex>

                        {/* partie 2 */}
                        <Facture></Facture>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default DashBoardPanels;