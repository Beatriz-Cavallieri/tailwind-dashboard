const UsedSpaceWidget = () => {
    return (
        <div className="bg-violet-50 rounded-lg px-4 py-5 flex flex-col gap-4 mt-auto">
            <div className="space-y-1">
                <span className="text-sm/5 font-medium text-violet-700">
                    Used space
                </span>
                <p className="text-sm/5 text-violet-500">
                    Your team has used 80% of your available space. Need more?
                </p>
            </div>
            <div className="bg-violet-100 rounded-full h-2 w-full">
                <div className="bg-violet-700 rounded-full h-2 w-4/5"></div>
            </div>
            <div className="space-x-3">
                <button type="button" className="cursor-pointer text-sm font-medium text-violet-500 hover:text-violet-700">Dismiss</button>
                <button type="button" className="cursor-pointer text-sm font-medium text-violet-700 hover:text-violet-900">Upgrade plan</button>
            </div>
        </div>
    )
}

export default UsedSpaceWidget