import "./layout.module.css";
const Layout = ({ children }) => {
  return <div className="col-10 offset-1 mt-4">{children}</div>;
};

export default Layout;
