import React from "react"
// import HeroImg from "../assets/hero.svg"
// import FeatImg from "../assets/feat.svg"
import { Link } from 'react-router-dom';

export default function HomePage() {

    return (
        <div className='md:mx-28 mx-4 text-white py-10'>

            <div className='md:grid md:grid-cols-2 items-center'>
                <div className=''>
                    <h1 className='text-3xl md:text-6xl'>Who we are</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>CareHive is a web platform that is designed to help detect pneumonia in chest x-ray images, using
      machine learning. Because pneumonia is a dangerous respitatory diseases, detection at early stages is very important. In fact, young kids and the elderly are the most vulnerable
      for this infection, which comes with severe consequences. With this application, patients can ensure that they are properly diagnosed and helps reduce medical error in imaging.</p>

                    <Link to="/Signup">
                        <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Sign up</button>
                    </Link>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src="./assets/hero.svg" alt="img" width="450" height="450" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 pt-12 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src="./assets/feat.svg" alt="img" width="450" height="450" />
                </div>
                <div className=''>
                    <h1 className='text-5xl'>What else do we have</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>CareHive is a web app where you can:
                    </p>
                    <ul className="text-2xl">
                        <li className="list-disc">Upload chest x-ray images</li>
                        <li className="list-disc">Create an account to store your records</li>
                        <li className="list-disc">Connect with doctors</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}