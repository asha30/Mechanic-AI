import {Link} from "react-router-dom";
import './Nav.css';
type Props={
    to: string;
    bg: string;
    text: string;
    textcolor: string;
    onClick?: ()=> Promise<void>;
};
const NavigationLink =(Props: Props) => {
    return (<Link
    className="nav-link"
        to={Props.to} 
        style={{background:Props.bg, color: Props.textcolor,padding: '8px 16px',borderRadius: '4px',textDecoration: 'none',marginRight: '8px',}}
        onClick={Props.onClick}
        >
             {Props.text}
    </Link>
    );
};
export default NavigationLink;