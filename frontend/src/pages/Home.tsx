import { sampleProducts } from '../data'
import { Link } from 'react-router-dom'
import { Product } from '../types/Product'
import { useReducer, Reducer, useEffect } from 'react'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'
import axios from 'axios'
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'


type State ={
	products: Product[],
	loading: boolean,
	error: string
}
type Action = |{type: 'FETCH_REQUEST'}| { type: 'FETCH_SUCCESS', payload: Product[] } | { type: 'FETCH_ERROR', payload: string }

const initialState: State ={
	products: [],
	loading: true,
	error: ''
}

const reducer = (state: State, action: Action) =>{
	switch(action.type){
		case 'FETCH_REQUEST':
			return {...state, loading: true, error: ''}
		case 'FETCH_SUCCESS':
			return {...state, loading: false, products: action.payload}
		case 'FETCH_ERROR':
			return {...state, loading: false, error: action.payload}
		default:
			return state
	}
}
const Home = () => {
	const [{loading, error, products}, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState)
	const { featuredProducts, latestProducts } = products

	useEffect(() => {
		const fetchData = async () =>{
			dispatch({type: 'FETCH_REQUEST'})
			try{
				const response = await axios.get('/api/products')
				const data = await response.data
				dispatch({type: 'FETCH_SUCCESS', payload: data})
			}catch(err){
				dispatch({type: 'FETCH_ERROR', payload: getError(err as ApiError)})
			}
		}
		fetchData()
	},[])

	return (
		loading? (<LoadingBox/>):
		error? (<MessageBox>{error}</MessageBox>):(
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
	)
}
export default Home
