import { Search } from "lucide-react"
import { Logo } from "./Logo"

const Sidebar = () => {
  return (
    <aside className="border-r border-zinc-200 py-8 px-6 space-y-6">
      <Logo />
      <div className="flex w-full items-center gap-2 border border-zinc-300 rounded-lg py-2.5 px-3.5 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="border-0 p-0 bg-transparent text-zinc-900 placeholder-zinc-500 flex-1"
          placeholder="Search" />
      </div>
    </aside>
  )
}

export default Sidebar