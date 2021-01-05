function Home() {
  return (
    <div classNAme="card col-10 col-md-8 shadow cardMain cardHomePages">

      <div className="card-body">
        <h1 className="card-title text-center">Enter Your Email Address to Play</h1>
        <h4 className="card-text text-center">If you are a Mackenzie Health Professional please use your Mackenzie Health Email Address</h4>
        <br />
        <div className="input-group mb-3 emailInput">
          <input type="text" className="form-control emailInput" placeholder="Enter your email address" aria-label="emailaddress"></input>
        </div>
        <br />
        <div classNAme="d-grid gap-2 col-4 mx-auto">
          <button className="btn btn-primary" type="button">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
