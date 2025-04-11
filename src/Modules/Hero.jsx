import "../styles/style.css";
export default function Hero() {
    return (
        <div className="hero">
            <div className="m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mx-auto md:max-w-[840px]">
                <div className="col-start-1 col-span-2 border-1 border-[var(--tertiary-border-color)] box">
                    <div className="p-2">
                        <div className="image">
                            <p className="text-2xl font-bold text-primary-color">Hello, <br />I'm Ketan!</p>
                            <p className="p-2 absolute bottom-1 left-1">
                                I am a passionate web developer with experience in building responsive and user-friendly websites.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row-span-2 box tall-box">
                    <div>
                        <div className="flex justify-center items-center">
                            <img src="./resources/hackerrank_logo.png" className="w-48 h-48" alt="Hackerrank logo" />
                        </div>
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>
                <div className="box">
                    <div>
                        <div className="flex justify-center items-center p-2">
                            <img src="./resources/darkmode.png" className="w-auto h-auto image" alt="Dark mode toggle icon" />
                        </div>
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>
                <div className="box">
                    <div>
                        <div className="flex justify-center items-center p-2">
                            <img src="./resources/linkedin-logo.png" className="w-auto h-auto image" alt="LinkedIn logo" />
                        </div>
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>
                <div className="box">
                    <div>
                        <div className="flex justify-center items-center p-2">
                            <img src="./resources/github-logo.png" className="w-auto h-auto image" alt="GitHub logo" />
                        </div>
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>
                <div className="row-span-2 box tall-box">
                    <div className="p-2">
                        <div className="image">
                            {/* Replace this placeholder text with meaningful content */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur animi mollitia consectetur temporibus necessitatibus quibusdam magni quas, cumque, voluptatibus.
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-span-2 border-1 border-[var(--tertiary-border-color)] box">
                    {/* Replace this placeholder text with meaningful content */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="box">
                    <div>
                        <div className="flex justify-center items-center p-2">
                            <img src="./resources/WhatsApp-logo.png" className="w-auto h-auto image" alt="WhatsApp logo" />
                        </div>
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>
                <div className="col-start-1 col-span-2 box">
                    <div>
                        <div className="flex justify-center items-center">
                            <img src="./resources/map.png" className="w-48 h-48" alt="Google Map" />
                        </div>
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>
                <div className="col-start-3 col-span-2 box">
                    {/* Replace this placeholder text with meaningful content */}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nihil quis officia non recusandae, fuga similique porro corporis, odio eveniet deleniti? Expedita saepe tempora maxime illum sint, commodi quisquam esse.
                </div>
            </div>
        </div>
    );
}