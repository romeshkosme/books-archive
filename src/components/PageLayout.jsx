import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function PageLayout() {
	return (
		<>
			<Navbar />
			<main className='bg-custom-off-white'>
				<div className='h-1/4 flex flex-col justify-center items-center p-4 max-w-7xl mx-auto'>
					<h1 className='text-stone-800 text-2xl font-bold'>NYC Best Seller Archive</h1>
					<p className='text-stone-600'>Get books of your your interest.</p>
				</div>
				<article className='max-w-7xl mx-auto pb-8'>
					<Outlet />
				</article>
			</main>

			<Footer />
		</>
	);
}

export default PageLayout;
