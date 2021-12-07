import './layout.module.css'
const Layout = ({children}) => {
    return (
        <div className="col-8 offset-2 mt-5 pt-3">
            {children}
        </div>
    )
}

export default Layout;