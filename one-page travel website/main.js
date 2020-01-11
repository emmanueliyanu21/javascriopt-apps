const access_key = "833b361fbf222affbe0fcf930cb1c7a8f2e572c609cdf7ced94d89ee80392229";
const client_id = "0b038f1402f1ab1ca19e175deb70ccbfad24214f6804f026ade009dde5caff7f";

// ES Modules syntax
import Unsplash from 'unsplash-js';
// require syntax
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({ accessKey: "{APP_ACCESS_KEY}" });

const unsplash = new Unsplash({
    accessKey: "{833b361fbf222affbe0fcf930cb1c7a8f2e572c609cdf7ced94d89ee80392229}",
    // Optionally you can also configure a custom header to be sent with every request
    headers: {
        "X-Custom-Header": "foo"
    },
    // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
    timeout: 500 // values set in ms
});