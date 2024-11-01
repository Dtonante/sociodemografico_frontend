import logo from './logo.svg';
import './App.css';

import CompShowEps from './eps/ShowEps.js';
import CompShowAntecedentesMedicos from './antecedentesMedicos/ShowAntecedentesMedicos.js';
import CompShowCuentasBancarias from './cuentasBancarias/ShowCuentasBancarias.js';
import CompShowEspaciosHogar from './espaciosHogar/ShowEspaciosHogar.js';
import CompShowEstructuraOrganizacional from './estructuraOrganizacional/ShowEstructuraOrganizacional.js';
import CompShowFactoresDeRiesgo from './factoresDeRiesgo/ShowFactoresDeRiesgo.js';
import CompShowFondoDePension from './fondoDePension/ShowFondoDePension.js';
import CompShowServicioDeSaludAdicional from './servicioSaludAdicional/ShowServicioSaludAdicional.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CompShowEps></CompShowEps>
      <br></br>
      <CompShowAntecedentesMedicos></CompShowAntecedentesMedicos>
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
    </div>
  );
}

export default App;
