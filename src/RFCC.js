import React from "react";
import react, {useState, useEffect} from "react";

const Form = () => {
    const [user, setUser] = useState({
        fname: '', lname: '', email: '', gender: '', hobby: []
    });
    const [arr, setArr] = useState([]);
    const [id, setId] = useState(null);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "hobby") {
            if (e.target.checked) {
                user.hobby.push(value);
                console.log(user.hobby, "hhhhh")
                setUser({...user, hobby: user.hobby})
            } else {
                const i = user.hobby.indexOf(value)
                user.hobby.splice(i, 1);
                console.log(i, 'ooo')
            }
            setUser({...user, hobby: user.hobby})
        } else {
            setUser({...user, [name]: value})
        }

    }
    console.log(user, "objjjjjj")

    const submitHandle = () => {
        if (id === null) {
            console.log(arr, user, "aoaoa")
            localStorage.setItem('arr', JSON.stringify([...arr, user]));
        } else {
            console.log("jj")
            arr[id] = user;
            console.log(user, 'llllllllllllllllllllllllllllllllllllllllllllll')
            setArr([...arr])
            setId(null)
        }
        setUser({fname: '', lname: '', email: '', gender: '', hobby: []});
    }
    console.log(arr, "arrayyyyy")
    useEffect(() => {
        const Data = JSON.parse(localStorage.getItem('arr')) || []
        setArr(Data);
    }, []);
    const handleEdit = (index) => {
        console.log(index, "edit index")
        setUser(arr[index])
        setId(index);
        console.log(index, "setid")
    }
    const handleDelete = (index) => {
        console.log(index, 'delete index')
        arr.splice(index, 1);
        setArr([...arr])
    }
    return (
        <div>
            <h1>React crud</h1>
            <form className="container mt-5">
                <div className="form-group">
                    <label htmlFor="fname">First name:</label>
                    <input type="text" name="fname" value={user.fname} onChange={(e) => handleInput(e)}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="lname">Last name:</label>
                    <input type="text" name="lname" value={user.lname} onChange={(e) => handleInput(e)}/>
                </div>
                <div className="form-group mt-3">
                    <label>Email:</label>
                    <input type="email" name="email" value={user.email} onChange={(e) => handleInput(e)}/>
                </div>
                <div className="form-group mt-3">
                    <label>choose gender:</label>
                    <input type="radio" name="gender" value="male" checked={user?.gender == "male"}
                           onChange={(e) => handleInput(e)}/>Male
                    <input type="radio" name="gender" value="female" checked={user?.gender == "female"}
                           onChange={(e) => handleInput(e)}/>Female
                </div>
                {console.log(user.hobby, "hhhhho")}
                <div className="form-group mt-3">
                    <label>Hobby:</label>
                    <input type="checkbox" name="hobby" value="hocky" checked={user.hobby.includes("hocky")}
                           onChange={(e) => handleInput(e)}/>Hocky
                    <input type="checkbox" name="hobby" value="music" checked={user.hobby.includes("music")}
                           onChange={(e) => handleInput(e)}/>Music
                    <input type="checkbox" name="hobby" value="cricket" checked={user.hobby.includes("cricket")}
                           onChange={(e) => handleInput(e)}/>Cricket
                </div>
                <button type="button" className="btn btn-success mt-4" onClick={() => submitHandle()}>Submit</button>
            </form>
            <div className="data">
                <table>
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
        </div>
    );
}
export default Form;
