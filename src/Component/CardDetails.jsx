import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const CardDetails = () => {

    const getLocalData = () => {
        const localdata = localStorage.getItem('donateId')
        if (localdata) {
            return JSON.parse(localdata);
        }
        else {
            return [];
        }
    }




    const donateBtnHandel = (id) => {
        const inId =parseInt(id) 
        const localData = getLocalData();
        const isExcist = localData.find((Did) => Did === id)

        if (!isExcist) {
            localData.push(inId);
            localStorage.setItem('donateId', JSON.stringify(localData))
        }


    }


    const { id } = useParams();
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('../cardData.json')
            .then(res => res.json())
            .then(data => setDatas(data))

    }, [])



    let detailsData = [];

    if (datas.length > 0) {
        const findData = datas.find((data) => data.id === id)
        // setDetailsData(findData);
        detailsData = findData
    }


    const { picture, price, title, description } = detailsData;
    return (
        <div className=" mx-auto w-6/12  my-10  rounded-xl">
            <div className="relative mb-8   ">
                <img className="w-full rounded-xl" src={picture} alt="" />
                <div className="bg-[#0000007d] rounded-xl absolute bottom-0 z-10 w-full">

                    <button onClick={() => donateBtnHandel(id)} className="btn btn-error text-xl font-bold m-6 m ">Donate :{price}</button>
                </div>

            </div  >

            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p>{description} </p>
        </div>
    );
};

export default CardDetails;