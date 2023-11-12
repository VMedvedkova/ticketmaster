import './App.scss'
import { Provider } from 'react-redux'
import store from './redux/store'
import EventsList from "./components/EventsList"
import Header from './components/HeaderLayout'
import MainLayout from './components/MainLayout'
import Footer from './components/FooterLayout'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EventsList />
        <Header />
        <MainLayout />
        <Footer />
      </Provider>
    </div>
  )
}

export default App