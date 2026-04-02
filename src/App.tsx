/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import StudentLife from "./pages/StudentLife";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="a-propos" element={<About />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="vie-scolaire" element={<StudentLife />} />
            <Route path="contact" element={<Contact />} />
            <Route path="mentions-legales" element={<MentionsLegales />} />
            <Route path="confidentialite" element={<Confidentialite />} />
          </Route>
          {/* Gallery — standalone, no navbar/footer, only reachable from StudentLife */}
          <Route path="/galerie/:type" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
