import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import { Button } from '@mui/material';

export default function BasicTextFields() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const[name, setName] = React.useState('')
    const[address, setAddress] = React.useState('')
    const[users, setUsers] = React.useState([])


    const handleClick = (e) => {
        e.preventDefault()
        const user = { name, address }
        console.log(user)
        fetch("http://localhost:8080/user/add", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log("NEW USER ADDED")
        })

    }

    React.useEffect(() => {
        fetch("http://localhost:8080/user/getAll")
            .then(res => res.json())
            .then((result) => {
                setUsers(result);
            })
    }, []);
    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:"blue"}}>Add User</h1>
                <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                />
                <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
                value = {address}
                onChange = {(e) => setAddress(e.target.value)} 
                />
                <Button variant = "contained" onClick = {handleClick}>Add user</Button>
            </Paper>

            <Paper elevation={3} style={paperStyle}>
                {users.map(user => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={user.id}>
                        Id:{user.id}
                        Name:{user.name}
                        Address:{user.address}
                    </Paper>
                ))}

            </Paper>
        </Container>



    );
}
