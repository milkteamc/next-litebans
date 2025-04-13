import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/layout/icons";
import { buttonVariants } from "@/components/ui/button";
import { FaD } from "react-icons/fa6";

export const GithubButton = () => (
  <Link
    href="https://discord.gg/22DxRjrXRv"
    target="_blank"
    rel="noreferrer"
  >
    <div
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-9 px-0"
      )}
    >
      <FaDiscord className="h-4 w-4" />
      <span className="sr-only">Discord</span>
    </div>
  </Link>
)