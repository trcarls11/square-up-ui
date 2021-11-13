import App from './App';
import ReactDOM from "react-dom";

test('renders square up app', () => {
  const div = document.createElement("div")
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div)
});
