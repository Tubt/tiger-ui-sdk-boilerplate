// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { LdmExt } from "../../md";

const style = { height: 300 };

const measures = [
    LdmExt.countOfOrderId,
    LdmExt.appxCountOfOrderId,
    LdmExt.countOfOrderLineId,
    LdmExt.appxCountOfOrderLineId,
];

const attributes = [LdmExt.Region_Customers];

export const PivotTableApproximateCountExample: React.FC = () => {
    return (
        <div style={style} className={"pivot-table"}>
            <PivotTable
                measures={measures}
                rows={attributes}
                pageSize={20}
                execConfig={{ dataSamplingPercentage: 10 }}
            />
        </div>
    );
};
