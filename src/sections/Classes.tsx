import { FC } from "react";
import { Yoga } from "../components/";
import HotYoga from "../assets/img/hot-yoga.jpg";
import YinYoga from "../assets/img/yin-yoga.jpg";
import HathaYoga from "../assets/img/hatha-yoga.jpg";

const Classes: FC = () => {
    const yogaClasses = [
        {
            title: "Hot Yoga",
            description:
                "Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa.",
            img: HotYoga,
        },
        {
            title: "Yin Yoga",
            description:
                "Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa.",
            img: YinYoga,
        },
        {
            title: "Hatha Yoga",
            description:
                "Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa.",
            img: HathaYoga,
        },
    ];

    return (
        <div className="container py-10 bg-gray-100 md:py-20" id="classes">
            <div className="container px-8 py-3 mx-auto md:py-6 md:w-9/12 md:px-0">
                <h2 className="mb-10 text-lg font-semibold text-center text-gray-400 uppercase">
                    Our Classes
                </h2>
                <h3 className="mb-16 text-4xl font-bold text-center text-pink-700">
                    Join A Class Today!
                </h3>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {yogaClasses.map((yoga, index) => (
                        <Yoga yoga={yoga} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Classes;
