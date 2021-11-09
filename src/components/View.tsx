import classNames from "classnames";
import type { FC } from "react";
import type { ViewProps } from 'components/types';

export const View: FC<ViewProps> = ({
  row,
  col,
  className,
  as: Component = 'div',
  ...props
}) => (
  <Component
    {...props}
    className={classNames(
      {
        "flex flex-row": row,
        "flex flex-col": col,
      },
      className
    )}
  />
);

export const Row: FC<ViewProps> = ({ ...props }) => <View {...props} row />;

export const Col: FC<ViewProps> = ({ className, ...props }) => (
  <View {...props} col />
);
