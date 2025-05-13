import { InputHTMLAttributes } from 'react'

export interface ControlProps extends InputHTMLAttributes<HTMLInputElement> { }

export function Control(props: ControlProps) {
  return <input
    type="file"
    className="sr-only"
    id={props.id}
    {...props}
  />
}