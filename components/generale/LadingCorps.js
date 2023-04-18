import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react';

// les items de la cartegorie children
const ChildrenItem = [
    {
        productName: "T-shirt",
        backgroundUrl: 'url(./images/t-shirt/shirt-1.png)',
        link: "",
    },
    {
        productName: "Chemise Enfant",
        backgroundUrl: 'url(./images/t-shirt/chemise.png)',
        link: "",
    },
    {
        productName: "Robe",
        backgroundUrl: 'url(./images/t-shirt/robe-enfant.png)',
        link: "",
    },
    {
        productName: "Short Enfant",
        backgroundUrl: 'url(./images/t-shirt/short.png)',
        link: "",
    },
    {
        productName: "Pull Over ",
        backgroundUrl: 'url(./images/t-shirt/pullOver.png)',
        link: "",
    },
]

// item de la cartegorie femme 
const WomanItem = [
    {
        productName: "T-shirt",
        backgroundUrl: 'url(./images/t-shirt/shirt2.png)',
        link: "#",
    },
    {
        productName: "Chemise Femme",
        backgroundUrl: 'url(./images/t-shirt/chemise2.png)',
        link: "",
    },
    {
        productName: "Short Femme",
        backgroundUrl: 'url(./images/t-shirt/short2.png)',
        link: "",
    },
    {
        productName: "Pentalon",
        backgroundUrl: 'url(./images/t-shirt/pentalon.png)',
        link: "",
    },
    {
        productName: "Robe",
        backgroundUrl: 'url(./images/t-shirt/robe.png)',
        link: "",
    },
    {
        productName: "Pull Over ",
        backgroundUrl: 'url(./images/t-shirt/pullOver2.png)',
        link: "",
    },
]

// item de la cartegorie homme 
const ManItem = [
    {
        productName: "T-shirt",
        backgroundUrl: 'url(./images/t-shirt/shirt3.png)',
        link: "",
    },
    {
        productName: "Chemise Homme",
        backgroundUrl: 'url(./images/t-shirt/chemise3.png)',
        link: "",
    },
    {
        productName: "Short Homme",
        backgroundUrl: 'url(./images/t-shirt/short.png)',
        link: "",
    },
    {
        productName: "Pentalon",
        backgroundUrl: 'url(./images/t-shirt/pentalon2.png)',
        link: "",
    },
    {
        productName: "Pull Over ",
        backgroundUrl: 'url(./images/t-shirt/pullOver.png)',
        link: "",
    },
]

// les titre des differentes cartegorie ainsi que les items avec la clé corp 
const cartegorieTitle = [
    {
        title: 'Enfant',
        corp: ChildrenItem,
        link: './Enfants'
    },
    {
        title: 'Femme',
        corp: WomanItem,
        link: './Femmes'
    },
    {
        title: 'Homme',
        corp: ManItem,
        link: './Hommes'
    }
]

// les card des differntes cartegories qui seront mapés
export function ItemCard({ item }) {
    return (
        <>
            {/* card  */}
            <Link
                height={'40vh'} width={{ base: '70%', md: '30%' }}
                mt={'5'} mr={{ base: '0%', md: '0%' }}
                _hover={{ textDecoration: 'none' }} href={item.link}
            >
                <Flex
                    height={'100%'} width={'100%'}
                    alignItems={'center'} justifyContent={'center'}
                    backgroundImage={item.backgroundUrl}
                    backgroundPosition={'center'} backgroundSize={'contain'} backgroundRepeat={'no-repeat'}
                >
                    <Flex
                        alignItems={'center'} justifyContent={'center'}
                        borderRadius={'10px'}
                        height={'100%'} width={'100%'}
                        bg={'rgba(0, 0, 0, 0.277)'}
                    >
                        <Text
                            fontWeight={'bold'} fontSize={'2xl'} color={'#fff'}
                            textAlign={'center'}
                        >
                            {item.productName}
                        </Text>
                    </Flex>
                </Flex>
            </Link>
        </>
    )
}

export function ContainerCard({ card }) {
    return (
        <>
            {/* cartegorie*/}
            <Flex
                width={'95%'} height={'auto'}
                direction={'column'} alignItems={'center'}
                justifyContent={'space-between'}
            >

                {/* la box de l'entete de la cartegorie  */}
                <Flex
                    height={'auto'} width={'100%'} mt={5}
                    alignItems={'center'} justifyContent={'space-between'}
                >
                    <Heading
                        height={'auto'} width={'100%'} display={'flex'}
                        alignItems={'center'} justifyContent={'space-between'}
                    >
                        {card.title}
                    </Heading>
                    <Link
                        href={card.link}
                        _hover={{textDecoration : 'none'}}
                    >
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='yellow' variant='outline'>
                            Voir Plus
                        </Button>
                    </Link>
                </Flex>

                {/* contient les card's  */}
                <Flex
                    height={'auto'} width={'100%'}
                    flexWrap={'wrap'} direction={'row'}
                    alignItems={{ base: 'center', md: 'normal' }} justifyContent={{ base: 'center', md: 'space-between' }}
                >
                    {/* um map de toute les sous cartegorie  */}
                    {
                        card.corp.map((item, key) => (
                            <ItemCard key={key} item={item}></ItemCard>
                        ))
                    }
                </Flex>
            </Flex>
        </>
    )
}

// le rendu final qui sera affiché 
const LadingCorps = () => {
    return (
        <>
            <Center
                width={'100%'} height={'auto'}
            >
                <Box
                    height={'95%'} width={'95%'}
                >
                    {/* l'entet principale */}
                    <Heading
                        textAlign={'start'} color={"#fbb614"} mb={5}
                    >
                        Nos Articles
                    </Heading>

                    {/* la box de toutes les cartegorie */}
                    <Flex
                        height={'auto'} width={'100%'} mt={10}
                        direction={'column'} alignItems={'center'}
                        justifyContent={'center'}
                    >
                        {
                            cartegorieTitle.map((card, key) => (
                                <ContainerCard key={key} card={card}></ContainerCard>
                            ))
                        }
                    </Flex>

                </Box>
            </Center>
        </>
    );
};

export default LadingCorps;