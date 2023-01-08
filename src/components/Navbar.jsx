import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
	return (
		<>
			<nav className='bg-custom-dark-blue text-white'>
				<ul className='flex p-2 max-w-7xl mx-auto'>
					<li className='p-2'>
						<Link to='/'>Home</Link>
					</li>
					{/* <li className='p-2 hover:font-bold dropdown'>
						<Link to='/about'>Books</Link>
						<ul className='dropdown-menu absolute hidden text-gray-700 pt-1 z-50'>
							<li className=''>
								<a
									className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
									href='#'
								>
									NYC Best Seller
								</a>
							</li>
							<li className=''>
								<a
									className='bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
									href='#'
								>
									NYC Best Seller List
								</a>
							</li>
							<li className=''>
								<a
									className='rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
									href='#'
								>
									Three is the magic number
								</a>
							</li>
						</ul>
					</li> */}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
