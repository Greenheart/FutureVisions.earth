import { FC } from 'react'
import NextLink from 'next/link'
import { Button, ButtonProps } from '@chakra-ui/react'

import { formLink } from '../shared/constants'

const PrimaryCTA: FC<ButtonProps> = ({ ...props }) => (
    <>
        {/* <NextLink href={formLink} passHref> */}
        <Button
            size="lg"
            mt="8"
            as="a"
            target="_blank"
            rel="noopener"
            color="black"
            bg="#ffe156"
            transition="none"
            _disabled={{
                bg: '#FFD20A8f',
                cursor: 'not-allowed',
            }}
            _hover={{
                bg: '#FFD20A',
            }}
            _pressed={{
                bg: '#F5C800',
            }}
            _active={{
                bg: '#F5C800',
            }}
            disabled
            {...props}
        >
            {/* Skicka in ditt bidrag! */}
            Snart: Läs bidragen
        </Button>
        {/* </NextLink> */}
    </>
)

export default PrimaryCTA
