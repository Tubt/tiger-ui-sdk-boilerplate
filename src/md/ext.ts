import {
  modifyAttribute,
  modifyMeasure,
  modifySimpleMeasure,
  newAbsoluteDateFilter,
  // newArithmeticMeasure,
  newMeasure,
  newNegativeAttributeFilter,
  newPositiveAttributeFilter,
  newRelativeDateFilter,
  // modifySimpleMeasure,
  // newAttribute,
} from "@gooddata/sdk-model";
import { idRef } from "@gooddata/sdk-model/esm/objRef/factory";
// import { workspace } from "../constants";
import * as Ldm from "./full";

export const SumOfPrice = modifyMeasure(Ldm.Price.Sum, (m) =>
    m.format("#,##0.00").localId("sumOfPriceLocalId").title("Sum of Price"),
);

export const SumOfPrice_1 = modifyMeasure(Ldm.Price.Sum, (m) =>
    m.format("#,##0.00").localId("sumOfPriceLocalId1").title("Sum of Price"),
);

export const SumOfQuantity = modifyMeasure(Ldm.Quantity.Sum, (m) =>
    m.format("#,##0.00").localId("sumOfQuantityLocalId").title("Sum of Quantity"),
);

export const avgOfPrice = modifyMeasure(Ldm.Price.Avg, (m) =>
    m.format("#,##0.00").localId("avgOfPriceLocalId").title("Avg of Price"),
);

export const avgOfQuantity = modifyMeasure(Ldm.Quantity.Avg, (m) =>
    m.format("#,##0.00").localId("avgOfQuantityLocalId").title("Avg of Quantity"),
);

export const medianOfPrice = modifyMeasure(Ldm.Price.Median, (m) =>
    m.format("#,##0.00").localId("medianOfPriceLocalId").title("Median of Price"),
);

export const medianOfQuantity = modifyMeasure(Ldm.Quantity.Median, (m) =>
    m.format("#,##0.00").localId("medianOfQuantityLocalId").title("Median of Quantity"),
);


export const countOfOrderId = newMeasure(idRef("order_lines.order_id","attribute"), (m) =>
    m.format("#,##0.00").localId("countOfOrderID").title("# of OrderId").aggregation("count")
);

export const appxCountOfOrderId = newMeasure(idRef("order_lines.order_id","attribute"), (m) =>
    m.format("#,##0.00").localId("appxCountOfOrderID").title("Appx.Count of OrderId").aggregation("approximate_count")
);

export const countOfOrderLineId = newMeasure(idRef("order_lines.order_line_id","attribute"), (m) =>
    m.format("#,##0.00").localId("countOfOrderLineID").title("# of Order Line Id").aggregation("count")
);

export const appxCountOfOrderLineId = newMeasure(idRef("order_lines.order_line_id","attribute"), (m) =>
    m.format("#,##0.00").localId("appxCountOfOrderLineID").title("Appx.Count of Order Line Id").aggregation("approximate_count")
);

export const appxCountOfOrderIdWithRatio = modifySimpleMeasure(Ldm.Price.Sum, (m) =>
    m
        .format("#,##0.00%")
        .localId("appxCountOfOrderIdWithRatio")
        .title("Franchise Sales shown in %")
        .ratio(),
);

// Filter
export const absoluteDateFilters = newAbsoluteDateFilter(Ldm.DateDatasets.Date.ref, "2020-01-01", "2020-12-31");
export const relativeDateFilters = newRelativeDateFilter(Ldm.DateDatasets.Date.identifier, 'GDC.time.year', -4,0);
export const positiveAttributeFilter = newPositiveAttributeFilter(Ldm.Region, {uris: ["West", "Midwest"]});
export const nagetiveAttributeFilter = newNegativeAttributeFilter(Ldm.CampaignName, {uris: ["2015 Bamity 1AZ713","2015 Fintone 2PG648"]})


export const sumPriceHasAbsoluteDateFilter = modifySimpleMeasure(Ldm.Price.Sum, (m) => 
    m
        .alias("Sum Price Has Date Filter")
        .localId("sumPriceHasAbsoluteDateFilter")
        .filters(absoluteDateFilters,positiveAttributeFilter));

// export const Region_OrderLines = modifyAttribute(Ldm.Region_2, (m) => m.localId("regionOrderLines").alias("Region Order Lines"));
export const Region_Customers = modifyAttribute(Ldm.Region, (m) => m.localId("regionCustomers").alias("Region Customers"));
export const State_Customers = modifyAttribute(Ldm.State.Default, (m) => m.localId("stateCustomers").alias("State Customers"));
export const Date_Year = modifyAttribute(Ldm.DateYear, (m) => m.localId("dateYear").alias("Date-Year"));



