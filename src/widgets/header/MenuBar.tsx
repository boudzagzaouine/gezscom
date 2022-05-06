import { MenuBarItem } from "widgets/header/MenuBarItem";
import { HomeIcon, LockIcon, WallIcon } from "widgets/icons";
import { View } from "widgets/View";
import { Profile } from "./Profile";

export function MenuBar() {
  return (
    <View className="right_side">
      <View className="header_widgets">
        <MenuBarItem href="#" title="Acceuil" icon={<HomeIcon />} />
        <MenuBarItem href="#" title="Wall" icon={<WallIcon />} />
        <MenuBarItem href="#" title="Lock" icon={<LockIcon />} badge={3} />
        <Profile />
      </View>
    </View>
  );
}
