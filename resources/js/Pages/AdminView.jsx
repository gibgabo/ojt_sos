import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function AdminView({ header, children }) {
   

   
    const user = usePage().props.auth.user;

    const [showingSidebar, setShowingSidebar] = useState(false);
    const [showingTable, setShowingTable] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleSidebar = () => {
        setShowingSidebar(!showingSidebar);
        setShowingTable(!showingTable); // Hide table when the sidebar is toggled
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const confirmDelete = () => {
        console.log("Report deleted");
        // Implement your delete logic here
        toggleModal(); // Close the modal after deletion
    };

    return (
        <AuthenticatedLayout> 
        <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
        
            {/* Main content */}
            <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-4xl lg:py-16">
                <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Edit Incident Report</h2>
                    <form action="#">
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            {/* Name Field */}
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                    placeholder="Type client name" 
                                    required 
                                />
                            </div>

                            {/* Incident Type */}
                            <div>
                                <label htmlFor="incident-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Incident Type</label>
                                <select 
                                    id="incident-type" 
                                    className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option>-- Select Type --</option>
                                    <option value="Fire">Fire</option>
                                    <option value="Flood">Flood</option>
                                    <option value="Crime">Crime</option>
                                    <option value="Medical">Medical</option>
                                </select>
                            </div>

                            {/* PIN Number */}
                            <div className="w-full">
                                <label htmlFor="pin-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PIN Number</label>
                                <input 
                                    type="number" 
                                    name="pin-number" 
                                    id="pin-number" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                    placeholder="Client PIN Number" 
                                    required 
                                />
                            </div>

                            {/* Description */}
                            <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea 
                                    id="description" 
                                    rows="8" 
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                    placeholder="Write a description here..."
                                />
                            </div>

                            {/* Images */}
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Images</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="Image 1" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="Image 2" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="Image 3" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="Image 4" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center space-x-4">
                            <button 
                                type="submit" 
                                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                Update Incident
                            </button>
                            <button 
                                type="button" 
                                onClick={toggleModal}  // Trigger the modal
                                className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                                </svg>
                                Delete
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Modal */}
            {isModalVisible && (
                <div id="popup-modal" className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button
                                onClick={toggleModal}
                                type="button"
                                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="popup-modal"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0 6 6M7 7l6-6M7 7L1 1" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">
                                <svg
                                    className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Are you sure you want to delete this report?
                                </h3>
                                <button
                                    onClick={confirmDelete}
                                    type="button"
                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                >
                                    Yes, I'm sure
                                </button>
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    No, cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
        </AuthenticatedLayout>
        
    );
}
