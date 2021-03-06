/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2021-07-01T10:22:01.381Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Campaign channel id
 * Attribute ID: campaign_channels.campaign_channel_id
 */
export const CampaignChannelId: IAttribute = newAttribute("campaign_channels.campaign_channel_id");
/**
 * Attribute Title: Category
 * Attribute ID: campaign_channels.category
 */
export const Category: IAttribute = newAttribute("campaign_channels.category");
/**
 * Attribute Title: Type
 * Attribute ID: campaign_channels.type
 */
export const Type: IAttribute = newAttribute("campaign_channels.type");
/**
 * Attribute Title: Campaign id
 * Attribute ID: campaigns.campaign_id
 */
export const CampaignId: IAttribute = newAttribute("campaigns.campaign_id");
/**
 * Attribute Title: Campaign name
 * Attribute ID: campaigns.campaign_name
 */
export const CampaignName: IAttribute = newAttribute("campaigns.campaign_name");
/**
 * Attribute Title: Customer id
 * Attribute ID: customers.customer_id
 */
export const CustomerId: IAttribute = newAttribute("customers.customer_id");
/**
 * Attribute Title: Customer name
 * Attribute ID: customers.customer_name
 */
export const CustomerName: IAttribute = newAttribute("customers.customer_name");
/**
 * Attribute Title: Region
 * Attribute ID: customers.region
 */
export const Region: IAttribute = newAttribute("customers.region");
/**
 * Attribute Title: State
 * Attribute ID: customers.state
 */
export const State = {
  /**
   * Display Form Title: State
   * Display Form ID: customers.state
   */
  Default: newAttribute("customers.state")
  /**
   * Display Form Title: Location
   * Display Form ID: customers.geo__state__location
   */,
  Location: newAttribute("customers.geo__state__location"),
};
/**
 * Attribute Title: Order id
 * Attribute ID: order_lines.order_id
 */
export const OrderId: IAttribute = newAttribute("order_lines.order_id");
/**
 * Attribute Title: Order line id
 * Attribute ID: order_lines.order_line_id
 */
export const OrderLineId: IAttribute = newAttribute("order_lines.order_line_id");
/**
 * Attribute Title: Order status
 * Attribute ID: order_lines.order_status
 */
export const OrderStatus: IAttribute = newAttribute("order_lines.order_status");
/**
 * Attribute Title: Category
 * Attribute ID: products.category
 */
export const Category_1: IAttribute = newAttribute("products.category");
/**
 * Attribute Title: Product id
 * Attribute ID: products.product_id
 */
export const ProductId: IAttribute = newAttribute("products.product_id");
/**
 * Attribute Title: Product name
 * Attribute ID: products.product_name
 */
export const ProductName: IAttribute = newAttribute("products.product_name");
/**
 * Metric Title: AppxCOrderId
 * Metric ID: c363e2b7-510f-48ca-8b1d-748002ed2ee4
 * Metric Type: MAQL Metric
 */
export const AppxCOrderId: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("c363e2b7-510f-48ca-8b1d-748002ed2ee4", "measure")
);
/**
 * Metric Title: AppxCOrderLineId
 * Metric ID: 090ff41a-c304-4e1e-bf62-b1c31bd43d7a
 * Metric Type: MAQL Metric
 */
export const AppxCOrderLineId: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("090ff41a-c304-4e1e-bf62-b1c31bd43d7a", "measure")
);
/**
 * Metric Title: Order Amount
 * Metric ID: order_amount
 * Metric Type: MAQL Metric
 */
export const OrderAmount: IMeasure<IMeasureDefinition> = newMeasure(idRef("order_amount", "measure"));
/**
 * Metric Title: # of Orders
 * Metric ID: amount_of_orders
 * Metric Type: MAQL Metric
 */
export const NrOfOrders: IMeasure<IMeasureDefinition> = newMeasure(idRef("amount_of_orders", "measure"));
/**
 * Metric Title: Appx.C OrderId
 * Metric ID: appx.count.orderId
 * Metric Type: MAQL Metric
 */
export const AppxCOrderId_1: IMeasure<IMeasureDefinition> = newMeasure(idRef("appx.count.orderId", "measure"));
/**
 * Metric Title: Appx.C OrderLineId
 * Metric ID: appx.count.orderLineId
 * Metric Type: MAQL Metric
 */
