// (C) 2007-2019 GoodData Corporation

import React from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { Ldm } from "../../md";

const style = { height: 300 };

export const ColumnChartExample: React.FC = () => {
    return (
        <div style={style} className="s-column-chart">
            <ColumnChart 
                measures={[Ldm.Spend.Sum]} 
                viewBy={Ldm.Category} 
                stackBy={Ldm.CampaignName} 
                config={{
                    legend: {
                        enabled: true, // boolean
                        position: "bottom", // "top" | "left" | "right" | "bottom"
                        responsive: "autoPositionWithPopup" // "autoPositionWithPopup" | true | false
                    },
                }}
                />
        </div>
    );
};
