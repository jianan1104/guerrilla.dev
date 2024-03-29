import { AstroLogo } from '@/icons/astro'
import { GatsbyLogo } from '@/icons/gatsby'
import { NextjsLogo } from '@/icons/nextjs'
import { PreactLogo } from '@/icons/preact'
import { QwikLogo } from '@/icons/qwik'
import { RedwoodLogo } from '@/icons/redwood'
import { RemixLogo } from '@/icons/remix'
import { SolidjsLogo } from '@/icons/solid'
import { StorybookLogo } from '@/icons/storybook'
import { SvelteLogo } from '@/icons/svelte'
import { ViteLogo } from '@/icons/vite'
import { VueLogo } from '@/icons/vue'
import { css } from '@/styled-system/css'
import { grid, square, stack } from '@/styled-system/patterns'
import Link from 'next/link'

const logoMap = {
  mxros: {
    name: 'Router',
    href: '/docs/guide/router/overview',
    logo: NextjsLogo
  },
  mxnos: {
    name: 'Switch',
    logo: GatsbyLogo,
    href: '/docs/guide/switch/overview'
  },
  linux: {
    name: 'Linux',
    logo: SolidjsLogo,
    href: '/docs/guide/linux/overview'
  },
}

type Props = {
  framework: keyof typeof logoMap
}

export const FrameworkCard = (props: Props) => {
  const { framework } = props
  const { logo: Logo, name, href } = logoMap[framework] ?? {}
  return (
    <div
      className={stack({
        gap: '6',
        position: 'relative',
        direction: { base: 'column', sm: 'row' },
        align: { base: 'flex-start', sm: 'center' }
      })}
    >
      <div
        className={square({
          size: '14',
          layerStyle: 'offShadow',
          shadowColor: { _dark: 'neutral.700' },
          rounded: 'md'
        })}
      >
        <Logo />
      </div>
      <div>
        <h4 className={css({ fontWeight: 'medium' })}>
          <Link
            href={href}
            className={css({
              _before: {
                content: '""',
                position: 'absolute',
                inset: '0'
              }
            })}
          >
            {name}
          </Link>
        </h4>
      </div>
    </div>
  )
}

export const FrameworkCards = () => {
  return (
    <div className={grid({ columns: 3, gap: '8', mt: '8', mb: '16' })}>
      {Object.keys(logoMap).map(framework => (
        <FrameworkCard
          key={framework}
          framework={framework as keyof typeof logoMap}
        />
      ))}
    </div>
  )
}
