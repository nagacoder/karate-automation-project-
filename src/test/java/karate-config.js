function fn() {
    var env = karate.env; // get environment variable
    karate.log('karate.env system property was:', env);

    var config = {
        env: env,
        baseUrl: 'https://jsonplaceholder.typicode.com',
        timeoutMs: 5000
    };

    if (env == 'dev') {
        config.baseUrl = 'http://dev-api.example.com';
    } else if (env == 'staging') {
        config.baseUrl = 'http://staging-api.example.com';
    }

    return config;
}