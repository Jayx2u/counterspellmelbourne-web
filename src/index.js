import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Melbourne from "./Melbourne";
import DownloadPage from "./DownloadPage";
import NotFound from "./NotFound";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Melbourne />} />
                <Route path="/download/:filename" element={<DownloadPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
