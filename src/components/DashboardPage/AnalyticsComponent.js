
export const AnalyticsComponent = () => {
    return(
        <>
        <section class="px-4 py-2 mx-auto max-w-7xl">
  <div class="flex flex-wrap items-center justify-between mb-4 space-y-1">
    <h2 class="text-xl font-semibold text-gray-900">Analytics Overview</h2>
    <label>
      <span class="sr-only">Select date range</span>
      <select class="form-select form-select-sm">
        <option>Last 7 days</option>
        <option>Blue</option>
      </select>
    </label>
  </div>
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
    <div class="p-6 card">
      <div class="flex items-start justify-between">
        <h2 class="text-2xl mb-2 mr-2 font-extrabold leading-none text-gray-800 truncate">23,455</h2>
        <span class="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-none w-4 h-4">
            <path
              fill-rule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clip-rule="evenodd"
            />
          </svg>
          <span>40%</span>
        </span>
      </div>
      <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Posts</p>
    </div>
    <div class="p-6 card">
      <div class="flex items-start justify-between">
        <h2 class="text-2xl mb-2 mr-0 font-extrabold leading-none text-gray-800 truncate">55</h2>
        <span class="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-none w-4 h-4">
            <path
              fill-rule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clip-rule="evenodd"
            />
          </svg>
          <span>240%</span>
        </span>
      </div>
      <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Comments</p>
    </div>
    <div class="p-6 card">
      <div class="flex items-start justify-between">
        <h2 class="text-2xl mb-2 mr-2 font-extrabold leading-none text-gray-800 truncate">129,752</h2>
        <span class="flex items-center space-x-1 text-sm font-medium leading-none text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-none w-4 h-4">
            <path
              fill-rule="evenodd"
              d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
              clip-rule="evenodd"
            />
          </svg>
          <span>22%</span>
        </span>
      </div>
      <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Activities</p>
    </div>
    <div class="p-6 card">
      <div class="flex items-start justify-between">
        <h2 class="text-2xl mb-2 mr-2 font-extrabold leading-none text-gray-800 truncate">1,255</h2>
        <span class="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-none w-4 h-4">
            <path
              fill-rule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clip-rule="evenodd"
            />
          </svg>
          <span>10%</span>
        </span>
      </div>
      <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Users</p>
    </div>
  </div>
</section>

        </>
    );
}