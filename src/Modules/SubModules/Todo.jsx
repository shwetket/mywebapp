
import { useState, useEffect } from "react";
import axios from "axios";

export default function Todo() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="max-w-6xl mx-auto px-4 py-8">
                <CreateNoteInput />
                {/* Additional content can go here */}
            </main>
        </div>
    )
}

function Header() {
    return (
        <header className="bg-white shadow">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
                <h1 className="font-medium text-xl text-yellow-500">To Do</h1>
                <SearchBar />
            </div>
        </header>
    );
}

function SearchBar() {
    return (
        <div className="ml-8 flex-grow max-w-lg">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {/* Icon Placeholder */}
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0"
                    placeholder="Search..."
                />
            </div>
        </div>
    );
}

function CreateNoteInput() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [allTodos, setAllTodos] = useState([])

    async function getAllTodos() {
        try {
            const res = await axios.get("http://localhost:8000/api/todos")
            setAllTodos(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleTodoSubmit() {
        try {
            const res = await axios.post("http://localhost:8000/api/todos", { title: title, description: desc });
            console.log(res)
            setTitle("");
            setDesc("");
            getAllTodos()
        } catch (error) {
            console.log(error)
            console.log(error.message)
        }
    }

    return (
        <div className="bg-white rounded-lg shadow mb-6 mx-auto max-w-xl">
            <div className="p-4">
                <input
                    type="text"
                    className="w-full mb-2 focus:outline-none text-lg font-medium"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    className="w-full resize-none focus:outline-none"
                    placeholder="Take a note..."
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                />
                <div className="flex justify-end mt-2">
                    <button onClick={handleTodoSubmit} className="py-1 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded">
                        Add
                    </button>
                </div>
                <ListOfTodos getAllTodos={getAllTodos} allTodos={allTodos} setAllTodos={setAllTodos} />
            </div>
        </div>
    );
}

function ListOfTodos({getAllTodos, allTodos, setAllTodos}) {
    useEffect(() => {
        getAllTodos();
    }, []);

    async function handleDelete(id) {
        try {
            await axios.delete(`http://localhost:8000/api/todos/${id}`);
            getAllTodos();
        } catch (error) {
            console.log(error);
        }
    }

    console.log(allTodos)

    return (
        <div className="mt-8">
            <h2 className="text-xl font-medium text-gray-700 mb-4">My Notes</h2>
            {allTodos.length === 0 ? (
                <p className="text-gray-500 text-center py-6">No notes yet. Create one above!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {allTodos.map((todo) => (
                        <div 
                            key={todo._id } 
                            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col"
                        >
                            <div className="flex-grow">
                                <h3 className="font-medium text-lg text-gray-800 mb-2">{todo.title}</h3>
                                <p className="text-gray-600 whitespace-pre-wrap break-words">{todo.description}</p>
                            </div>
                            <div className="flex justify-end mt-4 pt-2 border-t border-gray-100">
                                <button 
                                    onClick={ () => handleDelete(todo._id)}
                                    className="text-gray-500 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                                    aria-label="Delete note"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

