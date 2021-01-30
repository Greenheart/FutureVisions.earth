import { FC } from 'react'
import { Center, CenterProps, Heading, Text } from '@chakra-ui/react'

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

        {cta ? cta : null}
    </Center>
)

export default Hero
