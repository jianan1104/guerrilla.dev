import { css } from '@/styled-system/css'
import { Circle, Container, Flex, Stack, panda } from '@/styled-system/jsx'
import { button } from '@/styled-system/recipes'
import { token } from '@/styled-system/tokens'
import { Icon } from '@/theme/icons'
import { outdent } from 'outdent'
import { Code, codeStyle } from '../code-highlight/code'
import { LearnMore } from '../learn-more'

const codeSnippet = outdent`
# pytest

def test_set_hostname():
    device.config.hostname.set_hostname('pytest)
    ret = device.show_system()

    assert 'pytest' in ret.output, 'hostname not set'

# behave

@given('I set hostname to {hostname}')
def step_impl(context, hostname):
    context.device.config.hostname.set_hostname(hostname)

@then('the hostname should be {hostname}')
def step_impl(context, hostname):
    ret = context.device.show_system()

    assert hostname in ret.output, 'hostname not set'

`

export const SectionRecipes = () => {
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
              <Icon icon="Recipe" />
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
                Intergration Automation Tesintg Framework just like Stitches
              </panda.h3>
              <panda.h4
                textStyle="panda.h4"
                fontWeight="medium"
                color="text.muted"
              >
                Guerrilla gives you a robust functions to define scripts to help you create automation testing.<br/>
                PyTest, BDD-Behave, and more.
              </panda.h4>
            </Stack>

            <panda.div position={{ lg: 'absolute' }} bottom="40" left="0">
              {/* <LearnMore href="/docs/concepts/recipes" /> */}
            </panda.div>
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
