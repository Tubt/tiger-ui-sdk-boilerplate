// (C) 2020 GoodData Corporation
import React from "react";
import { Ldm, LdmExt } from "../../md";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newRankingFilter } from "@gooddata/sdk-model";

const measures = [LdmExt.SumOfPrice];

const attributes = [Ldm.Region];

const filters = [newRankingFilter(LdmExt.SumOfPrice, "TOP", 3)];

export const RankingFilterSimpleExample: React.FC = () => {
    return (
        <div style={{ height: 300 }} className="s-pivot-table">
            <PivotTable measures={measures} rows={attributes} 
            filters={filters} 
            />
        </div>
    );
};
