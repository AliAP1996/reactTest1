function Center({ sayHi }) {
  const text = "sayHello";

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const selectChange = (e) => {
    console.log(Array.from(e.target.selectedOptions));
    console.log([...e.target.selectedOptions].map((option) => option.value));
  };

  let list = [];
  const checkChange = (e) => {
    const item = list.find((item) => item === e.target.value);
    console.log(item);

    if (item) {
      list = list.filter((item) => item !== e.target.value);
    } else {
      list.push(e.target.value);
    }
    console.log(list);
  };

  // const radionChange = (e) => {
  //   console.log(e);
  // };

  return (
    <>
      <div className="mt-40 ml-40 flex items-center gap-4 child: h-4">
        <label>say something: </label>
        <input
          type="text"
          name="sayText"
          id="sayText"
          onChange={handleChange}
          className="bg-gray-300 rounded-sm text-2xl pl-4"
        />
        <button
          onClick={() => sayHi(text)}
          className="bg-amber-700 rounded-lg p-3 cursor-pointer"
        >
          SayHi
        </button>
      </div>
      <select multiple onChange={selectChange} className="ml-40 mt-10 mb-20">
        <option value="ali">Ali</option>
        <option value="alipour">Alipour</option>
        <option value="marghmaleki">Marghmaleki</option>
      </select>

      <form action="" className="ml-40" onChange={checkChange}>
        <input type="checkbox" name="car" value="pride" id="carPride" /> Pride
        <br />
        <input type="checkbox" name="car" value="peugout" id="carPeugout" /> Peugout
        <br />
        <input type="checkbox" name="car" value="quik" id="carQuik" /> Quik
        <br />
        <input type="checkbox" name="car" value="saina" id="carSaina" /> Saina
      </form>
    </>
  );
}

export default Center;
