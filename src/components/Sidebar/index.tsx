import { Search } from "lucide-react"
import { Logo } from "./Logo"
import Navigation from "../Navigation"
import UsedSpaceWidget from "./UsedSpaceWidget"
import UserProfile from "./UserProfile"
import * as Input from '../Form/Input'

const Sidebar = () => {
  return (
    <aside className="border-zinc-200 py-8 px-6 flex flex-col gap-6 fixed top-0 bottom-0 left-0 right-0 z-20 bg-white lg:relative lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
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