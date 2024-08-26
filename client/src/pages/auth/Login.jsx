import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

import { FcGoogle } from 'react-icons/fc';
import { TbHomeShare } from 'react-icons/tb';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

const Login = () => {
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
					<Link to='/register' className='flex justify-end flex-col'>
						<Button>Register</Button>
						<p className='text-xs mt-2'>Don't have account ?</p>
					</Link>
				</div>
				<div className='center h-full flex-col'>
					<h2 className='font-bold text-2xl'>Login to an account</h2>
					<p className='text-xs text-slate-500 mt-2'>
						Enter your email below or login with your account
					</p>

					<div>
						<Input
							className='w-[300px] mt-6'
							placeholder='name@example.com'
						/>
						<Button className='w-[300px] mt-2'>Login</Button>
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

export default Login;
