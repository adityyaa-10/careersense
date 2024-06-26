/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from 'react';
const TechStackIntel = ({ title, company, techstack }) => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`w-full ${isLoading ? 'animate-pulse' : ''}`}>
            {isLoading ? (
                <>
                    <div className="mx-auto h-full p-4 bg-white border rounded-[4px] shadow-sm flex flex-col justify-between cursor-pointer animate-pulse">
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="bg-gray-200 py-1 px-2 rounded-sm font-semibold text-xs leading-4"></span>
                                <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                            <div className="mt-2">
                                <h2 className="text-lg leading-6 text-start font-semibold h-5 bg-gray-200 rounded animate-pulse"></h2>
                                <p className="mt-2 text-gray-200 leading-7 tracking-normal h-3 bg-gray-200 rounded animate-pulse"></p>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-10 h-10 mr-3 rounded-xl bg-gray-200 animate-pulse"></div>
                            <span className="font-medium  text-gray-200 cursor-pointer tracking-normal h-3 bg-gray-200 rounded animate-pulse"></span>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <div className="min-h-56 mx-auto h-full p-4 bg-white border rounded-md shadow-sm flex flex-col justify-between cursor-pointer">
                        <div>
                            <div className="mt-2 flex justify-between">
                                <h2 href="#" className="text-lg leading-7 h-20 text-start font-semibold text-gray-800 tracking-normal">
                                    {title}
                                </h2>
                            </div>
                        </div>
                        <div className="mt-2 flex flex-col ">
                            <div className="h-24 overflow-y-auto">
                                <p className="text-[#0e0e0e] leading-7 tracking-normal">
                                    {typeof techstack === 'string' && techstack.length > 0 ? (
                                        techstack.split(',').map((tech, index) => (
                                            <span key={index} className="inline-block">
                                                {tech.trim()}
                                                {index !== techstack.split(',').length - 1 && ' •\u00A0'}
                                            </span>
                                        ))
                                    ) : (
                                        <span>No technologies specified</span>
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-blue-600 text-base tracking-normal font-medium" tabIndex="0" role="link">
                                {company}
                            </p>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default TechStackIntel;