import { Link, Center, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

import Layout from '../layouts/Layout'
import PrimaryCTA from '../components/PrimaryCTA'
import Books from '../components/Books'
import Links from '../components/Links'
import Hero from '../components/Hero'

const Inspiration = () => (
    <Layout maxW="xl" fontSize={[16, null, 20]}>
        <Hero
            heading="Inspiration"
            text="Skrivkramp? Kolla in det här och inspireras!"
        />

        <Links />
        <Books />

        <Text mt="4" fontSize={['lg', null, null, 'xl']} textAlign="center">
            Vilken framtid vill du leva i och hur gör vi för att nå dit?
        </Text>
        <Center>
            <PrimaryCTA />
        </Center>
        <Center>
            <NextLink href="/" passHref>
                <Link variant="white" py="4">
                    Läs mer
                </Link>
            </NextLink>
        </Center>
    </Layout>
)

export default Inspiration
