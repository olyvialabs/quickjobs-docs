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
  
  mySidebar: [
    {
      type: 'doc',
      id: 'intro', 
    },
    {
      type: 'doc',
      id: 'Quickjobs', 
    },
    {
      type: 'category',
      label: 'Account',
      items: [
        {
          type: 'doc',
          id: 'Account/create-an-account',
        },
        {
          type: 'doc',
          id: 'Account/edit-profile',
        },
        {
          type: 'doc',
          id: 'Account/change-password',
        },
        {
          type: 'doc',
          id: 'Account/sign-off',
        },
      ],
    },
    {
      type: 'category',
      label: 'Vacancy application',
      items: [
        {
          type: 'doc',
          id: 'Vacancy application/vacancy-application',
        },
        {
          type: 'doc',
          id: 'Vacancy application/search',
        },
        {
          type: 'doc',
          id: 'Vacancy application/poll',
        },
        {
          type: 'doc',
          id: 'Vacancy application/likes',
        },
        {
          type: 'doc',
          id: 'Vacancy application/share-vacancy',
        },
        {
          type: 'doc',
          id: 'Vacancy application/manage-my-applications',
        },
      ],
    },
    {
      type: 'category',
      label: 'Company profile',
      items: [
        {
          type: 'doc',
          id: 'Company profile/create-company-profile',
        },
        {
          type: 'doc',
          id: 'Company profile/create-vacancy',
        },
        {
          type: 'doc',
          id: 'Company profile/manage-companies',
        },
        {
          type: 'doc',
          id: 'Company profile/see-company-applications',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tips',
      items: [
        {
          type: 'doc',
          id: 'Tips/how-to-start',
        },
        {
          type: 'doc',
          id: 'Tips/keep-updated',
        },
        {
          type: 'doc',
          id: 'Tips/what-do-companies-see',
        },
        {
          type: 'doc',
          id: 'Tips/delete-my-account',
        },
      ],
    },
    
    {
      type: 'category',
      label: 'Security',
      items: [
        {
          type: 'doc',
          id: 'Security/privacy-policy',
        },
      ],
    },  
  ],
   
};

module.exports = sidebars;
