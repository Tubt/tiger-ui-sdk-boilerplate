// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { 
    // newPreviousPeriodMeasure, 
    newArithmeticMeasure, 
    newAbsoluteDateFilter, 
    newPopMeasure, 
    // newRelativeDateFilter 
} from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../md";

// const sumPriceYearAgoBucketItem = newPreviousPeriodMeasure(
//     LdmExt.SumOfPrice,
//     [{ dataSet: Ldm.DateDatasets.Date.DateMonthYear.ref, periodsAgo: 1 }],
//     (m) => m.alias("$ Sum Price - year ago"),
// );

const totalSalesYearAgo = newPopMeasure(LdmExt.SumOfPrice, Ldm.DateDatasets.Date.DateYear.ref, (m) =>
    m.alias("$ Total Sales - SP year ago"),
);

const changeMeasure = newArithmeticMeasure([LdmExt.SumOfPrice, totalSalesYearAgo], "change", (m) =>
    m.title("% Sum Price Change").format("#,##0.00%"),
);

const measures = [LdmExt.SumOfPrice, totalSalesYearAgo, changeMeasure];

const rows = [Ldm.DateMonthYear];

const filters = [newAbsoluteDateFilter(Ldm.DateDatasets.Date.ref, "2016-01-01", "2020-12-31")];
// const filters = [newRelativeDateFilter(Ldm.DateDatasets.Date.identifier, 'GDC.time.year', -4,0)];

const style = { height: 350 };

export const ArithmeticMeasureChangeExample: React.FC = () => {
    return (
        <div style={style} className="s-table">
            <PivotTable measures={measures} filters={filters} rows={rows} />
        </div>
    );
};
