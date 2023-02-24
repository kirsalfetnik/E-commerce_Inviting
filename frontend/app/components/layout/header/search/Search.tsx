import { FC, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

import styles from './Search.module.scss'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className={styles.search}>
			<div className='searchBar'>
				<input
					type='text'
					placeholder='Search'
					onChange={e => setSearchTerm(e.target.value)}
					value={searchTerm}
				/>
				<HiOutlineSearch
					style={{
						position: 'absolute',
						left: '88%',
						bottom: '24%',
						transform: 'scaleX(-1)'
					}}
				/>
			</div>
		</div>
	)
}

export default Search
