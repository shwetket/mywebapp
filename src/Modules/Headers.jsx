export default function Headers() {
    return (
        <header className="bg-[var(--surface)] text-[var(--text-primary)] shadow-md border-b border-[var(--border-light)]">
            <div className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-[var(--brand-primary)]">Ketan</h1>
                <nav className="flex justify-center space-x-4 px-6 py-3 rounded-full bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--text-secondary)]">
                    <div className="flex justify-center items-center rounded-full hover:bg-[var(--secondary-button-hover)] transition-colors duration-200">
                        <a href="/" className="mx-4 py-1 hover:text-[var(--link)]">Home</a>
                    </div>
                    <div className="flex justify-center items-center rounded-full hover:bg-[var(--secondary-button-hover)] transition-colors duration-200">
                        <a href="/about" className="mx-4 py-1 hover:text-[var(--link)]">About</a>
                    </div>
                    <div className="flex justify-center items-center rounded-full hover:bg-[var(--secondary-button-hover)] transition-colors duration-200">
                        <a href="/skill" className="mx-4 py-1 hover:text-[var(--link)]">Skills</a>
                    </div>
                    <div className="flex justify-center items-center rounded-full hover:bg-[var(--secondary-button-hover)] transition-colors duration-200">
                        <a href="/projects" className="mx-4 py-1 hover:text-[var(--link)]">Projects</a>
                    </div>
                </nav>
                <button className="px-5 py-2 bg-[var(--primary-button)] text-[var(--primary-button-text)] rounded-full font-medium hover:bg-[var(--primary-button-hover)] transition-colors duration-300 shadow-md">
                    <a href="/contactme" className="mx-4 py-1 hover:text-[var(--link)]">Contact me</a>
                </button>
            </div>
        </header>
    );
}   