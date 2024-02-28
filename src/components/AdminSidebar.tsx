import { Link } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";

const menuItems = [
    { to: "/admin/dashboard", icon: <RiDashboardFill />, label: "Dashboard" },
    { to: "/admin/product", icon: <RiShoppingBag3Fill />, label: "Product" },
    { to: "/admin/customer", icon: <IoIosPeople />, label: "Customer" },
    {
        to: "/admin/transaction",
        icon: <AiFillFileText />,
        label: "Transaction",
    },
];

const AdminSidebar = () => {
    return (
        <aside>
            <h2>Logo.</h2>
            <div>
                <h5>Dashboard</h5>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.to}>
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default AdminSidebar;
