// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PlaceholdersProvider, newPlaceholder, newComposedPlaceholder } from "@gooddata/sdk-ui";
import { BarChart } from "@gooddata/sdk-ui-charts";
import {
    IAttributeFilter,
    IMeasure,
    IMeasureDefinition,
    IMeasureFilter,
    measureIdentifier,
    measureTitle,
    modifySimpleMeasure,
    newAbsoluteDateFilter,
    newNegativeAttributeFilter,
    newPositiveAttributeFilter,
} from "@gooddata/sdk-model";
import { Ldm } from "../../md";

const totalSalesProfit = modifySimpleMeasure(Ldm.Price.Sum, (m) => m.title("Total Price"));
const grossProfit = modifySimpleMeasure(Ldm.Quantity.Sum, (m) => m.title("Total Quantity"));
const allMeasures = [totalSalesProfit, grossProfit];

const dateFilter2018 = newAbsoluteDateFilter(Ldm.DateDatasets.Date.ref, "2018-01-01", "2018-12-31");
const dateFilter2019 = newAbsoluteDateFilter(Ldm.DateDatasets.Date.ref, "2019-01-01", "2019-12-31");
const positiveAttributeFilter = newPositiveAttributeFilter(Ldm.Region, {uris: ["West", "Midwest"]});
const nagetiveAttributeFilter = newNegativeAttributeFilter(Ldm.Category_1, {uris: ["Clothing","Home"]})
const filtersWithTitles: [IMeasureFilter, string][] = [
    [dateFilter2018, "2018"],
    [dateFilter2019, "2019"],
    [positiveAttributeFilter, "Region"],
    [nagetiveAttributeFilter, "Category"],
];

const measurePlaceholder = newPlaceholder<IMeasure<IMeasureDefinition>>(totalSalesProfit);
const filterPlaceholder = newPlaceholder<IMeasureFilter>(dateFilter2018);
const attributePlaceholder = newPlaceholder<IAttributeFilter>(positiveAttributeFilter);

const composedMeasurePlaceholder = newComposedPlaceholder(
    [measurePlaceholder, filterPlaceholder,attributePlaceholder],
    ([measure, filter]) => {
        // Compose measure from multiple placeholder values
        return modifySimpleMeasure(measure, (m) => m.filters(filter));
    },
);

const style = { height: 300 };
const BarChartWithPlaceholder: React.FC = () => {
    return (
        <div style={style}>
            <BarChart 
                measures={[composedMeasurePlaceholder]}
                viewBy={[Ldm.Region,Ldm.Category_1]}
                config={{
                    legend:{
                        enabled: true, 
                        position: "bottom", 
                        // responsive: "autoPositionWithPopup"
                    }
                }}
            />
        </div>
    );
};

const MeasureSelect: React.FC = () => {
    const [measure, setMeasure] = measurePlaceholder.use();

    return (
        <div>
            <h3>Select measure:</h3>
            {allMeasures.map((m) => {
                const id = measureIdentifier(m);
                const isActive = measure && id === measureIdentifier(measure);
                return (
                    <button
                        key={id}
                        onClick={() => setMeasure(m)}
                        style={{ fontWeight: isActive ? "bold" : "normal" }}
                    >
                        {measureTitle(m)}
                    </button>
                );
            })}
        </div>
    );
};

const FilterSelect: React.FC = () => {
    const [filter, setFilter] = filterPlaceholder.use();

    return (
        <div>
            <h3>Select filter:</h3>
            {filtersWithTitles.map(([f, title], i) => {
                const isActive = filter === f;
                return (
                    <button
                        key={i}
                        onClick={() => setFilter(f)}
                        style={{ fontWeight: isActive ? "bold" : "normal" }}
                    >
                        {title}
                    </button>
                );
            })}
        </div>
    );
};

const ComposedPlaceholderExample: React.FC = () => {
    return (
        <PlaceholdersProvider>
            <MeasureSelect />
            <FilterSelect />
            <BarChartWithPlaceholder />
        </PlaceholdersProvider>
    );
};

export default ComposedPlaceholderExample;
