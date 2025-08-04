import SkillCard from "../SkillCard/SkillCard";
import {
    webDev,
    programmingLanguages,
    languages,
} from "../../../../constants/global.ts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";
import { useState } from "react";
import Title from "../Title.tsx";

// Custom tooltip component
interface CustomTooltipProps {
    active?: boolean;
    payload?: { payload?: { name?: string; short?: string; value?: number }, value?: number }[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border bg-background p-2 shadow-sm flex">
                <div className="w-[5px] h-[35px] rounded-full bg-primary mr-2" />
                <div className="flex flex-col w-[100px]">
                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                        {payload[0]?.payload?.name ||
                            payload[0]?.payload?.short}
                    </span>
                    <span className="font-bold">
                        {`${payload[0]?.value}%`}
                    </span>
                </div>
            </div>
        );
    }
    return null;
};

const chartConfig = {
    desktop: {
        label: "name",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig;

const SkillDirectory = () => {
    const [showCharts, setShowCharts] = useState(false);

    const handleChartsInView = () => {
        if (!showCharts) {
            // Small delay to ensure animation triggers
            setTimeout(() => {
                setShowCharts(true);
            }, 100);
        }
    };

    return (
        <motion.div className="flex flex-col lg:flex-row gap-4 flex-1"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
            viewport={{ once: true }}
        >
            <Card className="glass">
                <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">
                        <Title title="Frameworks/Tools" />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="w-full flex justify-center items-start flex-wrap gap-2 md:gap-4 max-h-[400px] overflow-auto no-scrollbar py-[10px]">
                        {webDev.map(
                            (
                                skill: {
                                    imgPath?: string;
                                    name?: string;
                                    progress: number;
                                    imgStyle?: {
                                        borderRadius: string;
                                        border: string;
                                    };
                                    documentation?: string;
                                },
                                index: number
                            ) => (
                                <SkillCard key={index} {...skill} />
                            )
                        )}
                    </div>
                </CardContent>
            </Card>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                onViewportEnter={handleChartsInView}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-4 w-full"
            >
                <Card className="w-full glass">
                    <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl">
                            <Title title="Programming Languages" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="w-full max-h-[180px] text-base leading-[15px]">
                            <BarChart
                                accessibilityLayer
                                data={showCharts ? programmingLanguages : []}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="short"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<CustomTooltip />}
                                />
                                <Bar
                                    dataKey="progress"
                                    fill="var(--color-desktop)"
                                    radius={8}
                                    animationBegin={0}
                                    animationDuration={1000}
                                    animationEasing="ease-out"
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card className="glass">
                    <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl">
                            <Title title="Spoken Languages" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={chartConfig}
                            className="w-full max-h-[180px] text-base leading-[15px]"
                        >
                            <BarChart
                                accessibilityLayer
                                data={showCharts ? languages : []}
                                layout="vertical"
                                margin={{
                                    left: 0,
                                }}
                            >
                                <XAxis type="number" dataKey="progress" hide />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<CustomTooltip/>}
                                />
                                <Bar
                                    dataKey="progress"
                                    fill="var(--color-desktop)"
                                    radius={5}
                                    animationBegin={0}
                                    animationDuration={1000}
                                    animationEasing="ease-out"
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
};

export default SkillDirectory;