import React from 'react';
import css from '@styled-system/css';
import { variant, Prop } from '@modulz/radix-system';
import { Heading as HeadingPrimitive, HeadingProps as HeadingPrimitiveProps } from 'mdlz-prmtz';

type HeadingProps = HeadingPrimitiveProps & {
  fontWeight?: Prop<400 | 500>;
  size?: Prop<0 | 1 | 2 | 3 | 4 | 5>;
  truncate?: Prop<boolean>;
  children?: React.ReactNode;
  as?: any;
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
  <HeadingPrimitive
    {...props}
    ref={ref}
    css={[
      css({
        color: 'grays.8',
        lineHeight: 1.2,
        fontWeight: 700,
        fontFamily: 'normal',
      }),
      variant({
        size: {
          0: {
            fontSize: 3,
            letterSpacing: '-.0125em',
            textIndent: '-.05em',
          },
          1: {
            fontSize: 4,
            letterSpacing: '-.005em',
            textIndent: '-.06em',
          },
          2: {
            fontSize: 5,
            letterSpacing: '-.012em',
            textIndent: '-.075em',
          },
          3: {
            fontSize: 6,
            letterSpacing: '-.028em',
            textIndent: '-.085em',
          },
          4: {
            fontSize: 7,
            letterSpacing: '-.042em',
            textIndent: '-.088em',
          },
          5: {
            fontSize: 8,
            letterSpacing: '-.052em',
            textIndent: '-.09em',
          },
        },
      }),
      variant({
        truncate: {
          true: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          },
        },
      }),
    ]}
  />
));

Heading.defaultProps = {
  truncate: false,
  size: 2,
};