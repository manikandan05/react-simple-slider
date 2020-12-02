import bgimg from './asset/bgimg.jpg';
import './App.css';
import { useState } from 'react';

function App() {

  const details = {
    salary: 18300,
    earning: 212.28,
    fees: 21.23
  }

  const min = 500;
  const max = 250000;
  const earningDivisor = 86.20;
  const feesDivisor = 861.98;

  const [salaryDetail, salaryUpdate] = useState(details);

  const inputChange = (e) =>{
    var value = parseInt(e.target.value.replace(/,/g, ''));    
    value = value > max ? max : value;    
    const isNaN = !Number.isNaN(parseFloat(value));    
    salaryUpdate({
      salary: isNaN ? parseFloat(value) : 0,
      earning: isNaN ? parseFloat(value / earningDivisor).toFixed(2) : 0,
      fees: isNaN ? parseFloat(value / feesDivisor).toFixed(2) : 0
    })
  }

  const handleChange = (e) => {
    if(e.target.value.length > 1 && e.taget)
    salaryUpdate({
      salary: parseFloat(parseInt(e.target.value).replace(/,/g, '')),
      earning: parseFloat((parseInt(e.target.value) / 12)).toFixed(2),
      fees: parseFloat((parseInt(e.target.value) / 80)).toFixed(2)
    })
  }

  return (
    <div className="container">
      <div className="img-section" style={{ backgroundImage: `url(${bgimg}` }}>
        <div>
          <h1 className="big-heading">Lending made easy</h1>
          <p className="sub-heading">Earn up to -1.16% a year across a wide range of P2P sites with investUP</p>
          <div className="btn">Get Started</div>
        </div>
      </div>
      <div className="main-content">
        <div className="form-text">
          <div style={{ fontSize: "37px", textAlign: "center" }}>With<span className="highlight-text salary">€<input min={min} max={max} value={salaryDetail.salary.toLocaleString()} onChange={(e)=>inputChange(e)}></input></span> your estimated earning cound be <span className="earnings highlight-text">€-{salaryDetail.earning.toLocaleString()}</span> * per
  year with fees of just <span className="highlight-text fees">€-{salaryDetail.fees.toLocaleString()}</span> per year.
  </div>
          <p className="paragraph">Estimated earnings are based on -1.16% per annum before tax any potential losses. As with most forms of investment, peer-to-peer lending carries a
    degree of risk to your capital; In this case, if borrows were unable to repay your loans.</p>
        </div>
        <div className="range-value">
          <span className="start-value">€ 500</span>
          <input id="range" type="range" min={min} max={max} value={salaryDetail.salary} onChange={(e) => inputChange(e)} step="1" />
          <span className="end-value">€ 250,000</span>
        </div>
      </div>
    </div>
  );
}

export default App;
