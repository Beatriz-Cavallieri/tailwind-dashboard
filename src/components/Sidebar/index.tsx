import { Search } from "lucide-react"
import { Logo } from "./Logo"
import Navigation from "../Navigation"
import UsedSpaceWidget from "./UsedSpaceWidget"
import UserProfile from "./UserProfile"
import * as Input from '../Input'

const Sidebar = () => {
  return (
    <aside className="border-r border-zinc-200 py-8 px-6 flex flex-col gap-6">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>
      
      <Navigation />
      <UsedSpaceWidget />
      <div className="h-px bg-zinc-200" />
      <UserProfile name="Olivia Rhye" email="olivia@untitledui.com" />
    </aside>
  )
}

export default Sidebar