// (C) 2007-2018 GoodData Corporation
import React from "react";
import { DashboardView } from "@gooddata/sdk-ui-ext";
// import { idRef } from "@gooddata/sdk-model";
import { Ldm } from "../../md";
// const dashboardRef = idRef();

const SimpleDashboardView: React.FC = () => {
    return (
        <DashboardView
            dashboard={Ldm.Dashboards.KD}
            // dashboard={"8d300c4b-fd83-4273-9244-146daa08d9e9"}
            isReadOnly
        />
    );
};

export default SimpleDashboardView;
