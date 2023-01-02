import { useState, useEffect } from "react";
import axios from "../../utilities/AxiosConfig";
import { useParams } from "react-router-dom";
import { BOOKS_BY_LIST_HEADERS } from "../../utilities/Constant";
import BooksTable from "../../components/BooksTable";

function BooksByList() {
	const { list_type } = useParams();
	const [BOOKS, SET_BOOKS] = useState([]);
	const FETCH_BOOKS = () => {
		axios
			.get(
				`/lists.json?list=${list_type}&api-key=${
					import.meta.env.VITE_NYC_API_KEY
				}`
			)
			.then((response) => {
				if (response.data && response.data.results) {
					console.log(response.data.results);
					SET_BOOKS(response.data.results);
				}
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				// stop loader
			});
	};
	useEffect(() => {
		FETCH_BOOKS();
	}, []);
  const createTableBody = () => {
		return (
			<>
				{BOOKS &&
					BOOKS.length > 0 &&
					BOOKS.map((book, index) => (
						<tr key={index} className='hover:bg-gray-100 text-black'>
							<td className='p-2 border-b'>{index + 1}</td>
							<td className='p-2 border-b cursor-pointer hover:underline'>
								{book.book_details && book.book_details[0] && book.book_details[0]['title']}
							</td>
              <td className='p-2 border-b cursor-pointer hover:underline'>
								{book.book_details && book.book_details[0] && book.book_details[0]['author']}
							</td>
              <td className='p-2 border-b cursor-pointer hover:underline'>
								{book.book_details && book.book_details[0] && book.book_details[0]['publisher']}
							</td>
              <td className='p-2 border-b cursor-pointer hover:underline'>
								{book.book_details && book.book_details[0] && book.book_details[0]['description']}
							</td>
						</tr>
					))}
			</>
		);
	};
	return (
		<>
			<BooksTable
        title={`Books by List`}
        header={BOOKS_BY_LIST_HEADERS}
        tableData={createTableBody()}
      />
		</>
	);
}

export default BooksByList;
