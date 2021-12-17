import { Text } from "components/Text";
import { Link } from "components/Link";
import { MenuBarItemProps } from "components/types";

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
