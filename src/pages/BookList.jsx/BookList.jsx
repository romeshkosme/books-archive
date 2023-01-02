import { useState, useEffect } from "react";
import BooksTable from "../../components/BooksTable";
import axios from "../../utilities/AxiosConfig";
import { LIST_HEADERS } from "../../utilities/Constant";
import { Link } from "react-router-dom";

function BookList() {
	const [LISTS, SET_LISTS] = useState([]);
	const FETCH_LIST = () => {
		axios
			.get(`/lists/names.json?api-key=${import.meta.env.VITE_NYC_API_KEY}`)
			.then((response) => {
				if (response.data && response.data.results) {
					SET_LISTS(response.data.results);
				}
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	};
	useEffect(() => {
		if (!LISTS || LISTS.length === 0) {
			FETCH_LIST();
		}
	}, []);
	const createTableBody = () => {
		return (
			<>
				{LISTS &&
					LISTS.length > 0 &&
					LISTS.map((list, index) => (
						<tr key={index} className='hover:bg-gray-100'>
							<td className='p-2 border-b'>{index + 1}</td>
							<td className='p-2 border-b cursor-pointer hover:underline'>
								<Link to={`/books/lists/${list.list_name_encoded}`}>{list.display_name}</Link>
							</td>
						</tr>
					))}
			</>
		);
	};
	return (
		<>
			<BooksTable
				title={"NYC Best Seller List Names"}
				header={LIST_HEADERS}
				tableData={createTableBody()}
			/>
		</>
	);
}

export default BookList;
