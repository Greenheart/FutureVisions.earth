import { FC } from 'react'
import NextLink from 'next/link'
import { Flex, FlexProps, Link } from '@chakra-ui/react'

import { email, instagram } from '../shared/constants'

const Footer: FC<FlexProps> = (props) => (
    <Flex
        justifyContent="center"
        alignItems="center"
        pb="16"
        flexDir="column"
        as="footer"
        {...props}
    >
        &copy; {new Date().getFullYear()} FutureVisions.earth
        <Flex alignItems="center" mt="4" justifyContent="center">
            <NextLink href="/about" passHref>
                <Link variant="yellow" p="4">
                    Om oss
                </Link>
            </NextLink>

            <Link variant="yellow" href={instagram} p="4" isExternal>
                Instagram
            </Link>

            <Link variant="yellow" href={'mailto:' + email} p="4">
                Kontakt
            </Link>
        </Flex>
    </Flex>
)

export default Footer
