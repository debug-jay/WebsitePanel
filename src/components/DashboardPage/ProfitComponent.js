
export const ProfitComponent = () => {
    return(
        <> 

<section class="px-0 py-4 mx-4 max-w-7xl">
<h2 class="text-xl font-semibold text-gray-900" id="componentText">Profit Overview</h2>
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-4">
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase whitespace-nowrap">Total Income</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 ">$24,563</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-blue-700 card-footer hover:text-black truncate">Income Reports</a>
    </div>
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Expenses</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800">$562</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-blue-700 card-footer hover:text-black truncate">Expense Tracking</a>
    </div>
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Last 30 days</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">$24</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-blue-700 card-footer hover:text-black">View Invoices</a>
    </div>
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Next Month</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">$655</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-blue-700 card-footer hover:text-black truncate">Projection Report</a>
    </div>
  </div>
</section>


        </>
    );
}