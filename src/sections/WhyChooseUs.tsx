import { FC } from "react";
import WhyChooseUsImg from "../assets/img/why-choose-us.jpg";

const WhyChooseUs: FC = () => {
    return (
        <div className="py-10 md:py-20">
            <div className="container px-8 py-3 mx-auto md:py-6 md:max-w-screen-xl md:px-0">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <div className="flex flex-col justify-center order-2 gap-6 md:order-1">
                        <h2 className="text-lg font-semibold text-gray-400 uppercase">
                            Why Choose Us?
                        </h2>
                        <h3 className="text-4xl font-bold text-pink-700">
                            Customized Instruction For Every Student
                        </h3>
                        <p>
                            Perspiciatis unde omnis iste natus sit voluptatem
                            accusantium doloremque laudantium, totam rem
                            aperiam, eaque ipsa quae.
                        </p>
                        <p>
                            Ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut
                            fugit, sed quia
                        </p>
                        <button
                            type="button"
                            className="w-6/12 px-6 py-3 mb-2 mr-2 font-medium text-white uppercase bg-pink-700 rounded-full md:w-5/12 text-md hover:bg-pink-800"
                        >
                            Join Us Now!
                        </button>
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src={WhyChooseUsImg}
                            alt="about yogativity"
                            width=""
                            height=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
