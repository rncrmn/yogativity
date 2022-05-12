import { FC } from "react";
import { Navbar } from "../components";

interface Props {
    darkmode?: boolean;
    setDarkMode?: boolean;
}

const Header: FC = (props: Props) => {
    return (
        <header className="sticky top-0 py-6 bg-white shadow-sm dark:bg-black">
            <div className="container mx-auto md:max-w-screen-xl px-7 md:px-0">
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
