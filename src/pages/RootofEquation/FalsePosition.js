import { compile } from 'mathjs';
import React , {useState} from 'react'
import DataTable from 'react-data-table-component';
import './basicform.css';

var dataintable=[];
const FalsePosition = () => {
    const [datafalseposition,setdatafalseposition] = useState({
        fx: '',
        xl: 0,
        xr: 0
    });

    const [result,setresult]=useState(0);
    const [showresult,setshow]=useState(false);

    const func = (x) => {
        var expr = compile(datafalseposition.fx);
        let scope = {x : parseFloat(x)};
        return expr.evaluate(scope);
    }

    function falseposition(){
        var xll=parseFloat(datafalseposition.xl),xrr=parseFloat(datafalseposition.xr);
        var eiei = xll+xrr;
        setresult=eiei;

    }

    return (
        <form>
            <div class="head">
                <h1>False-Position</h1>
            </div>
            <div class="container">
                <div class="headform">
                    <div class="form-group">
                        <span class="detail">Equation</span>
                        <input type="text" placeholder="Enter the equation" onChange={(e)=> setdatafalseposition({...datafalseposition, fx: e.target.value})}></input>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <span class="detail">XL</span>
                            <input type="number" name="xl" placeholder="Enter The XL Value" onChange={(e)=> setdatafalseposition({...datafalseposition, xl: e.target.value})}></input>
                        </div>
                        <div class="form-group">
                            <span class="detail">XR</span>
                            <input type="number" name="xr" placeholder="Enter The XR Value" onChange={(e)=> setdatafalseposition({...datafalseposition, xr: e.target.value})}></input>
                        </div>
                    </div>
                    <div class="row1">
                        <button type="button">
                            Calculate
                        </button>
                    </div>
                    <div>
                        Answer is {result} 
                    </div>
                </div>
            </div>
            <div class="container1">
                
            </div>
            <div class="container1">
                    wait graphhhh
            </div>
        </form>
    )
}

export default FalsePosition