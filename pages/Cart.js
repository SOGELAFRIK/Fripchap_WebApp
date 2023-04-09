import Navbar from "@/components/Navbar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Center, CloseButton, Flex, Image, Input, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import InputBar from "@/components/InputBar";
import { useMediaQuery } from "@chakra-ui/react";
import Footer from "@/components/footer";
import Link from "next/link";

export const CartData = [
  {
    productBg: 'url(./images/t-shirt/robe.png)',
    productName: "Zarha",
    productPrice: "3500",
    productCartegorie: "robe blazer"
  },
  {
    productBg: 'url(./images/t-shirt/robe.png)',
    productName: "Zarha",
    productPrice: "3500",
    productCartegorie: "robe blazer"
  },
  {
    productBg: 'url(./images/t-shirt/robe.png)',
    productName: "Zarha",
    productPrice: "3500",
    productCartegorie: "robe blazer"
  },
  {
    productBg: 'url(./images/t-shirt/robe.png)',
    productName: "Zarha",
    productPrice: "3500",
    productCartegorie: "robe blazer"
  },
]

export function CartBody({ cart }) {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    <Flex
      height={'auto'} width={{ base: '80%', sm: '60%', md: '50%' }} borderRadius={'10px'}
      direction={'column'} bg={'#f8edeb'} mb={'4em'}
      boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}
    >
      {/* l'icone de fermetu */}
      <Flex
        width={'100%'} height={'auto'}
        alignItems={'end'} justifyContent={'end'}
      >
        <CloseButton
          alignSelf='flex-start' position='relative'
          onClick={onClose}
        />
      </Flex>

      {/* box de l'article  */}
      <Flex
        width={'100%'} height={'30vh'}
      >
        {/* la box de l'image  */}
        <Box
          width={'40%'} height={'100%'}
          backgroundImage={cart.productBg}
          backgroundPosition={'center'}
          backgroundSize={'contain'} backgroundRepeat={'no-repeat'}
        ></Box>

        {/* la box des details  */}
        <Flex
          width={'40%'} height={'100%'}
          direction={'column'} justifyContent={'space-around'}
        >
          <Text
            fontWeight={'bold'}
          >
            {cart.productName}
          </Text>

          <Text>
            {cart.productCartegorie}
          </Text>

          <Flex
            width={'50%'} border={'2px solid #F7C29E'}
            height={'2em'} borderRadius={'5px'} direction={'row'}
            justifyContent={'space-between'}
          >
            <Center width={'33.3%'} height={'100%'}>-</Center>
            <Center width={'33.3%'} height={'100%'}>{2}</Center>
            <Center width={'33.3%'} height={'100%'}>+</Center>
          </Flex>

        </Flex>

        {/* la box du prix */}
        <Flex
          flexDirection={'column'} justifyContent={'space-between'}
          align={'flex-end'} width={'20%'} height={'100%'}
        >
          <Text></Text>
          <Text
            fontWeight={'bold'}
            color={'#F7C29E'} mb={'1.5em'} mr={'2em'}
          >
            {cart.productPrice}frs
          </Text>
        </Flex>
      </Flex>


    </Flex>
  ) : (
    <></>
  )
}

export default function Cart() {

  const [data2, setData2] = useState()
  useEffect(() => {
    setData2(0)
    console.log(data2)
  }, [data2])

  const decrement = () => {
    if (data2 < 0) {
      const dim = data2 - 1
      setData2(dim)
      console.log(data2)
    }
  }
  const increment = () => {
    if (data2 <= 0) {
      const sup = data2 + 1
      setData2(sup)
      console.log(data2)
    }
  }

  const [isLagerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <>
      {/* <Navbar />*/}
      <InputBar />
      {isLagerThan768 ? <Navbar></Navbar> : <></>}


      <Center>
        <Flex pb={20}>
          <Text fontSize={40} fontWeight={'bold'} >
            Panier
          </Text>
        </Flex>
      </Center>

      <Center
        display={'flex'} flexDirection={'column'}
      >
        {
          CartData.map((cart, key) => (
            <CartBody key={key} cart={cart}></CartBody>
          ))
        }
      </Center>


      <Flex
        mt={'2em'} ml={'68%'}
      >
        <Link href={'./Paiments'} >
          <Button
            bgColor={'#816acd'} borderRadius={50} width={100}
          >
            Valider
          </Button>
        </Link>
      </Flex>
      <Footer></Footer>
    </>
  );
}