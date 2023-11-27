import React from 'react'
import { HelpBanner } from './HelpBanner';

const SignUp = () => {
    const weekdays = [
        {
            idx: 'Lun',
            day: 'Lunes'
        }, {
            idx: 'Mart',
            day: 'Martes'
        }, {
            idx: 'Miérc',
            day: 'Miercoles'
        }, {
            idx: 'Juev',
            day: 'Jueves'
        }, {
            idx: 'Vier',
            day: 'Viernes'
        }, {
            idx: 'Sáb',
            day: 'Sábado'
        }, {
            idx: 'Dom',
            day: 'Domingo'
        }
    ];

    return (
        <div className="mx-auto max-w-4xl mb-10">
            <h1 className="font-medium text-2xl text-[#303030] mb-14">Registro</h1>
            <HelpBanner />
            <div className="p-6 border border-gray-200 rounded-lg shadow">
                <h2 className="font-semibold uppercase text-gray-400 mb-8">Registro</h2>
                <form className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 md:mb-0">
                            <div className="flex items-center border-b bg-[#f8f4f4] border-gray-400 mb-8 py-1">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Nombre de usuario *" aria-label="username" />
                            </div>
                            <div className="flex items-center border-b bg-[#f8f4f4] border-gray-400 mb-8 py-1">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Nombre completo *" aria-label="name" />
                            </div>
                            <div className="flex items-center border-b bg-[#f8f4f4] border-gray-400 mb-8 py-1">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Correo electrónico *" aria-label="email" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <div className="flex items-center border-b bg-[#f8f4f4] border-gray-400 mb-8 py-1">
                                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Ciudad *" aria-label="city" />
                            </div>
                            <div>
                                <p className="uppercase text-[#919191] text-sm font-medium">Días de la semana</p>
                                <div className='flex flex-wrap ml-4 mt-4'>
                                    {weekdays.map(({ idx, day }) => (
                                        <div key={idx} className="flex items-center mr-4 mb-4">
                                            <input id={idx + '-checkbox'} type="checkbox" value="" className="accent-custom-purple-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                            <label htmlFor={idx + '-checkbox'} className="ms-2 text-sm font-medium text-gray-900">{idx}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <button type="button" className="uppercase text-white bg-custom-purple-2 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-4 mb-2">Registro</button>
                        <button type="button" className="uppercase text-custom-purple-2 bg-white font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export { SignUp };