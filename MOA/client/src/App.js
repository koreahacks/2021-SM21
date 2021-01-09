import { Switch, Route } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import VideoUploadPage from './VideoUploadPage/VideoUploadPage'
import VideoDetailPage from './VideoDetailPage/VideoDetailPage'
import ImageUploadPage from './ImageUploadPage/ImageUploadPage'
import LandingPage from "./LandingPage/LandingPage.js";
import RegisterPage from "./RegisterPage/RegisterPage.js";
import LoginPage from "./LoginPage/LoginPage";
import Auth from "./hoc/auth";
import Axios from 'axios'

function App() {

  useEffect(() => {
    Axios.get('/api/hello')
      .then((res) => console.log(res))
  }, [])

  return (
    <div>
<<<<<<< HEAD
      <RegisterPage/>
      {/* <Router>
        <switch>
          <Route exact path="/" component={RegisterPage} />
        </switch>
      </Router> */}
=======
      <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/upload" component={Auth(VideoUploadPage, null)} />
          <Route exact path="/image" component={Auth(ImageUploadPage, true)} />
          <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
        </Switch>
>>>>>>> 151b77d95046c066bcd5b88e65f138b3d684c9c3
    </div>
  );
}

export default App;
