// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { Ldm, LdmExt } from "../../md";
import { ITotal, newTotal } from "@gooddata/sdk-model";

const style = { height: 300 };
const measures = [
    Ldm.AppxCOrderId,
    LdmExt.countOfOrderId,
    Ldm.AppxCOrderLineId,
    Ldm.OrderAmount
];

const attributes = [Ldm.Category_1, LdmExt.Region_Customers, Ldm.CampaignId];
const columns = [Ldm.DateYear];
const totals: ITotal[] = [
    newTotal("sum", Ldm.AppxCOrderId, Ldm.Category_1),
    newTotal("avg", Ldm.AppxCOrderLineId, Ldm.Category_1),
    newTotal("sum", LdmExt.countOfOrderId, Ldm.Category_1),
    newTotal("max", Ldm.OrderAmount, Ldm.Category_1),
];

export const PivotTableAppxomimateCountAndTotalExample: React.FC = () => {
    return (
        <div style={style} className={"pivot-table"}>
            <PivotTable 
                measures={measures} 
                rows={attributes} 
                columns={columns} 
                totals={totals}
                config={{menu: {
                    aggregations: true,
                }}}
                pageSize={20} 
            />
        </div>
    );
};
