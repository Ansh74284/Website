import Spline from "@splinetool/react-spline/next";
import { TabsDemo } from "@/components/landingPage/TabsDemo";
import React from "react";

export default function Example() {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-[5%]">EVENTS</h2>
            <div className="flex w-full h-screen">
                <div className="w-[75%] p-4">
                    <TabsDemo />
                </div>
                <div className="w-[25%] mt-[5%] rounded-lg">
                    <Spline scene="https://prod.spline.design/8dt2KA9fTIO38yn5/scene.splinecode" />
                </div>
            </div>
        </div>
    );
}
