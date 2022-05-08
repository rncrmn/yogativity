import { FC, useState } from "react";
import { Link } from "react-scroll";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar: FC = () => {
    const menuList: Array<string> = [
        "home",
        "about",
        "classes",
        "features",
        "testimonial",
        "contact",
    ];

    const [mobileMenu, setMobileMenu] = useState<boolean | null>(false);

    const onToggle = () => {
        setMobileMenu((prev) => !prev);
    };

    return (
        <div className="relative md:flex md:justify-between md:align-center">
            <div className="font-sans text-3xl font-bold text-pink-700">
                Yogativity
            </div>
            <nav
                className={`w-full md:w-auto absolute block bg-white md:bg-transparent top-16 md:static md:flex md:justify-center md:align-center dark:text-white ${
                    mobileMenu ? "block" : "hidden"
                }`}
            >
                {menuList?.map((item, index) => (
                    <Link
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="block border-b-2 md:border-b-0 md:inline font-semibold text-[16px] self-center px-6 md:px-3 py-4 md:py-2 uppercase cursor-pointer"
                        key={item + index}
                    >
                        {item}
                    </Link>
                ))}
            </nav>
            <div
                className="absolute right-0 visible top-2 md:hidden"
                onClick={onToggle}
            >
                {mobileMenu ? (
                    <XIcon className="self-center w-6 h-6" />
                ) : (
                    <MenuIcon className="self-center w-6 h-6" />
                )}
            </div>
        </div>
    );
};

export default Navbar;
