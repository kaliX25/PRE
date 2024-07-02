import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Products_csnri from './Products-csnri';
import Products_premiere_coating from './Products-premierecoating';
import Products_magnaseal from './Products-magnaseal';
import Products_forge_bonding from './Products-forgebonding';
import Products_resimac from './Products-resimac';
import Products_allmet from './Products-allmet';
import Products_pilemedic from './Products-pilemedic';
import Products_carmel from './Products-carmel';
import Corrosion_preventions from './Services-corrosion_preventions';
import Pressure_pipe from './Services-pressure_pipe_reinforcement';
import Cold_work_method from './Services-cold_work_method';
import Vessel_and_Tank from './Services-vessel_and_tank_reinforcement';
import Down_time from './Services-down_time_free_solutions';
import Contact from './Contact';
export default function App() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/home');
  }, []);
  return (
    <Routes>
      <Route path={'/home'} element={<HomePage />} />
      <Route path={'/about'} element={<AboutPage />} />
      <Route path={'/csnri'} element={<Products_csnri />} />
      <Route
        path={'/premierecoating'}
        element={<Products_premiere_coating />}
      />
      <Route path={'/magnaseal'} element={<Products_magnaseal />} />
      <Route path={'/allmet'} element={<Products_allmet />} />
      <Route path={'/forgebonding'} element={<Products_forge_bonding />} />
      <Route path={'/resimac'} element={<Products_resimac />} />
      <Route path={'/pilemedic'} element={<Products_pilemedic />} />
      <Route path={'/carmel'} element={<Products_carmel />} />
      <Route
        path={'/corrosion_prevention'}
        element={<Corrosion_preventions />}
      />
      <Route
        path={'/pressure_pipe_reinforcement'}
        element={<Pressure_pipe />}
      />
      <Route
        path={'/vessel_and_tank_reinforcement'}
        element={<Vessel_and_Tank />}
      />
      <Route path={'/cold_work_method'} element={<Cold_work_method />} />
      <Route path={'/downtime_free_solutions'} element={<Down_time />} />
      <Route path={'/contact'} element={<Contact />} />
    </Routes>
  );
}
