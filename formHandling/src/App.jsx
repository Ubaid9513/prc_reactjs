const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Form Submitted Successfully!");
    console.log(e);

  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <input type="text" placeholder="Enter value!" />
        <br /><br />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default App
