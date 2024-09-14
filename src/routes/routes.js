// import { HeaderOnly } from '~/layouts';
// import { Home, Following, Explore, Upload, Profile, Live, Search, HomePhone } from '~/Pages';


import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Explore from '~/pages/Explore';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import Search from '~/pages/Search';
import HomePhone from '~/pages/PhoneUI';



import configs from '~/configs';

const publicRoutes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.homePhone, component: HomePhone },
    { path: configs.routes.following, component: Following },
    { path: configs.routes.explore, component: Explore },
    { path: configs.routes.search, component: Search },
    { path: configs.routes.profile, component: Profile },
    { path: configs.routes.upload, component: Upload, layout: null },
    { path: configs.routes.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
