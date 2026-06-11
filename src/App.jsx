import Header from "./jsx/Header";
import Navbar from "./jsx/Navbar";
import Center from "./jsx/Center";

function App() {
  const name = "Ali";
  const family = "Alipour";

  const sayHi = (text) => {
    console.log(text);
  };

  return (
    <>
      <Header />
      <Navbar name={name} family={family} />
      <Center sayHi={sayHi} />
    </>
  );
}

export default App;
