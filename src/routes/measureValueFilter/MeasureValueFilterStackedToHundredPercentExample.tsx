// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { newMeasureValueFilter, IMeasureValueFilter } from "@gooddata/sdk-model";
import { LdmExt,Ldm } from "../../md";
import { IMeasureValueFilterState } from "./MeasureValueFilterExample";

const measures = [LdmExt.SumOfQuantity, Ldm.Quantity.Sum];

const attributes = [Ldm.Category_1];

const greaterThanFilter = newMeasureValueFilter(LdmExt.SumOfQuantity, "GREATER_THAN", 100);

export class MeasureValueFilterStackedToHundredPercentExample extends Component<unknown, IMeasureValueFilterState> {
    state: IMeasureValueFilterState = {
        filters: [],
    };

    public renderPresetButton(
        label: string,
        appliedFilters: IMeasureValueFilter[],
        isActive: boolean,
    ): React.ReactNode {
        return (
            <button
                className={`gd-button gd-button-secondary ${isActive ? "is-active" : ""} s-filter-button`}
                onClick={() =>
                    this.setState({
                        filters: appliedFilters,
                    })
                }
            >
                {label}
            </button>
        );
    }

    public render(): React.ReactNode {
        const { filters } = this.state;
        return (
            <div>
                <div>
                    {this.renderPresetButton("All total sales", [], filters.length === 0)}
                    {this.renderPresetButton(
                        "Total sales greater than 100 (stacked to 100%)",
                        [greaterThanFilter],
                        filters.length > 0,
                    )}
                </div>
                <hr className="separator" />
                <div style={{ height: 300 }} className="s-stacked-bar">
                    <BarChart
                        measures={measures}
                        viewBy={attributes}
                        config={{
                            stackMeasuresToPercent: true,
                            dataLabels: {
                                visible: true,
                            },
                        }}
                        filters={filters}
                    />
                </div>
            </div>
        );
    }
}

export default MeasureValueFilterStackedToHundredPercentExample;
