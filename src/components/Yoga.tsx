import { FC } from "react";

interface Props {
    yoga: YogaType;
}

type YogaType = {
    title: string;
    description: string;
    img: string;
};

const Yoga: FC<Props> = ({ yoga: { title, description, img } }) => {
    return (
        <div className="flex flex-col content-center justify-center gap-1 bg-white rounded-lg shadow-sm">
            <img src={img} alt={title} width="" height="" />

            <div className="flex flex-col content-center justify-center gap-6 p-5 text-center">
                <h3 className="text-xl font-bold">{title}</h3>
                <p>{description}</p>
                <button
                    type="button"
                    className="px-4 py-2 mb-2 text-sm font-semibold text-white uppercase bg-pink-700 rounded-full hover:bg-pink-800"
                >
                    Join Now!
                </button>
            </div>
        </div>
    );
};

export default Yoga;
