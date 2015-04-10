import core from 'launch-cloud-core';

import digitalocean from 'provider-digitalocean/.dist/provider/browser';

import request from 'browser-request';

const proxies = {
  dockerHubApiRoot: 'http://104.131.153.23:8082',
  discoveryEtcdApiRoot: 'http://104.131.153.23:8081'
};

module.exports = (providerConfigs, log) => {
  if (providerConfigs === undefined || providerConfigs === null) throw Error('Must provide a providerConfigs object!');

  const launchCloud = core({
    providers: {
      digitalocean: digitalocean()
    },
    providerConfigs,
    log,
    request,
    proxies
  });

  return launchCloud;
};