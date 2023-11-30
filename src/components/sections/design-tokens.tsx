import { css } from '@/styled-system/css'
import { Box, Circle, Container, Stack, panda } from '@/styled-system/jsx'
import { button } from '@/styled-system/recipes'
import { token } from '@/styled-system/tokens'
import { Icon } from '@/theme/icons'
import { outdent } from 'outdent'
import { Code, codeStyle } from '../code-highlight/code'
import { LearnMore } from '../learn-more'

const codeSnippets = {
  guerrillaSDK: outdent`
device.config.hostname.set_hostname('Guerrilla-Best')
device.show_system()

"""
System Information 
System Name                  : Guerrilla-Best
System Location              : Device Location
System Description           : 
Maintainer Information       : 
Host Name                    : Guerrilla-Best
MAC Address                  : 00:90:E8:12:34:56
Serial No.                   : MOXA00000000
System Uptime                : 0d0h11m46s
CPU Frequency                : 0 MHz
"""
  `,
  terminal: outdent`
> ssh admin@192.168.127.254

admin@192.168.127.254's password: 
                    MOXA EDR-G9010-VPN-2MGSFP-T Series  V3.2.99 build 23110317                
--------------------------------------------------------------------------------
Please change the default username and password in order to enhance security.

Firewall/VPN Router 00000# configure
Firewall/VPN Router 00000(config)# hostname many-steps
Firewall/VPN Router 00000(config)# exit
Firewall/VPN Router 00000# save
Please wait, saving configurations ...
Successful!
Firewall/VPN Router 00000# show system 
System Information 
System Name                  : many-steps
System Location              : Device Location
System Description           : 
Maintainer Information       : 
Host Name                    : many-steps
MAC Address                  : 00:90:E8:12:34:56
Serial No.                   : MOXA00000000
System Uptime                : 0d0h6m54s
CPU Frequency                : 0 MHz
Firewall/VPN Router 00000# 

  `
}

const CodePanel = (props: {
  title: string
  lang: string
  children: string
  className?: string
}) => {
  const { title, lang, children, className } = props
  return (
    <div className={className}>
      <panda.span
        ml="8"
        display="inline-flex"
        py="2"
        px="4"
        roundedTop="lg"
        bg="bg.main"
        fontWeight="semibold"
        textStyle="xl"
      >
        {title}
      </panda.span>
      <panda.div flexShrink="0">
        <Code
          lang={lang}
          style={{ borderRadius: token('radii.xl'), margin: '0' }}
          codeClassName={codeStyle}
        >
          {children}
        </Code>
      </panda.div>
    </div>
  )
}

export const SectionDesignTokens = () => {
  return (
    <panda.section bg="bg.inverted">
      <Container pt={{ base: '20', lg: '40' }} pb={{ base: '16', lg: '32' }}>
        <Stack
          gap="20"
          direction={{ base: 'column', lg: 'row' }}
          align={{ lg: 'center' }}
          mb="20"
        >
          <Circle
            size="173px"
            boxShadowColor="bg.dark"
            className={button({ color: 'yellow', shape: 'circle' })}
            position="relative"
            color="text.headline"
          >
            <Icon icon="DesignTokenBox" />
            <panda.div
              position="absolute"
              top="-15px"
              right="-30px"
              color="text.main"
            >
              <Icon icon="Sparks2" className={css({ w: '48px', h: '48px' })} />
            </panda.div>
          </Circle>

          <Box flex="1">
            <Stack maxW={{ lg: '560px' }}>
              <panda.h3 textStyle="panda.h3" fontWeight="bold">
                Build-In Functions Support
              </panda.h3>
              <panda.h4
                textStyle="panda.h4"
                fontWeight="medium"
                color="text.muted"
              >
                Execute network device commands with ease. <br/>No more manual work. 🦾 <br/>No more getting lost in the terminal. 😻
              </panda.h4>
            </Stack>
          </Box>

          <LearnMore href="/docs/theming/tokens" />
        </Stack>

        <Stack direction={{ base: 'column', lg: 'row' }} gap="10">
          <CodePanel title="Guerrilla SDK" lang='py' className={css({ flex: '40%' })}>
            {codeSnippets.guerrillaSDK}
          </CodePanel>
          <CodePanel title="Tranditional Terminal" lang='bash' className={css({ flex: '60%' })}>
            {codeSnippets.terminal}
          </CodePanel>
        </Stack>
      </Container>
    </panda.section>
  )
}
