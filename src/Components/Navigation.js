import React, {Component} from 'react'

class Navigation extends Component{
    constructor(){
        super()
         this.state = {

         }
    }

    render(){
        return(
            <div>
                <Home />
                <Previous />
                <Next />
            </div>
        
        )

            
            
    }
}

export default Navigation
