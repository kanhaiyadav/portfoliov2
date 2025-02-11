"use client";
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig;

export function Component({ progres, name, imgPath }: {
    progres: number;
    name: string;
    imgPath: string;
}) {
    return (
        <div className="flex">
            <div className="h-[150px] w-[150px]">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full h-full flex p-0"
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={0}
                        endAngle={progres}
                        innerRadius={65}
                        outerRadius={85}
                    >
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className="first:fill-muted last:fill-background"
                            polarRadius={[69, 61]}
                        />
                        <RadialBar
                            dataKey="visitors"
                            background
                            cornerRadius={10}
                        />
                        <PolarRadiusAxis
                            tick={false}
                            tickLine={false}
                            axisLine={false}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (
                                        viewBox &&
                                        "cx" in viewBox &&
                                        "cy" in viewBox
                                    ) {
                                        return (
                                            <g>
                                                {/* Image */}
                                                <image
                                                    href={imgPath}
                                                    x={viewBox.cx - 25} // Center the image
                                                    y={viewBox.cy - 25}
                                                    className="w-12 h-12"
                                                />
                                            </g>
                                        );
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
            </div>
        </div>
    );
}

/*


export default SkillDirectory;
*/
