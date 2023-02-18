import { FC, PropsWithChildren } from 'react'

import Meta from ',/meta/Meta'
import styles from './Layout.module.scss'
import Header from './header/Header'
import { ISeo } from './meta/meta.interface'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<div className={styles.layout}>
				<main>
					<Header />
					<section className={styles.content}>{children}</section>
				</main>
			</div>
		</>
	)
}

export default Layout

/*
import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren> = () => {
	return (
		<div>Hello</div>
	)
}

export default Layout
*/
