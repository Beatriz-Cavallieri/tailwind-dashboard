import * as Input from "../Input"

const PersonalInfoForm = () => {
  return (
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
            className="rounded-lg px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 border border-zinc-300"
          >Cancel</button>
          <button
            type="submit"
            form="settings"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700"
          >Save</button>
        </div>
      </div>

      <form id="settings" className="mt-6 flex w-full flex-col">
        <div className="grid grid-cols-3">
          <label
            htmlFor="firstName"
            className="text-sm text-zinc-700 font-medium">
            Name
          </label>
          <div className="flex gap-2">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Olivia" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Rhye" />
            </Input.Root>
          </div>
        </div>

        <div>
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

        <div>
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

        <div >
          <label
            htmlFor="role"
            className="text-sm text-zinc-700 font-medium">
            Role
          </label>
          <Input.Root>
            <Input.Control id="role" defaultValue="Product Designer" />
          </Input.Root>
        </div>

        <div>
          <label
            htmlFor="country"
            className="text-sm text-zinc-700 font-medium">
            Country
          </label>
          <div />
        </div>

        <div>
          <label
            htmlFor="timezone"
            className="text-sm text-zinc-700 font-medium">
            Timezone
          </label>
          <div />
        </div>

        <div >
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

        <div>
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
            className="rounded-lg px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 border border-zinc-300"
          >Cancel</button>
          <button
            type="submit"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </form >
    </div >
  )
}

export default PersonalInfoForm