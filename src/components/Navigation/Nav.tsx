import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import configRoutes from '../../config'
import styles from './Nav.module.scss'

const cx = classNames.bind(styles)

const Nav = () => (
  <div className={cx('topnav')}>
    <Link className={cx('active')} to={configRoutes.routes.home}>
      Home
    </Link>
    <Link to={configRoutes.routes.login}>Login</Link>
    <Link to={configRoutes.routes.blog}>Blogs</Link>
  </div>
)

export default Nav
