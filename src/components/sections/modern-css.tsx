import { css } from '@/styled-system/css'
import { Circle, Container, Flex, Stack, panda } from '@/styled-system/jsx'
import { button } from '@/styled-system/recipes'
import { token } from '@/styled-system/tokens'
import { Icon } from '@/theme/icons'
import { outdent } from 'outdent'
import { Code, codeStyle } from '../code-highlight/code'
import { LearnMore } from '../learn-more'

const codeSnippet = outdent`
device.find_prompt()
# 'Firewall/VPN Router 00000#'
device.run('configure)
device.run('hostname Guerrilla-Best')
device.run('exit')
device.run('show system')



"""
System Name                  : Guerrilla-Best
System Location              : Device Location
System Description           : 
Maintainer Information       : 
Host Name                    : Guerrilla-Best
MAC Address                  : 00:90:E8:12:34:56
Serial No.                   : MOXA00000000
System Uptime                : 0d2h7m18s
CPU Frequency                : 0 MHz
"""
`

export const SectionModernCss = () => {
  return (
    <panda.section bg="bg.main">
      <Container mb={{ lg: '-10rem' }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap="8"
          justify="space-between"
          py="20"
        >
          <Stack position="relative" gap="14" maxW={{ lg: '560px' }} pt="10">
            <Circle
              size="94px"
              className={button({ color: 'white', shape: 'circle' })}
              position="relative"
            >
              <Icon icon="Css3" />
              <panda.div
                position="absolute"
                top="-2"
                right="-5"
                color="text.main"
              >
                <Icon
                  icon="Sparks2"
                  className={css({ w: '22px', h: '22px' })}
                />
              </panda.div>
            </Circle>

            <Stack gap="4">
              <panda.h3 textStyle="panda.h3" fontWeight="bold">
                Master Automation Unveiling Network Devices
              </panda.h3>
              <panda.h4
                textStyle="panda.h4"
                fontWeight="medium"
                color="text.muted"
              >
                Guerrrilla uses modern and sweet Python3 syntax to give you best console output.
              </panda.h4>
            </Stack>

            <LearnMore href="/docs/concepts/cascade-layers" />
          </Stack>

          <panda.div flex="1" maxW={{ lg: '40rem' }} flexShrink="0">
            <Code
              lang="py"
              style={{ borderRadius: token('radii.xl') }}
              codeClassName={codeStyle}
            >
              {codeSnippet}
            </Code>
          </panda.div>
        </Flex>
      </Container>
    </panda.section>
  )
}
