import React from 'react';
import styles from '../styles/Layout.module.css';
import { Header } from './Header';
import Meta from './Meta';
import { Nav } from './Nav';

export const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<Nav />
			<div className={styles.container}>
				<Header />
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};
