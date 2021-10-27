/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

 module.exports = {
  homeSidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'quickstart',
      label: 'Quick Start',
    },
    {
      type: 'category',
      label: 'The Project',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'the-project', // Generate sidebar slice from docs/the-project
        },
      ]
    },
  ],
  taxonomySidebar: [{type: 'autogenerated', dirName: 'taxonomy'}],
  trackingSidebar: [{type: 'autogenerated', dirName: 'tracking'}],
  modelingSidebar: [{type: 'autogenerated', dirName: 'modeling'}],
  buhtuhSidebar: [{type: 'autogenerated', dirName: 'buhtuh'}],
};