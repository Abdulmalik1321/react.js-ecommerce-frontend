import { Button } from "@/shadcn/ui/button";
import { ModeToggle } from "../shadcn/mode-toggle";
import { Separator } from "@/shadcn/ui/separator";

export function NavBar() {
  return (
    <div className="w-full top-0 sticky z-10">
      <div className="w-full flex items-center p-3 justify-between bg-[hsl(var(--background))]">
        <div className="flex items-end">
          <h1 className="text-5xl">
            Electronics<strong>Hub</strong>
          </h1>
        </div>
        <div className="flex justify-between items-end gap-5 mr-32">
          <Button
            className="text-xl text-[vlc(--primary-foreground)]"
            variant="link">
            Home
          </Button>
          <Button
            className="text-xl text-[vlc(--primary-foreground)]"
            variant="link">
            Shope
          </Button>
          <Button
            className="text-xl text-[vlc(--primary-foreground)]"
            variant="link">
            Contact Us
          </Button>
        </div>
        <div className="flex items-end gap-2">
          <ModeToggle />
          <Button>Sign In</Button>
        </div>
      </div>
      <Separator />
    </div>
  );
}