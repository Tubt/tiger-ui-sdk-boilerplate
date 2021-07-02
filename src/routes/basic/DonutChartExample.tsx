// (C) 2007-2019 GoodData Corporation
import React from "react";
import { DonutChart } from "@gooddata/sdk-ui-charts";
import { Ldm, LdmExt } from "../../md";

const measures = [
    Ldm.Price.Sum,
    Ldm.Price.Avg,
    Ldm.Price.Runsum,
    Ldm.Quantity.Sum,
    Ldm.Quantity.Runsum,
    Ldm.Price.Median,
    LdmExt.sumPriceHasAbsoluteDateFilter
];

const style = { height: 300 };

export const DonutChartExample: React.FC = () => {
    return (
        <div style={style} className="s-donut-chart">
            <DonutChart measures={measures} />
        </div>
    );
};
