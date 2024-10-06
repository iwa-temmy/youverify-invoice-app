import { Dictionary } from "@/types/dictionary";
import {
  ArrowDownIcon,
  EyeOffIcon,
  EyeIcon,
  HelpIcon,
  HomeIcon,
  InvoiceIcon,
  NotificationIcon,
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
      notification: <NotificationIcon {...props} />,
    },
    random: {
      arrowDropdown: <ArrowDownIcon {...props} />,
    },
    lucide: {
      eye: <EyeIcon {...props} />,
      eyeOff: <EyeOffIcon {...props} />,
    },
  };

  const iconParts = props?.icon?.split(":");
  const iconGroup = icons?.[iconParts?.[0]];
  const iconItem = iconGroup?.[iconParts?.[1]];

  return iconItem || null;
};

export default Icon;
