import Saparians from "../Sapa/Saparians";
import Contents from "./Contents";


const title = "Popular Garri"

const PopularGarri = () => {
    return ( 
        <div className="popular">
            <h1>{title}</h1>
            <Contents />
            <Saparians />
        </div>
    );
}
 
export default PopularGarri;