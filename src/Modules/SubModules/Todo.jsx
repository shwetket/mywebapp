import { useState, useEffect } from "react";
import axios from "axios";

// Main Todo Component
export default function Todo() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="min-h-screen" style={{ 
            backgroundColor: 'var(--background)',
            color: 'var(--text-primary)'
        }}>
            <Header 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <main className="max-w-6xl mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto mb-8">
                    <CreateNoteInput searchQuery={searchQuery} />
                </div>
            </main>
        </div>
    );
}

// Header Component
function Header({ searchQuery, setSearchQuery, isDarkMode, toggleDarkMode }) {
    return (
        <header style={{ backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--border-light)' }} 
            className="shadow sticky top-0 z-10">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="font-medium text-xl mr-4" style={{ color: 'var(--brand-secondary)' }}>
                        Keeper
                    </h1>
                </div>
                
                <div className="flex-1 mx-4 max-w-md">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{ color: 'var(--text-muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search notes"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg"
                            style={{ 
                                backgroundColor: 'var(--surface-alt)',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--border-light)'
                            }}
                        />
                    </div>
                </div>
                
                <button 
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full"
                    style={{ backgroundColor: 'var(--surface-alt)' }}
                >
                    {isDarkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>
            </div>
        </header>
    );
}

// CreateNoteInput Component
function CreateNoteInput({ searchQuery }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [allTodos, setAllTodos] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    // Fetch all todos - keeping your original API logic
    const getAllTodos = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/todos");
            setAllTodos(res.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    // Handle adding a new todo - keeping your original API logic
    const handleTodoSubmit = async () => {
        if (!title || !desc) {
            alert("Please fill in both title and description.");
            return;
        }
        try {
            await axios.post("http://localhost:8000/api/todos", { title, description: desc });
            setTitle("");
            setDesc("");
            setIsExpanded(false);
            getAllTodos();
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    // Handle deleting a todo - keeping your original API logic
    const deleteTodo = async (todoId) => {
        try {
            await axios.delete(`http://localhost:8000/api/todos/${todoId}`);
            console.log("Todo deleted successfully");
            getAllTodos();
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    useEffect(() => {
        getAllTodos();
    }, []);

    // Filter todos based on search query
    const filteredTodos = allTodos.filter(
        todo => 
            todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            todo.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="rounded-lg shadow mb-8" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="p-4">
                    {isExpanded && (
                        <input
                            type="text"
                            className="w-full mb-2 focus:outline-none text-lg font-medium"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ 
                                backgroundColor: 'var(--surface)',
                                color: 'var(--text-primary)',
                                border: 'none'
                            }}
                        />
                    )}
                    
                    <textarea
                        className="w-full resize-none focus:outline-none"
                        placeholder={isExpanded ? "Take a note..." : "Click to add a note..."}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        onClick={() => !isExpanded && setIsExpanded(true)}
                        rows={isExpanded ? 3 : 1}
                        style={{ 
                            backgroundColor: 'var(--surface)',
                            color: 'var(--text-primary)',
                            border: 'none'
                        }}
                    />
                    
                    {isExpanded && (
                        <div className="flex justify-between mt-2">
                            <div></div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="py-2 px-4 rounded text-sm"
                                    style={{ 
                                        backgroundColor: 'var(--secondary-button)',
                                        color: 'var(--secondary-button-text)'
                                    }}
                                >
                                    Close
                                </button>
                                <button
                                    onClick={handleTodoSubmit}
                                    className="py-2 px-4 rounded text-sm flex items-center"
                                    style={{ 
                                        backgroundColor: 'var(--primary-button)',
                                        color: 'var(--primary-button-text)'
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <NotesGrid 
                filteredTodos={filteredTodos} 
                deleteTodo={deleteTodo} 
            />
        </>
    );
}

// NotesGrid Component
function NotesGrid({ filteredTodos, deleteTodo }) {
    if (filteredTodos.length === 0) {
        return (
            <div className="text-center py-10">
                <p style={{ color: 'var(--text-secondary)' }}>No notes found.</p>
            </div>
        );
    }
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTodos.map((todo) => (
                <NoteCard 
                    key={todo.id} 
                    todo={todo} 
                    deleteTodo={deleteTodo} 
                />
            ))}
        </div>
    );
}

// NoteCard Component
function NoteCard({ todo, deleteTodo }) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className="rounded-lg shadow transition-shadow hover:shadow-md"
            style={{ 
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border-light)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-4">
                <h3 className="font-medium text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                    {todo.title}
                </h3>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {todo.description}
                </p>
                
                <div className={`flex justify-end transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <button 
                        onClick={() => deleteTodo(todo.id)}
                        className="p-2 rounded-full hover:bg-red-100"
                        style={{ color: 'var(--error)' }}
                        aria-label="Delete note"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}