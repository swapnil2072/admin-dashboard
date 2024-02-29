import { Link } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { IconType } from "react-icons";

const menuItems = [
    { to: "/admin/dashboard", icon: RiDashboardFill, label: "Dashboard" },
    { to: "/admin/products", icon: RiShoppingBag3Fill, label: "Product" },
    { to: "/admin/customers", icon: IoIosPeople, label: "Customer" },
    {
        to: "/admin/transactions",
        icon: AiFillFileText,
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
                        <Li
                            url={item.to}
                            text={item.label}
                            location={location}
                            Icon={item.icon}
                            key={index}
                        ></Li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

interface LiProps {
    url: string;
    text: string;
    location: Location;
    Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => (
    <li
        style={{
            backgroundColor: location.pathname.includes(url)
                ? "rgba(0,115,255,0.1)"
                : "white",
        }}
    >
        <Link
            to={url}
            style={{
                color: location.pathname.includes(url)
                    ? "rgb(0,115,255)"
                    : "black",
            }}
        >
            <Icon />
            {text}
        </Link>
    </li>
);

export default AdminSidebar;
