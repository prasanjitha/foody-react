import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  const token = useRouteLoaderData('root');
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Foody
            </NavLink>
          </li>
          {!token && <li>
            <NavLink
              to="/auth?mode=login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Athentication
            </NavLink>
          </li>}
          {token && <li>
            <Form action='/logout' method='post'>
              <button className={classes.logoutbtn}>Logout</button>
            </Form>
          </li>}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
