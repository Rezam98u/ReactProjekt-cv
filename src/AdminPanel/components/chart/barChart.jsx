import React from 'react';
import {
    Bar, BarChart, CartesianGrid, Legend, ReferenceLine,
    ResponsiveContainer, Tooltip, XAxis
} from "recharts";

const BarCharts = () => {

    const data = [
        {
            name: 'January',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'February',
            uv: -3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'March',
            uv: -2000,
            pv: -9800,
            amt: 2290,
        },
        {
            name: 'April',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: -1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'june',
            uv: 2390,
            pv: -3800,
            amt: 2500,
        },
        {
            name: 'July',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <>
            <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        stackOffset="sign"
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
                        <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default BarCharts;
