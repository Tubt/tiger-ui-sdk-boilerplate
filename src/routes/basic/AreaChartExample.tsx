// (C) 2007-2019 GoodData Corporation
import React from "react";
import { AreaChart } from "@gooddata/sdk-ui-charts";
import { LdmExt, Ldm } from "../../md";

const measures = [
    LdmExt.SumOfQuantity,
    Ldm.Price.Avg
];

const style = { height: 300 };

const chartConfig = {
    stacking: true,
    stackMeasuresToPercent:true
};

export const AreaChartExample: React.FC = () => {
    return (
        <div style={style} className="s-area-chart">
            <AreaChart measures={measures} viewBy={Ldm.ProductName} config={chartConfig} />
        </div>
    );
};
