import { Routes, Route } from "react-router-dom";
import PageLayout from "./PageLayout";
import Home from "../pages/Home/Home";
import BooksByList from "../pages/BooksByList/BooksByList";

function CustomRoutes() {
	return (
		<>
			<Routes>
				<Route path='/' element={<PageLayout />}>
					<Route index element={<Home />} />
					<Route path="/books/lists/:list_type" element={<BooksByList />} />
				</Route>
			</Routes>
		</>
	);
}

export default CustomRoutes;
