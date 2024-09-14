import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './layouts';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // Component
                        const Page = route.component;

                        // Layout
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    route.path !== '/home' ? (
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    ) : (
                                        <Page />
                                    )
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
