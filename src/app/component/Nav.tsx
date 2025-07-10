import { Menu } from "lucide-react";
import Link from "next/link";
import { MENU, MenuItem } from "./MENU";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface Navbar1Props {
  MENU?: MenuItem[];
}

const Nav = ({}: Navbar1Props) => {
  return (
    <div className="w-full">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-center lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {MENU.map((item, index) => renderMenuItem(item, index))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <Link href="/" className="text-center text-2xl font-bold">
                Автошкола ООО &quot;КАО&quot;
              </Link>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2">
                      Автошкола ООО &quot;КАО&quot;
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {MENU.map((item, index) =>
                      renderMobileMenuItem(item, index),
                    )}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderMenuItem = (item: MenuItem, index: number) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={`menu-${index}`}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {item.items.map((subItem, idx) => (
            <NavigationMenuLink asChild key={`submenu-${index}-${idx}`}>
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={`menu-${index}`}>
      <NavigationMenuLink
        href={item.url}
        className="group bg-background hover:bg-muted hover:text-accent-foreground text-md inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, index: number) => {
  if (item.items) {
    return (
      <AccordionItem
        key={`mobile-menu-${index}`}
        value={`item-${index}`}
        className="border-b-0"
      >
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem, idx) => (
            <SubMenuLink
              key={`mobile-submenu-${index}-${idx}`}
              item={subItem}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={`mobile-menu-${index}`}
      href={item.url}
      className="text-md font-semibold"
    >
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default Nav;
