import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


const LayoutAdmin: React.FC = (): JSX.Element =>  {
    const { user } = useAuth();
    // console.log(user);
    if(!user || user.role !== "admin"){
        return <Navigate to="/" replace />;
    }
  return (
    <>
    <header>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin/categories">Categories</Link></li>
           
        </ul>
    </header>
    <div className="row">
				<div className="col-3">
					<div className="sidebar">
						<ul>
							<li>
								<Link to="/admin">Dashboard</Link>
							</li>
							<li>
								<Link to="/admin/categories">Danh mục</Link>
							</li>
							<li>
								<Link to="/admin/users">User</Link>
							</li>
							<li>
								<Link to="/admin/products">Products</Link>
							</li>
							<li>
								<Link to="/admin/brands">Brands</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-9">
					<div className="main">
						<Outlet />
					</div>
				</div>
			</div>
    </>
  )
}

export default LayoutAdmin;