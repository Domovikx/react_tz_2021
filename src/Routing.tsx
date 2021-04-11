import * as React from 'react';
import AddTask from './pages/AddTask';
import AdminLayout from './components/layouts/AdminLayout';
import Authentication from './pages/Authentication';
import AuthLayout from './components/layouts/AuthLayout';
import EditTask from './pages/EditTask';
import Home from './pages/Home';
import Loader from './components/common/Loader';
import MainLayout from './components/layouts/MainLayout';
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Locations } from './constants/locations';
import { RootState } from './store/store.types';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

export const Routing = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={Locations.PageNotFound404} component={PageNotFound} />

          {isAuth ? (
            <Route path={Locations.Admin_Relative}></Route>
          ) : (
            <Route path={Locations.Admin_Relative}>
              <AdminLayout>
                <Switch>
                  <Redirect from={Locations.AllPages} to={Locations.HomePage} />
                </Switch>
              </AdminLayout>
            </Route>
          )}

          <Route path={Locations.Auth_Relative}>
            <AuthLayout>
              <Switch>
                <Route
                  path={Locations.Auth_Authentication}
                  component={Authentication}
                />

                <Redirect
                  from={Locations.Auth}
                  to={Locations.Auth_Authentication}
                />

                <Redirect
                  from={Locations.AllPages}
                  to={Locations.Auth_Authentication}
                />
              </Switch>
            </AuthLayout>
          </Route>

          <Route>
            <MainLayout>
              <Switch>
                <Route path={Locations.HomePage} exact component={Home} />

                <Route path={Locations.AddNewTask} component={AddTask} />
                <Route path={Locations.EditTask_id} component={EditTask} />

                <Route path={Locations.AllPages} component={PageNotFound} />
              </Switch>
            </MainLayout>
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
