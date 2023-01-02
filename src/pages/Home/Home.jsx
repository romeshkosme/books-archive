import { memo } from "react";
import BookList from "../BookList.jsx/BookList";
import "./Home.css";

function Home() {
	return (
		<>
			<BookList />
		</>
	);
}

export default memo(Home);
