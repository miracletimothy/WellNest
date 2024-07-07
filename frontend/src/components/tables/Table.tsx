import React from 'react';

interface TableProps {
	data: Array<{ [key: string]: any }>;
	columns: Array<{ key: string; label: string }>;
}

const TableComponent: React.FC<TableProps> = ({ data, columns }) => {
	return (
		<table className='table'>
			<thead>
				<tr>
					{columns.map(column => (
						<th key={column.key}>{column.label}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{columns.map(column => (
							<td key={column.key}>{row[column.key]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableComponent;
