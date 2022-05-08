import { FC } from "react";
import { Feature } from "../components/";

const Features: FC = () => {
    const features = [
        {
            title: "Re-Engergize",
            description:
                "Perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium.",
        },
        {
            title: "Relax & Refresh",
            description:
                "Perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium.",
        },
        {
            title: "Strength Building",
            description:
                "Perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium.",
        },
        {
            title: "Beauty of Body",
            description:
                "Perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium.",
        },
        {
            title: "Stress Relief",
            description:
                "Perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium.",
        },
        {
            title: "Mind & Soul",
            description:
                "Perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium.",
        },
    ];

    return (
        <div className="container py-10 bg-gray-100 md:py-20" id="features">
            <div className="container px-8 py-3 mx-auto md:py-6 md:w-9/12 md:px-0">
                <h2 className="mb-10 text-lg font-semibold text-center text-gray-400 uppercase">
                    Features
                </h2>
                <h3 className="mb-16 text-4xl font-bold text-center text-pink-700">
                    The Best of Yoga
                </h3>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <Feature
                            feature={feature}
                            key={feature.title + index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
