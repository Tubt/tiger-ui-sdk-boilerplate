import React from "react";
import Page from "../components/Page";

import SimpleDashboardView from "./dashboardView/SimpleDashboardView";
import { InsightViewPivotTableByIdentifierExample } from "./insightView/InsightViewPivotTableByIdentifierExample";
import DashboardViewWithMergedFilters from "./dashboardView/DashboardViewWithMergedFilters";

const InsightViewAndDashboardView: React.FC = () => {
    return <Page>
        <p>Approximate Count InsightView</p>
        <div style={{height:300}}>
            <InsightViewPivotTableByIdentifierExample/>
        </div>

        <hr/>
        <p>Dashboard View</p>
        <div style={{minHeight:350}}>
            <SimpleDashboardView/>
        </div>
        
        <hr/>
        <p>DashboardViewWithMergedFilters</p>
        <div style={{minHeight:500}}>
            <DashboardViewWithMergedFilters/>
        </div>
    </Page>;
};

export default InsightViewAndDashboardView;
