import Marquee from 'react-fast-marquee'
import { css } from '@/styled-system/css'
import { HStack, panda } from '@/styled-system/jsx'

const features = [
  'Multi-interface support',
  'Python based',
  'Easy customization',
  'Lightweight',
  'Utility Classes',
  'Logging system',
  'Just-in-Time',
  'Scripting',
]

export const FeatureMarquee = () => {
  return (
    <panda.div bg="bg.inverted" py="5" textStyle="2xl" fontWeight="semibold">
      <Marquee className={css({ listStyleType: 'none' })} autoFill>
        {features.map((feature, index) => (
          <panda.li key={index} mx="2">
            <HStack gap="4">
              <panda.span letterSpacing="tight">{feature}</panda.span>
              <span>•</span>
            </HStack>
          </panda.li>
        ))}
      </Marquee>
    </panda.div>
  )
}
