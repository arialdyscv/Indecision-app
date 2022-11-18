
class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        //this.makeVisible = this.makeVisible.bind(this);
        this.state = {
            visible: true

        };
    }

    handleToggle(){
        this.setState((prevState) =>{
            return {
                visible: !prevState.visible
            }
        })
        
    }

    render() {

        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visible ? 'Hide details' : 'Show details'}</button>

                {this.state.visible && (
                    <div>
                        <p>These are some details you can now see!</p>
                    </div>
                )}
        
            </div>
        )
    }
}


ReactDOM.render(<Visibility />, document.getElementById('app'));



// let visibility = false;

// const changeLabel = () => {
    
//     visibility = !visibility;
//     render();
// }


// const render = () => {

//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={changeLabel}>{visibility ? 'Hide details' : 'Show details'}</button>
            // {visibility && (
            //     <di>
            //         <p>These are some details you can now see!</p>
            //     </di>
            // )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);

// }
// const appRoot = document.getElementById('app');



// render();






