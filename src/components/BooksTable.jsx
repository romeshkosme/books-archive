import { useState, useEffect, memo } from "react";
import axios from "../utilities/AxiosConfig";
import "./BooksTable.css";

function BooksTable(props) {
	// const [BOOKS, SET_BOOKS] = useState([]);
	// const FETCH_BOOKS = () => {
	// 	console.log("second");
	// 	axios
	// 		.get(
	// 			`/lists/best-sellers/history.json?api-key=${
	// 				import.meta.env.VITE_NYC_API_KEY
	// 			}`
	// 		)
	// 		.then((response) => {
	// 			if (response.data && response.data.results) {
	// 				console.log(response.data.results);
	// 				SET_BOOKS(response.data.results);
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		})
	// 		.finally(() => {
	// 			// stop loader
	// 		});
	// };
	// useEffect(() => {
	// 	console.log("first");
	// 	FETCH_BOOKS();
	// }, []);
	return (
		<>
			<div className='m-4 rounded-lg drop-shadow-md bg-white cursor-default'>
				<div className='p-6'>
					<h2 className='text-bold text-xl'>
						{props.title}
					</h2>
				</div>
				<table className='border'>
					<thead>
						<tr className='text-sm bg-custom-blue text-white'>
							{props.header &&
								props.header.map((element, index) => (
									<th className='border-r p-2' key={element.id}>
										{element.title}
									</th>
								))}
						</tr>
					</thead>
					<tbody className='text-sm'>
						{props.tableData}
						{/* {props.data &&
							props.data.length > 0 &&
							props.data.map((book, index) => (
								<tr className='border-b' key={index + book.title}>
									<td className='border-r p-2'>{index + 1}</td>
									<td className='border-r p-2 max-h-1 h-1 truncate w-10 max-w-[220px]'>
										{book.title}
									</td>
									<td className='border-r p-2 max-h-1 h-1 truncate w-10 max-w-[220px]'>
										{book.author}
									</td>
									<td className='border-r p-2 max-h-1 h-1 truncate w-3/12 max-w-lg'>
										{book.description}
									</td>
									<td className='border-r p-2'>{book.publisher}</td>
								</tr>
							))} */}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default memo(BooksTable);
