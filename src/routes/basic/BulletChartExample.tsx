// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { BulletChart } from "@gooddata/sdk-ui-charts";

import { LdmExt, Ldm } from "../../md";

export class BulletChartExample extends Component {
    public render(): React.ReactNode {
        return (
            <div style={{ height: 500 }} className="s-bullet-chart">
                <BulletChart
                    primaryMeasure={Ldm.OrderAmount}
                    targetMeasure={LdmExt.SumOfQuantity}
                    comparativeMeasure={LdmExt.SumOfPrice}
                    viewBy={Ldm.ProductName}
                />
            </div>
        );
    }
}

export default BulletChartExample;
