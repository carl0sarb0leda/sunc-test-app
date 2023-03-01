import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Home } from "containers";

const NotFound = () => {
    return <div>Not found</div>;
};

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
