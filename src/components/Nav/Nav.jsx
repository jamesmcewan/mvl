import React from 'react';
import mvl from '../../images/logo.svg';

const Nav = ({ week }) => {
  const weeks = ['last', 'this', 'next'];

  const currentWeekCSS = (item, currentWeek) =>
    item === currentWeek ? 'text-rose-100 bg-rose-900 font-medium' : 'text-rose-200 font-light';

  return (
    <>
      <header className="bg-rose-700">
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
                        className={`rounded-md px-3 py-2 text-base font-montserrat  hover:bg-rose-300 hover:text-rose-700 ${currentWeekCSS(
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
                <h1 className="text-rose-100 font-montserrat font-light">{`Comic releases for ${week} week`}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="bg-rose-800">
        <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 md:hidden lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center">
              <ul className="flex space-x-4">
                {weeks.map((i) => (
                  <li key={`${i}-nav`}>
                    <a
                      href={`/${i}-week`}
                      className={`rounded-md px-3 py-2 text-base  hover:bg-rose-700 hover:text-white ${currentWeekCSS(
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
