export default function Skills() {
    return (

        <div className="skills bg-[var(--background-color)] dark:bg-[var(--dark-background-color)] py-12">
            <div className="m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto md:max-w-[900px]">
                {/* Project 1 */}
                <div className="rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] relative hover:shadow-lg transition-shadow duration-300">
                    <div className="h-full flex justify-center items-center p-3">
                        <img src="./resources/project1.png" className="w-32 h-32" alt="Project 1" />
                        <span className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</span>
                    </div>
                </div>
            </div>
        </div>

    );
}