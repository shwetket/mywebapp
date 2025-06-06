import "../styles/colors.css";
import "../styles/style.css";

export default function Hero() {
    return (
        <div className="hero bg-[var(--background-color)] dark:bg-[var(--dark-background-color)] py-12">
            <div className="m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto md:max-w-[900px]">
                {/* About Me Box */}
                <div className="col-start-1 col-span-2 border border-[var(--primary-border-color)] rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] relative overflow-hidden">
                    <div className="p-4">
                        <div className="image">
                            <p className="text-3xl font-bold text-[var(--primary-text-color)] dark:text-[var(--dark-primary-text-color)] mb-3">
                                Hello, <br />I'm Ketan!
                            </p>
                            <p className="text-[var(--secondary-text-color)] dark:text-[var(--dark-secondary-text-color)] mt-2">
                                I am a passionate web developer with experience in building responsive and user-friendly websites.
                            </p>
                        </div>
                    </div>
                </div>

                {/* HackerRank Box */}
                <div className="row-span-2 rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] relative hover:shadow-lg transition-shadow duration-300">
                    <div className="h-full flex flex-col justify-center items-center p-4">
                        <div className="flex justify-center items-center flex-grow">
                            <img src="./resources/hackerrank_logo.png" className="w-32 h-32" alt="Hackerrank logo" />
                        </div>
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>

                {/* Dark Mode Toggle Box */}
                <div className="rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] relative hover:shadow-lg transition-shadow duration-300">
                    <div className="h-full flex justify-center items-center p-3">
                        <img src="./resources/darkmode.png" className="w-32 h-32" alt="Dark mode toggle icon" />
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>

                {/* LinkedIn Box */}
                <div className="rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] relative hover:shadow-lg transition-shadow duration-300">
                    <div className="h-full flex justify-center items-center p-3">
                        <img src="./resources/linkedin-logo.png" className="w-38 h-38" alt="LinkedIn logo" />
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>

                {/* GitHub Box */}
                <div className="rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] relative hover:shadow-lg transition-shadow duration-300">
                    <div className="h-full flex justify-center items-center p-3">
                        <img src="./resources/github-logo.png" className="w-38 h-38" alt="GitHub logo" />
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>

                {/* Featured Project/Content Box */}
                <div className="row-span-2 rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] relative p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="h-full">
                        <h3 className="font-bold text-lg text-[var(--primary-text-color)] dark:text-[var(--dark-primary-text-color)] mb-2">Featured Project</h3>
                        <p className="text-[var(--secondary-text-color)] dark:text-[var(--dark-secondary-text-color)]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur animi mollitia consectetur temporibus necessitatibus quibusdam magni quas, cumque, voluptatibus.
                        </p>
                    </div>
                </div>

                {/* Skills/Experience Box */}
                <div className="col-start-1 col-span-2 border border-[var(--primary-border-color)] rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] p-4">
                    <h3 className="font-bold text-lg text-[var(--primary-text-color)] dark:text-[var(--dark-primary-text-color)] mb-2">My Skills</h3>
                    <p className="text-[var(--secondary-text-color)] dark:text-[var(--dark-secondary-text-color)]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                {/* WhatsApp Box */}
                <div className="rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] relative hover:shadow-lg transition-shadow duration-300">
                    <div className="h-full flex justify-center items-center p-3">
                        <img src="./resources/WhatsApp-logo.png" className="w-38 h-38" alt="WhatsApp logo" />
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>

                {/* Map Box */}
                <div className="col-start-1 col-span-2 rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] relative hover:shadow-lg transition-shadow duration-300">
                    <div className="h-full flex justify-center items-center p-3">
                        <img src="./resources/map.png" className="w-38 h-38" alt="Google Map" />
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>

                {/* Contact/Bio Box */}
                <div className="col-start-3 col-span-2 rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] p-4">
                    <h3 className="font-bold text-lg text-[var(--primary-text-color)] dark:text-[var(--dark-primary-text-color)] mb-2">Get In Touch</h3>
                    <p className="text-[var(--secondary-text-color)] dark:text-[var(--dark-secondary-text-color)]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nihil quis officia non recusandae, fuga similique porro corporis, odio eveniet deleniti? Expedita saepe tempora maxime illum sint, commodi quisquam esse.
                    </p>
                </div>
            </div>
        </div>
    );
}