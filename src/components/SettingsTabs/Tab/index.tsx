import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabProps {
    value: string
    title: string
    isSelected: boolean
}

const Tab = ({ value, title, isSelected }: TabProps) => {
    return (
        <Tabs.Trigger
            value={value}
            className='relative truncate text-sm font-medium text-zinc-500 hover:text-violet-700 px-1 py-4 data-[state=active]:text-violet-700'>
            <span>{title}</span>
            {isSelected && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
                />
            )}
        </Tabs.Trigger>
    )
}

export default Tab