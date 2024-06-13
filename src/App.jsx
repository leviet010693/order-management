import Route__Page from 'routes/Route__Page';
import Provider__App from 'providers/Provider__App';

import 'antd/dist/antd.min.css';
import './assets/styles/main.css';
import './assets/styles/responsive.css';

function App() {
  return (
    <Provider__App>
      <div className='App'>
        <Route__Page />
      </div>
    </Provider__App>
  );
}

export default App;
