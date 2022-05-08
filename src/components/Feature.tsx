import { FC } from "react";
import { HeartIcon } from "@heroicons/react/outline";

interface Props {
    feature: {
        title: string;
        description: string;
    };
}

const Feature: FC<Props> = ({ feature: { title, description } }) => {
    return (
        <div className="p-6 text-center bg-white rounded-lg shadow-sm">
            <HeartIcon className="w-16 h-16 mx-auto mb-5 text-center text-pink-500" />
            <h4 className="mb-5 text-xl font-bold">{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Feature;
