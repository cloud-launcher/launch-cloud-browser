"use strict";
var $__launch_45_cloud_45_core__,
    $__provider_45_digitalocean_47__46_dist_47_provider_47_simulator__,
    $__browser_45_request__;
var core = ($__launch_45_cloud_45_core__ = require("launch-cloud-core"), $__launch_45_cloud_45_core__ && $__launch_45_cloud_45_core__.__esModule && $__launch_45_cloud_45_core__ || {default: $__launch_45_cloud_45_core__}).default;
var digitalocean = ($__provider_45_digitalocean_47__46_dist_47_provider_47_simulator__ = require("provider-digitalocean/.dist/provider/simulator"), $__provider_45_digitalocean_47__46_dist_47_provider_47_simulator__ && $__provider_45_digitalocean_47__46_dist_47_provider_47_simulator__.__esModule && $__provider_45_digitalocean_47__46_dist_47_provider_47_simulator__ || {default: $__provider_45_digitalocean_47__46_dist_47_provider_47_simulator__}).default;
var request = ($__browser_45_request__ = require("browser-request"), $__browser_45_request__ && $__browser_45_request__.__esModule && $__browser_45_request__ || {default: $__browser_45_request__}).default;
var proxies = {
  dockerHubApiRoot: 'http://104.154.35.244',
  discoveryEtcdApiRoot: 'http://23.236.50.60'
};
module.exports = (function(providerConfigs, log) {
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
});

//# sourceMappingURL=simulator.js.map