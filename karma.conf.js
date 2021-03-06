// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("karma-sonarqube-unit-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "./coverage/nuvolar-test"),
      reports: ["html", "lcovonly", "text-summary"],
      fixWebpackSourcePaths: true,
    },
    reporters: ["progress", "kjhtml", "sonarqubeUnit"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    //browsers: ["Chrome", "ChromeHeadlessCI"],
    browsers: ["ChromeHeadlessCI"],
    singleRun: true,
    customLaunchers: {
      ChromeHeadlessCI: {
        base: "ChromeHeadless",
        flags: [
          "--headless",
          "--disable-gpu",
          "--disable-translate",
          "--disable-extensions",
          "--no-sandbox", // Added to fix an issue where of Failed to connect to chrome browser
          "--remote-debugging-port=9222",
        ],
      },
    },
    sonarQubeUnitReporter: {
      sonarQubeVersion: "LATEST",
      outputFile: "reports/ut_report.xml",
      overrideTestDescription: true,
      testPaths: ["./src"],
      testFilePattern: ".spec.ts",
      useBrowserName: false,
    },
  });
};
