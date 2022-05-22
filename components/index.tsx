import { Box, Button, Divider, Spinner, Text } from "native-base";
import { useState } from "react";
import Project from "../api/types/project";
import api from "../api";

function Home() {
  const [projects, setProject] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  function fetchProjects() {
    const apiTimeout = setTimeout(() => setLoading(true), 500);
    api
      .getProjects()
      .then(res => setProject(res.data))
      .catch(err => console.warn(err.message))
      .finally(() => {
        clearTimeout(apiTimeout);
        setLoading(false);
      });
  }

  return (
    <>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Button onPress={fetchProjects} disabled={loading} mb={4} colorScheme="primary">
          {loading ? <Spinner color="white" /> : "Fetch Projects"}
        </Button>
        <Divider />
        {projects.map(proj => (
          <>
            <Text key={proj.id} my={2}>
              {proj.name}
            </Text>
            <Divider />
          </>
        ))}
      </Box>
    </>
  );
}

export default Home;
