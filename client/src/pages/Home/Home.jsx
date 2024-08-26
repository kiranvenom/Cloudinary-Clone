import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main className='dark:bg-gray-800 bg-white relative overflow-hidden h-screen'>
			<header className='h-24 sm:h-32 flex items-center z-30 w-full'>
				<div className='container mx-auto px-6 flex items-center justify-between'>
					<div className='uppercase text-gray-800 dark:text-white font-black text-3xl'>
						Cloud
					</div>
					<div className='flex items-center'>
						<nav className='font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden'>
							<Link to='/login' className='py-2 px-6 flex'>
								Login
							</Link>
							<Link to='register' className='py-2 px-6 flex'>
								Register
							</Link>
						</nav>
						<button className='lg:hidden flex flex-col ml-4'>
							<span className='w-6 h-1 bg-gray-800 dark:bg-white mb-1'></span>
							<span className='w-6 h-1 bg-gray-800 dark:bg-white mb-1'></span>
							<span className='w-6 h-1 bg-gray-800 dark:bg-white mb-1'></span>
						</button>
					</div>
				</div>
			</header>
			<div className='bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden'>
				<div className='container mx-auto px-6 flex relative py-16'>
					<div className='sm:w-2/3 lg:w-2/5 flex flex-col relative z-20'>
						<span className='w-20 h-2 bg-gray-800 dark:bg-white mb-12'></span>
						<h1 className='font-bebas-neue uppercase text-6xl sm:text-xl font-black flex flex-col leading-none dark:text-white text-gray-800'>
							Visualize Engaging Experiences
							<span className='text-5xl sm:text-7xl'>
								Image and Video API Platform
							</span>
						</h1>
						<p className='text-sm sm:text-base text-gray-700 dark:text-white'>
							Trusted by 2 million developers and 10,000
							enterprise and hyper-growth companies as a critical
							part of their tech stack.
						</p>
						<div className='flex mt-8'>
							<a
								href='#'
								className='uppercase py-2 px-4 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md mr-4 hover:bg-blue-400'>
								Get started
							</a>
							<a
								href='#'
								className='uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-blue-500 text-blue-500 dark:text-white hover:bg-blue-500 hover:text-white text-md'>
								Features
							</a>
						</div>
					</div>
					<div className='hidden sm:block sm:w-1/3 lg:w-3/5 relative'>
						{/* <img
							src='https://www.tailwind-kit.com/images/object/10.png'
							className='max-w-xs md:max-w-sm m-auto'
						/> */}
						<video
							muted
							autoPlay
							loop
							src='https://cloudinary-marketing-res.cloudinary.com/video/upload/q_auto,w_1200/v1665692778/hero_animation_2022.webm'></video>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
