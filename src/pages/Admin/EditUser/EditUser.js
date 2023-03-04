import React, { Fragment, useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HttpsIcon from '@mui/icons-material/Https';
import { useNavigate, useParams } from 'react-router-dom';
import {  updateUserAdmin } from '../../../redux/Slice/usersSlice';
import {setHeaders, url } from '../../../redux/Slice/api';
import './editUser.scss'
import axios from 'axios';
const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const params = useParams();
  const [user, setUser] = useState({
    name:"",
    email:"",
    password: "",
    isAdmin: false,
    
 });

 useEffect(() => {
    const fetchUser = async () =>{
      try {
       
        const res  = await axios.get(`${url}/users/${params.id}`, setHeaders())
        setUser({
          ...res.data,
          password:""
        })
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [params.id]);
  
  
  const updateUserSubmitHandler = (e) => {
    e.preventDefault();
    
    dispatch(updateUserAdmin(user));
    navigate('/admin/users')
  };
  return (
    <Fragment>
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            onSubmit={updateUserSubmitHandler}
          >
            <h1 className='text-center'>Edit User</h1>

            <div>
              <PersonIcon />
              <input
                type="text"
                placeholder="Name"
                
                value={user.name}
                onChange={(e) => setUser({...user, name: e.target.value})}
              />
            </div>
            <div>
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
              />
            </div>
            <div>
              <HttpsIcon />
              <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
              />
            </div>

            <div>
              <VerifiedUserIcon />
              <select
              value={user.isAdmin}
              onChange={(e) => setUser({...user, isAdmin: e.target.value})}
              >
                <option value="">Choose Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            <Button id="createProductBtn" type="submit">
              Update
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EditUser;
