import { ChevronDown } from "lucide-react"
import { ElementType } from "react"

interface NavItemProps {
  title: string
  icon: ElementType
}

const NavItem = ({ title, icon: Icon }: NavItemProps) => {
  return (
    <a
      href=""
      className="flex group items-center gap-3 py-2 px-3 hover:bg-violet-50 rounded">
      <Icon className="w-5 h-5 text-zinc-500" />
      <span className="flex-1 font-medium text-zinc-700 group-hover:text-violet-500">{title}</span>
      <ChevronDown className="w-5 h-5 text-zinc-500 group-hover:text-violet-300" />
    </a>
  )
}

export default NavItem