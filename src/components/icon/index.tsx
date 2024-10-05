import { Dictionary } from "@/types/dictionary";
import {
  HelpIcon,
  HomeIcon,
  InvoiceIcon,
  OverviewIcon,
  SettingsIcon,
  UsersIcon,
} from "@/components/icon/svg-icons";

const Icon = (props: Dictionary) => {
  const icons: Dictionary = {
    menu: {
      home: <HomeIcon {...props} />,
      overview: <OverviewIcon {...props} />,
      invoice: <InvoiceIcon {...props} />,
      users: <UsersIcon />,
      settings: <SettingsIcon />,
      help: <HelpIcon />,
    },
  };

  const iconParts = props?.icon?.split(":");
  const iconGroup = icons?.[iconParts?.[0]];
  const iconItem = iconGroup?.[iconParts?.[1]];

  return iconItem || null;
};

export default Icon;
