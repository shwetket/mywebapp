export default function NotFound() {
  return (
      <div className="flex flex-col items-center justify-center h-screen bg-[var(--background-color)] dark:bg-[var(--dark-background-color)] text-[var(--text-primary)] dark:text-[var(--dark-primary-text-color)] p-3">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
          <a
              href="/"
              className="px-6 py-3 bg-[var(--primary-button)] text-[var(--primary-button-text)] rounded-lg font-medium hover:bg-[var(--primary-button-hover)] transition-colors duration-300"
          >
              Go Back Home
          </a>
      </div>
  );
}