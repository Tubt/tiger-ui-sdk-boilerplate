import React from "react";
import Page from "../components/Page";

import { InsightViewPivotTableByIdentifierExample } from "./insightView/InsightViewPivotTableByIdentifierExample";
import { PivotTableApproximateCountExample } from "./pivotTable/PivotTableApproximateCountExample";
const Approximate: React.FC = () => {
    return <Page>
        <p>Approximate Count InsightView</p>
        <div style={{height:300}}>
            <InsightViewPivotTableByIdentifierExample/>
        </div>

        <hr/>
        <p>Approximate Count</p>
        <div style={{height:300}}>
             <PivotTableApproximateCountExample/> 
        </div>
        
    </Page>;
};

export default Approximate;
