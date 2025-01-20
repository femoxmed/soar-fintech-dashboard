'use client';

import styled from 'styled-components';

const SidebarContainer = styled.aside.attrs({
	className: 'w-64 bg-white border-r border-gray-200',
})``;

export function Sidebar() {
	return <SidebarContainer></SidebarContainer>;
}
