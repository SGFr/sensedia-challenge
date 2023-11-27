import React, { useState } from 'react'
import { getUsersByPage } from '../../api';

const UserList = ({ usersRes }) => {
    const [userList, setUserList] = useState(usersRes);
    const options = [];

    for (let i = 1; i <= usersRes.total_pages; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }

    const updateUserList = async (e) => {
        try {
            setUserList(await getUsersByPage(e.target.value));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='relative mt-4 mx-auto max-w-4xl overflow-x-auto mb-10'>
            <h1 className="font-medium text-2xl text-[#303030] mb-14">Usuarios</h1>
            <form className="flex items-center mb-10">
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="flex items-center border-b bg-[#f8f4f4] border-gray-400 py-1">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Buscar" aria-label="search" />
                    </div>                   
                    <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                        <svg className="w-4 h-4" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#919191" />
                        </svg>
                    </button>
                </div>
            </form>
            <table className="w-full text-base text-left rtl:text-right text-[#6A6A6A]">
                <thead className="text-xs font-bold text-[#919191] uppercase">
                    <tr>
                        <th scope="col" className="border-y border-[#E2E2E2] px-2 py-3">USUARIO</th>
                        <th scope="col" className="border-y border-[#E2E2E2] px-2 py-3">NOMBRE</th>
                        <th scope="col" className="border-y border-[#E2E2E2] px-2 py-3">CORREO ELECTRÓNICO</th>
                        <th scope="col" className="border-y border-[#E2E2E2] px-2 py-3">CIUDAD</th>
                        <th scope="col" className="border-y border-[#E2E2E2] px-2 py-3">dIAS DE LA SEMANA</th>
                        <th scope="col" className="border-y border-[#E2E2E2] px-2 py-3">POSTS</th>
                        <th scope="col" className="border-y border-[#E2E2E2] px-2 py-3">ALBUMS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.data.map((user) => (
                            <tr key={user.id}>
                                <td scope="row" className="border-b border-[#E2E2E2] px-2 py-4 font-medium text-[#3D3D3D] whitespace-nowrap dark:text-white">{user.first_name}</td>
                                <td className="border-b border-[#E2E2E2] px-2 py-4">{user.last_name}</td>
                                <td className="border-b border-[#E2E2E2] px-2 py-4">{user.email}</td>
                                <td className="border-b border-[#E2E2E2] px-2 py-4">Dirección</td>
                                <td className="border-b border-[#E2E2E2] px-2 py-4">Días DLS</td>
                                <td className="border-b border-[#E2E2E2] px-2 py-4">Posts...</td>
                                <td className="border-b border-[#E2E2E2] px-2 py-4">...</td>
                            </tr>
                        ))
                        }
                </tbody>
            </table>
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4" aria-label="Table navigation">
                <span className="uppercase text-xs font-medium text-[#707070]">Total {usersRes.total_pages}</span>
                <div className="flex">
                    <label htmlFor="pages" className="w-[88px] self-center uppercase font-medium text-xs text-[#707070]">Saltar a la página</label>
                    <select id="pages" defaultValue={1} className="self-center border-b border-gray-400 py-1 pr-2.5" onChange={(e)=> updateUserList(e)}>
                        {options}
                    </select>
                </div>
            </nav>
        </div>
    );
}

export { UserList };