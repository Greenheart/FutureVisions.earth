import { Text, Link, Heading, Box } from '@chakra-ui/react'

import Card from './Card'

interface FutureVisionsBook {
    title: string
    author: string
    link: string
    emoji: string
}

const books: FutureVisionsBook[] = [
    {
        title: 'Klimatpsykologi : Hur vi skapar hållbar förändring',
        author: 'Frida Hylander, Kali Andersson, Kata Nylén',
        link: 'https://www.klimatpsykologerna.se/',
        emoji: '📗',
    },
    {
        title: 'Aktivt hopp: att möta vår tids utmaningar utan att bli galen',
        author: 'Joanna Macy, Chris Johnstone',
        link: 'https://www.activehope.info/',
        emoji: '📗',
    },
    {
        title: 'Exponentiell Klimatomställning',
        author: 'Rebecka Carlsson',
        link: 'https://www.rebeckacarlsson.se/',
        emoji: '📗',
    },
    {
        title: 'Donutekonomi: Sju principer för en framtida ekonomi',
        author: 'Kate Raworth',
        link:
            'https://sv.wikipedia.org/wiki/Donutekonomi:_Sju_principer_f%C3%B6r_en_framtida_ekonomi',
        emoji: '📗',
    },
]

const Books = () => {
    return books.length ? (
        <>
            <Card mx="auto" my="20" p="2">
                <Heading textAlign="center" my="2">
                    Böcker
                </Heading>
                {books.map((b, i) => (
                    <Link href={b.link} isExternal key={b.link + i}>
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
                                {b.emoji} {b.title}
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
                                Författare:{' '}
                                <Text as="span" fontWeight="normal">
                                    {b.author}
                                </Text>{' '}
                            </Text>
                        </Box>
                    </Link>
                ))}
            </Card>
        </>
    ) : null
}

export default Books
