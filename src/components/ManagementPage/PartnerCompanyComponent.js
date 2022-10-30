import UserLogo from '../UserLogo.svg';
import plusSymbol from '../images/plusSymbol.svg';
import pencilSymbol from '../images/pencilSymbol.svg';
import trashSymbol from '../images/trashSymbol.svg';

export const PartneredCompanyComponent = () => {
    return(
        <>
        <div className=''>
            <p className='text-xl p-2 bg-white rounded-t-md border border-gray-500'>Partnered Companies</p>
            <div className=' h-56 w-full overflow-y-auto overflow-x-auto'>
            <table class="w-full text-sm text-left  text-gray-400">
        <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Company
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
                    <p className='px-4'>Vital Corp</p></div>
                </th>
                <td class="py-4 px-6">
                    Consulting Team
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
                    <p className='px-4'>Define LLC</p></div>
                </th>
                <td class="py-4 px-6">
                    Advertisements Team
                </td>
                <td class="py-4 px-6">
                management@define.org
                </td>
                <td class="py-4 px-6">
                <div className='flex space-x-1'><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={pencilSymbol} width="18px"/><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={trashSymbol} width="25px"/></div>                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium  whitespace-nowrap text-white">
                <div className='flex items-center'>
                    <p className='px-4'>Pro Division</p></div>
                </th>
                <td class="py-4 px-6">
                    Tech Team
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
                   <p className='px-4'>Uplift</p></div>
                </th>
                <td class="py-4 px-6">
                    Marketing Team
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
                   <p className='px-4'>John & Johnson</p></div>
                </th>
                <td class="py-4 px-6">
                    Developer Team
                </td>
                <td class="py-4 px-6">
                teamsmanaging@johnson.org
                </td>
                <td class="py-4 px-6">
                <div className='flex space-x-1'><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={pencilSymbol} width="18px"/><img className='hover:cursor-pointer hover:bg-gray-600 rounded-md' src={trashSymbol} width="25px"/></div>                </td>
            </tr>
        </tbody>
    </table>
            </div>
            </div>
        </>
    );
}