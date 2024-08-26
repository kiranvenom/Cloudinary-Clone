import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IoSettingsOutline } from 'react-icons/io5';
import { TbProgressHelp } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

import logo from '@/assets/images/cloud.png';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='w-[70px] border-r h-full flex justify-center shadow-md'>
			<div className='flex flex-col items-center justify-between'>
				<div className='flex flex-col items-center gap-4 mt-4'>
					<Link to='/dashboard'>
						<img src={logo} alt='Logo' />
					</Link>
					{/* add here */}
				</div>
				<div className='flex flex-col items-center gap-4 mb-4'>
					{/* add here */}

					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<TbProgressHelp size={30} />
							</TooltipTrigger>
							<TooltipContent>
								<p>Help</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>

					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<IoSettingsOutline size={30} />
							</TooltipTrigger>
							<TooltipContent>
								<p>settings</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>

					<Popover>
						<PopoverTrigger>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger>
										<Avatar>
											<AvatarImage src='https://github.com/shadcn.png' />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</TooltipTrigger>
									<TooltipContent>
										<div>
											<h1>Kiran M</h1>
											<p>km060360@gmail.com</p>
										</div>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</PopoverTrigger>
						<PopoverContent>
							<div className='flex gap-4'>
								<Avatar>
									<AvatarImage src='https://github.com/shadcn.png' />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<div className='flex flex-col justify-center'>
									<h2 className='text-xs'>Kiran M</h2>
									<p className='text-xs'>
										km060360@gmail.com
									</p>
								</div>
							</div>
							<div className='border mt-2'></div>
							<div className='flex items-center gap-2 hover:bg-slate-100 mt-2 rounded-lg'>
								<CgProfile />
								<h2>My Profile</h2>
							</div>
							<div className='flex items-center gap-2 hover:bg-slate-100 mt-2'>
								<CiLogout />
								<h2>Log Out</h2>
							</div>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</div>
	);
};

export default Nav;
