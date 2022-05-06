import { Text } from "widgets/Text";
import { Link } from "widgets/Link";
import { MenuBarItemProps } from "widgets/types";

export const MenuBarItem = <C extends React.ElementType = "a">({
  href,
  icon,
  className,
  badge,
  ...props
}: MenuBarItemProps<C>) => {
  return (
    <Link href={href} className={`is_icon ${className}`} {...props}>
      {icon}
      {badge && (<Text>{badge}</Text>)}
    </Link>
  );
};
