export interface Config {
  confluence: {
    /**
     * Collection of sites
     * @visibility backend
     */
    sites: [
      {
        /**
         * Confluence base URL for wiki API
         * Typically: https://{org-name}.atlassian.net/wiki
         * @visibility backend
         */
        wikiUrl: string;

        /**
         * Spaces to index
         * @visibility backend
         */
        spaces: string[];

        /**
         * @visibility backend
         */
        auth: {
          /**
           * @visibility backend
           */
          username: string;

          /**
           * @visibility secret
           */
          password: string;
        }
      }
    ]
  }
};
