import { Upload, ChartNoAxesCombined, Wrench , Brain, SquareStack ,ChartSpline   } from 'lucide-react';

export const Features = () => {
    const features = [
        {icon: Upload, text: "Upload & Process Data with Ease", description: "Effortlessly upload your CSV files to our platform. With just a few clicks, our system processes your data to ensure it is ready for analysis, regardless of the file size or complexity."},
        {icon: ChartNoAxesCombined, text: "Comprehensive Data Insights", description: "Gain access to detailed data insights, including essential statistics like mean, median, mode, variance, and standard deviation. Our platform provides intuitive summaries to help you understand your data better."},
        {icon: Wrench, text: "Advanced Data Visualization Tools", description: "Visualize your data with a variety of charts, such as bar graphs, pie charts, histograms, scatter plots, and line charts. These visual aids make it easier to identify trends, patterns, and correlations."},
        {icon: Brain, text: "Intelligent Data Cleaning Solutions", description: "Automatically clean your data with features like handling missing values, detecting outliers, and correcting data inconsistencies. Our intelligent algorithms streamline the cleaning process, saving you valuable time."},
        {icon: SquareStack, text: "Upscaling & Downscaling Made Simple", description: "Resize and rescale your data effortlessly using advanced scaling techniques. Whether you need to normalize or standardize your datasets, our platform ensures the data is transformed accurately."},
        {icon: ChartSpline, text: "Real-Time Data Analysis & Reporting", description: "Experience real-time data processing with instant analysis and reporting. Generate insightful dashboards and summaries tailored to your needs, making decision-making faster and more effective."},
    ];
    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
                <div className="text-center">
                    <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                        Features
                    </span>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
                    Unlock the Power 
                        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        {" "} of Data 
                        </span>
                    </h2>
                </div>
                <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature:any, index: number) =>(
                    <div key={index} className="w-full sm-1/2 lg:w-1/3">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                                {<feature.icon/>}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-6 text-xl">
                                    {feature.text}
                                </h5>
                                <p className="text-md p-2 mb-20 text-neutral-500">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
        </div>

    );
}