import classNames from "classnames";
import type { ViewProps } from "widgets/types";
import { FC } from "react";

export const View = <C extends React.ElementType = "div">({
  row,
  col,
  className,
  as,
  ...props
}: ViewProps<C>) => {
  const Component = as || "div";
  return (
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
};

type ViewPropsWithoutColRow<C extends React.ElementType> = Omit<
  ViewProps<C>,
  "col" | "row"
>;
export const Row = <C extends React.ElementType = "div">(
  props: ViewPropsWithoutColRow<C>
) => <View {...props} row />;

export const Col = <C extends React.ElementType = "div">(
  props: ViewPropsWithoutColRow<C>
) => <View {...props} col />;

export const Footer: FC<ViewProps<'footer'>> = props => <View as='footer' {...props} />