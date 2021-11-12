/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'OVERVIEW',
      collapsible: false,
      items: ['introduction', 'accounts', 'shipments', 'trackers', 'APIs'],
    },
    {
      type: 'category',
      label: 'SEE ALSO',
      collapsible: false,
      items: ['faq', 'support', 'contributing'],
    },
  ],
  guides: [
    {
      type: 'category',
      label: 'GUIDES',
      collapsible: false,
      items: [
        'guides/overview',
        'guides/architecture',
        'guides/development',
        'guides/extensibility',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'guides/api/openapi',
        'guides/api/shipping',
        'guides/api/tracking',
        // 'guides/api/pickup',
      ],
    },
    {
      type: 'category',
      label: 'DATA',
      items: [
        'guides/data/graphql',
        'guides/data/users',
        'guides/data/connections',
        'guides/data/templates',
        'guides/data/logs',
        // 'guides/data/events',
        'guides/data/organizations',
      ],
    },
    {
      type: 'category',
      label: 'SDK',
      items: [
        'guides/sdk/introduction',
        'guides/sdk/architecture',
        'guides/sdk/gateways',
        'guides/sdk/rating',
        'guides/sdk/shipping',
        'guides/sdk/tracking',
        'guides/sdk/pickup',
        'guides/sdk/debugging',
        'guides/sdk/extension',
      ],
    },
    {
      type: 'category',
      label: 'SELF HOSTING',
      collapsible: false,
      items: [
        'guides/self-hosting/overview',
        'guides/self-hosting/configuration',
        'guides/self-hosting/docker',
        'guides/self-hosting/heroku',
      ],
    },
  ],
  reference: [
    {
      type: 'category',
      label: 'Developer Tools',
      collapsible: false,
      items: [
        'reference/quickstart',
        'reference/error-codes',
      ],
    },
    {
      type: 'category',
      label: 'Core Resources',
      collapsible: false,
      items: [
        'reference/core-resources/authentication',
        'reference/core-resources/carriers',
        'reference/core-resources/shipments',
        'reference/core-resources/trackers',
        'reference/core-resources/addresses',
        'reference/core-resources/parcels',
        'reference/core-resources/customs',
        'reference/core-resources/proxy',
        'reference/core-resources/webhooks',
      ],
    },
    {
      type: 'category',
      label: 'Data Graph',
      collapsible: false,
      items: [
        'reference/data-graph/graphql-clients',
        'reference/data-graph/users',
        'reference/data-graph/connections',
        'reference/data-graph/templates',
        'reference/data-graph/organizations',
      ],
    },
  ],
  carriers: [
    {
      type: 'category',
      label: 'OVERVIEW',
      collapsible: false,
      items: ['carriers/integrations'],
    },
    {
      type: 'category',
      label: 'CARRIERS',
      collapsible: false,
      items: [
        'carriers/australiapost',
        'carriers/canadapost',
        'carriers/canpar',
        'carriers/dhl_express',
        'carriers/dhl_universal',
        'carriers/dicom',
        'carriers/fedex',
        'carriers/ics-courrier',
        'carriers/purolator',
        'carriers/royalmail',
        'carriers/sendle',
        'carriers/tnt',
        'carriers/ups',
        'carriers/usps',
      ],
    },
  ]
};

module.exports = sidebars;
