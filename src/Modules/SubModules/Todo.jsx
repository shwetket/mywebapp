
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
            <FloatingActionButton />
        </div>
    )
}

function FloatingActionButton() {
    return (
        <div className="fixed bottom-6 right-6">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-4 shadow-lg">
                {/* Icon Placeholder */}
            </button>
        </div>
    );
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
        getAllTodos()
    }, []);


    return (
        <>
            <div className="float-start">
                {allTodos.map((data) => {
                    return (
                        <ul className="mt-4">
                            <li>{data.title}</li>
                            <li>{data.description}</li>
                        </ul>
                    )
                })}
                {/* <ul className="mt-4">
                    <li>title</li>
                    <li>desc</li>
                </ul> */}
            </div>
        </>
    )
}

