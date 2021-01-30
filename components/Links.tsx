import { Text, Link, Heading, Box } from '@chakra-ui/react'

import Card from './Card'

interface FutureVisionsLink {
    title: string
    description: string
    link: string
    emoji: string
}

const links: FutureVisionsLink[] = [
    {
        title: 'Klimatprata: Idéer för att lösa klimatkrisen',
        description: '',
        link: 'https://klimatprata.se/losningar',
        emoji: '💡',
    },
    {
        title: 'Klimatprata: Visionära samtal',
        description: '',
        link: 'https://klimatprata.se/olika_samtal',
        emoji: '🗣',
    },
    {
        title: 'WWF: Så kan du förändra världen',
        description: '',
        link:
            'https://wwwwwfse.cdn.triggerfish.cloud/uploads/2019/04/ungas-rst-i-samhllet-190430-final.pdf',
        emoji: '🌍',
    },
]

const Links = () => {
    return links.length ? (
        <>
            <Card mx="auto" my="20" p="2">
                <Heading textAlign="center" my="2">
                    Länkar
                </Heading>
                {links.map((l, i) => (
                    <Link href={l.link} isExternal key={l.link + i}>
                        <Box
                            borderRadius="lg"
                            p={['4', null, null, '5']}
                            style={{
                                textDecoration: 'none !important',
                            }}
                            _hover={{
                                cursor: 'pointer',
                                backgroundImage:
                                    'linear-gradient(25deg,#009eea,#fff)',
                            }}
                            position="relative"
                        >
                            <Heading as="h3" fontSize="md" pr="4">
                                {l.emoji} {l.title}
                            </Heading>
                            <Text
                                position="absolute"
                                top="4"
                                right="4"
                                as="span"
                            >
                                →
                            </Text>
                            <Text fontSize="1rem" mt="1">
                                <Text as="span" fontWeight="normal">
                                    {l.description}
                                </Text>{' '}
                            </Text>
                        </Box>
                    </Link>
                ))}
            </Card>
        </>
    ) : null
}

export default Links
