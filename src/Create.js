import React from "react";
import react, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const [user, setUser] = useState({
        fname: '', lname: '', email: '', gender: '', hobby: []
    });
        // const [arr, setArr] = useState([]);
    let arr = JSON.parse(localStorage.getItem('arr')) || []
    const [id, setId] = useState(null);
    const navigate =useNavigate();

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
    const submitHandle = () => {
        if (id === null) {
            localStorage.setItem('arr', JSON.stringify([...arr, user]));
        } else {
            console.log("jj")
            arr[id] = user;
            console.log(user, 'user')
            // setArr([...arr])
            setId(null)
        }
        setUser({fname: '', lname: '', email: '', gender: '', hobby: []});

        navigate("/")
    }
    // useEffect(() => {
    //
    //     setArr(Data);
    // }, []);
    return (
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
    );
}
export default Create;