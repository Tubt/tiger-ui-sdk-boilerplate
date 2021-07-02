// (C) 2007-2019 GoodData Corporation
import React from "react";
import { BubbleChart } from "@gooddata/sdk-ui-charts";
import { LdmExt, Ldm } from "../../md";

const xMeasure = LdmExt.SumOfPrice;

const yMeasure = LdmExt.SumOfQuantity;

const style = { height: 300 };

export const BubbleChartExample: React.FC = () => {
    return (
        <div style={style} className="s-bubble-chart">
            <BubbleChart
                xAxisMeasure={xMeasure}
                yAxisMeasure={yMeasure}
                viewBy={Ldm.Region}
                size={Ldm.OrderAmount}
            />
        </div>
    );
};
