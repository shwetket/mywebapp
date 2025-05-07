import { useState } from "react";

export default function Projects() {

    return (
       <div>
        <h1 className="text-5xl p-8 font-bold text-[var(--text-primary)] text-center">Projects</h1>
        <p className="text-xl  text-[var(--text-primary)] text-center">Here are some of my projects</p>
        <div className="m-8 grid grid-cols-3 gap-4 mx-auto md:max-w-[900px]">
            {/* Project 1 */}
            <div className="rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] relative hover:shadow-lg transition-shadow duration-300">
                <div className="h-full flex justify-center items-center p-3">
                    <p>Weather</p>
                    <a href="/weather" className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</a>
                </div>
            </div>
            <div className="rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] relative hover:shadow-lg transition-shadow duration-300">
                <div className="h-full flex justify-center items-center p-3">
                    <p>Counter</p>
                    <a href="/counter" className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</a>
                </div>
            </div>
            <div className="rounded-lg shadow-md bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] relative hover:shadow-lg transition-shadow duration-300">
                <div className="h-full flex justify-center items-center p-3">
                    <p>Todo</p>
                    <a href="/todo" className="absolute bottom-1 left-1 font-semibold text-lg" aria-label="External link">&#8599;</a>
                </div>
            </div>

        </div>
        
       </div>
    );
}
