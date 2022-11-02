import { compile } from 'mathjs';
import React , {useState} from 'react'
import DataTable from 'react-data-table-component';
import './basicform.css';
var dataintable=[];
const Bisection = () => {
    const columns = [
        {
            name: 'Iteration',
            selector: row => row.iteration
        },
        {
            name: 'XL',
            selector: row => row.xlll
        },
        {
            name: 'XR',
            selector: row => row.xrrr
        },
        {
            name: 'X',
            selector: row => row.xx
        },
        {
            name: 'Error',
            selector: row => row.error
        },
    ]

    const [databisection,setdatabisection] = useState({
        fx: '',
        xl: 0,
        xr: 0
    });

    const [result,setresult]=useState(0);
    const [showresult,setshow]=useState(false);

    const func = (x) => {
        var expr = compile(databisection.fx);
        let scope = {x : parseFloat(x)};
        return expr.evaluate(scope);
    }

    function bisection(){
        var xll=parseFloat(databisection.xl),xrr=parseFloat(databisection.xr),FxR=0,Xm=0,FxM=0,XmOld=0,PercentError=100;
        var dataxl=[] , dataxr=[] , datax=[] , dataerror=[];
        var n=0; 
        while(PercentError>0.000001){
            XmOld=Xm;
            Xm=(xll+xrr)/2;
            datax[n]=Xm;
            FxM=func(Xm);
            FxR=func(xrr);
            if(FxM*FxR > 0){
                xrr=Xm;
            }else{
                xll=Xm;
            }
            dataxl[n]=xll;
            dataxr[n]=xrr;
            PercentError=Math.abs((Xm-XmOld)/Xm)*100;
            dataerror[n]=PercentError;
            n++;
        }
        createTable(dataxl,dataxr,datax,dataerror);
        setresult(Xm);
        setshow(true);
    }
    function createTable(xl,xr,x,error){
        dataintable = []
        for(var i=0;i<xl.length;i++){
            dataintable.push({
                iteration:i+1,
                xlll:xl[i],
                xrrr:xr[i],
                xx:x[i],
                error:error[i]
            });
        }
    }
    return(
        <form>
            <div class="head">
                <h1>Bisection</h1>
            </div>
            <div class="container">
                <div class="headform">
                    <div class="form-group">
                        <span class="detail">Equation</span>
                        <input type="text" placeholder="Enter the equation" onChange={(e)=> setdatabisection({...databisection, fx: e.target.value})}></input>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <span class="detail">XL</span>
                            <input type="number" name="xl" placeholder="Enter The XL Value" onChange={(e)=> setdatabisection({...databisection, xl: e.target.value})}></input>
                        </div>
                        <div class="form-group">
                            <span class="detail">XR</span>
                            <input type="number" name="xr" placeholder="Enter The XR Value" onChange={(e)=> setdatabisection({...databisection, xr: e.target.value})}></input>
                        </div>
                    </div>
                    <div class="row1">
                        <button type="button" onClick={bisection} >
                            Calculate
                        </button>
                    </div>
                    {showresult &&<div>
                        Answer is {result}
                    </div>}
                </div>
            </div>
            {showresult &&<div class="container1">
                <DataTable columns={columns} data={dataintable} pagination paginationRowsPerPageOptions={[5]}/>
            </div>}
            <div class="container1">
                    wait graphhhh
            </div>
        </form>
    )
}
export default Bisection