
// Footer component included directly in the same file
export default function Footers() {
    return (
        <footer className="mt-auto bg-gray-800 text-gray-200">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left column - Copyright */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="font-bold text-xl mb-2">My Portfolio</h3>
                        <p className="text-gray-400">&copy; 2025 All rights reserved.</p>
                        <p className="text-gray-400">Designed and developed by Ketan Verma</p>
                    </div>
                    
                    {/* Middle column - Legal */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-xl mb-2">Legal</h3>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Use</a>
                            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                    
                    {/* Right column - Social */}
                    <div className="flex flex-col items-center md:items-end">
                        <h3 className="font-bold text-xl mb-2">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                                Linkedin
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                             GitHub 
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                                FileCode
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                                FileTerminal
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
                    <p>Thank you for visiting my portfolio</p>
                </div>
            </div>
        </footer>
    );
}
