import { Box, Heading, Container, Text, Stack, Button } from '@chakra-ui/react';
import * as FaIcons from 'react-icons/fa';

export default function OpenSource() {
  return (
    <>
      <Container maxW={'4xl'} mt={5}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 3, md: 5 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            align="start"
            fontWeight={700}
            fontSize="6xl"
            my={{
              base: 0,
              md: 5,
            }}
          >
            <Text
              as={'span'}
              bgGradient="linear(to-l,purple.400, yellow.400)"
              bgClip="text"
            >
              Open Source & Collaboration
            </Text>
          </Heading>
          <Text fontSize={'1.5rem'} align="start">
            We are open to collaboration and we are always looking for new ideas
            to improve our product, we share our code on Github, and if you have
            any suggestions, please feel free to reach out to us. we love open
            source and we know the value of collaboration.
          </Text>{' '}
          <Text
            fontSize={'1.5rem'}
            align="start"
            mb={{
              base: 0,
              md: 15,
            }}
          >
            We started this project with the goal of making invoicetor a free
            and open for everyone platform, It's a great way to create invoices
            for your business. We learnt a lot from the open source community
            and now it's our time to give something back to the community and to
            the world 💜
          </Text>
          <Stack
            direction={{
              sm: 'column',
              md: 'row',
            }}
            spacing={4}
          >
            {' '}
            <Button
              borderRadius={'lg'}
              bg={'purple.400'}
              color={'white'}
              _hover={{ bg: 'purple.500' }}
              variant="solid"
              size="lg"
              href="
              #"
              rightIcon={<FaIcons.FaGithub />}
            >
              Contribute
            </Button>{' '}
            <Button
              borderRadius={'lg'}
              colorScheme="purple"
              variant="outline"
              size="lg"
              href="
              #"
              rightIcon={<FaIcons.FaStar />}
            >
              Star us on GitHub
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}