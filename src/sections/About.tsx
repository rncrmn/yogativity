import { FC } from "react";
import AboutYogativity from "../assets/img/about-yogativity.jpg";

const About: FC = () => {
    return (
        <div className="py-10 md:py-20" id="about">
            <div className="container px-8 py-3 mx-auto md:py-6 md:max-w-screen-xl md:px-0">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <div>
                        <img
                            src={AboutYogativity}
                            alt="about yogativity"
                            width=""
                            height=""
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-6">
                        <h2 className="text-lg font-semibold text-gray-400 uppercase">
                            About Us
                        </h2>
                        <h3 className="text-4xl font-bold text-pink-700">
                            High Quality & Professional Yoga Club
                        </h3>
                        <p>
                            Perspiciatis unde omnis iste natus sit voluptatem
                            accusantium doloremque laudantium, totam rem
                            aperiam, eaque ipsa quae.
                        </p>
                        <p>
                            Ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut.
                        </p>
                        <button
                            type="button"
                            className="w-6/12 px-6 py-3 mb-2 mr-2 font-medium text-white uppercase bg-pink-700 rounded-full md:w-5/12 text-md hover:bg-pink-800"
                        >
                            Join Us Now!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
