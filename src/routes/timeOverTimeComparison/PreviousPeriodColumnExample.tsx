// (C) 2007-2020 GoodData Corporation

import React, { Component } from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { newPreviousPeriodMeasure, newRelativeDateFilter } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../md";
import { OnLoadingChanged, OnError } from "@gooddata/sdk-ui";

export class PreviousPeriodColumnChartExample extends Component {
    public onLoadingChanged: OnLoadingChanged = (...params) => {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineExample onLoadingChanged", ...params);
    };

    public onError: OnError = (...params): void => {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineExample onError", ...params);
    };

    public render(): React.ReactNode {
        const primaryMeasure = LdmExt.SumOfPrice;
        const secondaryMeasure = newPreviousPeriodMeasure(
            LdmExt.SumOfPrice,
            [{ dataSet: Ldm.DateDatasets.Date.identifier, periodsAgo: 1 }],
            (m) => m.alias("$ Total Sales - period ago"),
        );

        return (
            <div style={{ height: 300 }} className="s-headline">
                <ColumnChart
                    measures={[primaryMeasure, secondaryMeasure]}
                    viewBy={[Ldm.Category_1]}
                    filters={[newRelativeDateFilter(Ldm.DateDatasets.Date.ref, "GDC.time.year", -4, -1)]}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                />
            </div>
        );
    }
}

export default PreviousPeriodColumnChartExample;
