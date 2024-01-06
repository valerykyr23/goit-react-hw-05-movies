import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css"

const Layout = () => {
    return <div>
        <header>
            <ul>
          <li><NavLink className={css.NavLink} to="/">Home</NavLink></li>
          <li><NavLink className={css.NavLink} to="/movies">Movies</NavLink></li>
            </ul>

        </header>
        <main>
             <Outlet/>
        </main>
        
        <footer>
            <ul className={css.FooterList}>
                <li className={css.FooterLi}>Contacts</li>
                <li className={css.FooterLi}>Credits</li>
                <li className={css.FooterLi}>About</li>
            </ul>
        </footer>
    </div>
};


export default Layout;