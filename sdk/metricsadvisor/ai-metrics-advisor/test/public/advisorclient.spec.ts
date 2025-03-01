// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";
import { Context } from "mocha";

import {
  MetricAnomalyFeedback,
  MetricChangePointFeedback,
  MetricCommentFeedback,
  MetricPeriodFeedback,
  MetricsAdvisorClient
} from "../../src";
import { createRecordedAdvisorClient, makeCredential, testEnv } from "./util/recordedClients";
import { Recorder } from "@azure-tools/test-recorder";
import { matrix } from "./util/matrix";

matrix([[true, false]] as const, async (useAad) => {
  describe(`[${useAad ? "AAD" : "API Key"}]`, () => {
    describe("MetricsAdvisorClient", () => {
      let client: MetricsAdvisorClient;
      let recorder: Recorder;

      beforeEach(function(this: Context) {
        ({ recorder, client } = createRecordedAdvisorClient(this, makeCredential(useAad)));
      });

      afterEach(async function() {
        if (recorder) {
          await recorder.stop();
        }
      });

      it("listAnomaliesForDetectionConfiguration()", async function() {
        const iterator = client.listAnomaliesForDetectionConfiguration(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
          new Date(Date.UTC(2021, 4, 5)),
          new Date(Date.UTC(2021, 10, 1))
        );
        let result = await iterator.next();
        assert.ok(result.value.seriesKey, "Expecting first anomaly");
        result = await iterator.next();
        assert.ok(result.value.seriesKey, "Expecting second anomaly");
      });

      it("listAnomaliesForDetectionConfiguration() by page", async function() {
        const iterator = client
          .listAnomaliesForDetectionConfiguration(
            testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
            new Date(Date.UTC(2021, 4, 5)),
            new Date(Date.UTC(2021, 10, 1))
          )
          .byPage({ maxPageSize: 2 });
        let result = await iterator.next();
        assert.equal(result.value.length, 2, "Expecting two anomalies in first page");
        result = await iterator.next();
        assert.equal(result.value.length, 2, "Expecting two anomalies in second page");
      });

      it("listAnomaliesForDetectionConfiguration() with datetime strings", async function() {
        const iterator = client.listAnomaliesForDetectionConfiguration(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
          "2021-05-05T00:00:00.000Z",
          "2021-11-01T00:00:00.000Z"
        );
        let result = await iterator.next();
        assert.ok(result.value.seriesKey, "Expecting first anomaly");
        result = await iterator.next();
        assert.ok(result.value.seriesKey, "Expecting second anomaly");
      });

      it("listAnomaliesForDetectionConfiguration() throws for invalid datetime strings", async function() {
        try {
          const iterator = client.listAnomaliesForDetectionConfiguration(
            testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
            "startTime",
            "endTime"
          );
          await iterator.next();
          assert.fail("Error should have been thrown for invalid date strings");
        } catch (err) {
          assert.equal(err.message, "Invalid time value");
        }
      });

      it("listIncidentsForDetectionConfiguration()", async function() {
        const iterator = client.listIncidentsForDetectionConfiguration(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
          new Date(Date.UTC(2021, 4, 5)),
          new Date(Date.UTC(2021, 10, 1))
        );
        let result = await iterator.next();
        assert.ok(result.value.rootDimensionKey, "Expecting first incident");
        result = await iterator.next();
        assert.ok(result.value.rootDimensionKey, "Expecting second incident");
      });

      it("listIncidentsForDetectionConfiguration() by page", async function() {
        const iterator = client
          .listIncidentsForDetectionConfiguration(
            testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
            new Date(Date.UTC(2021, 4, 5)),
            new Date(Date.UTC(2021, 10, 1))
          )
          .byPage({ maxPageSize: 2 });
        let result = await iterator.next();
        assert.equal(result.value.length, 2, "Expecting two incidents in first page");
        result = await iterator.next();
        assert.equal(result.value.length, 2, "Expecting two incidents in second page");
      });

      it("listIncidentsForDetectionConfiguration() with datetime strings", async function() {
        const iterator = client.listIncidentsForDetectionConfiguration(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
          "2021-05-05T00:00:00.000Z",
          "2021-11-01T00:00:00.000Z"
        );
        let result = await iterator.next();
        assert.ok(result.value.rootDimensionKey, "Expecting first incident");
        result = await iterator.next();
        assert.ok(result.value.rootDimensionKey, "Expecting second incident");
      });

      it("listIncidentsForDetectionConfiguration() throws for invalid datetime string", async function() {
        try {
          const iterator = client.listIncidentsForDetectionConfiguration(
            testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
            "startTime",
            "endTime"
          );
          await iterator.next();
          assert.fail("Error should have been thrown for invalid date strings");
        } catch (err) {
          assert.ok(err.message, "Invalid time value");
        }
      });

      it("listAnomalyDimensionValues()", async function() {
        const iterator = client.listAnomalyDimensionValues(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
          new Date(Date.UTC(2021, 4, 5)),
          new Date(Date.UTC(2021, 10, 1)),
          "category"
        );
        let result = await iterator.next();
        assert.ok(result.value, "Expecting first dimension value");
        result = await iterator.next();
        assert.ok(result.value, "Expecting second dimension value");
      });

      it("listAnomalyDimensionValues() with datetime strings", async function() {
        const iterator = client.listAnomalyDimensionValues(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
          "2021-01-05T00:00:00.000Z",
          "2021-11-05T00:00:00.000Z",
          "category"
        );
        let result = await iterator.next();
        assert.ok(result.value, "Expecting first dimension value");
        result = await iterator.next();
        assert.ok(result.value, "Expecting second dimension value");
      });

      it("listAnomalyDimensionValues() by page", async function() {
        const iterator = client
          .listAnomalyDimensionValues(
            testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
            new Date(Date.UTC(2021, 4, 5)),
            new Date(Date.UTC(2021, 10, 1)),
            "category"
          )
          .byPage({ maxPageSize: 2 });
        let result = await iterator.next();
        assert.equal(result.value.length, 2, "Expecting two dimension values in first page");
        result = await iterator.next();
        assert.equal(result.value.length, 2, "Expecting two dimension values in second page");
      });

      it("lists alerts for alert configuration", async function() {
        const iterator = client.listAlerts(
          testEnv.METRICS_ADVISOR_ALERT_CONFIG_ID,
          new Date(Date.UTC(2021, 4, 5)),
          new Date(Date.UTC(2021, 10, 1)),
          "AnomalyTime"
        );
        let result = await iterator.next();
        assert.ok(result.value.id, "Expecting first alert");
        result = await iterator.next();
        assert.ok(result.value.id, "Expecting second alert");
      });

      it("lists alerts for alert configuration with datetime strings", async function() {
        const iterator = client.listAlerts(
          testEnv.METRICS_ADVISOR_ALERT_CONFIG_ID,
          "2021-05-05T00:00:00.000Z",
          "2021-11-01T00:00:00.000Z",
          "AnomalyTime"
        );
        let result = await iterator.next();
        assert.ok(result.value.id, "Expecting first alert");
        result = await iterator.next();
        assert.ok(result.value.id, "Expecting second alert");
      });

      it("lists alerts for alert configuration by page", async function() {
        const iterator = client
          .listAlerts(
            testEnv.METRICS_ADVISOR_ALERT_CONFIG_ID,
            new Date(Date.UTC(2021, 4, 5)),
            new Date(Date.UTC(2021, 10, 1)),
            "AnomalyTime"
          )
          .byPage({ maxPageSize: 1 });
        let result = await iterator.next();
        assert.equal(result.value.length, 1, "Expecting one alert in first page");
        result = await iterator.next();
        assert.equal(result.value.length, 1, "Expecting one alert in second page");
      });

      it("lists anomalies for alert", async function() {
        const iterator = client.listAnomaliesForAlert({
          alertConfigId: testEnv.METRICS_ADVISOR_ALERT_CONFIG_ID,
          id: testEnv.METRICS_ADVISOR_ALERT_ID
        });
        let result = await iterator.next();
        assert.ok(result.value.seriesKey, "Expecting first anomaly");
        result = await iterator.next();
        assert.ok(result.value.seriesKey, "Expecting second anomaly");
      });

      it("lists anomalies for alert by page", async function() {
        const iterator = client
          .listAnomaliesForAlert({
            alertConfigId: testEnv.METRICS_ADVISOR_ALERT_CONFIG_ID,
            id: testEnv.METRICS_ADVISOR_ALERT_ID
          })
          .byPage({ maxPageSize: 1 });
        let result = await iterator.next();
        assert.equal(result.value.length, 1, "Expecting one anomaly in first page");
        result = await iterator.next();
        assert.equal(result.value.length, 1, "Expecting one anomaly in second page");
      });

      it("lists incidents for alert", async function() {
        const iterator = client.listIncidentsForAlert({
          alertConfigId: testEnv.METRICS_ADVISOR_ALERT_CONFIG_ID,
          id: testEnv.METRICS_ADVISOR_ALERT_ID
        });
        let result = await iterator.next();
        assert.ok(result.value.id, "Expecting first incident");
        result = await iterator.next();
        assert.ok(result.value.id, "Expecting second incident");
      });

      it("lists incidents for alert by page", async function() {
        const iterator = client
          .listIncidentsForAlert({
            alertConfigId: testEnv.METRICS_ADVISOR_ALERT_CONFIG_ID,
            id: testEnv.METRICS_ADVISOR_ALERT_ID
          })
          .byPage({ maxPageSize: 1 });
        let result = await iterator.next();
        assert.equal(result.value.length, 1, "Expecting one incident in first page");
        result = await iterator.next();
        assert.equal(result.value.length, 1, "Expecting one incident in second page");
      });

      it("listMetricSeriesDefinitions()", async function() {
        const iterator = client.listMetricSeriesDefinitions(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
          new Date(Date.UTC(2021, 7, 5))
        );
        let result = await iterator.next();
        assert.ok(result.value.seriesKey, "Expecting first definition");
        result = await iterator.next();
        assert.ok(result.value.seriesKey, "Expecting second definition");
      });

      it("listMetricSeriesDefinitions() with datetime string", async function() {
        const iterator = client.listMetricSeriesDefinitions(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
          "2021-08-05T00:00:00.000Z"
        );
        let result = await iterator.next();
        assert.ok(result.value.seriesKey, "Expecting first definition");
        result = await iterator.next();
        assert.ok(result.value.seriesKey, "Expecting second definition");
      });

      it("listMetricSeriesDefinitions() by page", async function() {
        const iterator = client
          .listMetricSeriesDefinitions(
            testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
            new Date(Date.UTC(2021, 7, 5))
          )
          .byPage({ maxPageSize: 2 });
        let result = await iterator.next();
        assert.equal(result.value.length, 2, "Expecting two definitions in first page");
        result = await iterator.next();
        assert.equal(result.value.length, 2, "Expecting two definitions in second page");
      });

      it("listMetricDimensionValues()", async function() {
        const iterator = client.listMetricDimensionValues(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
          "category"
        );
        let result = await iterator.next();
        assert.ok(result.value, "Expecting first dimension value");
        result = await iterator.next();
        assert.ok(result.value, "Expecting second dimension value");
      });

      it("listMetricDimensionValues() by page", async function() {
        const iterator = client
          .listMetricDimensionValues(
            testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
            "category"
          )
          .byPage({ maxPageSize: 2 });
        let result = await iterator.next();
        assert.equal(result.value.length, 2, "Expecting two dimension values in first page");
        result = await iterator.next();
        assert.equal(result.value.length, 2, "Expecting two dimension values in second page");
      });

      it("lists series data for a metric", async function() {
        const data = await client.getMetricSeriesData(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
          [
            { region: "Delhi", category: "Handmade" },
            { region: "Cairo", category: "Home & Garden" }
          ],
          new Date(Date.UTC(2021, 7, 5)),
          new Date(Date.UTC(2021, 11, 5))
        );
        console.dir(data);
        assert.ok(data && data!.length === 2, "Expecting data for two time series");
        assert.equal(
          data![0].definition.metricId,
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1
        );
        assert.deepStrictEqual(data![0].definition.seriesKey, {
          region: "Delhi",
          category: "Handmade"
        });

        assert.ok(
          data![0].timestamps &&
            data![0].timestamps.length > 0 &&
            data![0].values &&
            data![0].values.length > 0,
          "Expecting data for the first time series"
        );

        assert.equal(
          data![1].definition.metricId,
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1
        );
        assert.deepStrictEqual(data![1].definition.seriesKey, {
          region: "Cairo",
          category: "Home & Garden"
        });

        assert.ok(
          data![1].timestamps &&
            data![1].timestamps.length > 0 &&
            data![1].values &&
            data![1].values.length > 0,
          "Expecting data for the second time series"
        );
      });

      it("lists series data for a metric with datetime strings", async function() {
        const data = await client.getMetricSeriesData(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
          [
            { category: "Home & Garden", region: "Cairo" },
            { category: "Shoes Handbags & Sunglasses", region: "Manila" }
          ],
          "2021-08-05T00:00:00.000Z",
          "2021-09-05T00:00:00.000Z"
        );
        assert.ok(data && data!.length === 2, "Expecting data for two time series");
        assert.equal(
          data![0].definition.metricId,
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1
        );
        assert.deepStrictEqual(data![0].definition.seriesKey, {
          region: "Cairo",
          category: "Home & Garden"
        });

        assert.ok(
          data![0].timestamps &&
            data![0].timestamps.length > 0 &&
            data![0].values &&
            data![0].values.length > 0,
          "Expecting data for the first time series"
        );
      });

      it.skip("list enriched data for a detection configuration", async function() {
        const data = await client.getMetricEnrichedSeriesData(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
          [
            { category: "Shoes Handbags & Sunglasses", region: "Manila" },
            { category: "Home & Garden", region: "Cairo" }
          ],
          new Date(Date.UTC(2021, 7, 1)),
          new Date(Date.UTC(2021, 7, 27))
        );
        assert.ok(data && data!.length === 2, "Expecting data for two time series");

        assert.deepStrictEqual(data![0].seriesKey, {
          region: "Manila",
          category: "Shoes Handbags & Sunglasses"
        });

        assert.ok(
          data![0].timestamps &&
            data![0].timestamps.length > 0 &&
            data![0].values &&
            data![0].values.length > 0 &&
            data![0].isAnomaly &&
            data![0].isAnomaly.length > 0,
          "Expecting enriched data for the first time series"
        );

        assert.deepStrictEqual(data![1].seriesKey, {
          region: "Cairo",
          category: "Home & Garden"
        });

        assert.ok(
          data![1].timestamps &&
            data![1].timestamps.length > 0 &&
            data![1].values &&
            data![1].values.length > 0 &&
            data![0].isAnomaly &&
            data![0].isAnomaly.length > 0,
          "Expecting enriched data for the second time series"
        );
      });

      it.skip("list enriched data for a detection configuration with datetime strings", async function() {
        const data = await client.getMetricEnrichedSeriesData(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
          [
            { category: "Shoes Handbags & Sunglasses", region: "Manila" },
            { category: "Home & Garden", region: "Cairo" }
          ],
          "2021-08-01T00:00:00.000Z",
          "2021-08-27T00:00:00.000Z"
        );
        assert.ok(data && data!.length === 2, "Expecting data for two time series");

        assert.deepStrictEqual(data![0].seriesKey, {
          region: "Manila",
          category: "Shoes Handbags & Sunglasses"
        });
      });

      it("list metric enrichment status", async function() {
        const iterator = client.listMetricEnrichmentStatus(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
          new Date(Date.UTC(2021, 0, 1)),
          new Date(Date.UTC(2021, 8, 18))
        );
        let result = await iterator.next();
        assert.ok(result.value.status, "Expecting first status");
        result = await iterator.next();
        assert.ok(result.value.status, "Expecting second status");
      });

      it("list metric enrichment status with datetime strings", async function() {
        const iterator = client.listMetricEnrichmentStatus(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
          "2021-01-01T00:00:00.000Z",
          "2021-09-18T00:00:00.000Z"
        );
        let result = await iterator.next();
        assert.ok(result.value.status, "Expecting first status");
        result = await iterator.next();
        assert.ok(result.value.status, "Expecting second status");
      });

      it("list metric enrichment status by page", async function() {
        const iterator = client
          .listMetricEnrichmentStatus(
            testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
            new Date(Date.UTC(2021, 0, 1)),
            new Date(Date.UTC(2021, 10, 5))
          )
          .byPage({ maxPageSize: 2 });
        let result = await iterator.next();
        assert.equal(result.value.length, 2, "Expecting two results in first page");
        result = await iterator.next();
        assert.equal(result.value.length, 2, "Expecting two results in second page");
      });

      it("gets root causes of an incident", async function() {
        const result = await client.getIncidentRootCauses(
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_DETECTION_CONFIG_ID,
          testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_INCIDENT_ID
        );

        assert.ok(
          result.rootCauses && result.rootCauses.length > 0,
          "Expecting non empty root cause list"
        );
        const first = result.rootCauses[0];
        assert.deepStrictEqual(first.path, ["category"]);
        assert.ok(first.score, "Expecting score");
        assert.equal(
          first.description,
          "Increase on region = Beijing | category = Handmade contributes the most to current incident."
        );
      });

      describe("Feedback", async function() {
        let createdFeedbackId: string;
        it.skip("creates Anomaly feedback", async function() {
          const anomalyFeedback: MetricAnomalyFeedback = {
            metricId: testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
            feedbackType: "Anomaly",
            startTime: new Date(Date.UTC(2021, 7, 5)),
            endTime: new Date(Date.UTC(2021, 7, 7)),
            value: "NotAnomaly",
            dimensionKey: { category: "Home & Garden", region: "Cairo" }
          };
          const actual = await client.addFeedback(anomalyFeedback);

          assert.ok(actual.id, "Expecting valid feedback");
          createdFeedbackId = actual.id!;
          assert.equal(actual.feedbackType, "Anomaly");
          if (actual.feedbackType === "Anomaly") {
            assert.equal(actual.value, anomalyFeedback.value);
          }
        });

        it("creates ChangePoint feedback", async function() {
          const changePointFeedback: MetricChangePointFeedback = {
            metricId: testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
            feedbackType: "ChangePoint",
            startTime: new Date(Date.UTC(2021, 7, 5)),
            value: "ChangePoint",
            dimensionKey: { category: "Home & Garden", region: "Cairo" }
          };
          const actual = await client.addFeedback(changePointFeedback);

          assert.ok(actual.id, "Expecting valid feedback");
          createdFeedbackId = actual.id!;
          assert.equal(actual.feedbackType, "ChangePoint");
          if (actual.feedbackType === "ChangePoint") {
            assert.equal(actual.value, changePointFeedback.value);
          }
        });

        it("creates Period feedback", async function() {
          const periodFeedback: MetricPeriodFeedback = {
            metricId: testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
            feedbackType: "Period",
            periodType: "AutoDetect",
            periodValue: 4,
            dimensionKey: { category: "Home & Garden", region: "Cairo" }
          };
          const actual = await client.addFeedback(periodFeedback);

          assert.ok(actual.id, "Expecting valid feedback");
          createdFeedbackId = actual.id!;
          assert.equal(actual.feedbackType, "Period");
          if (actual.feedbackType === "Period") {
            assert.equal(actual.periodType, periodFeedback.periodType);
            assert.equal(actual.periodValue, periodFeedback.periodValue);
          }
        });

        it.skip("creates Comment feedback", async function() {
          const expectedCommentFeedback: MetricCommentFeedback = {
            metricId: testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
            feedbackType: "Comment",
            dimensionKey: { category: "Home & Garden", region: "Cairo" },
            comment: "This is a comment"
          };

          const actual = await client.addFeedback(expectedCommentFeedback);

          assert.ok(actual.id, "Expecting valid feedback");
          createdFeedbackId = actual.id!;
          assert.equal(actual.feedbackType, "Comment");
          if (actual.feedbackType === "Comment") {
            assert.equal(actual.comment, expectedCommentFeedback.comment);
          }
        });

        it.skip("retrieves Comment feedback", async function() {
          const actual = await client.getFeedback(createdFeedbackId);

          assert.ok(actual.id, "Expecting valid feedback");
          createdFeedbackId = actual.id!;
          assert.equal(actual.feedbackType, "Comment");
          if (actual.feedbackType === "Comment") {
            assert.equal(actual.comment, "This is a comment");
          }
        });

        // service issue, skipping for now
        it("lists Anomaly feedbacks", async function() {
          const iterator = client.listFeedback(
            testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
            {
              filter: {
                startTime: new Date(Date.UTC(2021, 10, 1)),
                endTime: new Date(Date.UTC(2021, 10, 5)),
                timeMode: "FeedbackCreatedTime"
              }
            }
          );
          let result = await iterator.next();
          assert.ok(result.value.id, "Expecting first status");
          result = await iterator.next();
          assert.ok(result.value.id, "Expecting second status");
        });

        it("lists Anomaly feedbacks with datetime strings", async function() {
          const iterator = client.listFeedback(
            testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1,
            {
              filter: {
                startTime: "2021-11-01T00:00:00.000Z",
                endTime: "2021-11-05T00:00:00.000Z",
                timeMode: "FeedbackCreatedTime"
              }
            }
          );
          let result = await iterator.next();
          assert.ok(result.value.id, "Expecting first status");
          result = await iterator.next();
          assert.ok(result.value.id, "Expecting second status");
        });

        it("lists Anomaly feedbacks by page", async function() {
          const iterator = client
            .listFeedback(testEnv.METRICS_ADVISOR_AZURE_SQLSERVER_METRIC_ID_1)
            .byPage({ maxPageSize: 2 });
          let result = await iterator.next();
          assert.equal(result.value.length, 2, "Expecting two entries in first page");
          result = await iterator.next();
          assert.equal(result.value.length, 2, "Expecting two entries in second page");
        });
      });
    }).timeout(60000);
  });
});
