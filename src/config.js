export default class Config {
  static settings() {
    return {
      // The API located at the URL below should be used only for software
      // development and testing. ICD content at this location might not
      //  be up to date or complete. For production, use the API located at
      // id.who.int with proper OAUTH authentication
      apiServerUrl: "https://icd11restapi-developer-test.azurewebsites.net",
      language: "es",
      popMode: true,
      autoBind: false,
    };
  }

  static fullWidth() {
    return "width: 100%;";
  }

  static center() {
    return "text-align: center;";
  }
}
