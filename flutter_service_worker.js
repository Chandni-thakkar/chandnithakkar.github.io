'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d1a94e62dc2e01d00173487276c72312",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "589171f67d8a64b5c4b4c1d02ccfc6ed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b6236f9db54fffb7180454a6c46359a9",
".git/logs/refs/heads/main": "847b16ff994747a888719f8a4da1dd04",
".git/logs/refs/remotes/origin/main": "538f5341946fdb59eb7b44241b1241d3",
".git/objects/00/22b5dc6090673126bb3644d90bd48f5425e3bc": "ac0244b8f99b6a775faf4f2ae4e874cd",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/7cd24442ee28614a4cc82f528221ae51355e31": "f616e0d346c1506435dd1fb9de7caa93",
".git/objects/03/e3e0fe1044ef34a8801d6bad608d02ea8e2c72": "f937cd53784a967ed955e1259e2587ae",
".git/objects/05/132e0bdefd93c52157750f1775485e52a3edc2": "f68bc46c5467bca17c7106cc658c7621",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/f736dfc840270dc51897dd719c397d85d161c0": "ccf2c5fb12f730cb601e0ff1aadde0e0",
".git/objects/0a/44d0c63ea65dce1c935dd0c729e70a59a92b74": "17e24890cbcca16282dc2bf096950f16",
".git/objects/0f/aeae813fcd7b40e66333ef5403dc4016267b83": "59627a1a358b13c8bf97c8de681f29e0",
".git/objects/10/a81dde8c2f942bf4e053fca33f9ab06cb8e43e": "13560224048ee5a238dda137be69c1c7",
".git/objects/16/c18f26f6fc408112ebf99d7788ca442f81188e": "92300d9dc8dd111a4c36eb74495501f2",
".git/objects/29/5e155059ad8a5b601f600a7b739191cb347114": "e164a4efe789ed609fc829e369b1f95b",
".git/objects/30/effbc980a88c1b600437a935c8916f5fb426f4": "cee189739030ca3fc1004579e2915bd5",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/b6487ab8410f3668e207f78c1d8c2b3c4708ed": "3482092bdf422c52e6a009561f119f7e",
".git/objects/39/a17c87d70e95bbf953b813b4195c40babe2ecb": "ea57041db59107030d7dae7000f0904b",
".git/objects/3a/4796f6e5d20423f0e5d7c99baa33769c928252": "6c3e291968ff8034d081952d5788ed6d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3b/ef82bc93db6999e9a6e142e7f124c7c79801b4": "e5ba8bd1e379844f3a8ec80469d0d23d",
".git/objects/3f/72d59ca442c26300f0576404d6ee5b8f3f81ef": "4d969e6775154a5c7cb279bf0dd0c5cc",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/69530e5dfe26b47bf5c245e5c2e493dbe07281": "af53b9ffca0aa3c4a92a48e52306c9d4",
".git/objects/4c/8f39b569f8d3b3365abdd1f0363e356ed66378": "5c6779c427f7c3f1755a7adf4d90f678",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5b/ee4bd4d4863ba372dbe614e3615679e50cf1f4": "cd223c5fe94dba0b30da9350bbef1b1e",
".git/objects/5c/73a68d4f7c8d4a215c2712daeff8c89a244a0c": "631f01a0780e6ffd5d5bb083c3d16fb5",
".git/objects/68/3ab4cd0eed5772eae217ffe33038d47d01e04e": "3d24daa162b138c0f08ade14fdbe2a89",
".git/objects/6a/1f45fdc4d162c6277f4530c402b20f3a396c50": "ec6b32cdd932eb1725bfbe3e3e927b32",
".git/objects/6b/31642fb8a6ae62d6d36869bf6d6e0d635d0e3c": "8a85b82ddbcd3f52e5995d3228ba608e",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/71/c6120c45fcbca803d8b5f7c01fd051912822ed": "d70406897291dd8795f85da8e87d21a3",
".git/objects/73/f6e73d77760dd7b99ebdf14509c13faf92f64b": "d2a18c37b71b0de4dd09098658d30b80",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/75/1e836c98e12df9ac372c3b3d3d94cfd2fc3524": "81d4a9f2820f141c2c1d314a622d8899",
".git/objects/78/44a1567a477eab9764fcd64ac5f6a26da72b48": "4aa26dc1acc289bd45f33c2cf06617e6",
".git/objects/80/fb99a841a0f732addc42be3f1b3dbd79ecca81": "b472842b6b33f55e9a7a9f36cd75262a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/5d2f51c0246f9696c1bb9df86a847233998fb0": "49cc3de4b98022fcf700cd0b65a6a2f7",
".git/objects/87/3114ed4000c41e2f07501ddaa9ce7092ba3a77": "9bd738e5ed4a4a7d7f48b775b7accc3c",
".git/objects/88/2d4b443868d9f4b1ac32b788ae34098806463c": "305d83ae49d6b3d67032b74676e6f746",
".git/objects/89/28c6920b849a1f42019dfcaf92644a941818ec": "1f1c953286f7cf1c7c417a2b32f5d37d",
".git/objects/8d/8d329c62cd7829d8717128e196ef101940a906": "635c47f7dc37df7bf8061eecfe142a80",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/b5b59df77e226685be96524339fedb115a0ecb": "6e7584bcaa46fa43774139b9aca818e0",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/c24e32e0d9aae3876603186443a0ae07a2e1b0": "30d773c184428dd459ca9c61160e64c2",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a2/ff3681c50dc9190766f5b8719aae05ef964049": "dffe123d1ba1a60816302704a4401ea2",
".git/objects/a4/bd4667fc031cf8345d99bac09a08a42a2c32a1": "3034bfa64693579d951fb305efbb1083",
".git/objects/a9/0bdb88c5ac37dc39280c076a3cc3b7969353c7": "39cb18a63e0309230689cc0355c1abe3",
".git/objects/a9/d25ffe5259a2f30bb8d50b3ce2cf08220929dc": "8657f3fd107d19615d820ec03d036958",
".git/objects/af/3f81a2832b2d0a141a2fe08eb31d5a0d81d22b": "af1555f4030b303c9cd9ba0d5c509027",
".git/objects/af/d927f45fafc082c4865826e33dabb80025327f": "278e502aadbb3a3c581691db9548fb39",
".git/objects/b0/70184ec73abca3fc64d557c563ff5dd7c02429": "c3414079170a1eb313af4d867eb1a26a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/3fec63090a6b410b665a5b01d14e335ba3dac8": "73ea3783ccacd3a05b1a29fbb2cb599b",
".git/objects/bc/7af5e45bd107de25f7aa9175fd64f59cd4cf75": "fec8ef1d032dfff37a4c4c8fa40d4f10",
".git/objects/c0/2635b2e838e3f46e0b04809a71d032deee1c61": "c490c095cf87f5e1160ee08874f34563",
".git/objects/c5/63494cb49230a2b513310503194e43e9768dc0": "62cf013e144d4df4bfcb9bf4f5caaa7a",
".git/objects/c6/d6212fdb4dae9dfb57e46a01de69506c895fc4": "2f4a3eab1269cce5d6cf9b4bd40f85bf",
".git/objects/c8/18e65b0584832b870f681be6f56cec97da7f15": "2810caaa930460d474ed77a77f6afa1d",
".git/objects/ca/11f8501ac8df09e2d0e1f32aa5a3406ec75b57": "850e7d4da29ff4af00c5efa43385b7c1",
".git/objects/cc/81d0f07d3bbf023f56188185011a02f71a995b": "454ceb5391b23dfe1e0c249b01f1222c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/c2d8e3f42d29a0a84e65aeebae548b08dc17d4": "a6f81a73cf1930d5bf930dcaef755f6c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/bf7b97be61d8a31c974b5cd68d5a8793ebe764": "66e7e8c5f414a9c999742c1065be7b6a",
".git/objects/d5/cf29abdb09c24a656f6aa575c3b02f489d8c9f": "7aab2e2e0f346e0df1a62139a4d4fcce",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/3f2a0aad47913f1d51257649c619e29315ced3": "701cc3a106f6a5d3194c391d2affad59",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/f08295fe5f91318a2063d3cb4a9287440654ef": "49135e6da47dc28277ecd46f4600e017",
".git/objects/e4/9b3b4fa2267fcd9d9d66e1326cc533a472928f": "0bf52a20b8c1257cbb687112cf11b39a",
".git/objects/e5/8b14cead71668ff78506388e65fcff307a38bd": "dce67fcd6932207a80706be22db27565",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/7cc64ebf8e72d582f20ef81c3d4b7a295dbd1c": "12cf5ad73cf41bfcd26a0f3331374d7d",
".git/objects/f9/d240a94e6a7d6600fa3ce6c9caea17c4fd10be": "07199dd20b186e7faf409dcabff1aa69",
".git/objects/fa/c4244d8ffe1655cf7c09cc6b7aef325ba2173f": "dbfc7fc2674ab6b2589976904ebde4f4",
".git/objects/fe/faf0eeafe1554a3a9feee3c4cd9f4a52482a8c": "1b7cf3616953710965f5a3a3800c8639",
".git/objects/ff/93ccc6e32913579415993a49b40cd88c418587": "5a6790dd92089318e6617d341c8b45d8",
".git/refs/heads/main": "2caa1d439dcc7725d0f2e8923bd5ceb9",
".git/refs/remotes/origin/main": "2caa1d439dcc7725d0f2e8923bd5ceb9",
"assets/AssetManifest.bin": "e850821c99f39cae8c00f363184988d7",
"assets/AssetManifest.bin.json": "d96b0c614be2abd0d11b64257ad3a93e",
"assets/AssetManifest.json": "838235ad000d6074f6cc693ec6101067",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/ddstechvira.png": "e8468c1307955ea1f2e64bb5b3f14a80",
"assets/assets/images/dileepabandara_dev.png": "3b07d4f121fb24862763aaaadbe22f3e",
"assets/assets/images/flutterscope.png": "bf9d96f9660b19b398e0b02316f65523",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/gls.jpeg": "fc1938a6f002270de6f039ab321ce775",
"assets/assets/images/ignou.png": "f0254eea216cf33a84ea1a1fb5b3f7ec",
"assets/assets/images/infosys.jpeg": "ba80b5273a64421e4aa5e5e2df750746",
"assets/assets/images/logo.jpeg": "75587819822d54703c7800409bc3233f",
"assets/assets/images/logo.png": "99d5f157c1281deae6519eb06dbcbabe",
"assets/assets/images/mlsa.png": "ac77090e37e75814439d7134e6f38d28",
"assets/assets/images/mms.png": "a8433784455e9ee9315e59d1fc1e1357",
"assets/assets/images/nibm.png": "b0842646385fb6105a447c069b668579",
"assets/assets/images/splash.png": "615b33ea39ef0c0435339878d37ca17b",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/fonts/MaterialIcons-Regular.otf": "8d2912c245a70730bcd710695567a256",
"assets/NOTICES": "051a69f28c8faefbf269f2a372b16d0d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5fb28a917189be501f42214fbd8edc98",
"icons/apple-touch-icon.png": "c8722fb470a194fd892e7ca76e8d7248",
"icons/favicon.ico": "5849d224b397c03024c5d6b212068bd5",
"icons/icon-192-maskable.png": "3835c97708e1788952d43e6a2a081da2",
"icons/icon-192.png": "0acd9f9c92e61e45e7474f900c54efad",
"icons/icon-512-maskable.png": "c1ef942cdfca19bcc456f5903e17736c",
"icons/icon-512.png": "851030b8b32eeaf3b2715b5ddebe0a43",
"icons/logo.jpeg": "75587819822d54703c7800409bc3233f",
"index.html": "72033e3b657ac79599a65ec942ffe2f3",
"/": "72033e3b657ac79599a65ec942ffe2f3",
"main.dart.js": "1ecf1ee6bcec84f7f1b4646be726505e",
"manifest.json": "2eb31bdab7dbf29b9b290bb4de35d4bf",
"splash/img/dark-1x.png": "6fb1893b02b2a7ecc1ad9b730cdd746d",
"splash/img/dark-2x.png": "bb480b0fb63bf1b57e878c0700ba5ad3",
"splash/img/dark-3x.png": "5f1edadab05f4f31ba0b5090ab7ca6cf",
"splash/img/dark-4x.png": "e417356273199b13567474c845ba862d",
"splash/img/light-1x.png": "6fb1893b02b2a7ecc1ad9b730cdd746d",
"splash/img/light-2x.png": "bb480b0fb63bf1b57e878c0700ba5ad3",
"splash/img/light-3x.png": "5f1edadab05f4f31ba0b5090ab7ca6cf",
"splash/img/light-4x.png": "e417356273199b13567474c845ba862d",
"splash/img/loading.png": "0b3427291f6bf19ce0a1df35d66f6da3",
"splash/img/loading2.png": "b552f944101ed14b630989044a0ae94e",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "9917b3496bafc85c32a8e01bea7d6427",
"version.json": "e5d57d4e475cc8a711764c8aef61d978"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
