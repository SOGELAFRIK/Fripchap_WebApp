import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "@/FIREBASE/clientApp";
import { Avatar, Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function Showconnex() {
  const [users, setUsers] = useState("");
  const router = useRouter()

  const logout = () => {
    signOut(auth);
    router.reload()
  };

  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      }
    });
  });
  if (users) {
    {
      console.log(users == false);
    }
    return (
      <Flex mr={{ base: 1, md: 10 }}>
        <Box flexDirection={'column'}>
          <Avatar name={users.email.toString()} /><br/>
          {users.email.toString()}
        </Box>

        <Button onClick={() => logout()}> Deconnexion</Button>
      </Flex>
    );
  } else {
    {
      console.log(users);
    }
    return (
      <Flex
        align={"center"}
        justifyContent={"center"}
        width={"auto"}
        height={"100%"}
        mr={"1em"}
      >
        <Link mr={{ base: "3", md: "3" }} href={"/Connexion"}>
          Se connecter
        </Link>
        <Link href={"/Inscription"}>Inscription</Link>
      </Flex>
    );
  }
}
