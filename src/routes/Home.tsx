import React from "react";
import Page from "../components/Page";
import { ArithmeticMeasureChangeExample } from "./arithmeticMeasures/ArithmeticMeasureChangeExample";
import { ArithmeticMeasureMultiplicationExample } from "./arithmeticMeasures/ArithmeticMeasureMultiplicationExample";
import { ArithmeticMeasureRatioExample } from "./arithmeticMeasures/ArithmeticMeasureRatioExample";
import { ArithmeticMeasureSumExample } from "./arithmeticMeasures/ArithmeticMeasureSumExample";
import AttributeFilterExample from "./attributeFilter/AttributeFilterExample";
import { AreaChartExample } from "./basic/AreaChartExample";
import { BarChartExample } from "./basic/BarChartExample";
import { BubbleChartExample } from "./basic/BubbleChartExample";
import SimpleDashboardView from "./dashboardView/SimpleDashboardView";
import { DateFilterComponentExample } from "./dateFilter/DateFilterComponentExample";
import { DateFilterWithColumnChartExample } from "./dateFilter/DateFilterWithColumnChartExample";
import { InsightViewPivotTableByIdentifierExample } from "./insightView/InsightViewPivotTableByIdentifierExample";
import MeasureValueFilterComponentExample from "./measureValueFilter/MeasureValueFilterComponentExample";
import FilterByValueExample from "./measureValueFilter/MeasureValueFilterExample";
import MeasureValueFilterExample from "./measureValueFilter/MeasureValueFilterFormattedInPercentageExample";
import MeasureValueFilterShownInPercentageExample from "./measureValueFilter/MeasureValueFilterShownInPercentageExample";
import MeasureValueFilterStackedToHundredPercentExample from "./measureValueFilter/MeasureValueFilterStackedToHundredPercentExample";
// import { PivotTableApproximateCountExample } from "./pivotTable/PivotTableApproximateCountExample";
import { PivotTableExample } from "./pivotTable/PivotTableExample";
import PivotTableSortingAggregationExample from "./pivotTable/PivotTableSortingAggregationExample";
import { RankingFilterCustomButtonExample } from "./rankingFilter/RankingFilterCustomButtonExample";
import { RankingFilterSimpleExample } from "./rankingFilter/RankingFilterSimpleExample";
import PreviousPeriodColumnChartExample from "./timeOverTimeComparison/PreviousPeriodColumnExample";
import PreviousPeriodHeadlineExample from "./timeOverTimeComparison/PreviousPeriodHeadlineExample";
import { SamePeriodColumnChartExample } from "./timeOverTimeComparison/SamePeriodColumnChartExample";
import MeasureValueFilterTreatNullAsZeroComponentExample from "./measureValueFilter/MeasureValueFilterTreatNullAsZeroComponentExample";
import ComposedPlaceholderExample from "./placeholders/ComposedPlaceholderExample";
import MultiValuePlaceholderExample from "./placeholders/MultiValuePlaceholderExample";
import { ExecuteExample } from "./execution/ExecuteExample";
import ExecuteWithCustomVisualizationExample from "./execution/ExecuteWithCustomVisualizationExample";
import { BarChartResponsiveExample } from "./chartResponsiveness/BarChartResponsiveExample";
import { ColumnChartResponsiveLegendExample } from "./chartResponsiveness/ColumnChartResponsiveLegendExample";
import { ColumnChartExample } from "./basic/ColumnChartExample";
import { DonutChartExample } from "./basic/DonutChartExample";
import { TreemapExample } from "./basic/TreemapExample";
import { HeatmapExample } from "./basic/HeatmapExample";
import BulletChartExample from "./basic/BulletChartExample";
import DashboardViewWithMergedFilters from "./dashboardView/DashboardViewWithMergedFilters";
import AttributeFilterButtonExample from "./attributeFilter/AttributeFilterButtonExample";

