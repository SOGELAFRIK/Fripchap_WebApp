import DesktopNav from '@/components/DesktopNav';
import MobileNav from '@/components/MobileNav';
import RigthBar from '@/components/generale/RigthBar';
import { Flex, Stack, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

const Dashboard = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    return (
        <>
            {isLargerThan768 ? <DesktopNav></DesktopNav> : <MobileNav></MobileNav>}
        </>
    );
};

export default Dashboard;