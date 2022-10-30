

export const ManagementPage = (props) => {

    return(
        
        <>
        <div className='absolute shadow-md top-0 left-0 bg-blue-500 h-52 w-full -z-20 opacity-40 overflow-hidden'>

</div>
        <div className="">
        <div className="overflow-hidden -z-10" id="loadedpage"><p className="text-3xl font-semibold px-6 mt-5 mb-5 md:mb-0">Management Page</p>
        <div className="md:space-x-3 grid grid-cols-1 md:grid-cols-2">

        <div className="mb-5 mt-5 col-span-1 scale-90 rounded-md shadow-md">
            <props.partnerCompanyComp/>
        </div>

        </div>     
        </div>
        </div>
        </>
       
    );
}