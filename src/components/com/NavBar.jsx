
import {Menu} from 'semantic-ui-react';
import { logo } from '../../constants/constants';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <Menu borderless fixed="top" >
            <Menu.Item>
                <img src={logo} alt="logo" style={{width:120,height:70}}/>
            </Menu.Item>
            <Menu.Item name="Home" as={Link} to="/" style={{fontSize:20,fontFamily: 'Georgia',fontWeight:"bold"}}/>
            <Menu.Item name="Recipe" as={Link} to="/recipes" style={{fontSize:20,fontFamily: 'Georgia', fontWeight:"bold"}}/>
        </Menu>
    )
}

export default NavBar;