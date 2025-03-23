(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-silk-icons-fa.js', './kotlinx-coroutines-core.js', './kotlinx-serialization-kotlinx-serialization-core.js', './worker-411f.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-silk-icons-fa.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./worker-411f.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-icons-fa'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kobweb-frontend-silk-icons-fa' was not found. Please, check whether 'kobweb-frontend-silk-icons-fa' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['worker-411f'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'worker-411f' was not found. Please, check whether 'worker-411f' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplateform:site'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'com.example.blogmultiplateform:site'.");
    }
    globalThis['com.example.blogmultiplateform:site'] = factory(typeof globalThis['com.example.blogmultiplateform:site'] === 'undefined' ? {} : globalThis['com.example.blogmultiplateform:site'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['html-html-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-frontend-silk-icons-fa'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['worker-411f'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobwebx_silk_icons_fa, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_com_example_blogmultiplateform_worker_worker, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ensureNotNull = kotlin_kotlin.$_$.nh;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var to = kotlin_kotlin.$_$.ci;
  var mapOf = kotlin_kotlin.$_$.j8;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var removePrefix = kotlin_kotlin.$_$.ue;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var Unit_getInstance = kotlin_kotlin.$_$.v4;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var THROW_CCE = kotlin_kotlin.$_$.tg;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var protoOf = kotlin_kotlin.$_$.vc;
  var initMetadataForObject = kotlin_kotlin.$_$.wb;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var toString = kotlin_kotlin.$_$.bi;
  var toInt = kotlin_kotlin.$_$.mf;
  var charSequenceLength = kotlin_kotlin.$_$.fb;
  var toBoolean = kotlin_kotlin.$_$.if;
  var isBlank = kotlin_kotlin.$_$.me;
  var removeSuffix = kotlin_kotlin.$_$.ve;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.m5;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.ld;
  var THROW_ISE = kotlin_kotlin.$_$.vg;
  var getLocalDelegateReference = kotlin_kotlin.$_$.mb;
  var println = kotlin_kotlin.$_$.va;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.e5;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var rememberBreakpoint = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.c5;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o3;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.u4;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var listOf = kotlin_kotlin.$_$.h8;
  var contains = kotlin_kotlin.$_$.ae;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var onMouseOver = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var onMouseOut = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p3;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var leftRight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var topBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var IconSize_XL_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.d;
  var FaBars = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.a;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.d4;
  var CoroutineImpl = kotlin_kotlin.$_$.qa;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var isInterface = kotlin_kotlin.$_$.gc;
  var Long = kotlin_kotlin.$_$.ng;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.aa;
  var initMetadataForLambda = kotlin_kotlin.$_$.vb;
  var VOID = kotlin_kotlin.$_$.g;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var IconSize_LG_getInstance = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.c;
  var FaXmark = kotlin_com_varabyte_kobwebx_silk_icons_fa.$_$.b;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var SuspendFunction1 = kotlin_kotlin.$_$.ra;
  var initMetadataForCompanion = kotlin_kotlin.$_$.sb;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var objectCreate = kotlin_kotlin.$_$.uc;
  var getStringHashCode = kotlin_kotlin.$_$.pb;
  var initMetadataForClass = kotlin_kotlin.$_$.rb;
  var THROW_IAE = kotlin_kotlin.$_$.ug;
  var enumEntries = kotlin_kotlin.$_$.ua;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.g5;
  var rgba = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var Enum = kotlin_kotlin.$_$.ig;
  var rememberWorker = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.x5;
  var EchoWorker = kotlin_com_example_blogmultiplateform_worker_worker.$_$.a;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var BottomEnd_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var pointerEvents = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var split = kotlin_kotlin.$_$.bf;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var last = kotlin_kotlin.$_$.e8;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var Input = kotlin_org_jetbrains_compose_html_html_core.$_$.t5;
  var size_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.p5;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var background = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var onFocus = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var get_focus = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var getKClass = kotlin_kotlin.$_$.e;
  var arrayOf = kotlin_kotlin.$_$.ih;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var encodeToByteArray = kotlin_kotlin.$_$.fe;
  var decodeToString = kotlin_kotlin.$_$.ce;
  var Exception = kotlin_kotlin.$_$.kg;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.tb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l4;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$SidePanelKt, 'ComposableSingletons$SidePanelKt');
  initMetadataForLambda(OverFlowSidePanel$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(OverFlowSidePanel$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(OverFlowSidePanel$lambda$lambda$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(NavigationItem$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Joke, 'Joke', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForClass(Theme, 'Theme', VOID, Enum);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(User, 'User', User, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UserWithoutPassword, 'UserWithoutPassword', UserWithoutPassword, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForClass(Screen, 'Screen');
  initMetadataForObject(Home, 'Home', VOID, Screen);
  initMetadataForObject(Login, 'Login', VOID, Screen);
  initMetadataForObject(CreateAPost, 'CreateAPost', VOID, Screen);
  initMetadataForObject(MyPost, 'MyPost', VOID, Screen);
  initMetadataForObject(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt');
  initMetadataForLambda(HomePage$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$CreatePostPageKt, 'ComposableSingletons$CreatePostPageKt');
  initMetadataForObject(ComposableSingletons$HomePageKt, 'ComposableSingletons$HomePageKt');
  initMetadataForObject(ComposableSingletons$LoginScreenKt, 'ComposableSingletons$LoginScreenKt');
  initMetadataForLambda(LoginScreen$lambda$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$MyPostPageKt, 'ComposableSingletons$MyPostPageKt');
  initMetadataForObject(LoginStyle, 'LoginStyle');
  initMetadataForCoroutine($checkUserExistenceCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($checkUserIdCOROUTINE$1, CoroutineImpl);
  initMetadataForObject(Constants, 'Constants');
  initMetadataForObject(FONT_FAMILY, 'FONT_FAMILY');
  initMetadataForObject(Image_0, 'Image');
  initMetadataForObject(PathIcon, 'PathIcon');
  initMetadataForObject(Res, 'Res');
  initMetadataForObject(Id, 'Id');
  initMetadataForLambda(isUserLoggedIn$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).set_logOnError_wi584t_k$(true);
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', 'BlogMultiplateform')));
    Companion_getInstance().set_wjk6wo_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.tryRoutingTo$default_gm9buu_k$(remove(Companion_getInstance(), removePrefix(window.location.href, window.origin)), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('root', ComposableLambda$invoke$ref_6(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(188215112, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:90)');
      }
      HomePage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1712232191, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:92)');
      }
      CreatePostPage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1088822656, $changed, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous> (main.kt:93)');
      }
      HomePage_0($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_4$lambda_r7ncra($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(405089793, $changed, -1, 'ComposableSingletons$MainKt.lambda-4.<anonymous> (main.kt:95)');
      }
      LoginScreen($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1899002242, $changed, -1, 'ComposableSingletons$MainKt.lambda-5.<anonymous> (main.kt:97)');
      }
      MyPostPage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_6$lambda_uflld4(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(854823496, $dirty, -1, 'ComposableSingletons$MainKt.lambda-6.<anonymous> (main.kt:123)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-6.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-440954647, true, ComposableSingletons$MainKt$lambda_6$lambda$lambda_k0zjib(it), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'ComposableSingletons$MainKt.lambda-6.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it_0;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      DeferringHost(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_6$lambda$lambda_k0zjib($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-440954647, $changed, -1, 'ComposableSingletons$MainKt.lambda-6.<anonymous>.<anonymous> (main.kt:123)');
        }
        $it($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(188215112, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1712232191, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1088822656, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(405089793, false, ComposableSingletons$MainKt$lambda_4$lambda_r7ncra));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1899002242, false, ComposableSingletons$MainKt$lambda_5$lambda_1lz4ax));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda_6$lambda_uflld4));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_1fs5qa_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_3hnh9d_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_3_5jissg_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_4_7le4bj_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_5_9n9fum_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_6_bp4rdp_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.js.asDynamic' call
        if (document.hidden) {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        } else {
          // Inline function 'kotlin.text.isNotEmpty' call
          var this_0 = $status.className;
          if (charSequenceLength(this_0) > 0) {
            $shouldReload._v = true;
            tmp_1 = Unit_getInstance();
          } else {
            forceReloadNow();
            tmp_1 = Unit_getInstance();
          }
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register_vkebx7_k$('/', ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    ctx.get_router_j3zccy_k$().register_vkebx7_k$('/admin/create', ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1);
    ctx.get_router_j3zccy_k$().register_vkebx7_k$('/admin/home', ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1);
    ctx.get_router_j3zccy_k$().register_vkebx7_k$('/admin/login', ComposableSingletons$MainKt_getInstance().lambda_4_r8sbbm_1);
    ctx.get_router_j3zccy_k$().register_vkebx7_k$('/admin/posts', ComposableSingletons$MainKt_getInstance().lambda_5_r8sbbl_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    loginStyle(ctx);
    enableHoverEffect(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1190994075, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:123)');
        }
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda_6_r8sbbk_1, $composer_0, 6, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:122)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1190994075, true, main$lambda$lambda($router), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AppEntry(tmp0, $composer_0, 6);
      var tmp_1;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mainWrapper() {
    main();
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-49621269);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-49621269, $dirty, -1, 'com.example.blogmultiplateform.AppEntry (AppEntry.kt:13)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplateform.AppEntry.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-256766964, true, AppEntry$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.AppEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SilkApp(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-594522970, $changed, -1, 'com.example.blogmultiplateform.AppEntry.<anonymous>.<anonymous> (AppEntry.kt:16)');
        }
        $content($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-256766964, $changed, -1, 'com.example.blogmultiplateform.AppEntry.<anonymous> (AppEntry.kt:15)');
        }
        var tmp_0 = minHeight(toModifier(get_SmoothColorStyle(), $composer_0, 0), get_vh(100));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.blogmultiplateform.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-594522970, true, AppEntry$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.AppEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_8(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Surface(tmp_0, null, null, null, null, tmp0, $composer_0, 196608, 30);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AdminPageLayout(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1068577920);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1068577920, $dirty, -1, 'com.example.blogmultiplateform.components.AdminPageLayout (AdminPageLayout.kt:22)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(167730316);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.AdminPageLayout.<anonymous>' call
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var overFlowMenu$delegate = tmp0_group;
      var tmp_1 = fillMaxSize(Companion_getInstance_1());
      var tmp_2 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplateform.components.AdminPageLayout.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-597761734, true, AdminPageLayout$lambda_1(content, overFlowMenu$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.AdminPageLayout.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_1, tmp_2, null, tmp0, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(AdminPageLayout$lambda_2(content, $changed));
    }
  }
  function AdminPageLayout$lambda($overFlowMenu$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('overFlowMenu', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $overFlowMenu$delegate.get_value_j01efc_k$();
  }
  function AdminPageLayout$lambda_0($overFlowMenu$delegate, _set____db54di) {
    getLocalDelegateReference('overFlowMenu', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $overFlowMenu$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AdminPageLayout$lambda$lambda$lambda($overFlowMenu$delegate) {
    return function () {
      println('onPanel open clicked ');
      AdminPageLayout$lambda_0($overFlowMenu$delegate, true);
      return Unit_getInstance();
    };
  }
  function AdminPageLayout$lambda$lambda$lambda_0($overFlowMenu$delegate) {
    return function () {
      println('onPanel close clicked');
      AdminPageLayout$lambda_0($overFlowMenu$delegate, false);
      return Unit_getInstance();
    };
  }
  function AdminPageLayout$lambda$lambda($content, $overFlowMenu$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Column) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(961229987, $dirty, -1, 'com.example.blogmultiplateform.components.AdminPageLayout.<anonymous>.<anonymous> (AdminPageLayout.kt:32)');
        }
        $composer_0.startReplaceGroup_5hh8aj_k$(-2024964404);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.components.AdminPageLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = AdminPageLayout$lambda$lambda$lambda($overFlowMenu$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        SidePanel(tmp0_group, $composer_0, 6, 0);
        $composer_0.startReplaceGroup_5hh8aj_k$(-2024960675);
        if (AdminPageLayout$lambda($overFlowMenu$delegate)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-2024959015);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_3;
          if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.example.blogmultiplateform.components.AdminPageLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = AdminPageLayout$lambda$lambda$lambda_0($overFlowMenu$delegate);
            $composer_0.updateRememberedValue_l1wh71_k$(value_0);
            tmp_3 = value_0;
          } else {
            tmp_3 = it_0;
          }
          var tmp_4 = tmp_3;
          var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          OverFlowSidePanel(tmp1_group, $composer_0, 6);
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        $content($this$Column, $composer_0, 14 & $dirty);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp_0 = tmp_5;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AdminPageLayout$lambda_1($content, $overFlowMenu$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-597761734, $changed, -1, 'com.example.blogmultiplateform.components.AdminPageLayout.<anonymous> (AdminPageLayout.kt:28)');
        }
        var tmp_0 = maxWidth(fillMaxSize(Companion_getInstance_1()), get_px(1920));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.blogmultiplateform.components.AdminPageLayout.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(961229987, true, AdminPageLayout$lambda$lambda($content, $overFlowMenu$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.components.AdminPageLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_10(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AdminPageLayout$lambda_2($content, $$changed) {
    return function ($composer, $force) {
      AdminPageLayout($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SidePanel(onMenuClick, $composer, $changed, $default) {
    var onMenuClick_0 = {_v: onMenuClick};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-38360790);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClick_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1603170450);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.components.SidePanel.<anonymous>' call
          var value = SidePanel$lambda;
          this_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        onMenuClick_0._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-38360790, $dirty, -1, 'com.example.blogmultiplateform.components.SidePanel (SidePanel.kt:81)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      if (breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1841238288);
        SidePanelInternal($composer_0, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1841197244);
        CollapsedSidePanel(onMenuClick_0._v, $composer_0, 14 & $dirty);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SidePanel$lambda_0(onMenuClick_0, $changed, $default));
    }
  }
  function SidePanelInternal($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1390536909);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1390536909, $changed, -1, 'com.example.blogmultiplateform.components.SidePanelInternal (SidePanel.kt:92)');
      }
      var tmp = Companion_getInstance_1();
      $composer_0.startReplaceGroup_5hh8aj_k$(-1694917315);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.SidePanelInternal.<anonymous>' call
        var value = SidePanelInternal$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_2 = height(width(padding(tmp, tmp0_group), get_px(250)), get_vh(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = zIndex(backgroundColor(position(tmp_2, 'fixed'), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), 9);
      Column(tmp_3, null, null, null, ComposableSingletons$SidePanelKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576, 14);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SidePanelInternal$lambda_0($changed));
    }
  }
  function CollapsedSidePanel(onMenuClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(169762053);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClick) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(169762053, $dirty, -1, 'com.example.blogmultiplateform.components.CollapsedSidePanel (SidePanel.kt:118)');
      }
      var tmp = height(fillMaxWidth(Companion_getInstance_1()), get_px(100));
      $composer_0.startReplaceGroup_5hh8aj_k$(-1970349720);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.CollapsedSidePanel.<anonymous>' call
        var value = CollapsedSidePanel$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_2 = backgroundColor(padding(tmp, tmp0_group), Theme_Secondary_getInstance().get_rgb_18ix0c_k$());
      var tmp_3 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplateform.components.CollapsedSidePanel.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1545135800, true, CollapsedSidePanel$lambda_0(onMenuClick), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.CollapsedSidePanel.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_13(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(tmp_2, null, tmp_3, null, tmp0, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(CollapsedSidePanel$lambda_1(onMenuClick, $changed));
    }
  }
  function OverFlowSidePanel(onMenuClosed, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1474204012);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onMenuClosed) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1474204012, $dirty, -1, 'com.example.blogmultiplateform.components.OverFlowSidePanel (SidePanel.kt:140)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = OverFlowSidePanel$lambda_3;
      }
      var composer = $composer_1;
      sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      $composer_0.startReplaceGroup_5hh8aj_k$(2044249336);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>' call
        var value_0 = mutableStateOf(get_percent(-100));
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var translateX$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(2044251347);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>' call
        var value_1 = mutableStateOf(get_percent(0));
        this_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var opacity$delegate = tmp1_group_0;
      $composer_0.startReplaceGroup_5hh8aj_k$(2044254105);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = !!(!!($composer_0.changed_ga7h3f_k$(breakpoint) | $composer_0.changedInstance_s1wkiy_k$(scope)) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_2.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>' call
        var value_2 = OverFlowSidePanel$slambda_0(breakpoint, scope, translateX$delegate, opacity$delegate, onMenuClosed, null);
        this_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp2_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(breakpoint, tmp2_group, $composer_0, 0);
      var tmp_7 = height(fillMaxWidth(Companion_getInstance_1()), get_vh(100));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_8 = backgroundColor(scrollBehavior(overflow(transition(opacity(zIndex(position(tmp_7, 'fixed'), 9), OverFlowSidePanel$lambda_1(opacity$delegate)), [Companion_getInstance_3().of_ap5umw_k$('opacity', get_ms(500), null, null)]), Companion_getInstance_4().get_Auto_wnyn88_k$()), Companion_getInstance_5().get_Smooth_4edjo7_k$()), Theme_HalfBlack_getInstance().get_rgb_18ix0c_k$());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-357968730, true, OverFlowSidePanel$lambda_4(breakpoint, translateX$delegate, scope, onMenuClosed, opacity$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_0 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>.<anonymous>' call
        var value_3 = ComposableLambda$invoke$ref_16(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = it_3;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Box(tmp_8, null, null, tmp0_0, $composer_0, 3072, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(OverFlowSidePanel$lambda_5(onMenuClosed, $changed));
    }
  }
  function NavigationItems(pageContext, $composer, $changed, $default) {
    var pageContext_0 = {_v: pageContext};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-959939741);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && (($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(pageContext_0._v) : $composer_0.changedInstance_s1wkiy_k$(pageContext_0._v)) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          pageContext_0._v = rememberPageContext($composer_0, 0);
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      if (isTraceInProgress()) {
        traceEventStart(-959939741, $dirty, -1, 'com.example.blogmultiplateform.components.NavigationItems (SidePanel.kt:224)');
      }
      var tmp = Companion_getInstance_1();
      $composer_0.startReplaceGroup_5hh8aj_k$(827142623);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.NavigationItems.<anonymous>' call
        var value = NavigationItems$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp0_modifier = color(fontSize(fontFamily(margin(tmp, tmp0_group), ['ROBOTO']), get_px(14)), Theme_HalfWhite_getInstance().get_rgb_18ix0c_k$());
      SpanText('Dashboard', tmp0_modifier, null, null, $composer_0, 6, 12);
      var navigationItems = listOf([to('Home', 'M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H9M19 10L21 12M19 10V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H15M9 21C9.26522 21 9.51957 20.8946 9.70711 20.7071C9.89464 20.5196 10 20.2652 10 20V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21M9 21H15'), to('Create a Post', 'M12 9.52148V12.5215M12 12.5215V15.5215M12 12.5215H15M12 12.5215H9M21 12.5215C21 13.7034 20.7672 14.8737 20.3149 15.9656C19.8626 17.0576 19.1997 18.0497 18.364 18.8854C17.5282 19.7212 16.5361 20.3841 15.4442 20.8364C14.3522 21.2887 13.1819 21.5215 12 21.5215C10.8181 21.5215 9.64778 21.2887 8.55585 20.8364C7.46392 20.3841 6.47177 19.7212 5.63604 18.8854C4.80031 18.0497 4.13738 17.0576 3.68508 15.9656C3.23279 14.8737 3 13.7034 3 12.5215C3 10.1345 3.94821 7.84535 5.63604 6.15752C7.32387 4.4697 9.61305 3.52148 12 3.52148C14.3869 3.52148 16.6761 4.4697 18.364 6.15752C20.0518 7.84535 21 10.1345 21 12.5215Z'), to('My Posts', 'M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01'), to('Log Out', 'M11 16.5215L7 12.5215M7 12.5215L11 8.52148M7 12.5215H21M16 16.5215V17.5215C16 18.3171 15.6839 19.0802 15.1213 19.6428C14.5587 20.2054 13.7956 20.5215 13 20.5215H6C5.20435 20.5215 4.44129 20.2054 3.87868 19.6428C3.31607 19.0802 3 18.3171 3 17.5215V7.52148C3 6.72583 3.31607 5.96277 3.87868 5.40016C4.44129 4.83755 5.20435 4.52148 6 4.52148H13C13.7956 4.52148 14.5587 4.83755 15.1213 5.40016C15.6839 5.96277 16 6.72583 16 7.52148V8.52148')]);
      // Inline function 'kotlin.repeat' call
      var times = navigationItems.get_size_woubt6_k$();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'com.example.blogmultiplateform.components.NavigationItems.<anonymous>' call
          var item = navigationItems.get_c1px32_k$(index);
          var tmp_2 = Companion_getInstance_1();
          $composer_0.startReplaceGroup_5hh8aj_k$(1090629726);
          // Inline function 'androidx.compose.runtime.cache' call
          var this_1 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = this_1.rememberedValue_4dg93v_k$();
          var tmp_3;
          if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.example.blogmultiplateform.components.NavigationItems.<anonymous>.<anonymous>' call
            var value_0 = NavigationItems$lambda_0;
            this_1.updateRememberedValue_l1wh71_k$(value_0);
            tmp_3 = value_0;
          } else {
            tmp_3 = it_0;
          }
          var tmp_4 = tmp_3;
          var tmp0_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp_5 = margin(tmp_2, tmp0_group_0);
          var tmp_6;
          switch (index) {
            case 0:
              tmp_6 = contains(pageContext_0._v.get_route_iy3cio_k$().get_path_wos8ry_k$(), Home_getInstance().get_route_iy3cio_k$());
              break;
            case 1:
              tmp_6 = contains(pageContext_0._v.get_route_iy3cio_k$().get_path_wos8ry_k$(), CreateAPost_getInstance().get_route_iy3cio_k$());
              break;
            case 2:
              tmp_6 = contains(pageContext_0._v.get_route_iy3cio_k$().get_path_wos8ry_k$(), MyPost_getInstance().get_route_iy3cio_k$());
              break;
            default:
              tmp_6 = false;
              break;
          }
          var tmp_7 = item.get_first_irdx8n_k$();
          var tmp_8 = item.get_second_jf7fjx_k$();
          $composer_0.startReplaceGroup_5hh8aj_k$(1090643492);
          // Inline function 'androidx.compose.runtime.cache' call
          var this_2 = $composer_0;
          var invalid = !!(!!($composer_0.changed_kpusro_k$(index) | (($dirty & 14 ^ 6) > 4 && $composer_0.changedInstance_s1wkiy_k$(pageContext_0._v) || ($dirty & 6) === 4)) | $composer_0.changed_ga7h3f_k$(item));
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = this_2.rememberedValue_4dg93v_k$();
          var tmp_9;
          if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.example.blogmultiplateform.components.NavigationItems.<anonymous>.<anonymous>' call
            var value_1 = NavigationItems$lambda_1(index, pageContext_0, item);
            this_2.updateRememberedValue_l1wh71_k$(value_1);
            tmp_9 = value_1;
          } else {
            tmp_9 = it_1;
          }
          var tmp_10 = tmp_9;
          var tmp1_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          NavigationItem(tmp_5, tmp_6, tmp_7, tmp_8, tmp1_group, $composer_0, 0, 0);
        }
         while (inductionVariable < times);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(NavigationItems$lambda_2(pageContext_0, $changed, $default));
    }
  }
  function NavigationItem(modifier, isSelected, title, icon, onClick_0, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1086331591);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(isSelected) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(icon) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick_0) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(1086331591, $dirty, -1, 'com.example.blogmultiplateform.components.NavigationItem (SidePanel.kt:277)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(1689552245);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.NavigationItem.<anonymous>' call
        var value = mutableStateOf(Theme_HalfWhite_getInstance().get_hex_18j4ge_k$());
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var vectorIconColor = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1689554845);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.NavigationItem.<anonymous>' call
        var value_0 = mutableStateOf(Colors_getInstance().get_White_ij46ow_k$());
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var spanTextColor = tmp1_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1689557841);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.NavigationItem.<anonymous>' call
        var value_1 = NavigationItem$slambda_0(vectorIconColor, isSelected, spanTextColor, null);
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(isSelected, tmp2_group, $composer_0, 14 & $dirty >> 3);
      var tmp_5 = cursor(classNames(modifier_0._v, ['sidePanelNavigationHoverEffect']), Companion_getInstance_6().get_Pointer_m64vg4_k$());
      $composer_0.startReplaceGroup_5hh8aj_k$(1689568995);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      var invalid_0 = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.NavigationItem.<anonymous>' call
        var value_2 = NavigationItem$lambda(isSelected, vectorIconColor, spanTextColor);
        this_3.updateRememberedValue_l1wh71_k$(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      var tmp_7 = tmp_6;
      var tmp3_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_8 = onMouseOver(tmp_5, tmp3_group);
      $composer_0.startReplaceGroup_5hh8aj_k$(1689575872);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      var invalid_1 = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = this_4.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_1 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.NavigationItem.<anonymous>' call
        var value_3 = NavigationItem$lambda_0(isSelected, vectorIconColor, spanTextColor);
        this_4.updateRememberedValue_l1wh71_k$(value_3);
        tmp_9 = value_3;
      } else {
        tmp_9 = it_3;
      }
      var tmp_10 = tmp_9;
      var tmp4_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_11 = transition(onMouseOut(tmp_8, tmp4_group), [Companion_getInstance_3().of_7g0y8i_k$(Companion_getInstance_7().get_All_18jx7s_k$(), get_ms(300), null, get_ms(10))]);
      $composer_0.startReplaceGroup_5hh8aj_k$(1689589394);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      var invalid_2 = ($dirty & 57344) === 16384;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = this_5.rememberedValue_4dg93v_k$();
      var tmp_12;
      if (invalid_2 || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.NavigationItem.<anonymous>' call
        var value_4 = NavigationItem$lambda_1(onClick_0);
        this_5.updateRememberedValue_l1wh71_k$(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp5_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_14 = onClick(tmp_11, tmp5_group);
      var tmp_15 = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplateform.components.NavigationItem.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1377225892, true, NavigationItem$lambda_2(icon, vectorIconColor, spanTextColor, title), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_16;
      if (invalid_3 || it_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.NavigationItem.<anonymous>.<anonymous>' call
        var value_5 = ComposableLambda$invoke$ref_17(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_5);
        tmp_16 = value_5;
      } else {
        tmp_16 = it_5;
      }
      var tmp_17 = tmp_16;
      var tmp0 = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(tmp_14, null, tmp_15, null, tmp0, $composer_0, 24576, 10);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp6_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp6_safe_receiver == null)
      null;
    else {
      tmp6_safe_receiver.updateScope_t8jcf_k$(NavigationItem$lambda_3(modifier_0, isSelected, title, icon, onClick_0, $changed, $default));
    }
  }
  function VectorIcon(modifier, pathData, color, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2085898436);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(pathData) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(color) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(2085898436, $dirty, -1, 'com.example.blogmultiplateform.components.VectorIcon (SidePanel.kt:336)');
      }
      var tmp = height(width(id(modifier_0._v, 'svgParent'), get_px(24)), get_px(24));
      $composer_0.startReplaceGroup_5hh8aj_k$(-376056197);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.VectorIcon.<anonymous>' call
        var value = VectorIcon$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_2 = toAttrs(tmp, tmp0_group);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplateform.components.VectorIcon.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1095977166, true, VectorIcon$lambda_0(pathData, color), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.VectorIcon.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_18(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Svg(tmp_2, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(VectorIcon$lambda_1(modifier_0, pathData, color, $changed, $default));
    }
  }
  function LogoImage(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-83882660);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_1();
      }
      if (isTraceInProgress()) {
        traceEventStart(-83882660, $dirty, -1, 'com.example.blogmultiplateform.components.LogoImage (SidePanel.kt:363)');
      }
      var tmp0_modifier = width(modifier_0._v, get_px(80));
      var tmp1_src = '/logo.svg';
      Image(tmp1_src, 'Logo Image', tmp0_modifier, null, null, null, null, $composer_0, 54, 120);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(LogoImage$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SidePanelKt$lambda_1$lambda_uqeby5($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1743089724, $changed, -1, 'com.example.blogmultiplateform.components.ComposableSingletons$SidePanelKt.lambda-1.<anonymous> (SidePanel.kt:107)');
      }
      var tmp = Companion_getInstance_1();
      $composer_0.startReplaceGroup_5hh8aj_k$(-776562492);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.ComposableSingletons$SidePanelKt.lambda-1.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$SidePanelKt$lambda_1$lambda$lambda_h03yiw;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp0_modifier = margin(tmp, tmp0_group);
      var tmp1_src = '/logo.svg';
      Image(tmp1_src, 'Logo Image', tmp0_modifier, null, null, null, null, $composer_0, 54, 120);
      NavigationItems(null, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SidePanelKt$lambda_1$lambda$lambda_h03yiw($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(60));
    return Unit_getInstance();
  }
  function ComposableSingletons$SidePanelKt() {
    ComposableSingletons$SidePanelKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-1743089724, false, ComposableSingletons$SidePanelKt$lambda_1$lambda_uqeby5));
  }
  protoOf(ComposableSingletons$SidePanelKt).get_lambda_1_1fs5qa_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$SidePanelKt_instance;
  function ComposableSingletons$SidePanelKt_getInstance() {
    if (ComposableSingletons$SidePanelKt_instance == null)
      new ComposableSingletons$SidePanelKt();
    return ComposableSingletons$SidePanelKt_instance;
  }
  function OverFlowSidePanel$lambda($translateX$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $translateX$delegate.get_value_j01efc_k$();
  }
  function OverFlowSidePanel$lambda_0($translateX$delegate, _set____db54di) {
    getLocalDelegateReference('translateX', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $translateX$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function OverFlowSidePanel$lambda_1($opacity$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $opacity$delegate.get_value_j01efc_k$();
  }
  function OverFlowSidePanel$lambda_2($opacity$delegate, _set____db54di) {
    getLocalDelegateReference('opacity', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $opacity$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function SidePanel$lambda() {
    return Unit_getInstance();
  }
  function SidePanel$lambda_0($onMenuClick, $$changed, $$default) {
    return function ($composer, $force) {
      SidePanel($onMenuClick._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SidePanelInternal$lambda($this$padding) {
    leftRight($this$padding, get_px(40));
    topBottom($this$padding, get_px(50));
    return Unit_getInstance();
  }
  function SidePanelInternal$lambda_0($$changed) {
    return function ($composer, $force) {
      SidePanelInternal($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CollapsedSidePanel$lambda($this$padding) {
    leftRight($this$padding, get_px(24));
    return Unit_getInstance();
  }
  function CollapsedSidePanel$lambda$lambda($this$margin) {
    $this$margin.right_1eed0y_k$(get_px(24));
    return Unit_getInstance();
  }
  function CollapsedSidePanel$lambda$lambda_0($onMenuClick) {
    return function (it) {
      $onMenuClick();
      return Unit_getInstance();
    };
  }
  function CollapsedSidePanel$lambda_0($onMenuClick) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1545135800, $changed, -1, 'com.example.blogmultiplateform.components.CollapsedSidePanel.<anonymous> (SidePanel.kt:127)');
        }
        var tmp_0 = Companion_getInstance_1();
        $composer_0.startReplaceGroup_5hh8aj_k$(239163203);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.components.CollapsedSidePanel.<anonymous>.<anonymous>.<anonymous>' call
          var value = CollapsedSidePanel$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_3 = cursor(color(margin(tmp_0, tmp0_group), Colors_getInstance().get_White_ij46ow_k$()), Companion_getInstance_6().get_Pointer_m64vg4_k$());
        $composer_0.startReplaceGroup_5hh8aj_k$(239167012);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($onMenuClick);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.components.CollapsedSidePanel.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = CollapsedSidePanel$lambda$lambda_0($onMenuClick);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        FaBars(onClick(tmp_3, tmp1_group), IconSize_XL_getInstance(), $composer_0, 48, 0);
        LogoImage(null, $composer_0, 0, 1);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function CollapsedSidePanel$lambda_1($onMenuClick, $$changed) {
    return function ($composer, $force) {
      CollapsedSidePanel($onMenuClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function OverFlowSidePanel$lambda_3() {
    return EmptyCoroutineContext_getInstance();
  }
  function OverFlowSidePanel$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.$onMenuClosed_1 = $onMenuClosed;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverFlowSidePanel$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OverFlowSidePanel$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverFlowSidePanel$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            OverFlowSidePanel$lambda_0(this.$translateX$delegate_1, get_percent(-100));
            OverFlowSidePanel$lambda_2(this.$opacity$delegate_1, get_percent(0));
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$onMenuClosed_1();
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(OverFlowSidePanel$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new OverFlowSidePanel$slambda$slambda(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(OverFlowSidePanel$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function OverFlowSidePanel$slambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new OverFlowSidePanel$slambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverFlowSidePanel$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    this.$breakpoint_1 = $breakpoint;
    this.$scope_1 = $scope;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    this.$onMenuClosed_1 = $onMenuClosed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverFlowSidePanel$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OverFlowSidePanel$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverFlowSidePanel$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          OverFlowSidePanel$lambda_0(this.$translateX$delegate_1, get_percent(0));
          OverFlowSidePanel$lambda_2(this.$opacity$delegate_1, get_percent(100));
          if (this.$breakpoint_1.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0) {
            launch(this.$scope_1, VOID, VOID, OverFlowSidePanel$slambda$slambda_0(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, null));
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(OverFlowSidePanel$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new OverFlowSidePanel$slambda(this.$breakpoint_1, this.$scope_1, this.$translateX$delegate_1, this.$opacity$delegate_1, this.$onMenuClosed_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(OverFlowSidePanel$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function OverFlowSidePanel$slambda_0($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation) {
    var i = new OverFlowSidePanel$slambda($breakpoint, $scope, $translateX$delegate, $opacity$delegate, $onMenuClosed, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverFlowSidePanel$lambda$lambda($this$padding) {
    leftRight($this$padding, get_px(40));
    topBottom($this$padding, get_px(40));
    return Unit_getInstance();
  }
  function OverFlowSidePanel$lambda$lambda$lambda($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(60));
    $this$margin.top_1wurxj_k$(get_px(24));
    return Unit_getInstance();
  }
  function OverFlowSidePanel$lambda$lambda$lambda$lambda($this$margin) {
    $this$margin.right_1eed0y_k$(get_px(20));
    return Unit_getInstance();
  }
  function OverFlowSidePanel$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    this.$onMenuClosed_1 = $onMenuClosed;
    this.$translateX$delegate_1 = $translateX$delegate;
    this.$opacity$delegate_1 = $opacity$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OverFlowSidePanel$lambda$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(OverFlowSidePanel$lambda$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OverFlowSidePanel$lambda$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            OverFlowSidePanel$lambda_0(this.$translateX$delegate_1, get_percent(-100));
            OverFlowSidePanel$lambda_2(this.$opacity$delegate_1, get_percent(0));
            this.set_state_rjd8d0_k$(1);
            suspendResult = delay(new Long(500, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.$onMenuClosed_1();
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(OverFlowSidePanel$lambda$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new OverFlowSidePanel$lambda$lambda$lambda$lambda$slambda(this.$onMenuClosed_1, this.$translateX$delegate_1, this.$opacity$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(OverFlowSidePanel$lambda$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function OverFlowSidePanel$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation) {
    var i = new OverFlowSidePanel$lambda$lambda$lambda$lambda$slambda($onMenuClosed, $translateX$delegate, $opacity$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OverFlowSidePanel$lambda$lambda$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, OverFlowSidePanel$lambda$lambda$lambda$lambda$slambda_0($onMenuClosed, $translateX$delegate, $opacity$delegate, null));
      return Unit_getInstance();
    };
  }
  function OverFlowSidePanel$lambda$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1746408428, $changed, -1, 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>.<anonymous>.<anonymous> (SidePanel.kt:201)');
        }
        var tmp_0 = Companion_getInstance_1();
        $composer_0.startReplaceGroup_5hh8aj_k$(-260049734);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = OverFlowSidePanel$lambda$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_3 = color(margin(tmp_0, tmp0_group), Colors_getInstance().get_White_ij46ow_k$());
        $composer_0.startReplaceGroup_5hh8aj_k$(-260046408);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.changedInstance_s1wkiy_k$($scope) | $composer_0.changed_ga7h3f_k$($onMenuClosed));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = OverFlowSidePanel$lambda$lambda$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp1_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        FaXmark(onClick(tmp_3, tmp1_group), IconSize_LG_getInstance(), $composer_0, 48, 0);
        LogoImage(null, $composer_0, 0, 1);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function OverFlowSidePanel$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1952947249, $changed, -1, 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>.<anonymous> (SidePanel.kt:194)');
        }
        var tmp_0 = Companion_getInstance_1();
        $composer_0.startReplaceGroup_5hh8aj_k$(1289575103);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = OverFlowSidePanel$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_3 = margin(tmp_0, tmp0_group);
        var tmp_4 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1746408428, true, OverFlowSidePanel$lambda$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_14(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_3, null, tmp_4, null, tmp0, $composer_0, 24576, 10);
        NavigationItems(null, $composer_0, 0, 1);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function OverFlowSidePanel$lambda_4($breakpoint, $translateX$delegate, $scope, $onMenuClosed, $opacity$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-357968730, $changed, -1, 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous> (SidePanel.kt:177)');
        }
        var tmp_0 = transition(translateX(backgroundColor(width(fillMaxHeight(Companion_getInstance_1()), $breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) < 0 ? get_percent(50) : get_percent(25)), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), OverFlowSidePanel$lambda($translateX$delegate)), [Companion_getInstance_3().of_ap5umw_k$('translate', get_ms(500), null, null)]);
        $composer_0.startReplaceGroup_5hh8aj_k$(-831011319);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>.<anonymous>.<anonymous>' call
          var value = OverFlowSidePanel$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_3 = padding(tmp_0, tmp0_group);
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1952947249, true, OverFlowSidePanel$lambda$lambda_0($scope, $onMenuClosed, $translateX$delegate, $opacity$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.components.OverFlowSidePanel.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_15(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = it_0;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_3, null, null, null, tmp0, $composer_0, 24576, 14);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function OverFlowSidePanel$lambda_5($onMenuClosed, $$changed) {
    return function ($composer, $force) {
      OverFlowSidePanel($onMenuClosed, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavigationItems$lambda($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(30));
    return Unit_getInstance();
  }
  function NavigationItems$lambda_0($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(24));
    return Unit_getInstance();
  }
  function NavigationItems$lambda_1($index, $pageContext, $item) {
    return function () {
      var tmp;
      switch ($index) {
        case 0:
          $pageContext._v.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Home_getInstance().get_route_iy3cio_k$());
          tmp = Unit_getInstance();
          break;
        case 1:
          $pageContext._v.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(CreateAPost_getInstance().get_route_iy3cio_k$());
          tmp = Unit_getInstance();
          break;
        case 2:
          $pageContext._v.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(MyPost_getInstance().get_route_iy3cio_k$());
          tmp = Unit_getInstance();
          break;
        case 3:
          logOut();
          $pageContext._v.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Login_getInstance().get_route_iy3cio_k$());
          tmp = Unit_getInstance();
          break;
      }
      println($item.get_first_irdx8n_k$() + ' is Clicked');
      return Unit_getInstance();
    };
  }
  function NavigationItems$lambda_2($pageContext, $$changed, $$default) {
    return function ($composer, $force) {
      NavigationItems($pageContext._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function NavigationItem$slambda($vectorIconColor, $isSelected, $spanTextColor, resultContinuation) {
    this.$vectorIconColor_1 = $vectorIconColor;
    this.$isSelected_1 = $isSelected;
    this.$spanTextColor_1 = $spanTextColor;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NavigationItem$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NavigationItem$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(NavigationItem$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$vectorIconColor_1.set_value_v1vabv_k$(this.$isSelected_1 ? Theme_Primary_getInstance().get_hex_18j4ge_k$() : Theme_HalfWhite_getInstance().get_hex_18j4ge_k$());
          this.$spanTextColor_1.set_value_v1vabv_k$(this.$isSelected_1 ? Theme_Primary_getInstance().get_rgb_18ix0c_k$() : Colors_getInstance().get_White_ij46ow_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(NavigationItem$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new NavigationItem$slambda(this.$vectorIconColor_1, this.$isSelected_1, this.$spanTextColor_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(NavigationItem$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function NavigationItem$slambda_0($vectorIconColor, $isSelected, $spanTextColor, resultContinuation) {
    var i = new NavigationItem$slambda($vectorIconColor, $isSelected, $spanTextColor, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function NavigationItem$lambda($isSelected, $vectorIconColor, $spanTextColor) {
    return function (it) {
      var tmp;
      if (!$isSelected) {
        $vectorIconColor.set_value_v1vabv_k$(Theme_Primary_getInstance().get_hex_18j4ge_k$());
        $spanTextColor.set_value_v1vabv_k$(Theme_Primary_getInstance().get_rgb_18ix0c_k$());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function NavigationItem$lambda_0($isSelected, $vectorIconColor, $spanTextColor) {
    return function (it) {
      var tmp;
      if (!$isSelected) {
        $vectorIconColor.set_value_v1vabv_k$(Theme_HalfWhite_getInstance().get_hex_18j4ge_k$());
        $spanTextColor.set_value_v1vabv_k$(Colors_getInstance().get_White_ij46ow_k$());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function NavigationItem$lambda_1($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function NavigationItem$lambda_2($icon, $vectorIconColor, $spanTextColor, $title) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1377225892, $changed, -1, 'com.example.blogmultiplateform.components.NavigationItem.<anonymous> (SidePanel.kt:314)');
        }
        VectorIcon(margin_0(Companion_getInstance_1(), VOID, get_px(10)), $icon, $vectorIconColor.get_value_j01efc_k$(), $composer_0, 0, 0);
        var tmp0_modifier = color(fontSize(fontFamily(Companion_getInstance_1(), ['ROBOTO']), get_px(16)), $spanTextColor.get_value_j01efc_k$());
        SpanText($title, tmp0_modifier, null, null, $composer_0, 0, 12);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function NavigationItem$lambda_3($modifier, $isSelected, $title, $icon, $onClick, $$changed, $$default) {
    return function ($composer, $force) {
      NavigationItem($modifier._v, $isSelected, $title, $icon, $onClick, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function VectorIcon$lambda($this$toAttrs) {
    $this$toAttrs.attr_w68641_k$('viewBox', '0 0 24 24');
    $this$toAttrs.attr_w68641_k$('fill', 'none');
    return Unit_getInstance();
  }
  function VectorIcon$lambda$lambda($pathData, $color) {
    return function ($this$toAttrs) {
      $this$toAttrs.attr_w68641_k$('d', $pathData);
      $this$toAttrs.attr_w68641_k$('stroke', $color);
      $this$toAttrs.attr_w68641_k$('stroke-width', '2');
      $this$toAttrs.attr_w68641_k$('stroke-linecap', 'round');
      $this$toAttrs.attr_w68641_k$('stroke-linejoin', 'round');
      return Unit_getInstance();
    };
  }
  function VectorIcon$lambda_0($pathData, $color) {
    return function ($this$Svg, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1095977166, $changed, -1, 'com.example.blogmultiplateform.components.VectorIcon.<anonymous> (SidePanel.kt:347)');
      }
      var tmp = id(Companion_getInstance_1(), 'vectorIcon');
      $composer_0.startReplaceGroup_5hh8aj_k$(-203244491);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changed_ga7h3f_k$($pathData) | $composer_0.changed_ga7h3f_k$($color));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.components.VectorIcon.<anonymous>.<anonymous>.<anonymous>' call
        var value = VectorIcon$lambda$lambda($pathData, $color);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Path($this$Svg, toAttrs(tmp, tmp0_group), $composer_0, 14 & $changed);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function VectorIcon$lambda_1($modifier, $pathData, $color, $$changed, $$default) {
    return function ($composer, $force) {
      VectorIcon($modifier._v, $pathData, $color, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function LogoImage$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LogoImage($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var com_example_blogmultiplateform_models_Joke_$serializer$stable;
  var com_example_blogmultiplateform_models_Joke$stable;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_12() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplateform.models.Joke', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('joke', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_jx3m4q_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.joke_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_jx3m4q_k$(encoder, value instanceof Joke ? value : THROW_CCE());
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return Joke_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Joke_init_$Init$(seen0, id, joke, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance().descriptor_1);
    }
    $this.id_1 = id;
    $this.joke_1 = joke;
    return $this;
  }
  function Joke_init_$Create$(seen0, id, joke, serializationConstructorMarker) {
    return Joke_init_$Init$(seen0, id, joke, serializationConstructorMarker, objectCreate(protoOf(Joke)));
  }
  function Joke(id, joke) {
    Companion_getInstance_12();
    this.id_1 = id;
    this.joke_1 = joke;
  }
  protoOf(Joke).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Joke).get_joke_woop0o_k$ = function () {
    return this.joke_1;
  };
  protoOf(Joke).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(Joke).component2_7eebsb_k$ = function () {
    return this.joke_1;
  };
  protoOf(Joke).copy_xhhsuv_k$ = function (id, joke) {
    return new Joke(id, joke);
  };
  protoOf(Joke).copy$default_vcjhrk_k$ = function (id, joke, $super) {
    id = id === VOID ? this.id_1 : id;
    joke = joke === VOID ? this.joke_1 : joke;
    return $super === VOID ? this.copy_xhhsuv_k$(id, joke) : $super.copy_xhhsuv_k$.call(this, id, joke);
  };
  protoOf(Joke).toString = function () {
    return 'Joke(id=' + this.id_1 + ', joke=' + this.joke_1 + ')';
  };
  protoOf(Joke).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + getStringHashCode(this.joke_1) | 0;
    return result;
  };
  protoOf(Joke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Joke))
      return false;
    var tmp0_other_with_cast = other instanceof Joke ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.joke_1 === tmp0_other_with_cast.joke_1))
      return false;
    return true;
  };
  function com_example_blogmultiplateform_models_Joke_$serializer$stableprop_getter() {
    return com_example_blogmultiplateform_models_Joke_$serializer$stable;
  }
  function com_example_blogmultiplateform_models_Joke$stableprop_getter() {
    return com_example_blogmultiplateform_models_Joke$stable;
  }
  var Theme_Primary_instance;
  var Theme_Secondary_instance;
  var Theme_LightGray_instance;
  var Theme_HalfWhite_instance;
  var Theme_HalfBlack_instance;
  function values() {
    return [Theme_Primary_getInstance(), Theme_Secondary_getInstance(), Theme_LightGray_getInstance(), Theme_HalfWhite_getInstance(), Theme_HalfBlack_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Primary':
        return Theme_Primary_getInstance();
      case 'Secondary':
        return Theme_Secondary_getInstance();
      case 'LightGray':
        return Theme_LightGray_getInstance();
      case 'HalfWhite':
        return Theme_HalfWhite_getInstance();
      case 'HalfBlack':
        return Theme_HalfBlack_getInstance();
      default:
        Theme_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_getInstance();
    Theme_entriesInitialized = true;
    Theme_Primary_instance = new Theme('Primary', 0, '#00A2FF', rgb(0, 162, 255));
    Theme_Secondary_instance = new Theme('Secondary', 1, '#001019', rgb(0, 16, 25));
    Theme_LightGray_instance = new Theme('LightGray', 2, '#FAFAFA', rgb(250, 250, 250));
    Theme_HalfWhite_instance = new Theme('HalfWhite', 3, '#FFFFFF', rgba(255, 255, 255, 0.5));
    Theme_HalfBlack_instance = new Theme('HalfBlack', 4, '#000000', rgba(0, 0, 0, 0.5));
  }
  var $ENTRIES;
  function Theme(name, ordinal, hex, rgb) {
    Enum.call(this, name, ordinal);
    this.hex_1 = hex;
    this.rgb_1 = rgb;
  }
  protoOf(Theme).get_hex_18j4ge_k$ = function () {
    return this.hex_1;
  };
  protoOf(Theme).get_rgb_18ix0c_k$ = function () {
    return this.rgb_1;
  };
  function Theme_Primary_getInstance() {
    Theme_initEntries();
    return Theme_Primary_instance;
  }
  function Theme_Secondary_getInstance() {
    Theme_initEntries();
    return Theme_Secondary_instance;
  }
  function Theme_LightGray_getInstance() {
    Theme_initEntries();
    return Theme_LightGray_instance;
  }
  function Theme_HalfWhite_getInstance() {
    Theme_initEntries();
    return Theme_HalfWhite_instance;
  }
  function Theme_HalfBlack_getInstance() {
    Theme_initEntries();
    return Theme_HalfBlack_instance;
  }
  var com_example_blogmultiplateform_models_User_$serializer$stable;
  var com_example_blogmultiplateform_models_User$stable;
  var com_example_blogmultiplateform_models_UserWithoutPassword_$serializer$stable;
  var com_example_blogmultiplateform_models_UserWithoutPassword$stable;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_13() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplateform.models.User', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('_id', true);
    tmp0_serialDesc.addElement_5pzumi_k$('userName', true);
    tmp0_serialDesc.addElement_5pzumi_k$('password', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).serialize_7v5x2u_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.id_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.id_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.userName_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.userName_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.password_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 2, value.password_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_7v5x2u_k$(encoder, value instanceof User ? value : THROW_CCE());
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function User_init_$Init$(seen0, id, userName, password, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.id_1 = '';
    else
      $this.id_1 = id;
    if (0 === (seen0 & 2))
      $this.userName_1 = '';
    else
      $this.userName_1 = userName;
    if (0 === (seen0 & 4))
      $this.password_1 = '';
    else
      $this.password_1 = password;
    return $this;
  }
  function User_init_$Create$(seen0, id, userName, password, serializationConstructorMarker) {
    return User_init_$Init$(seen0, id, userName, password, serializationConstructorMarker, objectCreate(protoOf(User)));
  }
  function User(id, userName, password) {
    Companion_getInstance_13();
    id = id === VOID ? '' : id;
    userName = userName === VOID ? '' : userName;
    password = password === VOID ? '' : password;
    this.id_1 = id;
    this.userName_1 = userName;
    this.password_1 = password;
  }
  protoOf(User).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(User).get_userName_ytepxb_k$ = function () {
    return this.userName_1;
  };
  protoOf(User).get_password_bodifw_k$ = function () {
    return this.password_1;
  };
  protoOf(User).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(User).component2_7eebsb_k$ = function () {
    return this.userName_1;
  };
  protoOf(User).component3_7eebsa_k$ = function () {
    return this.password_1;
  };
  protoOf(User).copy_nc7k0r_k$ = function (id, userName, password) {
    return new User(id, userName, password);
  };
  protoOf(User).copy$default_so6tt3_k$ = function (id, userName, password, $super) {
    id = id === VOID ? this.id_1 : id;
    userName = userName === VOID ? this.userName_1 : userName;
    password = password === VOID ? this.password_1 : password;
    return $super === VOID ? this.copy_nc7k0r_k$(id, userName, password) : $super.copy_nc7k0r_k$.call(this, id, userName, password);
  };
  protoOf(User).toString = function () {
    return 'User(id=' + this.id_1 + ', userName=' + this.userName_1 + ', password=' + this.password_1 + ')';
  };
  protoOf(User).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.userName_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.password_1) | 0;
    return result;
  };
  protoOf(User).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof User))
      return false;
    var tmp0_other_with_cast = other instanceof User ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.userName_1 === tmp0_other_with_cast.userName_1))
      return false;
    if (!(this.password_1 === tmp0_other_with_cast.password_1))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.example.blogmultiplateform.models.UserWithoutPassword', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('_id', true);
    tmp0_serialDesc.addElement_5pzumi_k$('userName', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).serialize_p618g7_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.id_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.id_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.userName_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.userName_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_1).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_p618g7_k$(encoder, value instanceof UserWithoutPassword ? value : THROW_CCE());
  };
  protoOf($serializer_1).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return UserWithoutPassword_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_1).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_1).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function UserWithoutPassword_init_$Init$(seen0, id, userName, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.id_1 = '';
    else
      $this.id_1 = id;
    if (0 === (seen0 & 2))
      $this.userName_1 = '';
    else
      $this.userName_1 = userName;
    return $this;
  }
  function UserWithoutPassword_init_$Create$(seen0, id, userName, serializationConstructorMarker) {
    return UserWithoutPassword_init_$Init$(seen0, id, userName, serializationConstructorMarker, objectCreate(protoOf(UserWithoutPassword)));
  }
  function UserWithoutPassword(id, userName) {
    Companion_getInstance_14();
    id = id === VOID ? '' : id;
    userName = userName === VOID ? '' : userName;
    this.id_1 = id;
    this.userName_1 = userName;
  }
  protoOf(UserWithoutPassword).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(UserWithoutPassword).get_userName_ytepxb_k$ = function () {
    return this.userName_1;
  };
  protoOf(UserWithoutPassword).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(UserWithoutPassword).component2_7eebsb_k$ = function () {
    return this.userName_1;
  };
  protoOf(UserWithoutPassword).copy_plwnsl_k$ = function (id, userName) {
    return new UserWithoutPassword(id, userName);
  };
  protoOf(UserWithoutPassword).copy$default_lsexg3_k$ = function (id, userName, $super) {
    id = id === VOID ? this.id_1 : id;
    userName = userName === VOID ? this.userName_1 : userName;
    return $super === VOID ? this.copy_plwnsl_k$(id, userName) : $super.copy_plwnsl_k$.call(this, id, userName);
  };
  protoOf(UserWithoutPassword).toString = function () {
    return 'UserWithoutPassword(id=' + this.id_1 + ', userName=' + this.userName_1 + ')';
  };
  protoOf(UserWithoutPassword).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.userName_1) | 0;
    return result;
  };
  protoOf(UserWithoutPassword).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UserWithoutPassword))
      return false;
    var tmp0_other_with_cast = other instanceof UserWithoutPassword ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.userName_1 === tmp0_other_with_cast.userName_1))
      return false;
    return true;
  };
  function com_example_blogmultiplateform_models_User_$serializer$stableprop_getter() {
    return com_example_blogmultiplateform_models_User_$serializer$stable;
  }
  function com_example_blogmultiplateform_models_User$stableprop_getter() {
    return com_example_blogmultiplateform_models_User$stable;
  }
  function com_example_blogmultiplateform_models_UserWithoutPassword_$serializer$stableprop_getter() {
    return com_example_blogmultiplateform_models_UserWithoutPassword_$serializer$stable;
  }
  function com_example_blogmultiplateform_models_UserWithoutPassword$stableprop_getter() {
    return com_example_blogmultiplateform_models_UserWithoutPassword$stable;
  }
  var com_example_blogmultiplateform_navigation_Screen_Home$stable;
  var com_example_blogmultiplateform_navigation_Screen_Login$stable;
  var com_example_blogmultiplateform_navigation_Screen_CreateAPost$stable;
  var com_example_blogmultiplateform_navigation_Screen_MyPost$stable;
  var com_example_blogmultiplateform_navigation_Screen$stable;
  function Home() {
    Home_instance = this;
    Screen.call(this, 'home');
  }
  protoOf(Home).toString = function () {
    return 'Home';
  };
  protoOf(Home).hashCode = function () {
    return -290863103;
  };
  protoOf(Home).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Home))
      return false;
    other instanceof Home || THROW_CCE();
    return true;
  };
  var Home_instance;
  function Home_getInstance() {
    if (Home_instance == null)
      new Home();
    return Home_instance;
  }
  function Login() {
    Login_instance = this;
    Screen.call(this, 'login');
  }
  protoOf(Login).toString = function () {
    return 'Login';
  };
  protoOf(Login).hashCode = function () {
    return -423133049;
  };
  protoOf(Login).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Login))
      return false;
    other instanceof Login || THROW_CCE();
    return true;
  };
  var Login_instance;
  function Login_getInstance() {
    if (Login_instance == null)
      new Login();
    return Login_instance;
  }
  function CreateAPost() {
    CreateAPost_instance = this;
    Screen.call(this, 'create');
  }
  protoOf(CreateAPost).toString = function () {
    return 'CreateAPost';
  };
  protoOf(CreateAPost).hashCode = function () {
    return -1622580317;
  };
  protoOf(CreateAPost).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CreateAPost))
      return false;
    other instanceof CreateAPost || THROW_CCE();
    return true;
  };
  var CreateAPost_instance;
  function CreateAPost_getInstance() {
    if (CreateAPost_instance == null)
      new CreateAPost();
    return CreateAPost_instance;
  }
  function MyPost() {
    MyPost_instance = this;
    Screen.call(this, 'posts');
  }
  protoOf(MyPost).toString = function () {
    return 'MyPost';
  };
  protoOf(MyPost).hashCode = function () {
    return -195037426;
  };
  protoOf(MyPost).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MyPost))
      return false;
    other instanceof MyPost || THROW_CCE();
    return true;
  };
  var MyPost_instance;
  function MyPost_getInstance() {
    if (MyPost_instance == null)
      new MyPost();
    return MyPost_instance;
  }
  function Screen(route) {
    this.route_1 = route;
  }
  protoOf(Screen).get_route_iy3cio_k$ = function () {
    return this.route_1;
  };
  function com_example_blogmultiplateform_navigation_Screen_Home$stableprop_getter() {
    return com_example_blogmultiplateform_navigation_Screen_Home$stable;
  }
  function com_example_blogmultiplateform_navigation_Screen_Login$stableprop_getter() {
    return com_example_blogmultiplateform_navigation_Screen_Login$stable;
  }
  function com_example_blogmultiplateform_navigation_Screen_CreateAPost$stableprop_getter() {
    return com_example_blogmultiplateform_navigation_Screen_CreateAPost$stable;
  }
  function com_example_blogmultiplateform_navigation_Screen_MyPost$stableprop_getter() {
    return com_example_blogmultiplateform_navigation_Screen_MyPost$stable;
  }
  function com_example_blogmultiplateform_navigation_Screen$stableprop_getter() {
    return com_example_blogmultiplateform_navigation_Screen$stable;
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(445187680);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(445187680, $changed, -1, 'com.example.blogmultiplateform.pages.HomePage (Index.kt:14)');
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-78155635);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.pages.HomePage.<anonymous>' call
        var value = HomePage$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var worker = rememberWorker(tmp0_group, $composer_0, 6);
      $composer_0.startReplaceGroup_5hh8aj_k$(-78152924);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = $composer_0.changedInstance_s1wkiy_k$(worker);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.pages.HomePage.<anonymous>' call
        var value_0 = HomePage$slambda_0(worker, null);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(Unit_getInstance(), tmp1_group, $composer_0, 6);
      var tmp_3 = fillMaxSize(Companion_getInstance_1());
      var tmp_4 = Center_getInstance();
      Box(tmp_3, tmp_4, null, ComposableSingletons$IndexKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(HomePage$lambda_0($changed));
    }
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1654542182, $changed, -1, 'com.example.blogmultiplateform.pages.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:22)');
      }
      Text('THIS PAGE INTENTIONALLY LEFT BLANK', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(1654542182, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
  }
  protoOf(ComposableSingletons$IndexKt).get_lambda_1_1fs5qa_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$lambda() {
    return new EchoWorker(HomePage$lambda$lambda);
  }
  function HomePage$lambda$lambda($this$EchoWorker, output) {
    console.log('Echoed: ' + output);
    return Unit_getInstance();
  }
  function HomePage$slambda($worker, resultContinuation) {
    this.$worker_1 = $worker;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HomePage$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(HomePage$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HomePage$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$worker_1.postInput$default_21bd8p_k$('Hello, worker!');
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HomePage$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new HomePage$slambda(this.$worker_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(HomePage$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function HomePage$slambda_0($worker, resultContinuation) {
    var i = new HomePage$slambda($worker, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HomePage$lambda_0($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CreatePostPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1481571821);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1481571821, $changed, -1, 'com.example.blogmultiplateform.pages.admin.CreatePostPage (CreatePostPage.kt:14)');
      }
      CreatePostScreen($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(CreatePostPage$lambda($changed));
    }
  }
  function CreatePostScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1236727242);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1236727242, $changed, -1, 'com.example.blogmultiplateform.pages.admin.CreatePostScreen (CreatePostPage.kt:23)');
      }
      AdminPageLayout(ComposableSingletons$CreatePostPageKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(CreatePostScreen$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CreatePostPageKt$lambda_1$lambda_sb2ykh($this$AdminPageLayout, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-861256483, $changed, -1, 'com.example.blogmultiplateform.pages.admin.ComposableSingletons$CreatePostPageKt.lambda-1.<anonymous> (CreatePostPage.kt:26)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CreatePostPageKt() {
    ComposableSingletons$CreatePostPageKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-861256483, false, ComposableSingletons$CreatePostPageKt$lambda_1$lambda_sb2ykh));
  }
  protoOf(ComposableSingletons$CreatePostPageKt).get_lambda_1_1fs5qa_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$CreatePostPageKt_instance;
  function ComposableSingletons$CreatePostPageKt_getInstance() {
    if (ComposableSingletons$CreatePostPageKt_instance == null)
      new ComposableSingletons$CreatePostPageKt();
    return ComposableSingletons$CreatePostPageKt_instance;
  }
  function CreatePostPage$lambda($$changed) {
    return function ($composer, $force) {
      CreatePostPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CreatePostScreen$lambda($$changed) {
    return function ($composer, $force) {
      CreatePostScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomePage_0($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(101376013);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(101376013, $changed, -1, 'com.example.blogmultiplateform.pages.admin.HomePage (HomePage.kt:61)');
      }
      HomeScreen($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomePage$lambda_1($changed));
    }
  }
  function HomeScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1983458070);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1983458070, $changed, -1, 'com.example.blogmultiplateform.pages.admin.HomeScreen (HomePage.kt:67)');
      }
      AdminPageLayout(ComposableSingletons$HomePageKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomeScreen$lambda($changed));
    }
  }
  function HomeContentOld(joke, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-939471923);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(joke) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-939471923, $dirty, -1, 'com.example.blogmultiplateform.pages.admin.HomeContentOld (HomePage.kt:91)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var tmp = fillMaxSize(Companion_getInstance_1());
      $composer_0.startReplaceGroup_5hh8aj_k$(333068151);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(breakpoint);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContentOld.<anonymous>' call
        var value = HomeContentOld$lambda(breakpoint);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_2 = padding(tmp, tmp0_group);
      var tmp_3 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContentOld.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1447565049, true, HomeContentOld$lambda_0(joke), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContentOld.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_25(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_2, tmp_3, null, tmp0, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(HomeContentOld$lambda_1(joke, $changed));
    }
  }
  function HomeContent(_this__u8e3s4, joke, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-158853771);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(joke) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-158853771, $dirty, -1, 'com.example.blogmultiplateform.pages.admin.HomeContent (HomePage.kt:155)');
      }
      var tmp;
      if (joke == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp_0 = _this__u8e3s4.align_s6rwef_k$(Companion_getInstance_1(), Center_getInstance());
        var tmp_1 = Center_getInstance_0();
        var tmp_2 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContent.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1900265755, true, HomeContent$lambda(joke), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContent.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_26(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24576, 8);
        tmp = Unit_getInstance();
      }
      if (tmp == null) {
        println('Loading....');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(HomeContent$lambda_0(_this__u8e3s4, joke, $changed));
    }
  }
  function AddButton(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2096302803);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2096302803, $dirty, -1, 'com.example.blogmultiplateform.pages.admin.AddButton (HomePage.kt:213)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var context = rememberPageContext($composer_0, 0);
      var tmp = Companion_getInstance_1();
      $composer_0.startReplaceGroup_5hh8aj_k$(-1632439056);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.changed_ga7h3f_k$(breakpoint);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.pages.admin.AddButton.<anonymous>' call
        var value = AddButton$lambda(breakpoint);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_2 = pointerEvents(cursor(borderRadius(backgroundColor(size(_this__u8e3s4.align_s6rwef_k$(margin(tmp, tmp0_group), BottomEnd_getInstance()), breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(80) : get_px(50)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), get_px(14)), Companion_getInstance_6().get_Pointer_m64vg4_k$()), Companion_getInstance_8().get_Auto_wnyn88_k$());
      $composer_0.startReplaceGroup_5hh8aj_k$(-1632424477);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid_0 = $composer_0.changedInstance_s1wkiy_k$(context);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.pages.admin.AddButton.<anonymous>' call
        var value_0 = AddButton$lambda_0(context);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_5 = onClick(tmp_2, tmp1_group);
      var tmp_6 = Center_getInstance();
      Box(tmp_5, tmp_6, null, ComposableSingletons$HomePageKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(AddButton$lambda_1(_this__u8e3s4, $changed));
    }
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HomePageKt$lambda_1$lambda_z4100u($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Box) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-390227069, $dirty, -1, 'com.example.blogmultiplateform.pages.admin.ComposableSingletons$HomePageKt.lambda-1.<anonymous> (HomePage.kt:84)');
      }
      AddButton($this$Box, $composer_0, 14 & $dirty);
      HomeContent($this$Box, new Joke(2, 'Some random joke....'), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HomePageKt$lambda_2$lambda_6aeiyn($this$AdminPageLayout, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1635653507, $changed, -1, 'com.example.blogmultiplateform.pages.admin.ComposableSingletons$HomePageKt.lambda-2.<anonymous> (HomePage.kt:69)');
      }
      var breakpoint = rememberBreakpoint($composer_0, 0);
      var context = rememberPageContext($composer_0, 0);
      var tmp = fillMaxWidth(height(Companion_getInstance_1(), get_vh(100)));
      $composer_0.startReplaceGroup_5hh8aj_k$(-385589858);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$(breakpoint);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.pages.admin.ComposableSingletons$HomePageKt.lambda-2.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$HomePageKt$lambda_2$lambda$lambda_i3c1u2(breakpoint);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_2 = maxWidth(padding(tmp, tmp0_group), get_px(1920));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = pointerEvents(position(tmp_2, 'fixed'), Companion_getInstance_8().get_None_wo6tgh_k$());
      Box(tmp_3, null, null, ComposableSingletons$HomePageKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HomePageKt$lambda_2$lambda$lambda_i3c1u2($breakpoint) {
    return function ($this$padding) {
      $this$padding.left_pqi2av_k$($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(250) : get_px(0));
      $this$padding.top_1wurxj_k$($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(0) : get_px(100));
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HomePageKt$lambda_3$lambda_mj7y3k($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1690571367, $changed, -1, 'com.example.blogmultiplateform.pages.admin.ComposableSingletons$HomePageKt.lambda-3.<anonymous> (HomePage.kt:233)');
      }
      var tmp0_modifier = color(size(Companion_getInstance_1(), get_px(24)), Colors_getInstance().get_White_ij46ow_k$());
      var tmp1_src = '/ic_create_plus.svg';
      Image(tmp1_src, 'Logo Image', tmp0_modifier, null, null, null, null, $composer_0, 54, 120);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HomePageKt() {
    ComposableSingletons$HomePageKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(-390227069, false, ComposableSingletons$HomePageKt$lambda_1$lambda_z4100u));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-1635653507, false, ComposableSingletons$HomePageKt$lambda_2$lambda_6aeiyn));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1690571367, false, ComposableSingletons$HomePageKt$lambda_3$lambda_mj7y3k));
  }
  protoOf(ComposableSingletons$HomePageKt).get_lambda_1_1fs5qa_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$HomePageKt).get_lambda_2_3hnh9d_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$HomePageKt).get_lambda_3_5jissg_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$HomePageKt_instance;
  function ComposableSingletons$HomePageKt_getInstance() {
    if (ComposableSingletons$HomePageKt_instance == null)
      new ComposableSingletons$HomePageKt();
    return ComposableSingletons$HomePageKt_instance;
  }
  function HomePage$lambda_1($$changed) {
    return function ($composer, $force) {
      HomePage_0($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomeScreen$lambda($$changed) {
    return function ($composer, $force) {
      HomeScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomeContentOld$lambda($breakpoint) {
    return function ($this$padding) {
      $this$padding.left_pqi2av_k$($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(250) : get_px(0));
      return Unit_getInstance();
    };
  }
  function HomeContentOld$lambda$lambda($this$padding) {
    topBottom($this$padding, get_px(50));
    return Unit_getInstance();
  }
  function HomeContentOld$lambda$lambda$lambda($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(50));
    return Unit_getInstance();
  }
  function HomeContentOld$lambda$lambda$lambda_0($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(14));
    return Unit_getInstance();
  }
  function HomeContentOld$lambda$lambda$lambda_1($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(14));
    return Unit_getInstance();
  }
  function HomeContentOld$lambda$lambda_0($joke) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(719446647, $changed, -1, 'com.example.blogmultiplateform.pages.admin.HomeContentOld.<anonymous>.<anonymous>.<anonymous> (HomePage.kt:105)');
        }
        $composer_0.startReplaceGroup_5hh8aj_k$(272000951);
        if (!($joke.get_id_kntnx8_k$() === -1)) {
          var tmp_0 = size(Companion_getInstance_1(), get_px(150));
          $composer_0.startReplaceGroup_5hh8aj_k$(272005182);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_1;
          if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContentOld.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = HomeContentOld$lambda$lambda$lambda;
            $composer_0.updateRememberedValue_l1wh71_k$(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp0_modifier = margin(tmp_0, tmp0_group);
          var tmp1_src = '/laugh.png';
          Image(tmp1_src, 'Laugh Image', tmp0_modifier, null, null, null, null, $composer_0, 54, 120);
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        if (contains($joke.get_joke_woop0o_k$(), 'Q:')) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-157539712);
          var tmp_3 = split($joke.get_joke_woop0o_k$(), [':']).get_c1px32_k$(1);
          var tmp_4 = Companion_getInstance_1();
          $composer_0.startReplaceGroup_5hh8aj_k$(272017118);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_5;
          if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContentOld.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = HomeContentOld$lambda$lambda$lambda_0;
            $composer_0.updateRememberedValue_l1wh71_k$(value_0);
            tmp_5 = value_0;
          } else {
            tmp_5 = it_0;
          }
          var tmp_6 = tmp_5;
          var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp_7 = fontWeight(fontFamily(fontSize(color(textAlign(fillMaxWidth(margin(tmp_4, tmp1_group), get_percent(60)), Companion_getInstance_9().get_Center_3arb0i_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), get_px(28)), ['ROBOTO']), Companion_getInstance_10().get_Bold_wnz5ke_k$());
          SpanText(tmp_3, tmp_7, null, null, $composer_0, 0, 12);
          var tmp_8 = last(split($joke.get_joke_woop0o_k$(), [':']));
          var tmp_9 = fontWeight(fontFamily(fontSize(color(textAlign(fillMaxWidth(Companion_getInstance_1(), get_percent(60)), Companion_getInstance_9().get_Center_3arb0i_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), get_px(20)), ['ROBOTO']), Companion_getInstance_10().get_Normal_22avww_k$());
          SpanText(tmp_8, tmp_9, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-156543093);
          var tmp_10 = split($joke.get_joke_woop0o_k$(), [':']).get_c1px32_k$(1);
          var tmp_11 = Companion_getInstance_1();
          $composer_0.startReplaceGroup_5hh8aj_k$(272049726);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_12;
          if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContentOld.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_1 = HomeContentOld$lambda$lambda$lambda_1;
            $composer_0.updateRememberedValue_l1wh71_k$(value_1);
            tmp_12 = value_1;
          } else {
            tmp_12 = it_1;
          }
          var tmp_13 = tmp_12;
          var tmp2_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp_14 = fontWeight(fontFamily(fontSize(color(textAlign(fillMaxWidth(margin(tmp_11, tmp2_group), get_percent(60)), Companion_getInstance_9().get_Center_3arb0i_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), get_px(28)), ['ROBOTO']), Companion_getInstance_10().get_Bold_wnz5ke_k$());
          SpanText(tmp_10, tmp_14, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        var tmp_15;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_15 = Unit_getInstance();
        }
        tmp = tmp_15;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function HomeContentOld$lambda_0($joke) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1447565049, $changed, -1, 'com.example.blogmultiplateform.pages.admin.HomeContentOld.<anonymous> (HomePage.kt:98)');
        }
        var tmp_0;
        if ($joke == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_1 = fillMaxSize(Companion_getInstance_1());
          $composer_0.startReplaceGroup_5hh8aj_k$(62423874);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_2;
          if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContentOld.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = HomeContentOld$lambda$lambda;
            $composer_0.updateRememberedValue_l1wh71_k$(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp_4 = padding(tmp_1, tmp0_group);
          var tmp_5 = Center_getInstance_0();
          var tmp_6 = CenterHorizontally_getInstance();
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContentOld.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var dispatchReceiver = rememberComposableLambda(719446647, true, HomeContentOld$lambda$lambda_0($joke), $composer_0, 54);
          // Inline function 'androidx.compose.runtime.remember' call
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_1.rememberedValue_4dg93v_k$();
          var tmp_7;
          if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContentOld.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = ComposableLambda$invoke$ref_24(dispatchReceiver);
            $composer_1.updateRememberedValue_l1wh71_k$(value_0);
            tmp_7 = value_0;
          } else {
            tmp_7 = it_0;
          }
          var tmp_8 = tmp_7;
          var tmp0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
          sourceInformationMarkerEnd($composer_1);
          Column(tmp_4, tmp_5, tmp_6, null, tmp0, $composer_0, 24576, 8);
          tmp_0 = Unit_getInstance();
        }
        if (tmp_0 == null) {
          println('Loading....');
        }
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_getInstance();
        }
        tmp = tmp_9;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function HomeContentOld$lambda_1($joke, $$changed) {
    return function ($composer, $force) {
      HomeContentOld($joke, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function HomeContent$lambda$lambda($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(50));
    return Unit_getInstance();
  }
  function HomeContent$lambda$lambda_0($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(14));
    return Unit_getInstance();
  }
  function HomeContent$lambda$lambda_1($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(14));
    return Unit_getInstance();
  }
  function HomeContent$lambda($joke) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1900265755, $changed, -1, 'com.example.blogmultiplateform.pages.admin.HomeContent.<anonymous>.<anonymous> (HomePage.kt:163)');
        }
        $composer_0.startReplaceGroup_5hh8aj_k$(-725337501);
        if (!($joke.get_id_kntnx8_k$() === -1)) {
          var tmp_0 = size(Companion_getInstance_1(), get_px(150));
          $composer_0.startReplaceGroup_5hh8aj_k$(-725333626);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_1;
          if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = HomeContent$lambda$lambda;
            $composer_0.updateRememberedValue_l1wh71_k$(value);
            tmp_1 = value;
          } else {
            tmp_1 = it;
          }
          var tmp_2 = tmp_1;
          var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp0_modifier = margin(tmp_0, tmp0_group);
          var tmp1_src = '/laugh.png';
          Image(tmp1_src, 'Laugh Image', tmp0_modifier, null, null, null, null, $composer_0, 54, 120);
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        if (contains($joke.get_joke_woop0o_k$(), 'Q:')) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1010294101);
          var tmp_3 = split($joke.get_joke_woop0o_k$(), [':']).get_c1px32_k$(1);
          var tmp_4 = Companion_getInstance_1();
          $composer_0.startReplaceGroup_5hh8aj_k$(-725322842);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_5;
          if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_0 = HomeContent$lambda$lambda_0;
            $composer_0.updateRememberedValue_l1wh71_k$(value_0);
            tmp_5 = value_0;
          } else {
            tmp_5 = it_0;
          }
          var tmp_6 = tmp_5;
          var tmp1_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp_7 = fontWeight(fontFamily(fontSize(color(textAlign(fillMaxWidth(margin(tmp_4, tmp1_group), get_percent(60)), Companion_getInstance_9().get_Center_3arb0i_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), get_px(28)), ['ROBOTO']), Companion_getInstance_10().get_Bold_wnz5ke_k$());
          SpanText(tmp_3, tmp_7, null, null, $composer_0, 0, 12);
          var tmp_8 = last(split($joke.get_joke_woop0o_k$(), [':']));
          var tmp_9 = fontWeight(fontFamily(fontSize(color(textAlign(fillMaxWidth(Companion_getInstance_1(), get_percent(60)), Companion_getInstance_9().get_Center_3arb0i_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), get_px(20)), ['ROBOTO']), Companion_getInstance_10().get_Normal_22avww_k$());
          SpanText(tmp_8, tmp_9, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1009380159);
          var tmp_10 = last(split($joke.get_joke_woop0o_k$(), [':']));
          var tmp_11 = Companion_getInstance_1();
          $composer_0.startReplaceGroup_5hh8aj_k$(-725292762);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_12;
          if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            // Inline function 'com.example.blogmultiplateform.pages.admin.HomeContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value_1 = HomeContent$lambda$lambda_1;
            $composer_0.updateRememberedValue_l1wh71_k$(value_1);
            tmp_12 = value_1;
          } else {
            tmp_12 = it_1;
          }
          var tmp_13 = tmp_12;
          var tmp2_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp_14 = fontWeight(fontFamily(fontSize(color(textAlign(margin(tmp_11, tmp2_group), Companion_getInstance_9().get_Center_3arb0i_k$()), Theme_Secondary_getInstance().get_rgb_18ix0c_k$()), get_px(28)), ['ROBOTO']), Companion_getInstance_10().get_Bold_wnz5ke_k$());
          SpanText(tmp_10, tmp_14, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        var tmp_15;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_15 = Unit_getInstance();
        }
        tmp = tmp_15;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function HomeContent$lambda_0($this_HomeContent, $joke, $$changed) {
    return function ($composer, $force) {
      HomeContent($this_HomeContent, $joke, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AddButton$lambda($breakpoint) {
    return function ($this$margin) {
      $this$margin.right_1eed0y_k$($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(40) : get_px(20));
      $this$margin.bottom_k4p8ql_k$($breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) > 0 ? get_px(40) : get_px(20));
      return Unit_getInstance();
    };
  }
  function AddButton$lambda_0($context) {
    return function (it) {
      $context.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(CreateAPost_getInstance().get_route_iy3cio_k$());
      return Unit_getInstance();
    };
  }
  function AddButton$lambda_1($this_AddButton, $$changed) {
    return function ($composer, $force) {
      AddButton($this_AddButton, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LoginScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-94528301);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-94528301, $changed, -1, 'com.example.blogmultiplateform.pages.admin.LoginScreen (LoginScreen.kt:68)');
      }
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = LoginScreen$lambda_1;
      }
      var composer = $composer_1;
      sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      var context = rememberPageContext($composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(1202403698);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>' call
        var value_0 = mutableStateOf(' ');
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var errorText$delegate = tmp0_group;
      var tmp_3 = fillMaxSize(Companion_getInstance_1());
      var tmp_4 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-950507763, true, LoginScreen$lambda_2(scope, context, errorText$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_29(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Box(tmp_3, tmp_4, null, tmp0_0, $composer_0, 3072, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(LoginScreen$lambda_3($changed));
    }
  }
  function rememberLoggedIn(remember, user) {
    user = user === VOID ? null : user;
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['remember'] = remember.toString();
    if (!(user == null)) {
      // Inline function 'org.w3c.dom.set' call
      // Inline function 'kotlin.js.asDynamic' call
      localStorage['userId'] = user.get_id_kntnx8_k$();
      // Inline function 'org.w3c.dom.set' call
      // Inline function 'kotlin.js.asDynamic' call
      localStorage['userName'] = user.get_userName_ytepxb_k$();
    }
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoginScreenKt$lambda_1$lambda_y2n5l7($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1843850736, $changed, -1, 'com.example.blogmultiplateform.pages.admin.ComposableSingletons$LoginScreenKt.lambda-1.<anonymous> (LoginScreen.kt:175)');
    }
    SpanText('Sign In', null, null, null, $composer_0, 6, 14);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$LoginScreenKt() {
    ComposableSingletons$LoginScreenKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(1843850736, false, ComposableSingletons$LoginScreenKt$lambda_1$lambda_y2n5l7));
  }
  protoOf(ComposableSingletons$LoginScreenKt).get_lambda_1_1fs5qa_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$LoginScreenKt_instance;
  function ComposableSingletons$LoginScreenKt_getInstance() {
    if (ComposableSingletons$LoginScreenKt_instance == null)
      new ComposableSingletons$LoginScreenKt();
    return ComposableSingletons$LoginScreenKt_instance;
  }
  function LoginScreen$lambda($errorText$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('errorText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $errorText$delegate.get_value_j01efc_k$();
  }
  function LoginScreen$lambda_0($errorText$delegate, _set____db54di) {
    getLocalDelegateReference('errorText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $errorText$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function LoginScreen$lambda_1() {
    return EmptyCoroutineContext_getInstance();
  }
  function LoginScreen$lambda$lambda$lambda($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(50));
    return Unit_getInstance();
  }
  function LoginScreen$lambda$lambda$lambda_0($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(12));
    return Unit_getInstance();
  }
  function LoginScreen$lambda$lambda$lambda_1($this$toAttrs) {
    $this$toAttrs.attr_w68641_k$('placeholder', 'User Name');
    return Unit_getInstance();
  }
  function LoginScreen$lambda$lambda$lambda_2($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(12));
    return Unit_getInstance();
  }
  function LoginScreen$lambda$lambda$lambda_3($this$toAttrs) {
    $this$toAttrs.attr_w68641_k$('placeholder', 'Password');
    return Unit_getInstance();
  }
  function LoginScreen$lambda$lambda$lambda_4($this$margin) {
    $this$margin.bottom_k4p8ql_k$(get_px(24));
    return Unit_getInstance();
  }
  function LoginScreen$lambda$lambda$lambda_5($this$border) {
    $this$border.width_iqjg4l_k$(get_px(0));
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.style_o6ud9q_k$('none');
    $this$border.color_lesdgv_k$(Colors_getInstance().get_Transparent_cxh4g9_k$());
    return Unit_getInstance();
  }
  function LoginScreen$lambda$lambda$lambda$slambda($context, $errorText$delegate, resultContinuation) {
    this.$context_1 = $context;
    this.$errorText$delegate_1 = $errorText$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LoginScreen$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LoginScreen$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LoginScreen$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_0 = this;
            var tmp_1 = document.getElementById('usernameInput');
            tmp_0.userName0__1 = (tmp_1 instanceof HTMLInputElement ? tmp_1 : THROW_CCE()).value;
            var tmp_2 = this;
            var tmp_3 = document.getElementById('passwordInput');
            tmp_2.password1__1 = (tmp_3 instanceof HTMLInputElement ? tmp_3 : THROW_CCE()).value;
            var tmp_4;
            var this_0 = this.userName0__1;
            if (charSequenceLength(this_0) > 0) {
              var this_1 = this.password1__1;
              tmp_4 = charSequenceLength(this_1) > 0;
            } else {
              tmp_4 = false;
            }

            if (tmp_4) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = checkUserExistence(new User(VOID, this.userName0__1, this.password1__1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              LoginScreen$lambda_0(this.$errorText$delegate_1, 'Input fields are empty');
              this.set_state_rjd8d0_k$(1);
              suspendResult = delay(new Long(3000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            LoginScreen$lambda_0(this.$errorText$delegate_1, '');
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 2:
            this.user2__1 = suspendResult;
            var tmp_5 = this;
            var tmp_6;
            if (this.user2__1 == null) {
              tmp_6 = null;
            } else {
              rememberLoggedIn(true, this.user2__1);
              this.$context_1.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Home_getInstance().get_route_iy3cio_k$());
              tmp_6 = Unit_getInstance();
            }

            tmp_5.tmp1_elvis_lhs3__1 = tmp_6;
            if (this.tmp1_elvis_lhs3__1 == null) {
              var tmp_7 = this;
              tmp_7.this4__1 = this.$this$launch_1;
              var tmp_8 = this;
              tmp_8.$this$run5__1 = this.this4__1;
              LoginScreen$lambda_0(this.$errorText$delegate_1, "The User doesn't exist");
              this.set_state_rjd8d0_k$(3);
              suspendResult = delay(new Long(3000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 3:
            LoginScreen$lambda_0(this.$errorText$delegate_1, '');
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.user2__1;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(LoginScreen$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new LoginScreen$lambda$lambda$lambda$slambda(this.$context_1, this.$errorText$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LoginScreen$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LoginScreen$lambda$lambda$lambda$slambda_0($context, $errorText$delegate, resultContinuation) {
    var i = new LoginScreen$lambda$lambda$lambda$slambda($context, $errorText$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LoginScreen$lambda$lambda$lambda_6($scope, $context, $errorText$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, LoginScreen$lambda$lambda$lambda$slambda_0($context, $errorText$delegate, null));
      return Unit_getInstance();
    };
  }
  function LoginScreen$lambda$lambda($scope, $context, $errorText$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-846353482, $changed, -1, 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>.<anonymous> (LoginScreen.kt:83)');
        }
        var tmp_0 = Companion_getInstance_1();
        $composer_0.startReplaceGroup_5hh8aj_k$(908629889);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = LoginScreen$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp0_modifier = width(margin(tmp_0, tmp0_group), get_px(100));
        var tmp1_src = '/logo.svg';
        Image(tmp1_src, 'Logo Image', tmp0_modifier, null, null, null, null, $composer_0, 54, 120);
        var tmp_3 = Text_getInstance();
        var tmp_4 = LoginStyle_getInstance();
        var tmp_5 = Companion_getInstance_1();
        $composer_0.startReplaceGroup_5hh8aj_k$(908638529);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = LoginScreen$lambda$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_6 = value_0;
        } else {
          tmp_6 = it_0;
        }
        var tmp_7 = tmp_6;
        var tmp1_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_8 = tmp_4.get_baseStyle_339jzy_k$(fontFamily(backgroundColor(padding_0(height(width(id(margin(tmp_5, tmp1_group), 'usernameInput'), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().get_White_ij46ow_k$()), ['ROBOTO']));
        $composer_0.startReplaceGroup_5hh8aj_k$(908649519);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_9;
        if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = LoginScreen$lambda$lambda$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_9 = value_1;
        } else {
          tmp_9 = it_1;
        }
        var tmp_10 = tmp_9;
        var tmp2_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        Input(tmp_3, toAttrs(tmp_8, tmp2_group), $composer_0, 0);
        var tmp_11 = Text_getInstance();
        var tmp_12 = LoginStyle_getInstance();
        var tmp_13 = Companion_getInstance_1();
        $composer_0.startReplaceGroup_5hh8aj_k$(908656769);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_14;
        if (false || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = LoginScreen$lambda$lambda$lambda_2;
          $composer_0.updateRememberedValue_l1wh71_k$(value_2);
          tmp_14 = value_2;
        } else {
          tmp_14 = it_2;
        }
        var tmp_15 = tmp_14;
        var tmp3_group = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_16 = tmp_12.get_baseStyle_339jzy_k$(fontFamily(backgroundColor(padding_0(height(width(id(margin(tmp_13, tmp3_group), 'passwordInput'), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().get_White_ij46ow_k$()), ['ROBOTO']));
        $composer_0.startReplaceGroup_5hh8aj_k$(908667816);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_17;
        if (false || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = LoginScreen$lambda$lambda$lambda_3;
          $composer_0.updateRememberedValue_l1wh71_k$(value_3);
          tmp_17 = value_3;
        } else {
          tmp_17 = it_3;
        }
        var tmp_18 = tmp_17;
        var tmp4_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        Input(tmp_11, toAttrs(tmp_16, tmp4_group), $composer_0, 0);
        var tmp_19 = Companion_getInstance_1();
        $composer_0.startReplaceGroup_5hh8aj_k$(908674977);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_4 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_20;
        if (false || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_4 = LoginScreen$lambda$lambda$lambda_4;
          $composer_0.updateRememberedValue_l1wh71_k$(value_4);
          tmp_20 = value_4;
        } else {
          tmp_20 = it_4;
        }
        var tmp_21 = tmp_20;
        var tmp5_group = (tmp_21 == null ? true : !(tmp_21 == null)) ? tmp_21 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_22 = fontSize(fontWeight(fontFamily(borderRadius(color(backgroundColor(size_0(margin(tmp_19, tmp5_group), get_px(350), get_px(54)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Colors_getInstance().get_White_ij46ow_k$()), get_px(4)), ['ROBOTO']), Companion_getInstance_10().get_Medium_1fiba6_k$()), get_px(16));
        $composer_0.startReplaceGroup_5hh8aj_k$(908687275);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_5 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_23;
        if (false || it_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_5 = LoginScreen$lambda$lambda$lambda_5;
          $composer_0.updateRememberedValue_l1wh71_k$(value_5);
          tmp_23 = value_5;
        } else {
          tmp_23 = it_5;
        }
        var tmp_24 = tmp_23;
        var tmp6_group = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_25 = border(tmp_22, tmp6_group);
        $composer_0.startReplaceGroup_5hh8aj_k$(908694621);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.changedInstance_s1wkiy_k$($scope) | $composer_0.changedInstance_s1wkiy_k$($context));
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_6 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_26;
        if (invalid || it_6 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_6 = LoginScreen$lambda$lambda$lambda_6($scope, $context, $errorText$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_6);
          tmp_26 = value_6;
        } else {
          tmp_26 = it_6;
        }
        var tmp_27 = tmp_26;
        var tmp7_group = (tmp_27 == null ? true : !(tmp_27 == null)) ? tmp_27 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_28 = cursor(onClick(tmp_25, tmp7_group), Companion_getInstance_6().get_Pointer_m64vg4_k$());
        var tmp_29 = get_px(0);
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        Companion_getInstance_11();
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        Button(toAttrs(outline(tmp_28, tmp_29, 'none', Colors_getInstance().get_Transparent_cxh4g9_k$())), ComposableSingletons$LoginScreenKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        var tmp2_modifier = textAlign(fontFamily(color(width(Companion_getInstance_1(), get_px(350)), Colors_getInstance().get_Red_18jks8_k$()), ['ROBOTO']), Companion_getInstance_9().get_Center_3arb0i_k$());
        var tmp3_text = LoginScreen$lambda($errorText$delegate);
        SpanText(tmp3_text, tmp2_modifier, null, null, $composer_0, 0, 12);
        var tmp_30;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_30 = Unit_getInstance();
        }
        tmp = tmp_30;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LoginScreen$lambda_2($scope, $context, $errorText$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-950507763, $changed, -1, 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous> (LoginScreen.kt:78)');
        }
        var tmp0_$receiver = Companion_getInstance_1();
        var tmp1_leftRight = get_px(50);
        var tmp2_top = get_px(80);
        var tmp3_bottom = get_px(24);
        var tmp_0 = background(padding_1(tmp0_$receiver, tmp2_top, tmp1_leftRight, tmp3_bottom), Theme_LightGray_getInstance().get_rgb_18ix0c_k$(), []);
        var tmp_1 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-846353482, true, LoginScreen$lambda$lambda($scope, $context, $errorText$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplateform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_28(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24576, 10);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LoginScreen$lambda_3($$changed) {
    return function ($composer, $force) {
      LoginScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MyPostPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1420898451);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1420898451, $changed, -1, 'com.example.blogmultiplateform.pages.admin.MyPostPage (MyPostPage.kt:13)');
      }
      PostScreen($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MyPostPage$lambda($changed));
    }
  }
  function PostScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(556682878);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(556682878, $changed, -1, 'com.example.blogmultiplateform.pages.admin.PostScreen (MyPostPage.kt:23)');
      }
      AdminPageLayout(ComposableSingletons$MyPostPageKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PostScreen$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MyPostPageKt$lambda_1$lambda_c41m0f($this$AdminPageLayout, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-210581167, $changed, -1, 'com.example.blogmultiplateform.pages.admin.ComposableSingletons$MyPostPageKt.lambda-1.<anonymous> (MyPostPage.kt:26)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MyPostPageKt() {
    ComposableSingletons$MyPostPageKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(-210581167, false, ComposableSingletons$MyPostPageKt$lambda_1$lambda_c41m0f));
  }
  protoOf(ComposableSingletons$MyPostPageKt).get_lambda_1_1fs5qa_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$MyPostPageKt_instance;
  function ComposableSingletons$MyPostPageKt_getInstance() {
    if (ComposableSingletons$MyPostPageKt_instance == null)
      new ComposableSingletons$MyPostPageKt();
    return ComposableSingletons$MyPostPageKt_instance;
  }
  function MyPostPage$lambda($$changed) {
    return function ($composer, $force) {
      MyPostPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PostScreen$lambda($$changed) {
    return function ($composer, $force) {
      PostScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var com_example_blogmultiplateform_styles_LoginStyle$stable;
  function LoginStyle$_get_baseStyle_$lambda_2p0il2($this_baseStyle) {
    return function (it) {
      var tmp = get_px(2);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_11();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      border_0($this_baseStyle, tmp, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$());
      return Unit_getInstance();
    };
  }
  function LoginStyle() {
    LoginStyle_instance = this;
  }
  protoOf(LoginStyle).get_baseStyle_339jzy_k$ = function (_this__u8e3s4) {
    var tmp = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = transition_0(border_0(_this__u8e3s4, tmp, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), [CSSTransition_init_$Create$('border', get_ms(300))]);
    return onFocus(tmp_0, LoginStyle$_get_baseStyle_$lambda_2p0il2(_this__u8e3s4));
  };
  var LoginStyle_instance;
  function LoginStyle_getInstance() {
    if (LoginStyle_instance == null)
      new LoginStyle();
    return LoginStyle_instance;
  }
  function loginStyle(ctx) {
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.get_stylesheet_hk204p_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.example.blogmultiplateform.styles.loginStyle.<anonymous>' call
    this_0.registerStyle_79mtge_k$('loginStyle', loginStyle$lambda);
    return this_0;
  }
  function com_example_blogmultiplateform_styles_LoginStyle$stableprop_getter() {
    return com_example_blogmultiplateform_styles_LoginStyle$stable;
  }
  function loginStyle$lambda($this$registerStyle) {
    $this$registerStyle.base_y8uu8g_k$(loginStyle$lambda$lambda);
    var tmp = get_focus($this$registerStyle);
    tmp.invoke_ts7809_k$(loginStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function loginStyle$lambda$lambda() {
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border_0(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), [Companion_getInstance_3().of_ap5umw_k$('border', get_ms(300), null, null)]);
  }
  function loginStyle$lambda$lambda_0() {
    var tmp = Companion_getInstance_1();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_11();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', Theme_Primary_getInstance().get_rgb_18ix0c_k$());
  }
  function enableHoverEffect(ctx) {
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.get_stylesheet_hk204p_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.example.blogmultiplateform.styles.enableHoverEffect.<anonymous>' call
    this_0.registerStyle_79mtge_k$('sidePanelNavigationHoverEffect', enableHoverEffect$lambda);
    return this_0;
  }
  function enableHoverEffect$lambda($this$registerStyle) {
    $this$registerStyle.base_y8uu8g_k$(enableHoverEffect$lambda$lambda);
    $this$registerStyle.cssRule_fe6cwq_k$(':hover > #svgParent > #vectorIcon', enableHoverEffect$lambda$lambda_0);
    return Unit_getInstance();
  }
  function enableHoverEffect$lambda$lambda() {
    return transition(backgroundColor(Companion_getInstance_1(), Colors_getInstance().get_White_ij46ow_k$()), [Companion_getInstance_3().of_ap5umw_k$('background-color', get_ms(300), null, null)]);
  }
  function enableHoverEffect$lambda$lambda_0() {
    var tmp = Companion_getInstance_1();
    return styleModifier(tmp, enableHoverEffect$lambda$lambda$lambda);
  }
  function enableHoverEffect$lambda$lambda$lambda($this$styleModifier) {
    $this$styleModifier.property_wcrait_k$('stroke', Theme_Primary_getInstance().get_hex_18j4ge_k$());
    return Unit_getInstance();
  }
  function checkUserExistence(user, $completion) {
    var tmp = new $checkUserExistenceCOROUTINE$0(user, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function checkUserId(id, $completion) {
    var tmp = new $checkUserIdCOROUTINE$1(id, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $checkUserExistenceCOROUTINE$0(user, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.user_1 = user;
  }
  protoOf($checkUserExistenceCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = get_api(window);
            var this_0 = Default_getInstance();
            var value = this.user_1;
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(User), arrayOf([]), false));
            suspendResult = tmp_0.tryPost$default_z1dyim_k$('userCheck', VOID, encodeToByteArray(this_0.encodeToString_k0apqx_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value)), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_1 = this;
            var tmp_2;
            if (result == null) {
              tmp_2 = null;
            } else {
              var this_3 = Default_getInstance();
              var string = decodeToString(result);
              var this_4 = this_3.get_serializersModule_piitvg_k$();
              var this_5 = serializer(this_4, createKType(getKClass(UserWithoutPassword), arrayOf([]), true));
              tmp_2 = this_3.decodeFromString_jwu9sq_k$(isInterface(this_5, KSerializer) ? this_5 : THROW_CCE(), string);
            }

            tmp_1.TRY_RESULT0__1 = tmp_2;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_4 = this;
              println(e.message);
              tmp_4.TRY_RESULT0__1 = null;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $checkUserIdCOROUTINE$1(id, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.id_1 = id;
  }
  protoOf($checkUserIdCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = get_api(window);
            var this_0 = Default_getInstance();
            var value = this.id_1;
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false));
            suspendResult = tmp_0.tryPost$default_z1dyim_k$('checkUserId', VOID, encodeToByteArray(this_0.encodeToString_k0apqx_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value)), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_1 = this;
            var tmp1_safe_receiver = result == null ? null : decodeToString(result);
            var tmp_2;
            if (tmp1_safe_receiver == null) {
              tmp_2 = null;
            } else {
              var this_3 = Default_getInstance();
              var this_4 = this_3.get_serializersModule_piitvg_k$();
              var this_5 = serializer(this_4, createKType(PrimitiveClasses_getInstance().get_booleanClass_d285fr_k$(), arrayOf([]), false));
              tmp_2 = this_3.decodeFromString_jwu9sq_k$(isInterface(this_5, KSerializer) ? this_5 : THROW_CCE(), tmp1_safe_receiver);
            }

            var tmp2_elvis_lhs = tmp_2;
            tmp_1.TRY_RESULT0__1 = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_4 = this;
              println(toString(e.message));
              tmp_4.TRY_RESULT0__1 = false;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  var com_example_blogmultiplateform_utils_Constants$stable;
  var com_example_blogmultiplateform_utils_FONT_FAMILY$stable;
  var com_example_blogmultiplateform_utils_Res_Image$stable;
  var com_example_blogmultiplateform_utils_Res_PathIcon$stable;
  var com_example_blogmultiplateform_utils_Res$stable;
  var com_example_blogmultiplateform_utils_Id$stable;
  function Constants() {
    Constants_instance = this;
    this.SIDE_PANEL_WIDTH_1 = 250;
    this.PAGE_WIDTH_1 = 1920;
    this.COLLAPSED_PANEL_HEIGHT_1 = 100;
  }
  protoOf(Constants).get_SIDE_PANEL_WIDTH_mwcp64_k$ = function () {
    return this.SIDE_PANEL_WIDTH_1;
  };
  protoOf(Constants).get_PAGE_WIDTH_u0d1fj_k$ = function () {
    return this.PAGE_WIDTH_1;
  };
  protoOf(Constants).get_COLLAPSED_PANEL_HEIGHT_5tw4j7_k$ = function () {
    return this.COLLAPSED_PANEL_HEIGHT_1;
  };
  var Constants_instance;
  function Constants_getInstance() {
    if (Constants_instance == null)
      new Constants();
    return Constants_instance;
  }
  function FONT_FAMILY() {
    FONT_FAMILY_instance = this;
    this.ROBOTO_1 = 'ROBOTO';
  }
  protoOf(FONT_FAMILY).get_ROBOTO_3g0ojy_k$ = function () {
    return this.ROBOTO_1;
  };
  var FONT_FAMILY_instance;
  function FONT_FAMILY_getInstance() {
    if (FONT_FAMILY_instance == null)
      new FONT_FAMILY();
    return FONT_FAMILY_instance;
  }
  function Image_0() {
    Image_instance = this;
    this.logo_1 = '/logo.svg';
    this.create_plus_icon_1 = '/ic_create_plus.svg';
    this.laugh_1 = '/laugh.png';
  }
  protoOf(Image_0).get_logo_wopywk_k$ = function () {
    return this.logo_1;
  };
  protoOf(Image_0).get_create_plus_icon_rlhgak_k$ = function () {
    return this.create_plus_icon_1;
  };
  protoOf(Image_0).get_laugh_iujmu0_k$ = function () {
    return this.laugh_1;
  };
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image_0();
    return Image_instance;
  }
  function PathIcon() {
    PathIcon_instance = this;
    this.home_1 = 'M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H9M19 10L21 12M19 10V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H15M9 21C9.26522 21 9.51957 20.8946 9.70711 20.7071C9.89464 20.5196 10 20.2652 10 20V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21M9 21H15';
    this.create_1 = 'M12 9.52148V12.5215M12 12.5215V15.5215M12 12.5215H15M12 12.5215H9M21 12.5215C21 13.7034 20.7672 14.8737 20.3149 15.9656C19.8626 17.0576 19.1997 18.0497 18.364 18.8854C17.5282 19.7212 16.5361 20.3841 15.4442 20.8364C14.3522 21.2887 13.1819 21.5215 12 21.5215C10.8181 21.5215 9.64778 21.2887 8.55585 20.8364C7.46392 20.3841 6.47177 19.7212 5.63604 18.8854C4.80031 18.0497 4.13738 17.0576 3.68508 15.9656C3.23279 14.8737 3 13.7034 3 12.5215C3 10.1345 3.94821 7.84535 5.63604 6.15752C7.32387 4.4697 9.61305 3.52148 12 3.52148C14.3869 3.52148 16.6761 4.4697 18.364 6.15752C20.0518 7.84535 21 10.1345 21 12.5215Z';
    this.posts_1 = 'M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01';
    this.logout_1 = 'M11 16.5215L7 12.5215M7 12.5215L11 8.52148M7 12.5215H21M16 16.5215V17.5215C16 18.3171 15.6839 19.0802 15.1213 19.6428C14.5587 20.2054 13.7956 20.5215 13 20.5215H6C5.20435 20.5215 4.44129 20.2054 3.87868 19.6428C3.31607 19.0802 3 18.3171 3 17.5215V7.52148C3 6.72583 3.31607 5.96277 3.87868 5.40016C4.44129 4.83755 5.20435 4.52148 6 4.52148H13C13.7956 4.52148 14.5587 4.83755 15.1213 5.40016C15.6839 5.96277 16 6.72583 16 7.52148V8.52148';
  }
  protoOf(PathIcon).get_home_wonf3c_k$ = function () {
    return this.home_1;
  };
  protoOf(PathIcon).get_create_c1nsp1_k$ = function () {
    return this.create_1;
  };
  protoOf(PathIcon).get_posts_iwzpuy_k$ = function () {
    return this.posts_1;
  };
  protoOf(PathIcon).get_logout_g9gkur_k$ = function () {
    return this.logout_1;
  };
  var PathIcon_instance;
  function PathIcon_getInstance() {
    if (PathIcon_instance == null)
      new PathIcon();
    return PathIcon_instance;
  }
  function Res() {
    Res_instance = this;
  }
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function Id() {
    Id_instance = this;
    this.userNameInput_1 = 'usernameInput';
    this.passwordInput_1 = 'passwordInput';
    this.svgParent_1 = 'svgParent';
    this.vectorIcon_1 = 'vectorIcon';
  }
  protoOf(Id).get_userNameInput_jp4hx1_k$ = function () {
    return this.userNameInput_1;
  };
  protoOf(Id).get_passwordInput_57y4zq_k$ = function () {
    return this.passwordInput_1;
  };
  protoOf(Id).get_svgParent_vlv2bp_k$ = function () {
    return this.svgParent_1;
  };
  protoOf(Id).get_vectorIcon_jvh2qj_k$ = function () {
    return this.vectorIcon_1;
  };
  var Id_instance;
  function Id_getInstance() {
    if (Id_instance == null)
      new Id();
    return Id_instance;
  }
  function com_example_blogmultiplateform_utils_Constants$stableprop_getter() {
    return com_example_blogmultiplateform_utils_Constants$stable;
  }
  function com_example_blogmultiplateform_utils_FONT_FAMILY$stableprop_getter() {
    return com_example_blogmultiplateform_utils_FONT_FAMILY$stable;
  }
  function com_example_blogmultiplateform_utils_Res_Image$stableprop_getter() {
    return com_example_blogmultiplateform_utils_Res_Image$stable;
  }
  function com_example_blogmultiplateform_utils_Res_PathIcon$stableprop_getter() {
    return com_example_blogmultiplateform_utils_Res_PathIcon$stable;
  }
  function com_example_blogmultiplateform_utils_Res$stableprop_getter() {
    return com_example_blogmultiplateform_utils_Res$stable;
  }
  function com_example_blogmultiplateform_utils_Id$stableprop_getter() {
    return com_example_blogmultiplateform_utils_Id$stable;
  }
  function isUserLoggedIn(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2125572165);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(2125572165, $dirty, -1, 'com.example.blogmultiplateform.utils.isUserLoggedIn (Functions.kt:20)');
      }
      var context = rememberPageContext($composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(208377764);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.utils.isUserLoggedIn.<anonymous>' call
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = localStorage['remember'];
        var value = toBoolean(tmp$ret$1);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var remembered = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(208379894);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.utils.isUserLoggedIn.<anonymous>' call
        // Inline function 'org.w3c.dom.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var value_0 = localStorage['userId'];
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var userId = tmp1_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(208381813);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.utils.isUserLoggedIn.<anonymous>' call
        var value_1 = mutableStateOf(false);
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var userIdExist$delegate = tmp2_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(208383937);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      var invalid = $composer_0.changedInstance_s1wkiy_k$(context);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = this_3.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplateform.utils.isUserLoggedIn.<anonymous>' call
        var value_2 = isUserLoggedIn$slambda_0(userId, remembered, context, userIdExist$delegate, null);
        this_3.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(Unit_getInstance(), tmp3_group, $composer_0, 6);
      if (remembered && isUserLoggedIn$lambda(userIdExist$delegate))
        content($composer_0, 14 & $dirty);
      else {
        println('Loading...');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp4_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.updateScope_t8jcf_k$(isUserLoggedIn$lambda_1(content, $changed));
    }
  }
  function logOut() {
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['remember'] = 'false';
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['userId'] = '';
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['userName'] = '';
  }
  function isUserLoggedIn$lambda($userIdExist$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('userIdExist', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $userIdExist$delegate.get_value_j01efc_k$();
  }
  function isUserLoggedIn$lambda_0($userIdExist$delegate, _set____db54di) {
    getLocalDelegateReference('userIdExist', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $userIdExist$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function isUserLoggedIn$slambda($userId, $remembered, $context, $userIdExist$delegate, resultContinuation) {
    this.$userId_1 = $userId;
    this.$remembered_1 = $remembered;
    this.$context_1 = $context;
    this.$userIdExist$delegate_1 = $userIdExist$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(isUserLoggedIn$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(isUserLoggedIn$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(isUserLoggedIn$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var this_0 = this.$userId_1;
            if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = checkUserId(this.$userId_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT0__1 = false;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            var ARGUMENT = this.WHEN_RESULT0__1;
            isUserLoggedIn$lambda_0(this.$userIdExist$delegate_1, ARGUMENT);
            if (!this.$remembered_1 || !isUserLoggedIn$lambda(this.$userIdExist$delegate_1)) {
              this.$context_1.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(Login_getInstance().get_route_iy3cio_k$());
            }

            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(isUserLoggedIn$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new isUserLoggedIn$slambda(this.$userId_1, this.$remembered_1, this.$context_1, this.$userIdExist$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(isUserLoggedIn$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function isUserLoggedIn$slambda_0($userId, $remembered, $context, $userIdExist$delegate, resultContinuation) {
    var i = new isUserLoggedIn$slambda($userId, $remembered, $context, $userIdExist$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function isUserLoggedIn$lambda_1($content, $$changed) {
    return function ($composer, $force) {
      isUserLoggedIn($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_1).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: init
  com_example_blogmultiplateform_models_Joke_$serializer$stable = 8;
  com_example_blogmultiplateform_models_Joke$stable = 0;
  com_example_blogmultiplateform_models_User_$serializer$stable = 8;
  com_example_blogmultiplateform_models_User$stable = 0;
  com_example_blogmultiplateform_models_UserWithoutPassword_$serializer$stable = 8;
  com_example_blogmultiplateform_models_UserWithoutPassword$stable = 0;
  com_example_blogmultiplateform_navigation_Screen_Home$stable = 0;
  com_example_blogmultiplateform_navigation_Screen_Login$stable = 0;
  com_example_blogmultiplateform_navigation_Screen_CreateAPost$stable = 0;
  com_example_blogmultiplateform_navigation_Screen_MyPost$stable = 0;
  com_example_blogmultiplateform_navigation_Screen$stable = 0;
  com_example_blogmultiplateform_styles_LoginStyle$stable = 0;
  com_example_blogmultiplateform_utils_Constants$stable = 0;
  com_example_blogmultiplateform_utils_FONT_FAMILY$stable = 0;
  com_example_blogmultiplateform_utils_Res_Image$stable = 0;
  com_example_blogmultiplateform_utils_Res_PathIcon$stable = 0;
  com_example_blogmultiplateform_utils_Res$stable = 0;
  com_example_blogmultiplateform_utils_Id$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));
