import { LogOut } from "lucide-react"

interface UserProfileProps {
    name: string
    email: string
}

const UserProfile = ({ name, email }: UserProfileProps) => {
    return (
        <div className="grid grid-cols-[max-content_1fr_max-content] items-center gap-3">
                <img
                    src="https://github.com/diego3g.png"
                    className="h-10 w-10 rounded-full"
                    alt=""
                />
                <div className="flex flex-col truncate">
                    <span className="text-zinc-700 text-sm font-semibold truncate">{name}</span>
                    <span className="text-zinc-500 text-sm truncate">{email}</span>
                </div>
            <button type="button" className="text-zinc-500 p-2 hover:bg-zinc-50 rounded-md">
                <LogOut className="w-5 h-5" />
            </button>
        </div>
    )
}

export default UserProfile