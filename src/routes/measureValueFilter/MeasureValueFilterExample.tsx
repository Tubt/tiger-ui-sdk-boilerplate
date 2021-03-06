// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newMeasureValueFilter, IMeasureValueFilter } from "@gooddata/sdk-model";
import { LdmExt } from "../../md";

const measures = [LdmExt.SumOfPrice];

const attributes = [LdmExt.Date_Year];
const greaterThanFilter = newMeasureValueFilter(LdmExt.SumOfPrice, "GREATER_THAN", 20000);

const betweenFilter = newMeasureValueFilter(LdmExt.SumOfPrice, "BETWEEN", 20000, 100000);

export interface IMeasureValueFilterState {
    filters: IMeasureValueFilter[];
}

export class FilterByValueExample extends Component<unknown, IMeasureValueFilterState> {
    state: IMeasureValueFilterState = {
        filters: [],
    };

    public renderPresetButton(
        label: string,
        appliedFilters: IMeasureValueFilter[],
        isActive: boolean,
    ): JSX.Element {
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
                    {this.renderPresetButton("All franchise sales", [], filters.length === 0)}
                    {this.renderPresetButton(
                        "Franchise sales greater than 20,000",
                        [greaterThanFilter],
                        filters[0] === greaterThanFilter,
                    )}
                    {this.renderPresetButton(
                        "Franchise sales between 20,000 and 100,000",
                        [betweenFilter],
                        filters[0] === betweenFilter,
                    )}
                </div>
                <hr className="separator" />
                <div style={{ height: 300 }} className="s-pivot-table">
                    <PivotTable measures={measures} rows={attributes} filters={filters} />
                </div>
            </div>
        );
    }
}

export default FilterByValueExample;
