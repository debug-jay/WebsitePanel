

export const ManagementPage = (props) => {

    return(
        
        <>
        <div className="">
        <div className=" -z-10" id="loadedpage"><p className="text-3xl font-semibold py-5">Management Page</p>
        <div className="md:space-x-3 grid grid-cols-1 md:grid-cols-2 border-black">

        <div className="border col-span-1 border-gray-500 rounded-md shadow-lg">
            <props.partnerCompanyComp/>
        </div>

        </div>     
        </div>
        </div>
        </>
       
    );
}