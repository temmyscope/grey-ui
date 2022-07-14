import { Link } from "react-router-dom";

const mobilenav =({})=> {
  return(
    <nav className="modal fixed left-0 top-0 right-0 bottom-0 h-screen z-50">
      <aside className="modal__content h-full bg-nav z-50">
        <div className="mx-auto mt-16 w-11/12 pl-4">
          <ul className="text-white">
            <li className="pb-8">
              <Link to='' className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="px-3">Favourites</span>
              </Link>
            </li>
            <li className="py-10">
              <Link to='' className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="px-3">Recent</span>
              </Link>
            </li>
            <li className="py-10">
              <Link to='' className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="px-3">Go back</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </nav>
  )
}
export default mobilenav;