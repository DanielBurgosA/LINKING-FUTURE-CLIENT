import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProject } from "../../../Redux/Slicers/UserDashboard";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Center
} from '@chakra-ui/react'

export default function ProjectsUser() {
  const dispatch = useDispatch();

  const userProjects = useSelector(state => state.dashBoardUser.projectUser)

  useEffect(() => {
    dispatch(getProject());
  }, [dispatch])
  return (
    <>
      {userProjects?.length >= 1 ?
        <Center>
          <TableContainer>
            <Table variant='simple' size="sm" w="sm" m="0.5em">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Status</Th>
                  <Th isNumeric>Current Donation</Th>
                  <Th isNumeric>Cost</Th>
                  <Th>Currency</Th>
                </Tr>
              </Thead>
              <Tbody>
                {userProjects.map(project => {
                  return (
                    <Tr>
                      <Td>{project.name}</Td>
                      <Td isNumeric>{project.status}</Td>
                      <Td>{project.currentAmount}</Td>
                      <Td>{project.cost}</Td>
                      <Td>{project.currency}</Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Center>
        :
        <Alert
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Hi User!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Here will appear your projects.
          </AlertDescription>
        </Alert>
      }
    </>
  );
}
