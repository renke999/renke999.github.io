/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/renke999.github.io/2019/12/12/hello-world/index.html","c49f80b9c82a98db75dc0de0d4d57524"],["/renke999.github.io/2020/01/01/2020-1-1/index.html","2a307b76e75ef3e8e0d0636f840e893b"],["/renke999.github.io/2020/01/01/test/index.html","cde241c6bf0c25edeadf2fd8cddedcdc"],["/renke999.github.io/2020/01/20/markdown笔记/index.html","b5dacfdc7d6810e0772e10dbab6e8f2c"],["/renke999.github.io/2020/01/22/tex笔记/index.html","6bd7bb2173b880328d28c42edb6518ac"],["/renke999.github.io/2020/01/25/插件/index.html","9cea3088191873da840f6fc66489ff0b"],["/renke999.github.io/archives/2019/12/index.html","d729f11ca9ba0175f41daeb62cf58125"],["/renke999.github.io/archives/2019/index.html","4dcdf7d2d867c57147a06d7c90e271bd"],["/renke999.github.io/archives/2020/01/index.html","44c3d228400a47636f4e49c55fb4e87d"],["/renke999.github.io/archives/2020/index.html","a3ce2febc463f1a5a83d7be1efcd6040"],["/renke999.github.io/archives/index.html","f9551f3018a9e658dfdf27b33343b155"],["/renke999.github.io/categories/hexo/index.html","c5b4c494acbc261bf5c64ddf42ed3674"],["/renke999.github.io/categories/index.html","3766cb77841fa4fdcaa744c3c769f8b9"],["/renke999.github.io/categories/markdown/index.html","aaa23505be1b2556ca1426cedc9187fc"],["/renke999.github.io/categories/tex/index.html","3e4a5566d179971a8a5c30d0656b92ff"],["/renke999.github.io/categories/生活/index.html","737b509b5ff02cff3536628157da1d45"],["/renke999.github.io/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/renke999.github.io/css/main.css","04cb410108455756cb38f80e5f39c624"],["/renke999.github.io/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/renke999.github.io/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/renke999.github.io/images/avatar.jpg","c695bbdd0cff390e8a59edf5fcf00fd6"],["/renke999.github.io/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/renke999.github.io/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/renke999.github.io/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/renke999.github.io/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/renke999.github.io/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/renke999.github.io/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/renke999.github.io/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/renke999.github.io/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/renke999.github.io/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/renke999.github.io/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/renke999.github.io/images/wechat.png","0f3aba0edc9cc3c5f7e7ece5d0bf4ea8"],["/renke999.github.io/index.html","0be5005a09d11a4304e68686ee29f09a"],["/renke999.github.io/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/renke999.github.io/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/renke999.github.io/js/clicklove.js","7bea355e5d400d8d00f2a152f1d3dfb8"],["/renke999.github.io/js/cursor/explosion.js","f8599b24e09ee8be2d30560755e38236"],["/renke999.github.io/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/renke999.github.io/js/cursor/love.js","9a8c9dc209edcfb253cf526371bd2bd8"],["/renke999.github.io/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/renke999.github.io/js/local-search.js","2e9f38867fa1f5a8988be716052c7c77"],["/renke999.github.io/js/motion.js","af3cc91ced18c5ef593f1d750812ade3"],["/renke999.github.io/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/renke999.github.io/js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["/renke999.github.io/js/schemes/pisces.js","cca41edb5ea3a6303f17c24610ad7174"],["/renke999.github.io/js/utils.js","432db0ab3928890383447c0566927d39"],["/renke999.github.io/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/renke999.github.io/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/renke999.github.io/lib/canvas-nest/README.html","ecf817436783152f7e5d7aff97a28aaa"],["/renke999.github.io/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/renke999.github.io/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/renke999.github.io/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/renke999.github.io/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/renke999.github.io/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/renke999.github.io/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/renke999.github.io/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/renke999.github.io/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/renke999.github.io/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/renke999.github.io/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/renke999.github.io/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/renke999.github.io/sw-register.js","2d317ee142afba8dbac8bff2ec8ec537"],["/renke999.github.io/tags/index.html","a5fe6e206b833ae5034f871c0bc71de6"],["/renke999.github.io/tags/markdown/index.html","87b49aa5652d48c1c0a2a30cac266687"],["/renke999.github.io/tags/tex/index.html","4a4c031e1beeae75048f37a2f0f13007"],["/renke999.github.io/tags/插件/index.html","4c230c5ad50b091a22392b9ca5aad130"],["/renke999.github.io/tags/生活/index.html","96a37e3a5b4f353d716748831d671c32"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
