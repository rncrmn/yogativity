import { FC } from "react";

interface Props {
    testimonial: {
        name: string;
        role: string;
        review: string;
        img: string;
    };
}

const Testimonial: FC<Props> = ({
    testimonial: { name, role, review, img },
}) => {
    return (
        <div className="p-6 text-center bg-gray-100 rounded-lg shadow-sm">
            <p className="mb-8">
                <em>“{review}”</em>
            </p>
            <img
                src={img}
                alt={name}
                width="128"
                height="128"
                className="mx-auto mb-4"
            />
            <p>
                <strong>{name}</strong>
            </p>
            <p>{role}</p>
        </div>
    );
};

export default Testimonial;
