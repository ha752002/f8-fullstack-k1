import {
	Navbar as NextUINavbar,
	NavbarContent,
} from "@nextui-org/navbar";

import { ThemeSwitch } from "@/components/theme-switch";
import LocaleSwitcher from "@/components/locale-switcher";

export const Navbar = () => {
	return (
		<NextUINavbar position="sticky">
			<NavbarContent className=" basis-1 pl-4" justify="end">
				<LocaleSwitcher/>
				<ThemeSwitch />
			</NavbarContent>
		</NextUINavbar>
	);
};
