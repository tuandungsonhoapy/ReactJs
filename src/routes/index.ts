//Pages
import Blog from 'pages/blog'
import Login from 'pages/Login/Login'
import HomePage from 'pages/Home'

//Layouts

//routesConfig
import config from '../config'

const publicRoutes = [
  { path: config.routes.blog, component: Blog },
  { path: config.routes.login, component: Login },
  { path: config.routes.home, component: HomePage }
]

export { publicRoutes }
