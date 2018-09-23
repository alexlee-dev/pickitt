export const imports = {
  'documentation/examples.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-examples" */ 'documentation/examples.mdx'),
  'documentation/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-index" */ 'documentation/index.mdx'),
  'documentation/license.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-license" */ 'documentation/license.mdx'),
  'documentation/tests.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-tests" */ 'documentation/tests.mdx'),
  'documentation/components/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-components-alert" */ 'documentation/components/Alert.mdx'),
  'documentation/components/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-components-button" */ 'documentation/components/Button.mdx'),
  'documentation/faqs/faq1.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-faqs-faq1" */ 'documentation/faqs/faq1.mdx'),
  'documentation/faqs/faq2.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-faqs-faq2" */ 'documentation/faqs/faq2.mdx'),
  'documentation/faqs/faq3.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-faqs-faq3" */ 'documentation/faqs/faq3.mdx'),
  'documentation/gettingStarted/gettingStarted1.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-getting-started-getting-started1" */ 'documentation/gettingStarted/gettingStarted1.mdx'),
  'documentation/gettingStarted/gettingStarted2.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-getting-started-getting-started2" */ 'documentation/gettingStarted/gettingStarted2.mdx'),
  'documentation/gettingStarted/gettingStarted3.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-getting-started-getting-started3" */ 'documentation/gettingStarted/gettingStarted3.mdx'),
}
