import logo from './logo.svg';
import './App.css';

import CompShowEps from './eps/ShowEps.js';
import CompCrearEps from './eps/CreateEps.js';
import CompEditarEps from './eps/EditEps.js';


import CompShowAntecedentesMedicos from './antecedentesMedicos/ShowAntecedentesMedicos.js';
import CompEditarAntecedentesMedicos from './antecedentesMedicos/EditAntecedentesMedicos.js';

import CompShowCuentasBancarias from './cuentasBancarias/ShowCuentasBancarias.js';
import CompShowEspaciosHogar from './espaciosHogar/ShowEspaciosHogar.js';
import CompShowEstructuraOrganizacional from './estructuraOrganizacional/ShowEstructuraOrganizacional.js';
import CompShowFactoresDeRiesgo from './factoresDeRiesgo/ShowFactoresDeRiesgo.js';
import CompShowFondoDePension from './fondoDePension/ShowFondoDePension.js';
import CompShowServicioDeSaludAdicional from './servicioSaludAdicional/ShowServicioSaludAdicional.js';
import CompShowServiciosQueNoCuentan from './serviciosQueNoCuentan/ShowServiciosQueNoCuentan.js';
import CompShowTiempoLibre from './tiempoLibre/ShowTiempoLibre.js';
import CompShowTipoDocumento from './tipoDocumento/ShowTipoDocumento.js';
import CompShowTransportePropio from './transportePropio/ShowTransportePropio.js';
import CompShowUsuarios from './usuarios/ShowUsuarios.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<CompShowEps/>}></Route> */}
          <Route path='/crear' element={<CompCrearEps/>}></Route>
          <Route path='/editar/:id_epsPK' element={<CompEditarEps/>}></Route>


          <Route path='/' element={<CompShowAntecedentesMedicos/>}></Route>
          <Route path='/crear' element={<CompCrearEps/>}></Route>
          <Route path='/editar/:id_antecedenteMedicoPK' element={<CompEditarEps/>}></Route>




        </Routes>
      </BrowserRouter>



      {/* <CompShowEps></CompShowEps> */}
      <br></br>
      {/* <CompShowAntecedentesMedicos></CompShowAntecedentesMedicos> */}
      <br></br>
      <CompShowCuentasBancarias></CompShowCuentasBancarias>
      <br></br>
      <CompShowEspaciosHogar></CompShowEspaciosHogar>
      <br></br>
      <CompShowEstructuraOrganizacional></CompShowEstructuraOrganizacional>
      <br></br>
      <CompShowFactoresDeRiesgo></CompShowFactoresDeRiesgo>
      <br></br>
      <CompShowFondoDePension></CompShowFondoDePension>
      <br></br>
      <CompShowServicioDeSaludAdicional></CompShowServicioDeSaludAdicional>
      <br></br>
      <CompShowServiciosQueNoCuentan></CompShowServiciosQueNoCuentan>
      <br></br>
      <CompShowTiempoLibre></CompShowTiempoLibre>
      <br></br>
      <CompShowTipoDocumento></CompShowTipoDocumento>
      <br></br>
      <CompShowTransportePropio></CompShowTransportePropio>
      <br></br>
      <CompShowUsuarios></CompShowUsuarios>
    </div>
  );
}

export default App;
