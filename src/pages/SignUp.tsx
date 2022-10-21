/* eslint-disable jsx-a11y/anchor-is-valid */
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthContext from '~/Contexts/AuthContext';

const SignUp = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        checked: false,
    });
    const [error, setError] = useState<string | null>(null);
    const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value as typeof input[keyof typeof input];
        if (event.target.type === 'checkbox') {
            value = event.target.checked;
        }

        setInput({ ...input, [event.target.name]: value });
    };
    const { email, password, confirmPassword } = input;
    const { createUser } = useContext(AuthContext);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        if (password.length < 6) {
            setError('password must be 6 ch');
            alert('password must be 6 ch');

            return;
        }
        if (password !== confirmPassword) {
            setError('password did not match');
            alert('pass not match');

            return;
        }

        setError('signed up successfully');
        alert('signed up successfully');

        createUser(email, password)
            .then((result) => {
                const { user } = result;
                console.log(user);
                form.reset();
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="grid min-h-90v place-items-center ">
            <div className="w-full max-w-md space-y-3 rounded-xl p-8 dark:dark:bg-gray-900 dark:dark:text-gray-100">
                <h1>{error}</h1>
                <h1 className="text-center text-2xl font-bold">Sign-up</h1>
                <form onSubmit={onSubmit} className="ng-untouched ng-pristine ng-valid space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block dark:dark:text-gray-400">
                            Name
                            <input
                                onChange={onFieldChange}
                                name="name"
                                id="name"
                                placeholder="write your name"
                                className="w-full rounded-md px-4 py-3 dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
                                required
                            />
                        </label>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:dark:text-gray-400">
                            email
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="write your email"
                                className="w-full rounded-md px-4 py-3 dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
                                required
                                onChange={onFieldChange}
                            />
                        </label>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:dark:text-gray-400">
                            Password
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="write Password"
                                className="w-full rounded-md px-4 py-3 dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
                                required
                                onChange={onFieldChange}
                            />
                        </label>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="confirmPassword" className="block dark:dark:text-gray-400">
                            Confirm Password
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                className="w-full rounded-md px-4 py-3 dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-violet-400"
                                required
                                onChange={onFieldChange}
                            />
                        </label>
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="conditions" className="block dark:dark:text-gray-400">
                            I agree to the terms and conditions
                            <input
                                type="checkbox"
                                name="conditions"
                                onChange={onFieldChange}
                                required
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="block w-full rounded-sm p-3 text-center dark:dark:bg-violet-400 dark:dark:text-gray-900"
                    >
                        Sign up
                    </button>
                </form>
                <div className="flex items-center space-x-1 pt-4">
                    <div className="h-px flex-1 dark:dark:bg-gray-700 sm:w-16" />
                    <p className="px-3 text-sm dark:dark:text-gray-400">
                        Sign Up with social accounts
                    </p>
                    <div className="h-px flex-1 dark:dark:bg-gray-700 sm:w-16" />
                </div>
                <div className="flex justify-center space-x-4">
                    <button
                        type="button"
                        aria-label="Log in with Google"
                        className="rounded-sm p-3"
                    >
                        <FaGoogle />
                    </button>
                    <button
                        type="button"
                        aria-label="Log in with Twitter"
                        className="rounded-sm p-3"
                    >
                        <FaTwitter />
                    </button>
                    <button
                        type="button"
                        aria-label="Log in with GitHub"
                        className="rounded-sm p-3"
                    >
                        <FaGithub />
                    </button>
                    <button
                        type="button"
                        aria-label="Log in with Facebook"
                        className="rounded-sm p-3"
                    >
                        <FaFacebook />
                    </button>
                </div>
                <p className="text-center text-xs dark:dark:text-gray-400 sm:px-6">
                    Already have an account?
                    <Link
                        to="/login"
                        rel="noopener noreferrer"
                        className="underline dark:dark:text-gray-100"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
