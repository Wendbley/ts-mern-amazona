import { sampleProducts } from '../data'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<ul className='row'>
				{sampleProducts.map((product) => (
					<li key={product.slug}>
						<Link to={'/product/' + product.slug}>
							<img
								src={product.image}
								alt={product.name}
								className='product-img'
							/>
						</Link>
						<div className='product-desc'>
							<h2>{product.name}</h2>
							<p>R{product.price}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
export default Home
