- _Date Created_: 19 FEB 2024
- _Last Modification Date_: 20 FEB 2024

## Authors

- Priyatam Reddy Somagattu

## Deployment

I imported an existing front-end project from GitHub to Netlify, where I had a repository prepared. Then, I configured the build settings to deploy the application. Eventually, the app was successfully deployed and is now live at the provided link.

## Built With

- [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
- [Bootstrap](https://getbootstrap.com/) - CSS Library
- [npm](https://docs.npmjs.com//) - Dependency Management

## Sources Used

### utils/protectedRoutes.jsx

_Line 4-10_

```
function ProtectedRoutes({isLoggedIn}) {
  if(isLoggedIn){
    return <Outlet />
  } else {
    return <Navigate to="/login" />
  }
}
```

The code was created by adapting custom protected routes [Creating Protected Routes in React](https://medium.com/@chiragmehta900/creating-protected-routes-in-react-js-with-react-router-v6-28f3a3ac53d)

```
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = {'token': false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes
```

- I understood the use of React routers and a custom route component.
- This is important to prevent access of other pages without a login, such as profile listing and profile page without logging in.

## Acknowledgments

- The code provided valuable insights and served as a foundation for understanding and learning it's functionality and logic. I am grateful for their work and dedication.
