import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import DisplayHCard from "./DisplayHCard";
import { data } from "autoprefixer";


const Home = () => {

    // const CardData = useLoaderData()

    const [CardData, setCardData] = useState([])
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('cardData.json')
            .then(res => res.json())
            .then(data => setCardData(data))

    }, [])

    useEffect(() => {

        setDatas(CardData)
    }, [CardData])
    console.log(CardData);
    console.log(datas);

    const formHandel = (e, searchV) => {
        e.preventDefault();
        const disdata = CardData.filter((data) => data.category === searchV)

        setDatas(disdata)

    }




    return (
        <div>
            <header className=" flex flex-col bannerBG  bg-center  w-full min-h-96">

                <Banner formHandel={formHandel} ></Banner>
            </header>
            <section className="grid grid-cols-l lg:grid-cols-3 gap-6  my-16 w-11/12 m-auto">
                {
                    datas.map(data => <DisplayHCard key={data.id} data={data}></DisplayHCard>)
                }

            </section>

        </div>
    );
};

export default Home;