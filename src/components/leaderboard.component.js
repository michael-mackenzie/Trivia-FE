function Leaderboard() {
  return (
    <div class="">

      <div className="card col-md-8 offset-md-2 col-sm-10 offset-sm-2 col-10 offset-sm-2 shadow cardTitle">
        <div className="card-body">
          <h1 className="text-center">Today's Leaderboard</h1>
          <h4 classNAme="text-center">You are Currently #39 with 13 Points</h4>
        </div>
      </div>
      <div className="card col-md-8 offset-md-2 col-sm-10 offset-sm-2 col-10 offset-sm-2 shadow leaderboard cardMain">

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nickname</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>113</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>079</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>079</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>079</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>079</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Larry</td>
              <td>079</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Larry</td>
              <td>079</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Larry</td>
              <td>079</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Larry</td>
              <td>079</td>
            </tr>
          </tbody>
        </table>



      </div>
    </div>
  )
}

export default Leaderboard;
