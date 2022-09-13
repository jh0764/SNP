import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const Understanding = ({ data }) => {
    return (
        <div style={{ width: "900px", height: "400px", margin: "0 auto" }}>
            <ResponsiveBar
                data={[
                    {
                        understanding: "0",
                        percent: 0.01
                    },
                    {
                        understanding: "10",
                        percent: 0.05
                    },
                    {
                        understanding: "20",
                        percent: 0.08
                    },
                    {
                        understanding: "30",
                        percent: 0.11
                    },
                    {
                        understanding: "40",
                        percent: 0.11
                    },
                    {
                        understanding: "50",
                        percent: 0.15
                    },
                    {
                        understanding: "60",
                        percent: 0.2
                    },
                    {
                        understanding: "70",
                        percent: 0.06
                    },
                    {
                        understanding: "80",
                        percent: 0.03
                    },
                    {
                        understanding: "90",
                        percent: 0.01
                    },
                    {
                        understanding: "100",
                        percent: 0.005
                    }
                ]}
                keys={["percent"]}
                indexBy="understanding"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                maxValue={0.25}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                valueFormat=" > .0%"
                colors={{ scheme: "pastel1" }}
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
                    legend: "이해도(점)",
                    legendPosition: "middle",
                    legendOffset: 32
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor="#000000"
                annotations={[
                    {
                        type: "circle",
                        match: { key: "percent.50" },
                        noteX: 25,
                        noteY: 25,
                        offset: 3,
                        noteTextOffset: -3,
                        noteWidth: 5,
                        note: "현재 위치(50점)",
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

export default Understanding;
