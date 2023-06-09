import { Box } from "@chakra-ui/react";
import Swal from 'sweetalert2/src/sweetalert2.js';
import Home from "../../Pages/Home/Home"

export default function ExecutePayment() {
  const handleClick = () => {
    Swal.fire({
      icon: 'success',
      title: 'Done',
      text: 'Payment Successfully Done',
    }).then(function() {
        window.location = "https://client-pf-seven.vercel.app/home";
    });
  };
  return (
    <Box>
      <Home></Home>
      <Box>
      {handleClick()}
      </Box>
    </Box>
  );
} 