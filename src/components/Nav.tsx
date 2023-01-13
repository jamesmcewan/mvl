import mvl from '++images/logo.svg'
import NavProps from '++types/NavProps'

const Nav = ({ week }: NavProps) => {
  const weeks = ['last', 'this', 'next']

  const currentWeekCSS = (item: string, currentWeek: string) =>
    item === currentWeek
      ? 'text-rose-100 bg-rose-900 font-medium'
      : 'text-rose-100 font-light'

  const baseLinkStyles =
    'rounded-md px-3 py-2 font-montserrat text-base hover:bg-rose-300 hover:text-rose-700'

  return (
    <>
      <header class="bg-rose-700">
        <div class="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-start">
              <div class="flex flex-shrink-0 items-center">
                <img
                  src={mvl}
                  alt="MVL"
                  width="99"
                  height="40"
                  class="h-10 w-auto"
                />
              </div>

              <nav class="hidden md:ml-6 md:block">
                <ul class="flex space-x-4">
                  {weeks.map((i) => (
                    <li>
                      <a
                        href={`/${i}-week`}
                        class={`${baseLinkStyles} ${currentWeekCSS(i, week)}`}
                      >
                        {i} week
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <h1 class="font-montserrat font-light text-rose-100">{`Comic releases for ${week} week`}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav class="bg-rose-800">
        <div class="mx-auto max-w-7xl px-2 py-2 sm:px-6 md:hidden lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center">
              <ul class="flex space-x-4">
                {weeks.map((i) => (
                  <li>
                    <a
                      href={`/${i}-week`}
                      class={`${baseLinkStyles} ${currentWeekCSS(i, week)}`}
                    >
                      {i} week
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
