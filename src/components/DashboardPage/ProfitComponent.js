
export const ProfitComponent = () => {
    return(
        <> 

<section class="px-4 py-12 mx-auto max-w-7xl">
<h2 class="text-xl font-semibold text-gray-900">Profit Overview</h2>
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Total Income</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">$24,563</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black">See all income reports</a>
    </div>
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Expenses</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">$562</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black">See all expense tracking</a>
    </div>
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Last 30 days</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">$24</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black">View all invoices</a>
    </div>
    <div class="card">
      <div class="p-5">
        <p class="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Next Month</p>
        <h2 class="text-3xl font-extrabold leading-none text-gray-800 truncate">$655</h2>
      </div>
      <a href="#" class="px-5 py-3 text-sm font-medium text-purple-700 card-footer hover:text-black">Full projection report</a>
    </div>
  </div>
</section>


        </>
    );
}