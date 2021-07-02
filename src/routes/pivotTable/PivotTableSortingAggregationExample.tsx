// (C) 2007-2020 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { 
    // newAttributeAreaSort, 
    newAttributeLocator, 
    newMeasureSort 
} from "@gooddata/sdk-model";

import { LdmExt, Ldm } from "../../md";

const sortByMeasure = [newMeasureSort(LdmExt.SumOfPrice,"desc", [newAttributeLocator(Ldm.Region, "West")])];

export const PivotTableSortingAggregationExample: React.FC = () => {
    return (
        <div style={{ height: 300 }} className="s-pivot-table-sorting">
            <PivotTable
                measures={[LdmExt.SumOfPrice]}
                rows={[LdmExt.Region_Customers]}
                columns={[Ldm.Region]}
                pageSize={20}
                // sortBy={[newAttributeAreaSort(LdmExt.Region_Customers, "asc")]}
                sortBy = {sortByMeasure}
            />
        </div>
    );
};

export default PivotTableSortingAggregationExample;
