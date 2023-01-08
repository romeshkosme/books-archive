import { memo } from "react";
import "./BooksTable.css";
import TableHeader from "./TableHeader";
import { TailSpin } from "react-loader-spinner";

function BooksTable({ title, header, tableData, loading }) {
	return (
		<>
			<div className='m-4 rounded-lg drop-shadow-md bg-white cursor-default'>
				<div className='p-6'>
					{/* TABLE TITLE */}
					<h2 className='text-bold text-xl'>{title}</h2>
				</div>
				{/* LOADER */}
				{loading && <Loader loading={loading} />}
				{/* TABLE STARTS */}
				{!loading && (
					<table className='border'>
						{/* TABLE HEAD */}
						<thead>
							<TableHeader header={header} />
						</thead>
						{/* TABLE BODY */}
						<tbody className='text-sm'>{tableData}</tbody>
					</table>
				)}
				{/* TABLE ENDS */}
			</div>
		</>
	);
}

const Loader = (loading) => (
	<>
		{loading && (
			<div className='w-full flex justify-center items-center pb-6'>
				<TailSpin height='50' width='50' color='#E63946' />
			</div>
		)}
	</>
);

export default memo(BooksTable);
