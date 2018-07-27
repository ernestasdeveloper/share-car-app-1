import * as todoItem from "../data/todoItem";
import {todoItems} from "../data/todoItems";

export const data = {
	labels: todoItem.Status,
	datasets: [{

		data: todoItem.Status.map(x => todoItems.filter(y => x === y.status).length),
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
		'#123456'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

