import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import swager from '../swagger/output.json';

function App() {
  return (
    <div className="App">
      <SwaggerUI url={`/home/xenoxil/swagger/swagger/output.css`} />
    </div>
  );
}

export default App;
