// (C) 2007-2020 GoodData Corporation
import React from "react";

import { InsightView } from "@gooddata/sdk-ui-ext";
import { Insights } from "../../md/full";

const style = { height: 300 };
export const InsightViewPivotTableByIdentifierExample: React.FC = () => {
    return (
        <div style={style} className="s-insightView-pivot">
            <InsightView insight={Insights.AD1} />
            {/* <InsightView insight="1f5ba775-5e91-43ad-9948-4a3c7b3a5faa"/> */}
        </div>
    );
};
