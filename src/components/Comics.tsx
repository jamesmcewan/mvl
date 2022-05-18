import Comic from '@components/Comic'
import ComicsProps from '../types/ComicsProps'

const Comics = ({ comics }: ComicsProps) => {
  return (
    <div className="bg-slate-900">
      <main className=" mx-auto max-w-7xl py-2 px-2 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {comics &&
            comics.map((comic) => (
              <li
                className="col-span-1 flex flex-col divide-y divide-slate-400 rounded-lg bg-slate-200 shadow"
                key={comic.id}
              >
                <Comic {...comic} />
              </li>
            ))}
        </ul>
      </main>
    </div>
  )
}

export default Comics