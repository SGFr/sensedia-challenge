import React from "react";
import { useUserData } from "../../custom_hooks/useUserData";

const UserProfile = () => {
    const { userLogged } = useUserData();

    return (
        <div className="flex justify-center h-screen">
            <div className="mt-20 w-full h-fit max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                        <span className="sr-only">Open dropdown</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={userLogged.avatar} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900">{userLogged.first_name + " " + userLogged.last_name}</h5>
                    <span className="text-sm text-gray-500">{userLogged.email}</span>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;