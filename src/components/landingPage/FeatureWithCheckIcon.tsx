import { Check } from "lucide-react";

type FeatureWithCheckIconProps = {
    text: string;
    checkColor: string;
}

export default function FeatureWithCheckIcon({text, checkColor}: FeatureWithCheckIconProps) {
  return (
    <li className="flex gap-1.5 items-center text-left">
      <Check className={`w-5 h-5 shrink-0 ${checkColor}`} />
      {text}
    </li>
  );
}
