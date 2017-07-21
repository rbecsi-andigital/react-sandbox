
class App extends React.Component{
  render(){
    return(
      <div className="welcome">
        <h1>Hello</h1>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);