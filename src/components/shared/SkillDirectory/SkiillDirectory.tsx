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

// Custom tooltip component
interface CustomTooltipProps {
    active?: boolean;
    payload?: { payload?: { name?: string; short?: string; value?: number }, value?:number }[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border bg-background p-2 shadow-sm flex">
                <div className="w-[5px] h-[35px] rounded-full bg-primary mr-2"/>
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
    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">
                        Frameworks/Tools
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="w-full flex justify-center items-start flex-wrap gap-2 md:gap-4 max-h-[400px] overflow-auto no-scrollbar pt-[10px]">
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
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-4 w-full">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl">
                            Programming Languages
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="w-full">
                            <BarChart
                                accessibilityLayer
                                data={programmingLanguages}
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
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl">
                            Spoken Languages
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={chartConfig}
                            className="w-full min-w-[250px]"
                        >
                            <BarChart
                                accessibilityLayer
                                data={languages}
                                layout="vertical"
                                margin={{
                                    left: -10,
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
                                    content={<CustomTooltip />}
                                />
                                <Bar
                                    dataKey="progress"
                                    fill="var(--color-desktop)"
                                    radius={5}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SkillDirectory;
