'use client';

import styled from 'styled-components';
import { SearchInput } from '../ui/search-input';
import { IconButton } from '../ui/icon-button';
import { User2, Menu } from 'lucide-react';
import Image from 'next/image';

const HeaderContainer = styled.header.attrs({
	className:
		'flex flex-row items-center justify-between bg-white border-b relative p-4 md:p-6',
})`
	width: 100%;
	height: 4rem;
	@media (min-width: 768px) {
		height: 6.25rem;
	}
`;

const TitleText = styled.h1.attrs({
	className: 'primary text-lg md:text-2xl font-semibold',
})`
	font-family: 'Inter', sans-serif;
	color: #343c6a;
`;

interface HeaderProps {
	toggleSidebar: () => void;
	title: string;
}

export function Header({ toggleSidebar, title }: HeaderProps) {
	return (
		<HeaderContainer className='justify-between'>
			<div className='flex items-center justify-between w-full md:w-auto md:justify-start'>
				<IconButton
					icon={Menu}
					label='Toggle Sidebar'
					onClick={toggleSidebar}
					variant='primary'
					className='md:hidden w-auto'
					iconOverride={
						<Menu
							size={18}
							color='#343C6A'
							style={{ width: '14px', height: '18px' }}
						/>
					}
				/>
				<div className='flex-grow text-center md:text-left md:flex-grow-0'>
					<TitleText>{title}</TitleText>
				</div>
			</div>
			<div className='flex flex-row justify-between items-center gap-2 md:gap-4'>
				<SearchInput className='hidden md:block' />
				<IconButton
					icon={User2}
					label='User Profile'
					onClick={() => alert('Settings Clicked!')}
					variant='primary'
					imageSrc='/settings.svg'
					className='hidden md:flex'
				/>
				<IconButton
					icon={User2}
					label='User Profile'
					onClick={() => alert('Settings Clicked!')}
					variant='primary'
					imageSrc='/notification-icon.svg'
					className='hidden md:flex'
				/>
				<div>
					<Image
						width={40}
						height={40}
						src='/profile-picture.png'
						alt='profile-picture'
						className='md:w-[60px] md:h-[60px]'
					/>
				</div>
			</div>
		</HeaderContainer>
	);
}
