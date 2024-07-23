import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  Image,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

interface Content {
  title: string;
  description: string;
  tags: string[];
  links: string[];
  filePath: string;
  fileType: string;
}

const ViewEducationalContentPW: React.FC = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("/api/content")
      .then((response) => {
        setContents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching content", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box p={4}>
      <Heading mb={4}>Uploaded Content</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {contents.map((content, index) => (
          <Box
            key={index}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
          >
            <Heading fontSize="xl" mb={2}>
              {content.title}
            </Heading>
            <Text mb={2}>{content.description}</Text>
            <Stack spacing={1} mb={2}>
              {content.tags.map((tag, idx) => (
                <Text key={idx} as="span" color="teal.500" mr={2}>
                  #{tag}
                </Text>
              ))}
            </Stack>
            <Stack spacing={1} mb={2}>
              {content.links.map((link, idx) => (
                <Link key={idx} href={link} color="blue.500" isExternal>
                  {link}
                </Link>
              ))}
            </Stack>
            {content.filePath && (
              <Box mt={4}>
                {content.fileType.startsWith("image/") && (
                  <Image
                    src={content.filePath}
                    alt={content.title}
                    boxSize="100%"
                    objectFit="cover"
                  />
                )}
                {content.fileType.startsWith("video/") && (
                  <video controls width="100%">
                    <source src={content.filePath} type={content.fileType} />
                    Your browser does not support the video tag.
                  </video>
                )}
                {content.fileType.startsWith("audio/") && (
                  <audio controls>
                    <source src={content.filePath} type={content.fileType} />
                    Your browser does not support the audio element.
                  </audio>
                )}
                {!content.fileType.startsWith("image/") &&
                  !content.fileType.startsWith("video/") &&
                  !content.fileType.startsWith("audio/") && (
                    <Link href={content.filePath} color="blue.500" isExternal>
                      Download file
                    </Link>
                  )}
              </Box>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ViewEducationalContentPW;
