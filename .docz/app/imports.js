export const imports = {
  'documentation/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-index" */ 'documentation/index.mdx'),
  'documentation/components/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-components-alert" */ 'documentation/components/Alert.mdx'),
  'documentation/components/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "documentation-components-button" */ 'documentation/components/Button.mdx'),
}
