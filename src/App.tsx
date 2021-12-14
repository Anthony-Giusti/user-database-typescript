import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import axios from 'axios';
import { ThemeProvider } from '@material-ui/styles';

import Users from './Pages/Users/Users';
import CreateUser from './Pages/CreateUser/CreateUser';
import NavBar from './components/NavBar/NavBar';
import createDateAndTimeString from './components/util/functions/createDateAndTimeString';

import './App.css';
import Theme from './Themes/Theme';
import useStyles from './Styles';

import { IUser } from './shared/interfaces/User.interface';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:5000/',
});

const App: React.FC = () => {
  const [userData, setUserData] = useState<IUser[]>([]);
  const [isFetchingUserData, setIsFetchingUserData] = useState<boolean>(false);

  const classes = useStyles();
  const history = useHistory();

  const fetchUserData = async (): Promise<void> => {
    setIsFetchingUserData(true);
    await api
      .get<IUser[]>('/getUserData',)
      .then((response) => {
        const data = Object.values(response.data);
        setUserData(data);
        setIsFetchingUserData(false);
      });
  };

  const createUser = async (newUser: IUser): Promise<void> => {
    await api.post('/createNewUser', { newUser }).then((response) => {
      console.log(response);
    });

    history.push('/');
  };

  const removeUser = (userId: string): void => {
    const newUsers = userData.filter((user) => user._id !== userId);
    setUserData(newUsers);

    api.get(`/deleteUser?userId=${userId}`);
  };

  const editUser = (editedUser: IUser): void => {
    editedUser.lastEdit = createDateAndTimeString();
    const newUsers = [...userData];
    const userIndex = userData.findIndex((user) => user._id === editedUser._id);
    newUsers.splice(userIndex, 1, editedUser);

    setUserData(newUsers);
    api.post('/editUser', { editedUser });
  };

  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <NavBar />
        <div className={classes.appMain}>
          <Switch>
            <Route exact path="/">
              <Users
                userData={userData}
                removeUser={removeUser}
                submitEditedUser={editUser}
                fetchUserData={fetchUserData}
                isFetchingUserData={isFetchingUserData}
              />
            </Route>
            <Route path="/create-user">
              <CreateUser submitUser={createUser} />
            </Route>
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
