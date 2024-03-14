import { ToastContainer, Bounce } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import { publicRoutes } from 'routes'
import Nav from 'components/Navigation'

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          transition={Bounce}
        />
      </div>
    </Router>
  )
}

export default App