const Home: React.FC = () => {
    return <Page>
        <hr/>
        <p>DonutChartExample</p>
        <div style={{height:300}}>
            <DonutChartExample/>
        </div>

        <p>AreaChartExample</p>
        <div style={{height:300}}>
            <AreaChartExample/>
        </div>

        <p>BarChartExample</p>
        <div style={{height:300}}>
            <BarChartExample/>
        </div>

        <p>BubbleChartExample</p>
        <div style={{height:300}}>
            <BubbleChartExample/>
        </div>

        <p>PivotTableExample</p>
        <div style={{height:300}}>
            <PivotTableExample/>
        </div>

        <hr/>
        <p>ColumnChartExample</p>
        <div style={{height:300}}>
            <ColumnChartExample/>
        </div>

        <hr/>
        <p>HeatmapExample</p>
        <div style={{height:500}}>
            <HeatmapExample/>
        </div>

        <hr/>
        <p>BulletChartExample</p>
        <div style={{height:500}}>
            <BulletChartExample/>
        </div>
        
        <hr/>
        <p>TreemapExample</p>
        <div style={{height:300}}>
            <TreemapExample/>
        </div>

        <hr/>
        <p>Approximate Count InsightView</p>
        <div style={{height:300}}>
            <InsightViewPivotTableByIdentifierExample/>
        </div>

        <hr/>
        <p>Dashboard View</p>
        <div style={{height:1000}}>
            <SimpleDashboardView/>
        </div>
        
        <hr/>
        <p>DashboardViewWithMergedFilters</p>
        <div style={{height:1000}}>
            <DashboardViewWithMergedFilters/>
        </div>
        

        <hr/>
        <p>Pivot Table Sorting Example</p>
        <div style={{height:300}}>
            <PivotTableSortingAggregationExample/>
        </div>

        <hr/>
        <h3>Change</h3>
         <p>Calculate percentual change between two measures.</p>

        <p>Note: This example shows how it is possible to use Time Over Time Comparison with Arithmetic Measures to display trend of the given metric.</p>
        <div style={{height:300}}>
            <ArithmeticMeasureChangeExample/>
        </div>


        <h3>Multiplication</h3>
         <p>Multiply two measures (e.g. price per unit x volume = revenue).</p>
        <div style={{height:300}}>
            <ArithmeticMeasureMultiplicationExample/>
        </div>

        <h3>Ratio</h3>
         <p>Take two measures and divide them (e.g. gross margin = gross profit / net sales)</p>
        <div style={{height:300}}>
            <ArithmeticMeasureRatioExample/>
        </div>

        <h3>Sum and difference</h3>
         <p>Add or subtract two measures (e.g. revenue in 2017 - revenue in 2016)</p>
        <div style={{height:300}}>
            <ArithmeticMeasureSumExample/>
        </div>

        <h3>Comparing to the previous period year</h3>
        <div style={{height:300}}>
            <PreviousPeriodHeadlineExample/>
        </div>

        <h3>Comparing to the previous period Column Chart</h3>
        <div style={{height:300}}>
            <PreviousPeriodColumnChartExample/>
        </div>
        
        <h3>Comparing to the same period previous year</h3>
        <div style={{height:300}}>
            <SamePeriodColumnChartExample/>
        </div>

        <h3>Date Filter Component Example</h3>
        <div style={{height:300}}>
            <DateFilterComponentExample/>
        </div>
        

        <h3>Date Filter With Column Chart Example</h3>
        <div style={{height:300}}>
            <DateFilterWithColumnChartExample/>
        </div>

        <h3>Attribute Filter With Column Chart Example</h3>
        <div style={{height:300}}>
            <AttributeFilterExample/>
        </div>
        
        <h3>Ranking filter component </h3>
        <div style={{height:400}}>
            <RankingFilterCustomButtonExample/>
        </div>
        
        <h3>Ranking filter Example</h3>
        <div style={{height:300}}>
            <RankingFilterSimpleExample/>
        </div>

        <h3>FilterByValueExample</h3>
        <div style={{height:300}}>
            <FilterByValueExample/>
        </div>

        <h3>MeasureValueFilterExample</h3>
        <div style={{height:400}}>
            <MeasureValueFilterExample/>
        </div>

        <h3>MeasureValueFilterShownInPercentageExample</h3>
        <div style={{height:400}}>
            <MeasureValueFilterShownInPercentageExample/>
        </div>

        <h3>MeasureValueFilterStackedToHundredPercentExample</h3>
        <div style={{height:400}}>
            <MeasureValueFilterStackedToHundredPercentExample/>
        </div>

        <h3>MeasureValueFilterComponentExample</h3>
        <div style={{height:400}}>
            <MeasureValueFilterComponentExample/>
        </div>

        <h3>MeasureValueFilterTreatNullAsZeroComponentExample</h3>
        <div style={{height:400}}>
            <MeasureValueFilterTreatNullAsZeroComponentExample/>
        </div>
        
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
        
        <h3>AttributeFilterButtonExample</h3>
        <div style={{height:600}}>
            <AttributeFilterButtonExample/>
        </div>

        
    </Page>;
};

export default Home;
