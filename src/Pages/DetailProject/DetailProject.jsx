import { useParams, Link } from "react-router-dom";
import {
  getProjectById,
  provGetId,
  cleanId,
} from "../../Redux/Slicers/projectSlicer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Text,
  Button,
  Image,
  Center,
  VStack,
  Heading,
  Card,
  Spinner
} from "@chakra-ui/react";
import style from "./DetailProject.module.css";
import AddComment from "../../Components/CreateComment/CreateComment.jsx";
import CommentsProjectById from "../../Components/CommentsByIds/CommentsProjectById";

export default function DetailProject() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const LogInStatus = useSelector((state) => state.login.status);

  useEffect(() => {
    dispatch(getProjectById(id));
    return () => {
      dispatch(cleanId());
    };
  }, [dispatch, id]);

  let projectById = useSelector((state) => state.project.projectId);

  return (
    <Box maxH="1.5">
      {projectById && Object.keys(projectById) ? (
        <Box textAlign="justify">
          <VStack spacing={3}>
            <Heading as="b" fontSize="4rem" margin="1rem 3rem">
              {projectById.name}
            </Heading>
            <Card
              variant="outline"
              borderColor="#D8DEE4"
              maxW="70rem"
              className={style.Prov}
            >
              <Text fontSize="20px" padding="7px 10px 0px">
                Creador: ramdom user{" "}
              </Text>
              <Text fontSize="15px" padding="5px">
                {projectById.location}
              </Text>
            </Card>
            <Center>
              <Image
                boxSize="400px"
                objectFit="cover"
                borderRadius="full"
                align="center"
                src={projectById.image}
                alt={projectById.name}
              />
            </Center>
            <Card
              bg="#F6F8FA"
              variant="outline"
              borderColor="#D8DEE4"
              maxW="70rem"
            >
              <Text fontSize="20px" padding="15px">
                {projectById.description}
              </Text>
            </Card>
          </VStack>
        </Box>
      ) : (
        <Center height="25rem">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
      )}
      <Box>
        <Link to="/projects">
          <Button margin="1rem 3rem" _hover={{ background: "#C9EEFF" }}>
            Back
          </Button>
        </Link>
      </Box>
      {LogInStatus ? <AddComment /> : ""}
      <div>
        <CommentsProjectById />
      </div>
    </Box>
  );
}
