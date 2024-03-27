import {
  Button,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { IoLanguage } from "react-icons/io5";
const NavigationBar = () => {
  const { t } = useTranslation();
  const toggleLanguage = () => {
    let lang = i18n.resolvedLanguage === "en" ? "cn" : "en";
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
  };
  return (
    <nav className="sticky top-0 z-20 mx-auto flex w-full items-center justify-between gap-x-3 bg-background py-3 md:w-5/6">
      <Navbar className="absolute z-0 md:hidden">
        <NavbarMenuToggle />
        <NavbarMenu>
          <NavbarMenuItem>
            <Link
              className="font-medium hover:text-blue-600"
              isExternal
              color="foreground"
              href="https://ceac.state.gov/genniv/"
            >
              {t("navbar.link2")}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="font-medium hover:text-blue-600"
              isExternal
              color="foreground"
              href="https://ais.usvisa-info.com/en-ca/niv/users/sign_in"
            >
              USVISA-INFO
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <div className="flex flex-grow items-center justify-center gap-x-3 md:justify-normal">
        <Button as={Link} href="/" isIconOnly className="bg-transparent">
          <img src="/logo.png" alt="main logo" width={38} height={38} />
        </Button>
        <div className="hidden items-center gap-x-6 md:flex">
          <Link
            className="text-base font-medium hover:text-blue-600"
            isExternal
            color="foreground"
            href="https://ceac.state.gov/genniv/"
          >
            {t("navbar.link2")}
          </Link>
          <Link
            className="text-base font-medium hover:text-blue-600"
            isExternal
            color="foreground"
            href="https://ais.usvisa-info.com/en-ca/niv/users/sign_in"
          >
            USVISA-INFO
          </Link>
        </div>
      </div>
      <div className="hidden items-center gap-x-3 md:flex">
        <div className="flex items-center gap-x-2 text-base font-medium">
          <p>support@usvisa.lol</p>
        </div>
        <Button
          as={Link}
          href="https://discord.gg/MFFf4RnpPm"
          isExternal
          isIconOnly
          className="bg-transparent"
        >
          <img src="/discord.png" alt="discord logo" width={30} height={30} />
        </Button>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button isIconOnly className="bg-transparent">
              <img
                src="/xhs.png"
                alt="xiaohongshu logo"
                width={30}
                height={30}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <img src="/xhsQR.jpg" alt="xiaohongshu QR code" width={200} />
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button isIconOnly className="bg-transparent">
              <img src="/wechat.png" alt="wechat logo" width={30} height={30} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <img src="/wechatQR.jpg" alt="wechat group QR code" width={200} />
          </PopoverContent>
        </Popover>
        <button
          className="flex gap-2 rounded-lg border p-1 hover:bg-foreground-100"
          onClick={toggleLanguage}
        >
          {t("toggleLanguage")}
          <IoLanguage size={26} />
        </button>
      </div>
      <div className="absolute right-0 flex gap-x-1">
        <Button
          as={Link}
          href="/community"
          variant="ghost"
          className="border border-foreground md:hidden"
        >
          {t("communityButtonText")}
        </Button>
        <Button
          className="flex gap-2 rounded-lg border border-foreground p-1 md:hidden"
          variant="ghost"
          onClick={toggleLanguage}
        >
          {t("toggleLanguage")}
          <IoLanguage size={26} />
        </Button>
      </div>
    </nav>
  );
};

export default NavigationBar;
