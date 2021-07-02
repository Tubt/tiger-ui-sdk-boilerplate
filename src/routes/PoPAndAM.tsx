import React from "react";
import Page from "../components/Page";

import { ArithmeticMeasureChangeExample } from "./arithmeticMeasures/ArithmeticMeasureChangeExample";
import { ArithmeticMeasureMultiplicationExample } from "./arithmeticMeasures/ArithmeticMeasureMultiplicationExample";
import { ArithmeticMeasureRatioExample } from "./arithmeticMeasures/ArithmeticMeasureRatioExample";
import { ArithmeticMeasureSumExample } from "./arithmeticMeasures/ArithmeticMeasureSumExample";
import PreviousPeriodColumnChartExample from "./timeOverTimeComparison/PreviousPeriodColumnExample";
import PreviousPeriodHeadlineExample from "./timeOverTimeComparison/PreviousPeriodHeadlineExample";
import { SamePeriodColumnChartExample } from "./timeOverTimeComparison/SamePeriodColumnChartExample";

const PoPAndAm: React.FC = () => {
    return <Page>
        <h3>Change</h3>
         <p>Calculate percentual change between two measures.</p>

        <p>Note: This example shows how it is possible to use Time Over Time Comparison with Arithmetic Measures to display trend of the given metric.</p>
        <div style={{height:450}}>
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
    </Page>;
};

export default PoPAndAm;
