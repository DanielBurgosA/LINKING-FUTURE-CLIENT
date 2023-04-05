import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";
import {
  Button,
  VStack
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function SidebarUser() {
  
  return (
    <div className={style.sidebar}>

      <VStack>

        <Button
          colorScheme="teal"
          variant="outline"
          mt="0.9rem"
          w="90%"
          
        >
          <Link to="/profile/userInfo">General</Link>
        </Button>


        <Button colorScheme="teal" variant="outline" m="0.5rem" w="90%">
          <Link to="/profile/donationHistory" >Donation History</Link>
        </Button>


        <Button
          colorScheme="teal"
          variant="outline"
          m="0.5rem"
          w="90%"
        >
          <Link to="/profile/projectsUser">User Projects</Link>
        </Button>

        <Button
          colorScheme="teal"
          variant="outline"
          m="0.5rem"
          w="90%"
        >
          <Link to="/profile/edit">Edit profile</Link>
        </Button>

      </VStack>
    </div>
  );
}
