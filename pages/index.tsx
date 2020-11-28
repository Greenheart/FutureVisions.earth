import {
    Box,
    Button,
    Center,
    Divider,
    Heading,
    ListItem,
    Text,
    Link,
    UnorderedList,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'

import Layout from '../layouts/Layout'
import { formLink, email } from '../shared/constants'

const PrimaryCTA = () => (
    <NextLink href={formLink} passHref>
        <Button
            size="lg"
            mt="8"
            as="a"
            target="_blank"
            rel="noopener"
            color="black"
            bg="#ffe156"
            transition="none"
            _hover={{
                bg: '#FFD20A',
            }}
            _pressed={{
                bg: '#F5C800',
            }}
            _active={{
                bg: '#F5C800',
            }}
        >
            Skicka in ditt bidrag!
        </Button>
    </NextLink>
)

const Index = () => {
    return (
        <>
            <Layout>
                <Center flexDirection="column">
                    <Heading as="h1" size="3xl">
                        FutureVisions.earth
                    </Heading>

                    <Text mt="4" fontSize="xl">
                        Vilken framtid vill du leva i och hur gör vi för att nå
                        dit?
                    </Text>

                    <PrimaryCTA />

                    <Box mt="8" p="4">
                        <Image
                            src="/images/undraw_the_world_is_mine_nb0e.svg"
                            alt="Woman carrying planet Earth on her shoulders"
                            width="300"
                            height="300"
                        />
                    </Box>
                </Center>

                <Box maxW="xl" mt="8" mx="auto">
                    <Text>
                        Är du en ung framtidsvisionär? Tillsammans utforskar vi
                        vår kreativitet och skriver om den framtid vi vill kämpa
                        för. Välkommen oavsett om du är kunnig och van att
                        skriva - eller om du är nyfiken och vill lära dig mer!
                    </Text>
                    <Box mt="4">
                        <Heading as="h2" size="lg">
                            För vem?
                        </Heading>
                        <Text>
                            Projektet är till för dig mellan 15 till 25 år som
                            vill bidra med dina framtidsvisioner och inspirera
                            fler till att engagera sig för en hållbar framtid.
                        </Text>
                    </Box>
                    <Center mt="8" p="4">
                        <Image
                            src="/images/undraw_new_ideas_jdea.svg"
                            alt="Woman holding out her hand with a large lightbulb to represent new ideas"
                            width="300"
                            height="300"
                        />
                    </Center>

                    <Box mt="8">
                        <Heading as="h2" size="lg">
                            Noveller och dikter för framtiden
                        </Heading>
                        <Text>
                            Genom att skriva om framtiden får du möjlighet att
                            sätta ord på dina tankar och känslor. Vad ser du
                            fram emot? Vilken framtid vill du leva i? Hur gör vi
                            för att nå dit? Tio bidrag som skickats in senast
                            den 14 februari kommer att väljas ut till en
                            textsamling fylld av inspiration och framtidshopp.
                            Texterna publiceras hos Klimatprata och
                            samarbetspartners och kan läsas gratis.
                        </Text>
                    </Box>

                    <Center mt="8" p="4">
                        <Image
                            src="/images/undraw_dream_world_cin1.svg"
                            alt="Woman planting seeds that grow into a dream world"
                            width="300"
                            height="300"
                        />
                    </Center>

                    <Box mt="8">
                        <Heading as="h2" size="lg">
                            Varför ska du delta i projektet?
                        </Heading>
                        <UnorderedList>
                            <ListItem>Hopp om framtiden</ListItem>
                            <ListItem>Gemenskap</ListItem>
                            <ListItem>
                                Chans att din dikt eller novell blir publicerad
                            </ListItem>
                        </UnorderedList>
                    </Box>

                    <Center mt="8" p="4">
                        <Image
                            src="/images/undraw_thought_process_67my.svg"
                            alt="Man brainstorming, thinking and organizing new ideas"
                            width="300"
                            height="300"
                        />
                    </Center>

                    <Text
                        fontWeight="bold"
                        mt="8"
                        textAlign="center"
                        fontSize="2xl"
                    >
                        Så, vilken framtid vill du leva i och hur gör vi för att
                        nå dit?
                    </Text>

                    <Center>
                        <PrimaryCTA />
                    </Center>
                </Box>

                <Divider maxW="xs" my="16" mx="auto" />

                <Box maxW="xl" mx="auto">
                    <Heading as="h2" size="lg">
                        Hur går det till?
                    </Heading>
                    <UnorderedList>
                        <ListItem>
                            Du skriver själv, eller med dina vänner
                        </ListItem>
                        <ListItem>
                            Du bifogar och skickar in din novell eller dikt i{' '}
                            <Link href={formLink} isExternal>
                                formuläret
                            </Link>
                        </ListItem>
                        <ListItem>
                            Författaren håller och äger rätten till sin text,
                            men genom att skicka in texten godkänner du att vi
                            publicerar den.
                        </ListItem>
                        <ListItem>
                            Max 2 st inskickade bidrag per person.
                        </ListItem>
                        <ListItem>
                            Har du några frågor, hör av dig till{' '}
                            <Link href={'mailto:' + email}>{email}</Link>
                        </ListItem>
                    </UnorderedList>
                </Box>

                <Box maxW="xl" mt="8" mx="auto">
                    <Heading as="h2" size="lg">
                        Format för novell och dikt:
                    </Heading>
                    <UnorderedList>
                        <ListItem>Times New Roman typsnitt 12</ListItem>
                        <ListItem>Språk: Svenska</ListItem>
                        <ListItem>Max 1250 ord</ListItem>
                    </UnorderedList>
                </Box>

                <Divider maxW="xs" my="16" mx="auto" />

                <Box maxW="xl" mx="auto" mb="12">
                    <Text>
                        <Text fontWeight="bold" as="span">
                            Restriktioner:{' '}
                        </Text>
                        Novellen/dikten får inte vara publicerad sedan tidigare
                        i varken tryckt eller digitalt format. Den som lämnar in
                        försäkrar sig om att hen skrivit novellen/dikten. Max 2
                        bidrag per person.
                    </Text>
                    <Text mt="4">
                        <Text fontWeight="bold" as="span">
                            Rättigheter:{' '}
                        </Text>
                        Genom att skicka in novellen eller dikten får
                        FutureVisions.earth ditt godkännande att publicera
                        texten i sina kanaler, hos samarbetspartners och i
                        tryck. Ditt namn/pseudonym kommer att publiceras med
                        texten.{' '}
                    </Text>
                </Box>
            </Layout>
        </>
    )
}

export default Index