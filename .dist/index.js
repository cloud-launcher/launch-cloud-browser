"use strict";
var $__launch_45_cloud_45_core__,
    $__provider_45_digitalocean_47__46_dist_47_provider_47_browser__,
    $__browser_45_request__;
var core = ($__launch_45_cloud_45_core__ = require("launch-cloud-core"), $__launch_45_cloud_45_core__ && $__launch_45_cloud_45_core__.__esModule && $__launch_45_cloud_45_core__ || {default: $__launch_45_cloud_45_core__}).default;
var digitalocean = ($__provider_45_digitalocean_47__46_dist_47_provider_47_browser__ = require("provider-digitalocean/.dist/provider/browser"), $__provider_45_digitalocean_47__46_dist_47_provider_47_browser__ && $__provider_45_digitalocean_47__46_dist_47_provider_47_browser__.__esModule && $__provider_45_digitalocean_47__46_dist_47_provider_47_browser__ || {default: $__provider_45_digitalocean_47__46_dist_47_provider_47_browser__}).default;
var request = ($__browser_45_request__ = require("browser-request"), $__browser_45_request__ && $__browser_45_request__.__esModule && $__browser_45_request__ || {default: $__browser_45_request__}).default;
var ip = '104.236.140.79';
var proxies = {
  dockerHubApiRoot: ("http://" + ip + ":8082"),
  discoveryEtcdApiRoot: ("http://" + ip + ":8081")
};
module.exports = function(providerConfigs, log) {
  if (providerConfigs === undefined || providerConfigs === null)
    throw Error('Must provide a providerConfigs object!');
  var launchCloud = core({
    providers: {digitalocean: digitalocean()},
    providerConfigs: providerConfigs,
    log: log,
    request: request,
    proxies: proxies
  });
  return launchCloud;
};

//# sourceMappingURL=index.js.map
