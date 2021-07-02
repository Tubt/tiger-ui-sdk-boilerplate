import React from "react";
import Page from "../components/Page";

import ComposedPlaceholderExample from "./placeholders/ComposedPlaceholderExample";
import MultiValuePlaceholderExample from "./placeholders/MultiValuePlaceholderExample";
import { ExecuteExample } from "./execution/ExecuteExample";
import ExecuteWithCustomVisualizationExample from "./execution/ExecuteWithCustomVisualizationExample";
import { BarChartResponsiveExample } from "./chartResponsiveness/BarChartResponsiveExample";
import { ColumnChartResponsiveLegendExample } from "./chartResponsiveness/ColumnChartResponsiveLegendExample";

const Advances: React.FC = () => {
    return <Page>
        <h3>ComposedPlaceholderExample</h3>
        <div style={{height:400}}>
            <ComposedPlaceholderExample/>
        </div>

        <h3>MultiValuePlaceholderExample</h3>
        <div style={{height:400}}>
            <MultiValuePlaceholderExample/>
        </div>

        <h3>ExecuteExample</h3>
        <div style={{height:400}}>
            <ExecuteExample/>
        </div>

        <h3>ExecuteWithCustomVisualizationExample</h3>
        <div style={{height:400}}>
            <ExecuteWithCustomVisualizationExample/>
        </div>

        <h3>BarChartResponsiveExample</h3>
        <div style={{height:500}}>
            <BarChartResponsiveExample/>
        </div>

        <h3>ColumnChartResponsiveLegendExample</h3>
        <div style={{height:600}}>
            <ColumnChartResponsiveLegendExample/>
        </div>    
    </Page>;
};

export default Advances;
