console.log('Rendering culito...');
//live-server public --to run live server 
//babel src/app.js --out-file=public/scripts/app.js --presets='react,env' --watch --to automatically update js code with babel

/*
//object
const user = {
    name: 'Arialdys',
    age: 18,
    location: 'DR'

};


//Challenge
function getLocation(location) {

    if (location){

        return <p>Location: {location}</p>

    }
};


const template0 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);*/


const app = {
    title: 'Indecision App',
    subtitle: 'Here are your options',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const removeOptions = () => {

    app.options = [];
    renderApp();
};

const makeDecision = () => {

    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);

};

const appRoot = document.getElementById('app');



const renderApp = () =>{
    //JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>App: {app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should i do?</button>
            <button onClick={removeOptions}>Remove All</button>
            {
              
            }
            <ol>
                {
                    app.options.map((option) => <li key={option}>Option: {option}</li>)
                }
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                
            </form>
            
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();

