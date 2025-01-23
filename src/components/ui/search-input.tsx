import type React from 'react';
import styled from 'styled-components';
import { Search } from 'lucide-react';

const SearchWrapper = styled.div`
	position: relative;
	min-width: 255px;
	height: 50px;
`;

const StyledInput = styled.input`
	width: 100%;
	height: 100%;
	padding: 0 20px 0 50px;
	border: 1px solid #f5f7fa;
	border-radius: 40px;
	background-color: #f5f7fa;
	color: #8ba3cb;
	font-family: 'Inter', sans-serif;
	font-size: 15px;
	font-weight: 400;
	line-height: 18.15px;
	text-align: left;

	&::placeholder {
		color: #8ba3cb;
		text-underline-position: from-font;
		text-decoration-skip-ink: none;
	}

	&:focus {
		outline: none;
		border-color: #8ba3cb;
	}
`;

const SearchIconWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 20px;
	transform: translateY(-50%);
	color: #8ba3cb;
`;

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string;
	className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
	placeholder = 'Search for something...',
	...props
}) => {
	return (
		<SearchWrapper className={props.className}>
			<SearchIconWrapper>
				<Search size={20} />
			</SearchIconWrapper>
			<StyledInput placeholder={placeholder} {...props} />
		</SearchWrapper>
	);
};
