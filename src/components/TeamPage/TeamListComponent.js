import UserLogo from '../UserLogo.svg';
import plusSymbol from '../images/plusSymbol.svg';
import pencilSymbol from '../images/pencilSymbol.svg';
import trashSymbol from '../images/trashSymbol.svg';

export const TeamListComponent = () => {
    return(
        <>
        
            <div className=" w-full -z-20">
            
<div class="overflow-x-auto rounded-md shadow-lg ml-2 md:ml-auto">
    <table class="w-full text-sm text-left border border-gray-500 text-gray-400">
        <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Profile
                </th>
                <th scope="col" class="py-3 px-6">
                    Role
                </th>
                <th scope="col" class="py-3 px-6">
                    Contact
                </th>
                <th scope="col" class="py-3 px-6">
                    Edit
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class=" border-b bg-gray-800 border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap text-white">
                   <div className='flex items-center'>
                   <img src={UserLogo} width="40px" className='border rounded-full bg-gray-300'></img> <p className='px-4'>Nick Biggs</p></div>
                </th>
                <td class="py-4 px-6">
                    Sales
                </td>
                <td class="py-4 px-6">
                (900)-555-0897
                </td>
                <td class="py-4 px-6">
                    
                    <div className='flex space-x-1'><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={pencilSymbol} width="18px"/><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={trashSymbol} width="25px"/></div>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap text-white">
                <div className='flex items-center'>
                   <img src={UserLogo} width="40px" className='border rounded-full bg-gray-300'></img> <p className='px-4'>Jessica Bruns</p></div>
                </th>
                <td class="py-4 px-6">
                    Advertisements
                </td>
                <td class="py-4 px-6">
                bruns.jessica@company.org
                </td>
                <td class="py-4 px-6">
                <div className='flex space-x-1'><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={pencilSymbol} width="18px"/><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={trashSymbol} width="25px"/></div>                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap text-white">
                <div className='flex items-center'>
                   <img src={UserLogo} width="40px" className='border rounded-full bg-gray-300'></img> <p className='px-4'>Kim Waits</p></div>
                </th>
                <td class="py-4 px-6">
                    Tech Lead
                </td>
                <td class="py-4 px-6">
                (900)-555-2121
                </td>
                <td class="py-4 px-6">
                <div className='flex space-x-1'><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={pencilSymbol} width="18px"/><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={trashSymbol} width="25px"/></div>                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-t">
                <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap text-white">
                <div className='flex items-center'>
                   <img src={UserLogo} width="40px" className='border rounded-full bg-gray-300'></img> <p className='px-4'>John Kreshaw</p></div>
                </th>
                <td class="py-4 px-6">
                    Marketing
                </td>
                <td class="py-4 px-6">
                (900)-555-3344
                </td>
                <td class="py-4 px-6">
                <div className='flex space-x-1'><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={pencilSymbol} width="18px"/><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={trashSymbol} width="25px"/></div>                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-t">
                <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap text-white">
                <div className='flex items-center'>
                   <img src={UserLogo} width="40px" className='border rounded-full bg-gray-300'></img> <p className='px-4'>Tim Latimore</p></div>
                </th>
                <td class="py-4 px-6">
                    Developer
                </td>
                <td class="py-4 px-6">
                latimore.tim@company.org
                </td>
                <td class="py-4 px-6">
                <div className='flex space-x-1'><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={pencilSymbol} width="18px"/><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={trashSymbol} width="25px"/></div>                </td>
            </tr>
        </tbody>
    </table>
</div>
<div className='border border-black shadow-lg p-3 mt-5 rounded-lg w-56 hover:cursor-pointer flex items-center justify-between hover:bg-gray-200 ml-2 md:ml-0'><p className=' text-lg'>Add New Person</p> <img src={plusSymbol} width="30px"/></div>
            </div>
            
        </>
    );
}