import React from "react";

function TableHeader({ header }) {
	return (
		<>
			<tr className='text-sm bg-custom-blue text-white'>
				{header &&
					header.map((element, index) => (
						<th className='border-r p-2' key={element.id}>
							{element.title}
						</th>
					))}
			</tr>
		</>
	);
}

export default TableHeader;
