import {useNavigate} from "react-router";
import react, {useState, useEffect} from "react";
export const Read= key=>{
    const [user, setUser] = useState({
        fname: '', lname: '', email: '', gender: '', hobby: []
    });
    const [arr, setArr] = useState([]);
    const [id, setId] = useState(null);
    const Data = JSON.parse(localStorage.getItem('arr')) || []

    const navigate =useNavigate();
    useEffect(() => {
        setArr(Data);
    }, []);
    const handleEdit = (index) => {
        // console.log(index,"edit")
        setUser(arr[index]);
        // console.log(arr[index],"idddd")
        setId(index)
        // `/update/${Read}`
        // console.log(index)
        // console.log(Read,"uuuuuuuuuuu")
        // let {id}=useParams();

        navigate(`/Update/${index}`);
    }
    const handleDelete = (index) => {
        console.log(index, 'delete index')
        console.log(arr,'sss')
        arr.splice(index, 1);
        // setArr([...arr])
        localStorage.setItem('arr', JSON.stringify(arr));
    }
      const handleContact=()=>{
        console.log("kk")
        navigate("/Create")
    }
    return(

        <div>
            <button type="button" onClick={()=>handleContact()}>Add Conatct</button>
            <table className="data">
                <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Hobby</th>
                </tr>
                </thead>
                <tbody>
                {
                    arr.map((item, index) => {
                        console.log(index)
                        return (
                            <tr key={index} className="td">
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.hobby}</td>
                                <td>
                                    <button type="button" className="btn btn-info"
                                            onClick={() => handleEdit(index)}>Update
                                    </button>
                                    <button type="button" className="btn btn-danger"
                                            onClick={() => handleDelete(index)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
// export Read;