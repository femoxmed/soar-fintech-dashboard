'use client';

import styled from 'styled-components';

const HeaderContainer = styled.header.attrs({
	className: 'flex items-center justify-between p-4 border-b bg-white',
})``;

export function Header() {
	return <HeaderContainer></HeaderContainer>;
}
