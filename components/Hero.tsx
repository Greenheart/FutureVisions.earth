import { FC } from 'react'
import { Center, CenterProps, Heading, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import { Volume_1_PDFs } from '../shared/constants'

interface HeroProps extends CenterProps {
    heading: string
    text?: string
    cta?: React.ReactNode
}

const Hero: FC<HeroProps> = ({ heading, text, cta }) => (
    <Center flexDirection="column" textAlign="center">
        <Heading as="h1" fontSize={['30px', '40px', '50px', '60px']}>
            {heading}
        </Heading>

        <Text mt="4" mb="4" fontSize={['lg', null, null, 'xl']}>
            {text}
        </Text>

        {cta ? (
            <>
                {cta}
                <NextLink href={Volume_1_PDFs.highRes} passHref>
                    <Link variant="white" mt="4" isExternal>
                        Högupplöst version
                    </Link>
                </NextLink>
            </>
        ) : null}
    </Center>
)

export default Hero
