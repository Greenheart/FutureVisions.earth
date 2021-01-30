import { FC } from 'react'
import NextLink from 'next/link'
import { Flex, FlexProps, Link, Grid } from '@chakra-ui/react'

import { email } from '../shared/constants'

const Footer: FC<FlexProps> = (props) => (
    <Flex
        justifyContent="center"
        alignItems="center"
        pb="16"
        as="footer"
        {...props}
    >
        &copy; {new Date().getFullYear()} FutureVisions.earth
        <Grid gridTemplateColumns="1fr 1fr" gap="4" alignItems="center" mt="4">
            <NextLink href="/about" passHref>
                <Link variant="yellow" p="4">
                    Om oss
                </Link>
            </NextLink>

            <Link variant="yellow" href={'mailto:' + email} p="4">
                Kontakt
            </Link>
        </Grid>
    </Flex>
)

export default Footer
