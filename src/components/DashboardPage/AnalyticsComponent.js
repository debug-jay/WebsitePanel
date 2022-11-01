
export const AnalyticsComponent = () => {
    return(
        <>
        <section className="px-4 py-2 mx-auto max-w-7xl">
  <div className="flex flex-wrap items-center justify-between mb-4 space-y-1">
    <h2 className="text-xl" id="componentText">Analytics Overview</h2>
    <label>
      <span className="sr-only">Select date range</span>
      <select className="form-select form-select-sm">
        <option>Today</option>
        <option>Last 7 Days</option>
        <option>Last 14 Days</option>
        <option>Last Month</option>
      </select>
    </label>
  </div>
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-4">
    <div className="p-6 card">
      <div className="flex items-start">
        <h2 className="text-3xl font-extrabold leading-none text-gray-800 mb-2 mr-2">23,455</h2>
        <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4">
            <path
              fillRule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clipRule="evenodd"
            />
          </svg>
          <span>40%</span>
        </span>
      </div>
      <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Posts</p>
    </div>
    <div className="p-6 card">
      <div className="flex items-start ">
        <h2 className="text-3xl font-extrabold leading-none text-gray-800 mb-2 mr-2">55</h2>
        <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4">
            <path
              fillRule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clipRule="evenodd"
            />
          </svg>
          <span>240%</span>
        </span>
      </div>
      <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Comments</p>
    </div>
    <div className="p-6 card">
      <div className="flex items-start ">
        <h2 className="text-3xl font-extrabold leading-none text-gray-800 mb-2 mr-2">129,752</h2>
        <span className="flex items-center space-x-1 text-sm font-medium leading-none text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4">
            <path
              fillRule="evenodd"
              d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
              clipRule="evenodd"
            />
          </svg>
          <span>22%</span>
        </span>
      </div>
      <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Activities</p>
    </div>
    <div className="p-6 card">
      <div className="flex items-start ">
        <h2 className="text-3xl font-extrabold leading-none text-gray-800 mb-2 mr-2">1,255</h2>
        <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4">
            <path
              fillRule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clipRule="evenodd"
            />
          </svg>
          <span>10%</span>
        </span>
      </div>
      <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Users</p>
    </div>
  </div>
</section>

        </>
    );
}