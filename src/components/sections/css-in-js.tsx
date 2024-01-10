import { css } from '@/styled-system/css'
import { HStack, Stack, VStack, panda } from '@/styled-system/jsx'
import { Icon, IconType } from '@/theme/icons'
import { outdent } from 'outdent'
import { Code } from '../code-highlight/code'
import { tabs } from '../code-highlight/tabs.extension'

const codeSnippets = [
  {
    code: outdent`
    from guerrilla.device import Device
    config = {
        "name": "EDR-G9010",
        "type": "mxros",
        "protocol": "ssh",
        "host": "192.168.127.254",
        "username": "admin",
        "password": "moxa",
    }
    device = Device(config)
    device.connect()
    device.run('show version')
  `,
    title: 'SSH',
    lang: 'py'
  },
  {
    code: outdent`
    from guerrilla.device import Device
    config = {
        "name": "EDR-G9010",
        "type": "mxros",
        "protocol": "telnet",
        "host": "192.168.127.254",
        "username": "admin",
        "password": "moxa",
    }
    device = Device(config)
    device.connect()
    device.run('show version')
    `,
    title: 'Telnet',
    lang: 'py'
  },
  {
    code: outdent`
    from guerrilla.device import Device
    config = {
        "name": "EDR-G9010",
        "type": "mxros",
        "protocol": "serial",
        "host": "/dev/ttyUSB0",
        "username": "admin",
        "password": "moxa",
    }
    device = Device(config)
    device.connect()
    device.run('show version')
    `,
    title: 'Serial',
    lang: 'py'
  }
]

const features: Array<{ title: string; description: string; icon: IconType }> =
  [
    {
      title: 'Quick Response',
      description: 'Fast and reliable response time',
      icon: 'FastForwardArrow'
    },
    {
      title: 'Build-in Functions',
      description: 'Build-in functions for device automation testing',
      icon: 'CaseLogo'
    },
    {
      title: 'Amazing DX',
      description: 'Low learning curve, great developer experience',
      icon: 'Sparks'
    }
  ]

export const SectionCssInJS = () => {
  return (
    <panda.section bg="black" pt="10rem" pb="12rem" color="white" mt="2px">
      <panda.div maxW="8xl" mx="auto" px={{ base: '4', md: '6', lg: '8' }}>
        <VStack gap="16">
          <panda.h2
            textStyle="panda.h2"
            fontWeight="semibold"
            textAlign={{ base: 'center', lg: 'left' }}
          >
            SDK library{' '}
            <panda.span color="yellow.300">you’ll enjoy</panda.span> using 🐱
          </panda.h2>

          <panda.div width="full" maxW="4xl" mx="auto">
            <Code lang="py" extensions={[tabs]} subProps={codeSnippets} />
          </panda.div>

          <VStack maxW={{ base: '2xl', lg: '5xl' }} mx="auto" gap="16">
            <panda.span
              textStyle="panda.h3"
              textAlign="center"
              fontWeight="semibold"
            >
              Multi-interface compatibility with SSH, Telnet and Serial, pure python support, and best-in-class developer experience.
            </panda.span>

            <Stack
              direction={{ base: 'column', lg: 'row' }}
              align={{ base: 'center', lg: 'flex-start' }}
              justify="space-between"
              w="100%"
              gap="8"
            >
              {features.map(({ title, description, icon }) => (
                <Stack maxW="440px" textStyle="xl" width="full" key={title}>
                  <HStack>
                    <Icon
                      icon={icon}
                      className={css({ color: 'yellow.300' })}
                    />
                    <panda.span fontWeight="semibold">{title}</panda.span>
                  </HStack>
                  <panda.span color="gray.200" maxW={{ lg: '256px' }}>
                    {description}
                  </panda.span>
                </Stack>
              ))}
            </Stack>
          </VStack>
        </VStack>
      </panda.div>
    </panda.section>
  )
}
