import React from "react";
import {ResponsiveBar} from "@nivo/bar";

const Speed = ({data}) => {
    return (
        <div style={{width: "1500px", height: "400px", margin: "0 auto"}}>
            <ResponsiveBar
                data={[
                    {
                        speed: "0-100",
                        percent: 0.09
                    },
                    {
                        speed: "100-200",
                        percent: 0.19
                    },
                    {
                        speed: "200-300",
                        percent: 0.22
                    },
                    {
                        speed: "300-400",
                        percent: 0.19
                    },
                    {
                        speed: "400-500",
                        percent: 0.13
                    },
                    {
                        speed: "500-600",
                        percent: 0.08
                    },
                    {
                        speed: "600-700",
                        percent: 0.06
                    },
                    {
                        speed: "700-800",
                        percent: 0.03
                    },
                    {
                        speed: "800-900",
                        percent: 0.01
                    },
                    {
                        speed: "1000-1100",
                        percent: 0.01
                    },
                    {
                        speed: "1100-1200",
                        percent: 0.01
                    },
                    {
                        speed: "1200-1300",
                        percent: 0.01
                    },
                    {
                        speed: "1300-1400",
                        percent: 0.01
                    },
                    {
                        speed: "1400-1500",
                        percent: 0.01
                    },
                    {
                        speed: "1500-1600",
                        percent: 0.01
                    },
                    {
                        speed: "1600-1700",
                        percent: 0.01
                    },
                    {
                        speed: "1700-1800",
                        percent: 0.01
                    },
                    {
                        speed: "1800-1900",
                        percent: 0.01
                    },
                    {
                        speed: "1900-2000",
                        percent: 0.01
                    }
                ]}
                keys={["percent"]}
                indexBy="speed"
                margin={{top: 50, right: 130, bottom: 50, left: 60}}
                padding={0.3}
                maxValue={0.25}
                valueScale={{type: "linear"}}
                indexScale={{type: "band", round: true}}
                valueFormat=" > .0%"
                colors={{scheme: "paired"}}
                defs={[]}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]]
                }}
                axisTop={null}
                axisRight={null}
                axisLeft={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "분당 글자수(자)",
                    legendPosition: "middle",
                    legendOffset: 32
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor="#000000"
                annotations={[
                    {
                        type: "circle",
                        match: {key: "percent.200-300"},
                        noteX: 25,
                        noteY: 25,
                        offset: 3,
                        noteTextOffset: -3,
                        noteWidth: 5,
                        note: "현재 위치(223자)",
                        size: 40
                    }
                ]}
                legends={[]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function (e) {
                    return (
                        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
                    );
                }}
            />
        </div>
    );
};

export default Speed;
