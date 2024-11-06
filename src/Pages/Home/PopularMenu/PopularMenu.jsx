
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import UseMenu from "../../../hooks/UseMenu";



const PopularMenu = () => {
    const [menu]=UseMenu();
    const popularItem=menu.filter(item=>item.category === "popular")

    // const [menu,setMenu]=useState([]);
    // useEffect(()=>{
    //   fetch('menu.json')
    //   .then(res=>res.json())
    //   .then(data=>{
    //      const popularItem=data.filter(item=>item.category === "popular")
          
    //       setMenu(popularItem)})
    // },[])
    return (
        <section className="mb-12">
        <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}>
        </SectionTitle>
   

        <div className="grid md:grid-cols-2 gap-6">
            {popularItem.map(item=><MenuItem 
            key={item._id} 
            item={item}>

            </MenuItem>)}
            </div>
           <div className="text-center"> <button className="btn btn-outline border-0 border-b-4 my-4 ">View Full  Menu</button></div>

    </section>
    );
};

export default PopularMenu;