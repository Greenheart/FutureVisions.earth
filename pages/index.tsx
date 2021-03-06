import {
    Box,
    Center,
    ListItem,
    Text,
    Link,
    UnorderedList,
} from '@chakra-ui/react'

import Card from '../components/Card'
import Events from '../components/Events'
import IntroSection from '../components/IntroSection'
import PrimaryCTA from '../components/PrimaryCTA'
import Timeline from '../components/Timeline'
import Layout from '../layouts/Layout'
import Partners from '../components/Partners'
import DetailedInstructions from '../components/DetailedInstructions'
import Divider from '../components/Divider'
import Hero from '../components/Hero'

const Index = () => {
    return (
        <>
            <Layout>
                <Hero
                    heading="FutureVisions.earth"
                    text="Vilken framtid vill du leva i och hur gör vi för att nå
                        dit?"
                    cta={<PrimaryCTA />}
                />

                <Box maxW="4xl" mt="20" mx="auto">
                    <IntroSection
                        imageSide="left"
                        image={{
                            src: '/images/undraw_new_ideas_jdea.svg',
                            alt:
                                'Woman holding out her hand with a large lightbulb to represent new ideas',
                            priority: true,
                        }}
                        heading="Är du en ung framtidsvisionär?"
                        content={
                            <Text>
                                Utforska din kreativitet och skriv om den värld
                                du vill kämpa för. Välkommen att delta oavsett
                                om du är van skribent eller bara nyfiken!
                            </Text>
                        }
                    />

                    <IntroSection
                        imageSide="right"
                        image={{
                            src: '/images/undraw_dream_world_cin1.svg',
                            alt:
                                'Woman planting seeds that grow into a dream world',
                            priority: true,
                        }}
                        heading="Varför skriva framtidsvisioner?"
                        textAlign="left"
                        content={
                            <UnorderedList>
                                <ListItem>
                                    Det skapar en konkret bild vilket ger hopp
                                    och handlingskraft.
                                </ListItem>
                                <ListItem>
                                    Dela dina visioner med andra och få nya,
                                    outforskade idéer.
                                </ListItem>
                                <ListItem>
                                    Våra handlingar idag påverkar framtiden.
                                    Genom att utforska framtidsvisioner förstår
                                    vi hur vi kan agera och skapa en hållbar
                                    framtid.
                                </ListItem>
                            </UnorderedList>
                        }
                    />

                    <IntroSection
                        imageSide="left"
                        image={{
                            src: '/images/undraw_inspiration_lecl.svg',
                            alt: 'Man finding inspiration',
                        }}
                        heading="Noveller och dikter för framtiden"
                        content={
                            <>
                                <Text>
                                    Sätt ord på dina tankar och känslor! Hur får
                                    framtiden dig att känna? Vad ser du fram
                                    emot? Hur vill du leva i framtiden? Hur gör
                                    vi för att nå en hållbar framtid?
                                </Text>
                            </>
                        }
                    />

                    <IntroSection
                        imageSide="right"
                        image={{
                            src: '/images/undraw_thought_process_67my.svg',
                            alt:
                                'Man brainstorming, thinking and organizing new ideas',
                        }}
                        heading="För vem?"
                        content={
                            <Text>
                                Skrivprojektet är till för dig mellan 15 till 25
                                år som vill dela dina framtidsvisioner och
                                inspirera fler till att engagera sig för en
                                hållbar framtid.
                            </Text>
                        }
                    />

                    <Card mx="auto" textAlign="center">
                        <Text fontWeight="bold" fontSize="2xl">
                            Så, vilken framtid vill du leva i och hur gör vi för
                            att nå dit?
                        </Text>

                        <Text mt="8" fontSize="20px">
                            Skicka in ditt bidrag senast den 14 februari för en
                            chans att bli publicerad i en gemensam textsamling -
                            fylld av inspiration och framtidshopp. De utvalda
                            texterna kommer att publiceras hos våra
                            samarbetspartners{' '}
                            <Link
                                href="https://klimatprata.se"
                                isExternal
                                _hover={{
                                    textDecoration: 'underline !important',
                                }}
                            >
                                Klimatprata
                            </Link>{' '}
                            och{' '}
                            <Link
                                href="https://wedonthavetime.org/our-community?futurevisions.earth"
                                rel="noopener"
                                target="_blank"
                                _hover={{
                                    textDecoration: 'underline !important',
                                }}
                            >
                                We Don't Have Time
                            </Link>
                            . Alla texter kan läsas gratis.
                        </Text>

                        <Center>
                            <PrimaryCTA mb="4" />
                        </Center>
                    </Card>
                </Box>

                <Divider />

                <Box maxW="2xl" mx="auto">
                    <Events />
                </Box>

                <Divider />

                <Box maxW="2xl" mx="auto">
                    <Timeline />
                </Box>

                <Divider />

                <Box maxW="2xl" mx="auto">
                    <Partners />
                </Box>

                <Divider />

                <DetailedInstructions />
            </Layout>
        </>
    )
}

export default Index
