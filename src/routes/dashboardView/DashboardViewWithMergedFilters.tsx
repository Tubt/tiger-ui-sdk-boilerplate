// (C) 2007-2018 GoodData Corporation
import React, { useMemo, useState } from "react";
import { DashboardView, mergeFiltersWithDashboard } from "@gooddata/sdk-ui-ext";
import { idRef, newNegativeAttributeFilter } from "@gooddata/sdk-model";

import { Ldm } from "../../md";

const dashboardRef = idRef(Ldm.Dashboards.KD1);

// const dashboardRef = idRef("8d300c4b-fd83-4273-9244-146daa08d9e9");

const filters = [
    newNegativeAttributeFilter(Ldm.CampaignName, {
        uris: ["2015 Fintone 2PG648"],
    }),
];

const DashboardViewWithMergedFilters = () => {
    const [dashboard] = useState();

    const mergedFilters = useMemo(() => {
        return mergeFiltersWithDashboard(dashboard, filters);
    }, [dashboard]);

    return (
        <DashboardView
            dashboard={dashboardRef}
            filters={mergedFilters}
            // onDashboardLoaded={({ dashboard }) => setDashboard(dashboard)}
            isReadOnly
        />
    );
};

export default DashboardViewWithMergedFilters;
