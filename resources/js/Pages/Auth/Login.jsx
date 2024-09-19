import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div style={{ backgroundColor: '#ADD8E6' }} className="text-black/50 dark:bg-gray-800 dark:text-white/80">
                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                
                <div className="relative flex flex-col items-center justify-center p-6 md:p-8 lg:p-12 rounded-md shadow-lg selection:bg-[#FF2D20] selection:text-white">
                    <form onSubmit={submit} className="w-full max-w-md space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Email" className="text-gray-900 dark:text-dark-200" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full p-2.5 text-gray-900 bg-gray-50 border-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" className="text-gray-900 dark:text-dark-200" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full p-2.5 text-gray-900 bg-gray-50 border-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <label className="flex items-center text-gray-900 dark:text-gray-200">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2 text-sm">Remember me</span>
                            </label>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-gray-600 hover:underline dark:text-gray-400 dark:hover:text-white"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>

                        <div className="mt-6">
                            <PrimaryButton className="w-full" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
