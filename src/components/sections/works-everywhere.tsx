import { ComponentPropsWithoutRef } from 'react'
import {
  Container,
  HStack,
  Square,
  Stack,
  VStack,
  panda
} from '@/styled-system/jsx'
import { Icon, IconType } from '@/theme/icons'

export const SectionWorksEverywhere = () => {
  return (
    <section>
      <Container pt="32" pb="48">
        <VStack gap="20">
          <panda.h2 textStyle="panda.h2" fontWeight="bold" textAlign="center">
            Works Everywhere. <br />
          </panda.h2>

          <Stack
            gap="12"
            direction={{ base: 'column', lg: 'row' }}
            align="center"
          >
            

            <Square
              position="relative"
              top={{ lg: '-3' }}
              size="120px"
              layerStyle="offShadow"
              bg="yellow.300"
              color="black"
              rounded="lg"
            >
              <Icon icon="LogoWithText" width="70" height="70" />
              
            </Square>
        
          </Stack>

          <VStack maxW="560px" mx="auto">
            <panda.span
              textStyle="2xl"
              fontWeight="medium"
              letterSpacing="tight"
              textAlign="center"
            >
              Guerrilla works out of box with your favorite network devices. Use it
              with router, switch, linux server.
            </panda.span>
          </VStack>
        </VStack>
      </Container>
    </section>
  )
}

const ProjectLogo = ({
  title,
  ...iconProps
}: { icon: IconType; title: string } & ComponentPropsWithoutRef<
  typeof Icon
>) => (
  <VStack>
    <Square
      size="20"
      rounded="lg"
      layerStyle="offShadow"
      _dark={{ boxShadowColor: 'yellow.300' }}
    >
      <Icon {...iconProps} />
    </Square>
    <panda.span textStyle="xl" letterSpacing="tight" fontWeight="bold">
      {title}
    </panda.span>
  </VStack>
)
