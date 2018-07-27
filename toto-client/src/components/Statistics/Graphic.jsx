import * as React from "react";

import {Pie} from 'react-chartjs-2';
import {data} from "../../Utils/graphicUtils"



export class Graphic extends React.Component{

    render()
    {
        return(
            <div>
                <h2>Pie exmpl</h2>
                <Pie data={data} />
                </div>
        );
    }
}