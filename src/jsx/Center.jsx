function Center({sayHi}) {
  return (
    <>
      <div className="mt-40 ml-40 flex items-center gap-4 child: h-4">
        <label>say something:  </label>
        <input type="text" name="sayText" id="sayText" className="bg-gray-300 rounded-sm text-2xl pl-4"/>
        <button onClick={() => sayHi("SayHi")} className="bg-amber-700 rounded-lg p-3 cursor-pointer">SayHi</button>
      </div>
    </>
  );
}

export default Center;