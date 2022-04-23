import { ColorProps } from 'styled-system'

type NewColorProps = Omit<ColorProps, 'color'> & {
  color?: string
}

export type {
  NewColorProps as default,
  NewColorProps as ColorProps,
}
