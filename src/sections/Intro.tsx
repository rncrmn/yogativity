import { FC } from "react";

const Intro: FC = () => {
    return (
        <div
            className="bg-[url('./assets/img/yoga-bg.jpg')] bg-cover md:bg-left-center"
            id="home"
        >
            <div className="py-10 md:py-20 bg-gradient-to-r from-pink-400">
                <div className="container py-3 mx-auto md:py-6 md:w-9/12 px-7 md:px-0">
                    <div className="flex flex-col justify-center w-full gap-10 md:w-5/12">
                        <h1 className="text-5xl font-semibold leading-normal tracking-wide text-white md:text-6xl">
                            Yogativity Yoga Studio{" "}
                            <span className="font-bold">
                                Balance, Mind &amp; Body
                            </span>
                        </h1>
                        <p className="text-xl text-white">
                            Nunc consequat justo eget enim finibus porta.
                            Suspendisse orci nunc, rutrum quis nunc sed.
                        </p>
                        <button
                            type="button"
                            className="w-6/12 px-6 py-3 mb-2 mr-2 font-medium text-white uppercase bg-pink-700 rounded-full md:w-5/12 text-md hover:bg-pink-800"
                        >
                            Join Us Today!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
