import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import { Helmet } from "react-helmet-async";
import Cover from '../../Shared/Cover/Cover';


const Menu = () => {
    return (
        <div>
        <Helmet>
    <title>Nourish | Menu</title>
   
  </Helmet>
  <Cover img={menuImg} title='OUR MENU' details={'Would you like to try a dish?'}></Cover>
  <PopularMenu></PopularMenu>
        
    </div>
    );
};

export default Menu;