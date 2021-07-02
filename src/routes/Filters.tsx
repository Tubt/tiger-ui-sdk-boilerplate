import React from "react";
import Page from "../components/Page";

import AttributeFilterExample from "./attributeFilter/AttributeFilterExample";
import { DateFilterComponentExample } from "./dateFilter/DateFilterComponentExample";
import { DateFilterWithColumnChartExample } from "./dateFilter/DateFilterWithColumnChartExample";
import MeasureValueFilterComponentExample from "./measureValueFilter/MeasureValueFilterComponentExample";
import FilterByValueExample from "./measureValueFilter/MeasureValueFilterExample";
import MeasureValueFilterExample from "./measureValueFilter/MeasureValueFilterFormattedInPercentageExample";
import MeasureValueFilterShownInPercentageExample from "./measureValueFilter/MeasureValueFilterShownInPercentageExample";
import MeasureValueFilterStackedToHundredPercentExample from "./measureValueFilter/MeasureValueFilterStackedToHundredPercentExample";
import { RankingFilterCustomButtonExample } from "./rankingFilter/RankingFilterCustomButtonExample";
import { RankingFilterSimpleExample } from "./rankingFilter/RankingFilterSimpleExample";
import MeasureValueFilterTreatNullAsZeroComponentExample from "./measureValueFilter/MeasureValueFilterTreatNullAsZeroComponentExample";
import AttributeFilterButtonExample from "./attributeFilter/AttributeFilterButtonExample";

const Filters: React.FC = () => {
    return <Page>
        <h3>Date Filter Component Example</h3>
        <div style={{height:100}}>
            <DateFilterComponentExample/>
        </div>
        
        <h3>Date Filter With Column Chart Example</h3>
        <div style={{height:450}}>
            <DateFilterWithColumnChartExample/>
        </div>

        <hr/>
        <h3>Attribute Filter With Column Chart Example</h3>
        <div style={{height:450}}>
            <AttributeFilterExample/>
        </div>

        <h3>AttributeFilterButtonExample</h3>
        <div style={{height:450}}>
            <AttributeFilterButtonExample/>
        </div>

        <hr/>
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

        <hr/>
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
        
    </Page>;
};

export default Filters;
