import PersonalInfoForm from "./components/PersonalInfoForm"
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

                <div className="mt-6 flex flex-col">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
                            <span className="text-sm text-zinc-500">
                                Update your photo and personal details here.
                            </span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button
                                type="button"
                                className="cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 border border-zinc-300"
                            >Cancel</button>
                            <button
                                type="submit"
                                form="settings"
                                className="cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700"
                            >Save</button>
                        </div>
                    </div>

                    <PersonalInfoForm />
                </div>
            </main>

        </div>
    )
}

export default App