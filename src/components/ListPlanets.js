import {
    Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { getPlanetsAll } from '../reducer/feature/PlanetSlice';
import { useEffect } from "react";
import { Player } from '@lottiefiles/react-lottie-player';

export default function ListPlanets() {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.Planets)

    useEffect(() => {
        dispatch(getPlanetsAll())
    }, [dispatch])

    console.log(data)


    return (
        <div className='grid place-items-center p-10'>
            <Typography variant="h1" className=' font-bold text-gray-200 text-center'>The Planets</Typography>
            <Typography className='text-center text-gray-300'>
                Basic Information about planet
            </Typography>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14 p-10'>
                {data.planets && data.planets.map(({ imgSrc, name, planetOrder, basicDetails }, index) => (
                    PlanetCard(imgSrc, name, planetOrder, basicDetails)
                ))}
            </div>
            {data.isLoading && (
                <div className="w-full">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/d70ef5db-40d5-4e7f-9353-7174ea9e8435/nhgpy1jCTX.json"
                        style={{ height: '300px', width: '300px' }}
                    />
                </div>

            )}
            {!data.isLoading && data.error && (
                <div className="w-full">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/add8def6-14f6-4736-81a9-658b7f45f5be/RBDt51K5S1.json"
                        style={{ height: '300px', width: '300px' }}
                    />
                    <p>
                        {data.error}
                    </p>
                </div>

            )}
        </div >
    )
}

// basicDetails description id imgSrc/img name planetOrder source wikiLink

function PlanetCard(imgSrc, name, planetOrder, basicDetails) {
    return (
        <div className="wrapper antialiased text-gray-900 hover:translate-y-3 cursor-pointer">
            <div>
                <img src={imgSrc.img} alt="" className="image h-52 w-52 object-cover object-center rounded-full shadow-lg shadow-gray-700/25   filter:" />
                <div className="relative -mt-20 ml-24">
                    <div className="bg-white p-6 rounded-lg shadow-2xl shadow-gray-800/60">
                        <div className="flex items-baseline">
                            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold">
                                Planet Order {planetOrder}
                            </span>
                        </div>
                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{name}</h4>

                        <div className="mt-4 flex flex-col justify-start gap-3">
                            <span className="text-teal-600 text-md font-semibold">Mass {basicDetails.mass} </span>
                            <span className="text-sm text-gray-600">Volum {basicDetails.volume}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}