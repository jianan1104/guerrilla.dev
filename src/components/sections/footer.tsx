import { css } from '@/styled-system/css'
import { Container, Flex, Wrap, panda } from '@/styled-system/jsx'
import { button } from '@/styled-system/recipes'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonIcon } from '@/theme/icons'

export const SectionFooter = () => {
  return (
    <panda.footer bg={{ base: 'black', _dark: 'gray.700' }}>
      <Container py="10">
        <Flex
          gap="6"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'unset' }}
        >
          <panda.p
            color="yellow.300"
            textStyle={{ base: '8xl', md: 'panda.h1' }}
            letterSpacing="tighter"
            fontWeight="bold"
          >
            guerrilla
          </panda.p>
          <Image
            src="/cat-hello.png"
            width={196}
            height={261}
            alt="Yums the panda waving"
          />
        </Flex>

        <Wrap mt="12" justifyContent={{ base: 'center', md: 'unset' }}>
          <Link href="/docs" className={button({ color: 'ghost.white' })}>
            Docs
          </Link>
          <Link
            href="https://gitlab.com/moxa/qa/product/router/guerrilla"
            target="_blank"
            className={button({ color: 'ghost.white' })}
          >
            GitLab{' '}
            <ButtonIcon
              icon="ExternalLink"
              className={css({ color: 'yellow.400' })}
            />
          </Link>
        </Wrap>
      </Container>
    </panda.footer>
  )
}
