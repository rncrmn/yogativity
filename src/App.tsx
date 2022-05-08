import { FC } from "react";
import {
    Header,
    Intro,
    About,
    Classes,
    WhyChooseUs,
    Features,
    Testimonials,
    Contact,
    Footer,
} from "./sections";

const App: FC = () => {
    return (
        <>
            <Header />
            <Intro />
            <About />
            <Classes />
            <WhyChooseUs />
            <Features />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
