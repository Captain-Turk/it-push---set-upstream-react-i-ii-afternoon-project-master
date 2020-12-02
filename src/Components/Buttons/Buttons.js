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
                <Edit />
                <Delete />
                <New />
            </div>
            
        )
    }


}

export default Buttons
