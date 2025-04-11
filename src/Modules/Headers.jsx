export default function Headers() {
    return (
<header className="bg-gray-900 text-white shadow-lg">
            <div className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-400">Ketan</h1>
                
                <nav className="flex justify-center space-x-4 px-6 py-3 rounded-full bg-gray-800 border border-gray-700 text-gray-200">
                    <div className="flex justify-center items-center rounded-full hover:bg-gray-700 transition-colors duration-200">
                        <a href="#" className="mx-4 py-1 hover:text-blue-400">Home</a>
                    </div>
                    <div className="flex justify-center items-center rounded-full hover:bg-gray-700 transition-colors duration-200">
                        <a href="./html/about.html" className="mx-4 py-1 hover:text-blue-400">About</a>
                    </div>
                    <div className="flex justify-center items-center rounded-full hover:bg-gray-700 transition-colors duration-200">
                        <a href="./html/skill.html" className="mx-4 py-1 hover:text-blue-400">Skills</a>
                    </div>
                    <div className="flex justify-center items-center rounded-full hover:bg-gray-700 transition-colors duration-200">
                        <a href="./html/projects.html" className="mx-4 py-1 hover:text-blue-400">Projects</a>
                    </div>
                </nav>
                
                <button className="px-5 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md">
                    Contact me
                </button>
            </div>
        </header>
    );
}   