console.log("App.js is running");
const app = {
  title: "Indecision App",
  subtitle: "completed",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault(); //To  the whole page refresh on addition of a new element in the array

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";

    renderFunction();
  }
};

const removeall = () => {
  app.options = [];

  renderFunction();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];

  alert(option);
};

const renderFunction = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>

      <button disabled={app.options.length == 0} onClick={onMakeDecision}>
        What should i do
      </button>
      <button onClick={removeall}>Remove All</button>

      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  const appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

renderFunction();
