
// import './App.css';
import {Header,Footer,Card} from './components'
import {AllRoutes} from './routes/AllRoutes'
import ScrollToTop from '../src/components/ScrollToTop'
function App() {
  return (
    <div className="App">
      <Header/>
      <ScrollToTop/>
      <main className='max-w-screen-2xl min-h-[85vh] p-5 mx-auto dark:bg-gray-800'>

        <AllRoutes/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
