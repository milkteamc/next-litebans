import { cn } from "@/lib/utils";
import { siteConfig } from "@config/site";
import { getSkinUUID } from "@/utils/bedrock";

interface AvatarBodyProps {
  name: string;
  uuid: string;
  console?: boolean;
  className?: string;
}

export const AvatarBody = ({ name, uuid, console, className }: AvatarBodyProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img 
    src={console ? siteConfig.console.body : `https://visage.surgeplay.com/full/512/${name}`} 
    alt={name}
    width={192}
    height={192}
    className={cn("hidden md:block mx-auto transition ease-in-out", className)}
  />
)