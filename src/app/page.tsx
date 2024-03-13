import Expenses from "./components/expenses";
import Navbar from "./components/navbar/navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Expenses />
    </main>
  );
}