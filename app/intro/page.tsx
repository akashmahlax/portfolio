"use client"
import Link from "next/link";
import { SiRclone } from "react-icons/si";

export default function Blog() {
    return (
        <div className="min-h-screen justify-center  bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
            <h1 className="text-4xl justify-self-center font-bold">Akash Mahla</h1>
            <h4 className="text-2xl justify-self-center">Web developer since 2018</h4>
            <div className="flex justify-center">
                <Link href="/projects">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Projects</button>
                </Link>
            </div>
            <div className="w-1/2 h-1/2 bg-gray-700 rounded-2xl relative justify-self-center items-center">


                {/*intro video, replace this video with your own video*/}

                <video src="./intro.mp4" controls={true} autoPlay={false} loop={true} className="w-full h-full justify-self-center rounded-2xl object-cover"></video>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2"> title: "E-Commerce Platform"</h3>
                    <p className="text-gray-400 mb-4 h-20">description: "A full-stack e-commerce platform with user authentication, product management, and payment integration."</p>
                    <div className="flex flex-wrap gap-2">

                        <span

                            className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                        >
                            tech: "Next.js", "Node.js", "MongoDB", "Stripe"
                        </span>

                    </div>
                </div>
            </div>

       

      
    </div >
  );
}