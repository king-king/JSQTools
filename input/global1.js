/*global
require,G_STATIC_PATH,window,angular
*/

require.config({
    baseUrl: "/" + ("undefined" === typeof G_STATIC_PATH ? 'src' : G_STATIC_PATH) + "/static/js/singleAnalysis/singleProDetail",
    paths: {},
    shim: {

    },
    priority: [

    ],
    waitSeconds: 30
});

require(['', '../../util/all', 'controller', 'service', 'directive', 'commentAnalysis'],
    //如果mainApp.controller 模块定义已经依赖了mainApp.service ， 此处可以不用依赖mainApp.service
    function (demodata, esUtil, controller, service, directive) {
        "use strict";
        var absurl = window.location.pathname;
        var urlPart = 'singleProDetail';
        if (absurl.indexOf('signalPage') !== -1) {
            urlPart = 'signalPage';
        }
        var mainApp = angular.module('mainApp', [
            'mainApp.controller',
            'mainApp.service',
            'mainApp.directive',
            'mainApp.commentAnalysis'
        ]);

        var $injector = angular.injector(['ibd.util']);
        var config = $injector.get('config');

        //添加http拦截，对请求与响应做一些统一处理
        var loadConfig = {};
        loadConfig[config.url[urlPart].getSingleProSummary] = '.single-summary-wrap';
        loadConfig[config.url[urlPart].getSingleProTrendData] = '.single-trend-wrap';

        loadConfig[config.url[urlPart].getSingleProKeyWordTableData] = '.source-ele';
        loadConfig[config.url[urlPart].getSingleProFlowTableData] = '.source-ele';
        loadConfig[config.url[urlPart].getSingleProSourceOrderData] = '.source-ele';

        loadConfig[config.url[urlPart].getSingleProUsersData] = '.user-ele';
        loadConfig[config.url[urlPart].getSingleProCrossData] = '.related-ele';
        esUtil.httpCommonIntercept(mainApp, loadConfig);

        angular.bootstrap(document, ['mainApp', 'grace.bootstrap']);
    });