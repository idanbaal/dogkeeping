import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

const SearchDogs = React.lazy(() => import('../../views/Search/SearchDogs'));
const SearchDoggySitter = React.lazy(() => import('../../views/Search/SearchDoggySitter'));
const Page404 = React.lazy(() => import('../../views/Pages/Page404'));
const Home = React.lazy(() => import('../../views/Home/Home'));
const About = React.lazy(() => import('../../views/About/About'));
const Profile = React.lazy(() => import('../../views/Profile/MyProfile'));
const Settings = React.lazy(() => import('../../views/Profile/Settings'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault();
    this.props.history.push('/login');
  }

  profile(e) {
    e.preventDefault();
    this.props.history.push('/profile/myprofile');
  }

  settings(e){
    e.preventDefault();
    this.props.history.push('/profile/settings');
  }


  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} onProfile={ e => this.profile(e)} onSettings={e=> this.settings(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} />
            </Suspense>
            <AppSidebarFooter />
            {/* <AppSidebarMinimizer /> */}
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  <Route exact path="/search/dogs" name="Search Dogs" component={SearchDogs} />
                  <Route exact path="/search/doggysitter" name="Search Doggy Sitter" component={SearchDoggySitter} />
                  <Route exact path="/" name="Home" component={Home} />
                  <Route exact path="/about/about" name="About" component={About} />
                  <Route exact path="/profile/myprofile" name="My Profile" component={Profile} />
                  <Route exact path="/profile/settings" name="Settings" component={Settings} />
                  <Route name="Page 404" component={Page404} />

                  {/*{routes.map((route, idx) => {*/}
                    {/*return route.component ? (*/}
                      {/*<Route*/}
                        {/*key={idx}*/}
                        {/*path={route.path}*/}
                        {/*exact={route.exact}*/}
                        {/*name={route.name}*/}
                        {/*render={props => (*/}
                          {/*<route.component {...props} />*/}
                        {/*)} />*/}
                    {/*) : (null);*/}
                  })}
                  {/* <Redirect from="/" to="/dashboard" /> */}

                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
