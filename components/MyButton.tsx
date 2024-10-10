import { ButtonProps } from "@/types/type";
import { Text, TouchableOpacity } from "react-native";

const getBgColor = (color: ButtonProps["bg"]) => {
  switch (color) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#0286FF]";
  }
};

const getTextColor = (color: ButtonProps["textColor"]) => {
  switch (color) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const MyButton = ({
  onPress,
  className,
  title,
  bg = "primary",
  textColor = "default",
  IconLeft,
  IconRight,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full items-center justify-center rounded-full p-3 flex flex-row shadow-md shadow-neutral-400/70 ${className} ${getBgColor(bg)}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`font-JakartaBold text-lg ${getTextColor(textColor)}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};
export default MyButton;
