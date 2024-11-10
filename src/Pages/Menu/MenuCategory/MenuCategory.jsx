import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem";


const MenuCategory = ({items,title,coverImg,details}) => {
    return (
        <div >
            { title && <Cover img={coverImg} title={title} details={details}></Cover>}
            <div className="grid md:grid-cols-2 gap-6 mt-16">
            {items.map(item=><MenuItem 
            key={item._id} 
            item={item}>

            </MenuItem>)}
            </div>
            <div className="text-center"> <button className="btn btn-outline border-0 border-b-4 mb-4 ">View Full  Menu</button></div>
            
        </div>
    );
};

export default MenuCategory;