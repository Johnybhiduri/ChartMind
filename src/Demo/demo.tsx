import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
export const Demo = () => {


    const [files, setFiles] = useState<File[]>([]);


    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
      }, []);

    

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-neutral-900 text-white p-4 flex flex-col space-y-4">
        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">Dashboard</button>
        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">ChartMinder</button>
        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">Data Cleaner</button>
        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">Settings</button>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6 flex flex-col items-center justify-center space-y-6">
      {files.map((file,i) => (
                <button className="py-3 px-6 mx-3 rounded-md border" key={i}>{file.name}</button>
            ))}
        <div
          {...getRootProps()}
          className="w-full max-w-lg p-10 border-2 border-dashed border-gray-400 rounded-lg text-center cursor-pointer hover:border-gray-600 transition"
        >
            
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-gray-600">Drop the files here...</p>
          ) : (
            <p className="text-gray-600">Drag & drop files here, or click to select</p>
          )}
        </div>
        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
          Start Processing
        </button>
      </div>
    </div>
  );
}
