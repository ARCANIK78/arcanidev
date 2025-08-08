import Link from 'next/link'
import styled from '@emotion/styled'
import { Text, useColorModeValue } from '@chakra-ui/react'
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`
const Logo = () => {
    return (
        (<Link href="/" scroll={false}>
            <LogoBox>
                 <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c", sans-serif'
                    fontWeight="bold"
                    ml={3}
                    >
                   Arcani<Text as="span">Dev</Text>
                </Text>
            </LogoBox>
        </Link>
        )
    )
}
export default Logo 