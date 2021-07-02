// (C) 2007-2019 GoodData Corporation
import React from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { LdmExt, Ldm } from "../../md";
const style = { height: 300 };

export const BarChartExample: React.FC = () => {
    return (
        <div style={style} className="s-bar-chart">
            <BarChart measures={[LdmExt.SumOfPrice]} viewBy={Ldm.Category_1} />
        </div>
    );
};
