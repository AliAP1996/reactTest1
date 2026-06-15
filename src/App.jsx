import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const [size, setSize] = useState(window.innerWidth);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/userssad")
    //   .then((res) => {
    //     if(!res.ok) throw new Error('failed');
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setUsers(data);
    //     console.log(data);
    //   })
    //   .catch((err) => setErr(err.message))
    //   .finally(setLoading(false));

    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
      console.log("a");
    });

    return () => {
      window.removeEventListener("resize", () => {
        setSize(window.innerWidth);
        console.log("d");
      });
    };
  }, []);

  return (
    <>
      <button onClick={() => setNum(num + 1)}>count : {num}</button>
      <br />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        className="bg-gray-300"
      />
      <br />
      <h4>name: {name}</h4>
      <br />
      <br />
      <h1>width: {size}</h1>
      <br />
      <hr />
      <br />
      {loading && <h3>Loading...</h3>}
      {err && <h3>Error: {err}</h3>}
      {users && users.map((user) => <h3 key={user.id}>{user.name}</h3>)}
    </>
  );
}

export default App;
