import * as R from "react";

const useBtnIcon = ({ name, onPress }) => {
  const [outlined, setOutlined] = R.useState(true);

  const toggleIcon = () => {
    setOutlined(pv => !pv);
    onPress?.();
  };

  const baseName = (name || "star").replace("-outline", "");
  const iconName = outlined ? `${baseName}-outline` : baseName;

  return {
    toggleIcon,
    iconName,
    outlined,
  };
};

export { useBtnIcon };
