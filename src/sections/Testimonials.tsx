import { Testimonial } from "../components";
import ClientOneImg from "../assets/img/client-1.png";
import ClientTwoImg from "../assets/img/client-2.png";
import ClientThreeImg from "../assets/img/client-3.png";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            role: "Student Manager",
            review: "Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.",
            img: ClientOneImg,
        },
        {
            name: "Melena Smart",
            role: "Student Manager",
            review: "Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.",
            img: ClientTwoImg,
        },
        {
            name: "Grant Campbell",
            role: "Student Manager",
            review: "Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.",
            img: ClientThreeImg,
        },
    ];

    return (
        <div className="py-10 md:py-20 " id="testimonial">
            <div className="container px-8 py-3 mx-auto md:py-6 md:max-w-screen-xl md:px-0">
                <h2 className="mb-10 text-lg font-semibold text-center text-gray-400 uppercase">
                    Testimonials
                </h2>
                <h3 className="mb-16 text-4xl font-bold text-center text-pink-700">
                    What People Are Saying
                </h3>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Testimonial
                            testimonial={testimonial}
                            key={testimonial.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
