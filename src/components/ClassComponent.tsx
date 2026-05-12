//COMPONENENTE A CLASSE

import { Component } from "react";

interface ClassComponentProps{
    content : string
    num?: number
}

class ClassComponent extends Component <ClassComponentProps>{
    state = {
        name:'gigio',
    }
    handleClick = ()=>{this.setState({name :'ciccio'})}    
    render(){
        return(
          <div className="text-center bg-primary mt-3">
            <h3>Componente a classe</h3>
            <p>{this.props.content}{this.props.num}-{this.state.name}</p>
          </div>
        )
    }
}
export default ClassComponent