export const AppxCOrderLineId_1: IMeasure<IMeasureDefinition> = newMeasure(idRef("appx.count.orderLineId", "measure"));
/**
 * Fact Title: Budget
 * Fact ID: campaign_channels.budget
 */
export const Budget = {
  /**
   * Fact Title: Budget
   * Fact ID: campaign_channels.budget
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("campaign_channels.budget", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Budget
   * Fact ID: campaign_channels.budget
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("campaign_channels.budget", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Budget
   * Fact ID: campaign_channels.budget
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("campaign_channels.budget", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Budget
   * Fact ID: campaign_channels.budget
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("campaign_channels.budget", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Budget
   * Fact ID: campaign_channels.budget
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("campaign_channels.budget", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Budget
   * Fact ID: campaign_channels.budget
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("campaign_channels.budget", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Spend
 * Fact ID: campaign_channels.spend
 */
export const Spend = {
  /**
   * Fact Title: Spend
   * Fact ID: campaign_channels.spend
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("campaign_channels.spend", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Spend
   * Fact ID: campaign_channels.spend
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("campaign_channels.spend", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Spend
   * Fact ID: campaign_channels.spend
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("campaign_channels.spend", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Spend
   * Fact ID: campaign_channels.spend
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("campaign_channels.spend", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Spend
   * Fact ID: campaign_channels.spend
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("campaign_channels.spend", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Spend
   * Fact ID: campaign_channels.spend
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("campaign_channels.spend", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: order_lines.price
 */
export const Price = {
  /**
   * Fact Title: Price
   * Fact ID: order_lines.price
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("order_lines.price", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Price
   * Fact ID: order_lines.price
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("order_lines.price", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Price
   * Fact ID: order_lines.price
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("order_lines.price", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Price
   * Fact ID: order_lines.price
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("order_lines.price", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Price
   * Fact ID: order_lines.price
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("order_lines.price", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Price
   * Fact ID: order_lines.price
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("order_lines.price", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Quantity
 * Fact ID: order_lines.quantity
 */
export const Quantity = {
  /**
   * Fact Title: Quantity
   * Fact ID: order_lines.quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("order_lines.quantity", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Quantity
   * Fact ID: order_lines.quantity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("order_lines.quantity", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Quantity
   * Fact ID: order_lines.quantity
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("order_lines.quantity", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Quantity
   * Fact ID: order_lines.quantity
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("order_lines.quantity", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Quantity
   * Fact ID: order_lines.quantity
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("order_lines.quantity", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Quantity
   * Fact ID: order_lines.quantity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("order_lines.quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Attribute Title: Date - Date
 * Attribute ID: date.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDate: IAttribute = newAttribute("date.day");
/**
 * Attribute Title: Date - Day of Month
 * Attribute ID: date.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfMonth: IAttribute = newAttribute("date.dayOfMonth");
/**
 * Attribute Title: Date - Day of Week
 * Attribute ID: date.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfWeek: IAttribute = newAttribute("date.dayOfWeek");
/**
 * Attribute Title: Date - Day of Year
 * Attribute ID: date.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfYear: IAttribute = newAttribute("date.dayOfYear");
/**
 * Attribute Title: Date - Hour
 * Attribute ID: date.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateHour: IAttribute = newAttribute("date.hour");
/**
 * Attribute Title: Date - Hour of Day
 * Attribute ID: date.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateHourOfDay: IAttribute = newAttribute("date.hourOfDay");
/**
 * Attribute Title: Date - Minute
 * Attribute ID: date.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMinute: IAttribute = newAttribute("date.minute");
/**
 * Attribute Title: Date - Minute of Hour
 * Attribute ID: date.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMinuteOfHour: IAttribute = newAttribute("date.minuteOfHour");
/**
 * Attribute Title: Date - Month/Year
 * Attribute ID: date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthYear: IAttribute = newAttribute("date.month");
/**
 * Attribute Title: Date - Month of Year
 * Attribute ID: date.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthOfYear: IAttribute = newAttribute("date.monthOfYear");
/**
 * Attribute Title: Date - Quarter/Year
 * Attribute ID: date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterYear: IAttribute = newAttribute("date.quarter");
/**
 * Attribute Title: Date - Quarter of Year
 * Attribute ID: date.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterOfYear: IAttribute = newAttribute("date.quarterOfYear");
/**
 * Attribute Title: Date - Week/Year
 * Attribute ID: date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekYear: IAttribute = newAttribute("date.week");
/**
 * Attribute Title: Date - Week of Year
 * Attribute ID: date.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekOfYear: IAttribute = newAttribute("date.weekOfYear");
/**
 * Attribute Title: Date - Year
 * Attribute ID: date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateYear: IAttribute = newAttribute("date.year");
/** Available Date Data Sets */
export const DateDatasets = {
  /**
   * Date Data Set Title: Date
   * Date Data Set ID: date
   */
  Date: {
    ref: idRef("date", "dataSet"),
    identifier: "date"
    /**
     * Date Attribute: Date - Date
     * Date Attribute ID: date.day
     */,
    DateDate: {
      ref: idRef("date.day", "attribute"),
      identifier: "date.day"
      /**
       * Display Form Title: Date - Date
       * Display Form ID: date.day
       */,
      Default: newAttribute("date.day"),
    }
    /**
     * Date Attribute: Date - Day of Month
     * Date Attribute ID: date.dayOfMonth
     */,
    DateDayOfMonth: {
      ref: idRef("date.dayOfMonth", "attribute"),
      identifier: "date.dayOfMonth"
      /**
       * Display Form Title: Date - Day of Month
       * Display Form ID: date.dayOfMonth
       */,
      Default: newAttribute("date.dayOfMonth"),
    }
    /**
     * Date Attribute: Date - Day of Week
     * Date Attribute ID: date.dayOfWeek
     */,
    DateDayOfWeek: {
      ref: idRef("date.dayOfWeek", "attribute"),
      identifier: "date.dayOfWeek"
      /**
       * Display Form Title: Date - Day of Week
       * Display Form ID: date.dayOfWeek
       */,
      Default: newAttribute("date.dayOfWeek"),
    }
    /**
     * Date Attribute: Date - Day of Year
     * Date Attribute ID: date.dayOfYear
     */,
    DateDayOfYear: {
      ref: idRef("date.dayOfYear", "attribute"),
      identifier: "date.dayOfYear"
      /**
       * Display Form Title: Date - Day of Year
       * Display Form ID: date.dayOfYear
       */,
      Default: newAttribute("date.dayOfYear"),
    }
    /**
     * Date Attribute: Date - Hour
     * Date Attribute ID: date.hour
     */,
    DateHour: {
      ref: idRef("date.hour", "attribute"),
      identifier: "date.hour"
      /**
       * Display Form Title: Date - Hour
       * Display Form ID: date.hour
       */,
      Default: newAttribute("date.hour"),
    }
    /**
     * Date Attribute: Date - Hour of Day
     * Date Attribute ID: date.hourOfDay
     */,
    DateHourOfDay: {
      ref: idRef("date.hourOfDay", "attribute"),
      identifier: "date.hourOfDay"
      /**
       * Display Form Title: Date - Hour of Day
       * Display Form ID: date.hourOfDay
       */,
      Default: newAttribute("date.hourOfDay"),
    }
    /**
     * Date Attribute: Date - Minute
     * Date Attribute ID: date.minute
     */,
    DateMinute: {
      ref: idRef("date.minute", "attribute"),
      identifier: "date.minute"
      /**
       * Display Form Title: Date - Minute
       * Display Form ID: date.minute
       */,
      Default: newAttribute("date.minute"),
    }
    /**
     * Date Attribute: Date - Minute of Hour
     * Date Attribute ID: date.minuteOfHour
     */,
    DateMinuteOfHour: {
      ref: idRef("date.minuteOfHour", "attribute"),
      identifier: "date.minuteOfHour"
      /**
       * Display Form Title: Date - Minute of Hour
       * Display Form ID: date.minuteOfHour
       */,
      Default: newAttribute("date.minuteOfHour"),
    }
    /**
     * Date Attribute: Date - Month/Year
     * Date Attribute ID: date.month
     */,
    DateMonthYear: {
      ref: idRef("date.month", "attribute"),
      identifier: "date.month"
      /**
       * Display Form Title: Date - Month/Year
       * Display Form ID: date.month
       */,
      Default: newAttribute("date.month"),
    }
    /**
     * Date Attribute: Date - Month of Year
     * Date Attribute ID: date.monthOfYear
     */,
    DateMonthOfYear: {
      ref: idRef("date.monthOfYear", "attribute"),
      identifier: "date.monthOfYear"
      /**
       * Display Form Title: Date - Month of Year
       * Display Form ID: date.monthOfYear
       */,
      Default: newAttribute("date.monthOfYear"),
    }
    /**
     * Date Attribute: Date - Quarter/Year
     * Date Attribute ID: date.quarter
     */,
    DateQuarterYear: {
      ref: idRef("date.quarter", "attribute"),
      identifier: "date.quarter"
      /**
       * Display Form Title: Date - Quarter/Year
       * Display Form ID: date.quarter
       */,
      Default: newAttribute("date.quarter"),
    }
    /**
     * Date Attribute: Date - Quarter of Year
     * Date Attribute ID: date.quarterOfYear
     */,
    DateQuarterOfYear: {
      ref: idRef("date.quarterOfYear", "attribute"),
      identifier: "date.quarterOfYear"
      /**
       * Display Form Title: Date - Quarter of Year
       * Display Form ID: date.quarterOfYear
       */,
      Default: newAttribute("date.quarterOfYear"),
    }
    /**
     * Date Attribute: Date - Week/Year
     * Date Attribute ID: date.week
     */,
    DateWeekYear: {
      ref: idRef("date.week", "attribute"),
      identifier: "date.week"
      /**
       * Display Form Title: Date - Week/Year
       * Display Form ID: date.week
       */,
      Default: newAttribute("date.week"),
    }
    /**
     * Date Attribute: Date - Week of Year
     * Date Attribute ID: date.weekOfYear
     */,
    DateWeekOfYear: {
      ref: idRef("date.weekOfYear", "attribute"),
      identifier: "date.weekOfYear"
      /**
       * Display Form Title: Date - Week of Year
       * Display Form ID: date.weekOfYear
       */,
      Default: newAttribute("date.weekOfYear"),
    }
    /**
     * Date Attribute: Date - Year
     * Date Attribute ID: date.year
     */,
    DateYear: {
      ref: idRef("date.year", "attribute"),
      identifier: "date.year"
      /**
       * Display Form Title: Date - Year
       * Display Form ID: date.year
       */,
      Default: newAttribute("date.year"),
    },
  },
};
export const Insights = {
  /**
   * Insight Title: Insight 1
   * Insight ID: 5aedeaa1-3fed-4676-a319-16937d46cc72
   */
  Insight1: "5aedeaa1-3fed-4676-a319-16937d46cc72"
  /**
   * Insight Title: AppxProduct
   * Insight ID: 7672da89-2e1a-433e-b355-2a5d9ce0c52b
   */,
  AppxProduct: "7672da89-2e1a-433e-b355-2a5d9ce0c52b"
  /**
   * Insight Title: App1
   * Insight ID: fa8de04d-e59f-4da3-9ee1-8b26cb22b18e
   */,
  App1: "fa8de04d-e59f-4da3-9ee1-8b26cb22b18e"
  /**
   * Insight Title: Appx2
   * Insight ID: 93a8e415-fb67-41a8-af9f-fd6f5112cf14
   */,
  Appx2: "93a8e415-fb67-41a8-af9f-fd6f5112cf14"
  /**
   * Insight Title: Column
   * Insight ID: 83aab61f-c8f3-4fb1-b12e-18f9682b9b48
   */,
  Column: "83aab61f-c8f3-4fb1-b12e-18f9682b9b48"
  /**
   * Insight Title: Heatmap
   * Insight ID: e94acacb-9f64-473e-9f37-ffdb80a0596f
   */,
  Heatmap: "e94acacb-9f64-473e-9f37-ffdb80a0596f",
};
export const Dashboards = {
  /**
   * Dashboard Title: KD
   * Dashboard ID: b02d62c8-76e9-46cc-82fe-fc689373410b
   */
  KD: "b02d62c8-76e9-46cc-82fe-fc689373410b"
  /**
   * Dashboard Title: KD1Tu
   * Dashboard ID: a2c0c5d1-e460-4cd9-adaf-e6f7c7d3f402
   */,
  KD1Tu: "a2c0c5d1-e460-4cd9-adaf-e6f7c7d3f402"
  /**
   * Dashboard Title: KD2
   * Dashboard ID: 2ed54ff4-dbd8-4439-b04a-fb064aec9156
   */,
  KD2: "2ed54ff4-dbd8-4439-b04a-fb064aec9156",
};
