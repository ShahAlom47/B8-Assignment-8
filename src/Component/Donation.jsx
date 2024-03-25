import { useEffect, useState } from "react";
import DisplayDinationCard from "./DisplayDinationCard";


const Donation = () => {

    const getLocalData = () => {
        const localdata = localStorage.getItem('donateId')
        if (localdata) {
            return JSON.parse(localdata);
        }
        else {
            return [];
        }
    }


    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('../cardData.json')
            .then(res => res.json())
            .then(data => setDatas(data))

    }, [])

    const [donateCaraData, setDonateCaraData] = useState([]);
    useEffect(() => {

        const localStorageData = getLocalData();
        if (localStorageData.length > 0) {

            const donateData = datas.filter(data => localStorageData.includes(parseInt(data.id)));
            setDonateCaraData(donateData);

        }
    }, [datas])
    // console.log(donateCaraData);

    if (donateCaraData.length < 0) {
        <div>not available data now</div>
    }

    return (


        <div className=" p-5 grid gap-5 lg:grid-cols-2">
            {


        
donateCaraData.length > 0? donateCaraData.map((data) => <DisplayDinationCard key={data.id} data={data} > </DisplayDinationCard>) : <p>Data Not available Now </p>

            }
        </div>
    );
};

export default Donation;