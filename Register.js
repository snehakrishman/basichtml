
import {Link} from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Register(){

    const handlesubmit= async(event)=>{
        event.preventDefault();
   
        var datastring =new
        FormData(event.target);
        var config ={headers:{"enctype":"multipart/form-data"}};

         let role =document.getElementById('Role').value;
        let name =document.getElementById('name').value;
        let email=document.getElementById('email').value;
        let phone=document.getElementById('phone').value;
        let address=document.getElementById('address').value;
        let branch =document.getElementById('Branch').value;
        let password= document.getElementById('password').value;
    
         if(role ===""|| role === null){
            alert('choose role');
        }
        else if(name ===""|| name ===null){
            alert('Enter name');
        }
        else if (email ===""|| email ===null){
            alert('Enter email');
        }
        else if (phone ===""|| phone ===null){
            alert('Enter phone');
        }
        else if (address ===""|| address ===null){
            alert('Enter address');
        }
        else if ( branch===""|| branch===null){
            alert('choose branch');
        }
        else if ( password===""|| password ===null){
            alert(' Enter password');
        }
        else {
            await axios.post('http://localhost:3004/log-in',(datastring,config))
            .then(function(res){
                if(res.data.status==='error'){
                    alert('Error');
                  window.location.reload();
                }
                else if(res.data.status==='inserted'){
                   alert('Profile Created');
                   window.location.href="./";}
            })
            .catch(function(err){
                alert(err);
                window.location.reload();
            })
        }
        }
    
    return(
        <>
        <div className="container">
            <div className="row">
             <div className="col-lg-3">&nbsp;</div> 
             <div className="col-lg-6">
                <form onSubmit={handlesubmit}>
                <div className="table-responsive">
                  <table className="table table-bordered">
                      <thead>
                       <tr>
                        <th colSpan={2}>Register</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Role Type</td>
                            <td><select name ="Role" id="Role" className="form-control">
                                <option value ="">--choose--</option>
                                <option value ="1">1</option>
                            </select></td></tr> 
                            <tr>
                            <td>Name</td>
                            <td><input typ="text" name="name"id="name"className="form-control"/></td></tr>
                            <tr>
                            <td>Email Id</td>
                            <td><input typ="text" name="email"id="email"className="form-control"/></td></tr>
                            <tr>
                            <td>Phone</td>
                            <td> <input typ="number" name="phone"id="phone"className="form-control"/></td>
                            </tr>
                            <tr>
                            <td>Address</td>
                            <td> <input typ="address" name="address"id="address"className="form-control"/></td>
                            </tr>

                            <tr>
                            <td>Branch</td>
                            <td> <select name="Branch"id="Branch"className="form-control">
                            <option value="">--choose--</option>
                            <option value ="1">1</option>
                            </select></td>
                            </tr>
                            <tr>
                                <td>password</td>
                                <td><input type="passowrd" name="password" id="password" className="form-control"/></td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/login">
                                        <button type="button" name="data_change"id="data_change"className="btn btn-danger">
                                            log-in
                                            </button>
                                            </Link>
                                    </td>
                                <td>
                                   
                                </td>
                                </tr>
                            </tbody>      
                   </table>
        
               
               </div> 
               </form> 
            </div>
            </div>
        </div>
        </>
    )

    }
