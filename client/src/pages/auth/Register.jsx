import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { enqueueSnackbar } from 'notistack';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import { TbHomeShare } from 'react-icons/tb';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

const registerSchema = z
	.object({
		name: z.string().min(4, 'Name is required'),
		email: z.string().email('Invalid email address'),
		password: z
			.string()
			.min(6, 'Password must be at least 6 characters long'),
		confirmPassword: z
			.string()
			.nonempty('Password confirmation is required'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleRegister = () => {
		// Validate form data using Zod schema
		const result = registerSchema.safeParse({
			name,
			email,
			password,
			confirmPassword,
		});

		if (!result.success) {
			// Handle validation errors
			const { errors } = result.error;
			errors.forEach((error) =>
				enqueueSnackbar(error.message, { variant: 'error' }),
			);
			return;
		}

		// Proceed with registration (e.g., API call)
		console.log('Registration successful:', result.data);
	};

	return (
		<div className='flex h-screen p-4 overflow-hidden relative'>
			<div className='w-1/2'>
				<img
					className='w-full h-full object-cover rounded-2xl'
					src='https://images.unsplash.com/photo-1658834357864-5c1304ca69fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='upload'
				/>
			</div>
			<div className='w-1/2 p-8'>
				<div className='flex justify-end'>
					<Link to='/login' className='flex justify-end flex-col'>
						<Button>Login</Button>
						<p className='text-xs mt-2'>Already have an account?</p>
					</Link>
				</div>
				<div className='center h-full flex-col'>
					<h2 className='font-bold text-2xl'>Create an account</h2>
					<p className='text-xs text-slate-500 mt-2'>
						Enter your email below to create your account
					</p>

					<div>
						<Input
							className='w-[300px] mt-6'
							placeholder='Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<Input
							className='w-[300px] mt-2'
							placeholder='Email'
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							className='w-[300px] mt-2'
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Input
							className='w-[300px] mt-2'
							type='password'
							placeholder='Confirm password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<Button
							type='submit'
							className='w-[300px] mt-2'
							onClick={handleRegister}>
							Register
						</Button>
					</div>

					<div className='relative w-[300px] mt-6'>
						<div className='border-t border-t-slate-800 absolute top-1/2 left-0 w-full transform -translate-y-1/2'></div>
						<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2'>
							Or continue with
						</div>
					</div>

					<div className='mt-10'>
						<Button className='w-[300px] mt-2 flex gap-2'>
							<FcGoogle /> <span>Google</span>
						</Button>
					</div>

					<div>
						<p className='text-xs mt-10 w-[300px] text-center'>
							By clicking continue, you agree to our{' '}
							<span className='underline'>Terms of Service</span>{' '}
							and{' '}
							<span className='underline'>Privacy Policy.</span>
						</p>
					</div>
				</div>
			</div>

			<Link to='/' className='absolute bottom-5 right-5'>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<TbHomeShare size={25} />
						</TooltipTrigger>
						<TooltipContent>
							<p>Go to Home</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</Link>
		</div>
	);
};

export default Register;
