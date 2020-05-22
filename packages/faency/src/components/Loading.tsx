import styled, { css as _css, keyframes, SimpleInterpolation } from 'styled-components'
import { Box, BoxProps as BoxPrimitiveProps } from '@modulz/primitives'
import { theme } from '../theme'

export type LoadingProps = BoxPrimitiveProps & {
  progress?: number
  color?: string
}

const loadingAnimation = keyframes`
  50% {
    width: 100%;
    margin-left: 0;
  }
  100% {
    width: 0%;
    margin-left: 100%;
  }
`

export const Loading = styled(Box)<LoadingProps>`
  height: 4px;
  width: 0;

  ${({ color = theme.colors.primary }): SimpleInterpolation => `
    background-color: ${color};
  `}

  ${(props): SimpleInterpolation =>
    props.progress
      ? `
          width: ${props.progress}%;
          transition: width 1s ease-in-out;
        `
      : _css`
          width: 0;
          animation: ${loadingAnimation} 2s ease-in-out infinite
      `}
`
