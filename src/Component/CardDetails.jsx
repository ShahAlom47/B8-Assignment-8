
import { useLoaderData, useParams } from "react-router-dom";
const CardDetails = () => {
    const {id}=useParams();
    const datas= useLoaderData();
    const detailsData = datas.find((data)=>data.id===id)
    const {picture,price,title,description}=detailsData;
    return (
        <div className=" mx-auto w-6/12  my-10  rounded-xl">
           <div className="relative mb-8   ">
            <img className="w-full rounded-xl" src={picture} alt="" />
            <div className="bg-[#0000007d] rounded-xl absolute bottom-0 z-10 w-full">
               
                <button className="btn btn-error text-xl font-bold m-6 m ">Donate :{price}</button>
            </div>
            
           </div  >

           <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p>{description} </p>
        </div>
    );
};

export default CardDetails;