sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/format/NumberFormat",
    "sap/base/strings/formatMessage",
    "jquery.sap.global",
  ],
  function (Controller, JSONModel, NumberFormat, formatMessage, jQuery) {
    "use strict";

    return Controller.extend(
      "sap.suite.ui.commons.demokit.tutorial.icecream.01.controller.Startpage",
      {
        onInit: function () {
          var sDataPath =
            //sap.ui.require.toUrl
            jQuery.sap.getResourcePath(
              "sap/suite/ui/commons/demokit/tutorial/icecream/01/model/data"
            ) + "/News.json";
          var oModel = new JSONModel(sDataPath);
          this.getView().setModel(oModel, "news");
        },

        formatMessage: formatMessage,

        getProgress: function (aNodes) {
          if (!aNodes || aNodes.length === 0) {
            return 0;
          }
          var iSum = 0;
          for (var i = 0; i < aNodes.length; i++) {
            iSum += aNodes[i].state === "Positive";
          }
          var fPercent = (iSum / aNodes.length) * 100;
          return fPercent.toFixed(0);
        },

        getEntityCount: function (entities) {
          return (entities && entities.length) || 0;
        },

        formatNumber: function (value) {
          var oFloatFormatter = NumberFormat.getFloatInstance({
            style: "short",
            decimals: 1,
          });
          return oFloatFormatter.format(value);
        },

        formatJSONDate: function (date) {
          var oDate = new Date(Date.parse(date));
          return oDate.toLocaleDateString();
        },

        onNavToProcessFlow: function () {
          this.getRouter().navTo("processFlow");
        },

        onNavToReviews: function () {
          this.getRouter().navTo("reviews");
        },

        onNavToChartContainer: function () {
          this.getRouter().navTo("chartContainer");
        },

        getRouter: function () {
          return this.getOwnerComponent().getRouter();
        },
      }
    );
  }
);
