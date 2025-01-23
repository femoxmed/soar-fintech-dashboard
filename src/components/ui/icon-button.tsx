import type React from 'react';
import styled from 'styled-components';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface IconButtonProps {
	icon: LucideIcon;
	onClick?: () => void;
	label: string;
	variant?: 'primary' | 'secondary' | 'danger';
	imageSrc?: string;
	className?: string;
	iconOverride?: React.ReactNode;
}

const StyledButton = styled.button<{
	variant: 'primary' | 'secondary' | 'danger';
}>`
	${({ variant }) => {
		switch (variant) {
			case 'primary':
				return `
          @apply hover:bg-blue-600 focus:ring-blue-500;
        `;
			case 'secondary':
				return `
          @apply hover:bg-gray-600 focus:ring-gray-500;
        `;
			case 'danger':
				return `
          @apply hover:bg-red-600 focus:ring-red-500;
        `;
		}
	}}
`;

export const IconButton: React.FC<IconButtonProps> = ({
	icon: Icon,
	onClick,
	label,
	variant = 'primary',
	imageSrc,
	className,
	iconOverride,
}) => {
	return (
		<StyledButton
			onClick={onClick}
			variant={variant}
			className={`inline-flex items-center justify-center w-[50px] h-[50px] rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors relative ${className}`}
			aria-label={label}>
			{imageSrc ? (
				<Image
					src={imageSrc || '/placeholder.svg'}
					alt={label}
					width={25}
					height={25}
					className='rounded-full'
				/>
			) : iconOverride ? (
				iconOverride
			) : (
				<Icon className='w-6 h-6' />
			)}
		</StyledButton>
	);
};
