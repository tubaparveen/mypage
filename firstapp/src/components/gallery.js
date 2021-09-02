import { useEffect, useState } from "react";

const Gallery = () =>
{
    const[num,setNum]= useState(0);
    const[mainImg, setMainImg]=useState(0);
    const img1="https://cdn.vox-cdn.com/thumbor/KoHueud28ijG7x1ip1llIaDY-WM=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/67817284/vpavic_4291_20201113_0366.0.0.jpg";
    const img2="https://5.imimg.com/data5/DJ/IL/CF/SELLER-11247776/dell-inspiron-15-laptop-500x500.jpg";
    const img3="https://5.imimg.com/data5/KH/WH/MY-54308179/lenovo-laptop-500x500.jpg";
    const img4="https://i.gadgets360cdn.com/products/large/asus-vivobook15-x509-1287x800-1567590182.jpg";
    useEffect(() => {
        setNum(55);
        setMainImg(img1);
    },[])
    return(
        <div className="container">
            <div classnName="row">
                <div className="col-md-2">
                    <img onClick={(e) => { setMainImg(img1)}} src={img1} className="img-fluid" />
                    <img onClick={(e) => { setMainImg(img2)}} src={img2} className="img-fluid" />
                    <img onClick={(e) => { setMainImg(img3)}} src={img3} className="img-fluid" />
                    <img onClick={(e) => { setMainImg(img4)}} src={img4} className="img-fluid" />
                </div>
                <div className="col-md-10">
                    <img className="img-fluid" src={mainImg}/>
                </div>
            </div>
        </div>
    )
}
export default Gallery;