// (C) 2007-2019 GoodData Corporation

import React from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { newPopMeasure } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../md";

const totalSalesYearAgo = newPopMeasure(LdmExt.countOfOrderId, Ldm.DateDatasets.Date.DateYear.ref, (m) =>
    m.alias("$ Total Sales - SP year ago"),
);

const style = { height: 300 };

export const SamePeriodColumnChartExample: React.FC = () => {
    return (
        <div style={style} className="s-column-chart">
            <ColumnChart 
                measures={[LdmExt.countOfOrderId, totalSalesYearAgo]} 
                viewBy={Ldm.DateQuarterYear} 
            />
        </div>
    );
};
