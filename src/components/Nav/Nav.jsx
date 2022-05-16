import React from 'react';
import mvl from '../../images/logo.svg';

const Nav = ({ week }) => {
  const weeks = ['last', 'this', 'next'];

  const currentWeekCSS = (item, currentWeek) =>
    item === currentWeek ? 'text-white bg-stone-900' : 'text-stone-300';

  return (
    <>
      <header className="bg-stone-600">
        <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img src={mvl} alt="MVL" className="h-10 w-auto" />
              </div>

              <nav className="hidden md:ml-6 md:block">
                <ul className="flex space-x-4">
                  {weeks.map((i) => (
                    <li key={`${i}-nav`}>
                      <a
                        href={`/${i}-week`}
                        className={`rounded-md px-3 py-2 text-sm font-medium  hover:bg-stone-700 hover:text-white ${currentWeekCSS(
                          i,
                          week
                        )}`}
                      >
                        {i} week
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-white">{`Comic releases for ${week} week`}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="bg-stone-700">
        <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 md:hidden lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center">
              <ul className="flex space-x-4">
                {weeks.map((i) => (
                  <li key={`${i}-nav`}>
                    <a
                      href={`/${i}-week`}
                      className={`rounded-md px-3 py-2 text-sm font-medium  hover:bg-stone-700 hover:text-white ${currentWeekCSS(
                        i,
                        week
                      )}`}
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
  );
};

export default Nav;
