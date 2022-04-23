import React, {lazy, Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import {AuthorizedPage} from "@components/AuthorizedPage/AuthorizedPage";
import LoadingBox from "@components/LoadingBox";
import ScrollRestoration from 'react-scroll-restoration'
import {Error404} from "@templates/error/404";

const Test = lazy(() => import('@templates/Test'));
const TopNavPage = lazy(() => import('@templates/TopNavView'));
const Home = lazy(() => import('@templates/Home'));
// const Login = lazy(() => import('@templates/Login'));
const Logout = lazy(() => import('@templates/Logout'));
const SendPasswordReset = lazy(() => import('@templates/Settings/SendPasswordReset'));
const RegisterUser = lazy(() => import('@templates/Register/RegisterUser'));


const ProfileSettings = lazy(() => import('@templates/Settings/ProfileSettings'));
// const PointSettings = lazy(() => import('@templates/Settings/PointSettings'));

const EmailVerify = lazy(() => import('@templates/EmailVerify'));


function Routes() {
    return (
        <Suspense fallback={<LoadingBox/>}>
            <ScrollRestoration />
            <TopNavPage>
                <Switch>
                    <Route exact path='/test' component={Test}/>

                    <Route exact path='/' component={Home}/>
                    {/*<Route exact path='/login' component={Login}/>*/}
                    <Route exact path='/login/password-reset' component={SendPasswordReset}/>
                    <Route exact path='/logout' component={Logout}/>
                    <Route exact path='/register' component={RegisterUser}/>
                    <Route exact path='/verify' component={EmailVerify}/>
                    <Route exact path='/error' component={Error404}/>
                    {/*<Route component={Error404}/>*/}


                    {/* 캠페인 페이지 */}
                    <AuthorizedPage redirect={'/'} redirectEmailVerify={'/verify'}>
                        <Suspense fallback={<LoadingBox/>}>
                            <Switch>
                                <Route component={Error404}/>
                            </Switch>
                        </Suspense>
                    </AuthorizedPage>

                    <AuthorizedPage redirect={'/'}>
                        <Suspense fallback={<LoadingBox/>}>
                            <Switch>
                                <Route component={Error404}/>
                            </Switch>
                        </Suspense>
                    </AuthorizedPage>

                    <AuthorizedPage redirect={'/'}>
                        <Suspense fallback={<LoadingBox/>}>
                            <Switch>
                                <Route exact path='/settings' component={ProfileSettings}/>
                                <Route exact path='/settings/profile' component={ProfileSettings}/>
                                <Route component={Error404}/>
                            </Switch>
                        </Suspense>
                    </AuthorizedPage>

                    <Route component={Error404}/>
                </Switch>
            </TopNavPage>
        </Suspense>

    )
}

export default Routes;
