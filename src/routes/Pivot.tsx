import React from "react";
import Page from "../components/Page";

import { PivotTableApproximateCountExample } from "./pivotTable/PivotTableApproximateCountExample";
import { PivotTableExample } from "./pivotTable/PivotTableExample";
import PivotTableSortingAggregationExample from "./pivotTable/PivotTableSortingAggregationExample";
const Pivot: React.FC = () => {
    return <Page>
        <p>PivotTableExample</p>
        <div style={{height:300}}>
            <PivotTableExample/>
        </div>

        <hr/>
        <p>Pivot Table Sorting Example</p>
        <div style={{height:300}}>
            <PivotTableSortingAggregationExample/>
        </div>

        <hr/>
        <p>Approximate Count</p>
        <div style={{height:300}}>
             <PivotTableApproximateCountExample/> 
        </div>
    </Page>;
};

export default Pivot;
