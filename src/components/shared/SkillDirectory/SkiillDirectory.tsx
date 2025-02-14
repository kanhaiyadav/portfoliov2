import SkillCard from "../SkillCard/SkillCard";
import "./SkillDirectory.styles.css";
import {
    webDev,
    programmingLanguages,
    languages,
} from "../../../../constants/global.ts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData2 = [
    { name: "Hindi", progress: 186 },
    { name: "English", progress: 305 },
    { name: "Bengali", progress: 237 },
];
const chartConfig = {
    desktop: {
        label: "progress",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig;

const SkillDirectory = () => {
    return (
        <div className="flex gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>Frameworks/Tools</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="skill-directory w-full flex justify-center items-start flex-wrap gap-4">
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
            <div className="flex flex-col gap-4 w-fit">
                <Card>
                    <CardHeader>
                        <CardTitle>Programming Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={chartConfig}
                            className="w-[300px]"
                        >
                            <BarChart accessibilityLayer data={programmingLanguages}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
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
                        <CardTitle>Spoken Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={chartConfig}
                            className="w-[300px]"
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
                                    content={<ChartTooltipContent hideLabel />}
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
