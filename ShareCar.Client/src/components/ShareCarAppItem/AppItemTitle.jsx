import * as react from 'react';

export class AppItemTitle extends React.Component{
    render(){
        return(
            <span>{this.props.title}</span>
        );
    }
}