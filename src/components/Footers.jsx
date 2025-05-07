export default function Footer() {
    return (
        <footer className="mt-auto bg-[var(--surface-alt)] text-[var(--text-secondary)]">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left column - Copyright */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">My Portfolio</h3>
                        <p className="text-[var(--text-muted)]">&copy; 2025 All rights reserved.</p>
                        <p className="text-[var(--text-muted)]">Designed and developed by Ketan Verma</p>
                    </div>

                    {/* Middle column - Legal */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">Legal</h3>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="hover:text-[var(--link-hover)] transition-colors">Terms of Use</a>
                            <a href="#" className="hover:text-[var(--link-hover)] transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-[var(--link-hover)] transition-colors">Cookie Policy</a>
                        </div>
                    </div>

                    {/* Right column - Social */}
                    <div className="flex flex-col items-center md:items-end">
                        <h3 className="font-bold text-xl mb-2 text-[var(--text-primary)]">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-[var(--footer-link-hover-color)] transition-colors flex items-center">
                                Linkedin
                            </a>
                            <a href="#" className="hover:text-[var(--footer-link-hover-color)] transition-colors flex items-center">
                                GitHub
                            </a>
                            <a href="#" className="hover:text-[var(--footer-link-hover-color)] transition-colors flex items-center">
                                FileCode
                            </a>
                            <a href="#" className="hover:text-[var(--footer-link-hover-color)] transition-colors flex items-center">
                                FileTerminal
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[var(--border-light)] mt-8 pt-4 text-center text-[var(--text-muted)] text-sm">
                    <p>Thank you for visiting my portfolio</p>
                </div>
            </div>
        </footer>
    );
}