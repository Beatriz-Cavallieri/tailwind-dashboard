import SettingsTabs from "./components/SettingsTabs"
import Sidebar from "./components/Sidebar"

const App = () => {
    return (
        <div className="grid min-h-screen grid-cols-[minmax(18rem,_20rem)_1fr]">
            <Sidebar />
            <main className="px-6 py-8">
                <h1 className="text-3xl text-zinc-900 font-medium">
                Settings
                </h1>
                <SettingsTabs></SettingsTabs>
            </main>

        </div>
    )
}

export default App