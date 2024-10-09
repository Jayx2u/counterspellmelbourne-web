import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Melbourne from "./Melbourne";
import DownloadPage from "./DownloadPage";
import NotFound from "./NotFound";

import Poster1Analytics from "./Poster1Analytics";
import Poster2Analytics from "./Poster1Analytics";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Melbourne />} />
                <Route path="/download/:filename" element={<DownloadPage />} />
                <Route path="*" element={<NotFound />} />

                <Route path="/poster1" element={<Poster1Analytics />} />
                <Route path="/poster2" element={<Poster2Analytics />} />

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
