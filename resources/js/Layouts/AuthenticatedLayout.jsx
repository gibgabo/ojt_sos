import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { usePage } from '@inertiajs/react';

export default function Authenticated({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingSidebar, setShowingSidebar] = useState(false);
    const [showingTable, setShowingTable] = useState(true);

    const toggleSidebar = () => {
        setShowingSidebar(!showingSidebar);
        setShowingTable(!showingTable); // Hide table when the sidebar is toggled
    };

    return (
        <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <div className={`bg-white dark:bg-gray-800 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${showingSidebar ? 'translate-x-0' : '-translate-x-full'} transition duration-200 ease-in-out sm:relative sm:translate-x-0`}>
                <button onClick={toggleSidebar} className="text-gray-500 dark:text-gray-400 absolute top-0 right-0 p-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className="text-center">
                  
                </div>

                <nav>
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Dashboard
                    </NavLink>
                    <NavLink href={route('profile.edit')} active={route().current('profile.edit')}>
                        Profile
                    </NavLink>
                    <NavLink href={route('logout')} method="post" as="button">
                        Log Out
                    </NavLink>
                </nav>
            </div>

            {/* Hamburger Icon */}
            <div className="sm:hidden flex items-center justify-start p-4">
                <button onClick={toggleSidebar} className="text-gray-500 dark:text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Main content */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex-1 p-4">
                {showingTable && (
                    <div className="py-6 px-4 sm:px-6 lg:px-8">
                        {header && (
                            <div className="bg-white dark:bg-gray-800 shadow">
                                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                            </div>
                        )}
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}
