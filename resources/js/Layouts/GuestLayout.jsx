import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div style={{ backgroundColor: '#ADD8E6' }} className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 text-black/50 dark:text-white/50">

            <div>
                
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg min-h-[300px]">

                {children}
            </div>
        </div>
    );
}
