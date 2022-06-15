import { FC } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { IndexPage } from "./pages";
import { PopupPage } from "./pages/popup";

export const Router: FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<IndexPage />} />
                    <Route path="popup" element={<PopupPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};
