import Image from 'next/image'
import Link from 'next/link'
import { css, cx } from '@/styled-system/css'
import { Container, Stack, VStack, panda } from '@/styled-system/jsx'
import { button } from '@/styled-system/recipes'

export const SectionStartBuilding = () => {
  return (
    <panda.section bg="bg.main">
      <Container pt="240px" pb="24">
        <VStack>
          <Image
            src="/cat-rocket.png"
            width={313}
            height={342}
            alt="Cat riding a rocket"
            className={css({
              position: 'absolute',
              top: '-20',
              left: '50%',
              transform: 'translateX(-50%)'
            })}
          />

          <VStack gap="6">
            <panda.span
              textStyle="panda.h2"
              letterSpacing="tight"
              fontWeight="bold"
              textAlign="center"
            >
              Start building with <br />
              Guerrilla today
            </panda.span>

            <Stack
              width="full"
              direction={{ base: 'column', sm: 'row' }}
              align={{ base: 'center', sm: 'unset' }}
              justify={{ sm: 'center' }}
            >
              <Link
                href="/docs"
                className={cx(
                  button({ color: 'main', size: 'lg' }),
                  css({ w: { base: '100%', sm: '240px' } })
                )}
              >
                Get Started
              </Link>
            </Stack>
          </VStack>
        </VStack>
      </Container>
    </panda.section>
  )
}
