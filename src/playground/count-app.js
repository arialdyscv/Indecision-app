

class CounterApp extends React.Component {

    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        

        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if(!isNaN(count)) {
            this.setState(() => ({ count: count }));
        }

    }

    componentDidUpdate (prevProps, prevState) {
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
        
    }

  
    handleAddOne() {
        this.setState((prevState)=> {
            return {
                count: prevState.count + 1
            }; 
        });
    }

    handleMinusOne() {
        this.setState((prevState)=> {
            return {
                count: prevState.count - 1
            }; 
        });
    }

    handleReset(){
        this.setState(()=> {
            return {
                count: 0
            }; 
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>  
            </div>
        );
    }

}



ReactDOM.render(<CounterApp/>, document.getElementById('app'));


// let count = 0;
// const addOne = () => {
//     count ++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count --;
//     renderCounterApp();
// };

// const resetCount = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');
// //live-server public --to run live server 
// //babel src/app.js --out-file=public/scripts/app.js --presets='react,env' --watch --to automatically update js code with babel

// const renderCounterApp = () => {
//     const template1 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={resetCount}>Reset</button>
        
//         </div>
//     )
//     ReactDOM.render(template1, appRoot);
// };

// renderCounterApp();



