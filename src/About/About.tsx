import React from "react";
import { CheckCircle2 } from "lucide-react";
import img from "../assets/about_img.jpg"

export const About = () => {
    const checkListItems = [
        {
            title: "Streamlined Data Upload & Cleaning",
            description: "Quickly upload CSV files, clean messy data, and handle missing or inconsistent values effortlessly."
        },
        {
            title: "Advanced Analytics",
            description: "Calculate metrics like mean, median, variance, and more, all in one place."
        },
        {
            title: "Dynamic Visualizations",
            description: "Create interactive charts, graphs, and plots to uncover trends and patterns in your data."
        },
        {
            title: "Scalable Solutions",
            description: "Upscale or downscale your datasets for further analysis or machine learning workflows."
        },
    ]
    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    About
                </span>
                {/* <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
          About
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            Us
          </span>
        </h2> */}
                <p className="text-md p-2 mb-20 text-neutral-500">
                    Welcome to our cutting-edge data analytics platform, where we transform raw data into meaningful insights. Our mission is to empower businesses, professionals, and students by providing a seamless and powerful tool to explore, analyze, and visualize data like never before.
                </p>

                <h2 className="text-xl sm:text-3xl lg:text-4xl mt-10 lg:mt-20 tracking wide">
                    Why Choose
                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        {" "}
                        Us?
                    </span>
                </h2>
                <p className="text-md p-2 mb-20 text-neutral-500">
                    We combine simplicity with advanced technology to ensure that users of all expertise levels can gain valuable insights from their data. From basic statistics to advanced visualization and machine learning-ready data preparation, our platform is designed with your needs in mind.
                </p>
            </div>

            <div className="flex flex-wrap justify-center mt-10">
                <div className="p-2 w-full lg:w-1/2">
                    <img src={img} alt="chartmind" className="inset-0 w-full h-full object-cover" />
                </div>
                <div className="pt-10 w-full lg:w-1/2">
                    {checkListItems.map((item: any, index: number) => (
                        <div key={index} className="flex  mb-12">
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center-rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">
                                    {item.title}
                                </h5>
                                <p className="text-md text-neutral-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center">

            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl mt-10 lg:mt-20 tracking wide">
                Our
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    {" "}
                    Vision
                </span>
            </h2>
            <p className="text-md p-2 mb-20 text-neutral-500">
                We believe that data holds the key to smarter decisions and innovative solutions. Our vision is to create a platform that bridges the gap between complex analytics and user-friendly interfaces, enabling everyone to leverage the full potential of their data.
            </p>


            <h2 className="text-xl sm:text-3xl lg:text-4xl mt-10 lg:mt-20 tracking wide">
                Who Can
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    {" "}
                    Benefit?
                </span>
            </h2>
            <p className="text-md p-2 mb-20 text-neutral-500">
                Whether you're a business owner looking to optimize processes, a data scientist seeking quick insights, or a student exploring analytics, our platform caters to you.
            </p>


            <h2 className="text-xl sm:text-3xl lg:text-4xl mt-10 lg:mt-20 tracking wide">
                Technology &
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    {" "}
                    Innovation
                </span>
            </h2>
            <p className="text-md p-2 mb-20 text-neutral-500">
                Built using the latest advancements in data processing, visualization, and machine learning, our platform ensures fast, accurate, and secure analysis every time.
                <br />
                Join us on this journey to make data analysis accessible, insightful, and impactful for everyone.
            </p>

        </div>
    );
};
