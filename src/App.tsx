import Sidebar from "./components/Sidebar"

const App = () => {
    return (
        <div className="grid min-h-screen grid-cols-[minmax(18rem,_20rem)_1fr]">
            <Sidebar />
            <main className="px-6 py-8">Settings</main>
        </div>
    )
}

export default App