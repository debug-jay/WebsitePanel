
export const ProfitComponent = () => {
    return(
        <> 

<section className="px-0 py-4 mx-4 max-w-7xl">
<h2 className="text-xl" id="componentText">Profit Overview</h2>
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-4">
    <div className="card">
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase whitespace-nowrap">Total Income</p>
        <h2 className="text-3xl font-extrabold leading-none text-gray-800 ">$24,563</h2>
      </div>
      <a href="#" className="px-5 py-3 text-sm font-medium text-blue-700 card-footer hover:text-black truncate">Income Reports</a>
    </div>
    <div className="card">
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Expenses</p>
        <h2 className="text-3xl font-extrabold leading-none text-gray-800">$562</h2>
      </div>
      <a href="#" className="px-5 py-3 text-sm font-medium text-blue-700 card-footer hover:text-black truncate">Expense Tracking</a>
    </div>
    <div className="card">
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Last 30 days</p>
        <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">$24</h2>
      </div>
      <a href="#" className="px-5 py-3 text-sm font-medium text-blue-700 card-footer hover:text-black">View Invoices</a>
    </div>
    <div className="card">
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">Next Month</p>
        <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">$655</h2>
      </div>
      <a href="#" className="px-5 py-3 text-sm font-medium text-blue-700 card-footer hover:text-black truncate">Projection Report</a>
    </div>
  </div>
</section>


        </>
    );
}