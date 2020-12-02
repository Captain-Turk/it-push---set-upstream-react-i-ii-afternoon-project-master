import React, {Component} from 'react'

class Buttons extends Component{
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <button className="midButton" >Edit</button>
                <button className="midButton" >Delete</button>
                <button className="midButton" >New</button>  
            </div>
            
        )
    }


}

export default Buttons
