import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-700 dark:text-gray-100 leading-tight">Profile</h2>}
        >
            <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-4xl lg:py-16">
                <div className="space-y-8">
                  {/* Name Input */}
                  <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                             {/* Pin Input */}
                  <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">PIN NUMBER</label>
                            <input
                                type="int"
                                id="name"
                                className="mt-1 block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                    
                    {/* Create Incident Section */}
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create Incident</h2>
                        <form action="#" className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="incident-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Incident Type</label>
                                    <select id="incident-type" className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option>-- Select Type --</option>
                                        <option value="Fire">Fire</option>
                                        <option value="Flood">Flood</option>
                                        <option value="Crime">Crime</option>
                                        <option value="Medical">Medical</option>
                                    </select>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea id="description" rows="4" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Describe the incident here"></textarea>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="dropzone-file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Please Provide Images</label>
                                    <div className="flex items-center justify-center w-full">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div> 
                                </div>
                            </div>
                            <button type="submit" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                Submit Incident
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
