// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { Ldm, LdmExt } from "../../md";
import { ITotal, newTotal } from "@gooddata/sdk-model";

const style = { height: 300 };
const measures = [LdmExt.SumOfQuantity, LdmExt.avgOfPrice, LdmExt.medianOfPrice];

const attributes = [Ldm.Category_1, LdmExt.Region_Customers, Ldm.CampaignId];
const columns = [Ldm.DateYear];

const totals: ITotal[] = [
    newTotal("sum", LdmExt.SumOfQuantity, Ldm.Category_1),
    newTotal("avg", LdmExt.avgOfPrice, Ldm.Category_1),
    newTotal("sum", LdmExt.medianOfPrice, Ldm.Category_1),
    // newTotal("max", Ldm.OrderAmount, Ldm.Category_1),
];

export const PivotTableExample: React.FC = () => {
    return (
        <div style={style} className={"pivot-table"}>
            <PivotTable
                measures={measures}
                rows={attributes}
                columns={columns}
                totals={totals}
                config={{
                    menu: {
                        aggregations: true,
                    },
                }}
                pageSize={20}
            />
        </div>
    );
};
