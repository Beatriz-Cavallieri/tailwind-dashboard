import * as Input from "../Input"

const PersonalInfoForm = () => {
  return (
    <form
      id="settings"
      className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200">
      <div className="grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
        <label
          htmlFor="firstName"
          className="text-sm text-zinc-700 font-medium">
          Name
        </label>
        <div className="grid grid-cols-2 gap-6">
          <Input.Root>
            <Input.Control id="firstName" defaultValue="Olivia" />
          </Input.Root>

          <Input.Root>
            <Input.Control defaultValue="Rhye" />
          </Input.Root>
        </div>
      </div>

      <div className="pt-5 grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
        <label
          htmlFor="email"
          className="text-sm text-zinc-700 font-medium">
          Email address
        </label>
        <Input.Root>
          <Input.Control
            id="email"
            type="email"
            defaultValue="olivia@untitledui.com"
          />
        </Input.Root>
      </div>

      <div className="pt-5 grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
        <label
          htmlFor="email"
          className="text-sm text-zinc-700 font-medium">
          Your photo
          <span >
            This will be displayed on your profile.
          </span>
        </label>
        <div />
      </div>

      <div className="pt-5 grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
        <label
          htmlFor="role"
          className="text-sm text-zinc-700 font-medium">
          Role
        </label>
        <Input.Root>
          <Input.Control id="role" defaultValue="Product Designer" />
        </Input.Root>
      </div>

      <div className="pt-5 grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
        <label
          htmlFor="country"
          className="text-sm text-zinc-700 font-medium">
          Country
        </label>
        <div />
      </div>

      <div className="pt-5 grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
        <label
          htmlFor="timezone"
          className="text-sm text-zinc-700 font-medium">
          Timezone
        </label>
        <div />
      </div>

      <div className="pt-5 grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
        <label
          htmlFor="bio"
          className="text-sm text-zinc-700 font-medium">
          Bio
          <span>
            Write a short introduction.
          </span>
        </label>
        <div />
      </div>

      <div className="pt-5 grid grid-cols-[minmax(7.5rem,_17.5rem)_minmax(25rem,_1fr)_minmax(0,_15rem)]">
        <label
          htmlFor="projects"
          className="text-sm text-zinc-700 font-medium">
          Portfolio projects
          <span>
            Share a few snippets of your work.
          </span>
        </label>
        <div />
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className="cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 border border-zinc-300"
        >Cancel</button>
        <button
          type="submit"
          className="cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default PersonalInfoForm