import Expenses from "./components/expenses/expenses";
import ReactDOM from "react-dom";
export default function Home() {
  return (
    <main>
      <Expenses />
    </main>
  );
}
ReactDOM.render(<Home />, document.getElementById('chatbot'));
