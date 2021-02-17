window.onscroll = function () {
  Limg();
  var windST = $(window).scrollTop();
  if (windST > 30) {
    if (
      window.isWAP768 ||
      (window.isWAP768 && $(".rbt-box.d-pcShow").length == 0)
    ) {
      $(".rbt-hide-icon").trigger("click");
    }
  }
};

function Limg() {
  var viewHeight = document.documentElement.clientHeight;
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  var limg = document.querySelectorAll("img[lsrc]");
  // Array.prototype.forEach.call()
  Array.prototype.forEach.call(limg, function (item, index) {
    var rect;
    if (item.getAttribute("lsrc") === "") return;
    //getBoundingClientRect杩斿洖鍏冪礌鐨勫ぇ灏忓強鍏剁浉瀵逛簬瑙嗗彛鐨勪綅缃�
    rect = item.getBoundingClientRect();
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      (function () {
        var img = new Image();
        img.src = item.getAttribute("lsrc");
        item.src = img.src;
        item.removeAttribute("lsrc");
      })();
    }
  });
}

function getbanner() {
  var url = location.href.slice(
    location.href.lastIndexOf("/") + 1,
    location.href.indexOf("html") - 1
  );
  ajax_hq({
    url: "kv/site?site=" + url,
    type: "GET",
    success: function (data) {
      for (var i = 0; i < data.data.length; i++) {
        var $item = $(".banner");
        if (data.data[i].type == 1) {
          mbanner = data.data[i].banner;
          $item.attr("msrc", mbanner);
        } else {
          pcbanner = data.data[i].banner;
          $item.attr("pcsrc", pcbanner);
        }
      }
    },
  });
}
// var BASE_URL = "http://hongqiolapi.cloud-top.com.cn/";
// var BASE_URL = "http://api.web.cloud-top.com.cn/";
// window.BASE_URL = document.baseURI + "/api/";
window.BASE_URL = "/en/api/";
// window.BASE_URL = "/api/";
// var BASE_URL = "http://k8s-hongqi-website.cloud-top.com.cn/";
window.fileBase = "http://www.hongqi-auto.com/storage/";
window.WINDOW_WIDTH = null;
window.WINDOW_HEIGHT = null;
window.ISWAP = false; // 鏄惁鏄墜鏈虹 750
window.isWAP768 = false; // 鏄惁鏄墜鏈虹  768
// window.top= [];
// window.offsetTop = [];
window.offsetTopArr = []; // 鐢ㄤ簬瀛樻斁鍔ㄧ敾鍖呰９椤堕儴璺濋《璺濈
window.offsetBottomArr = []; // 鐢ㄤ簬瀛樻斁鍔ㄧ敾鍖呰９搴曢儴璺濋《璺濈
window.REG_EMAIL = new RegExp(
  "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
);

window.loadingStorage = sessionStorage.getItem("loading");

window.ajax_hq = function (params) {
  $.ajax({
    async: false,
    type: params.type,
    // url: "http://k8s-hongqi-website.cloud-top.com.cn/" + params.url,
    url: BASE_URL + params.url,
    data: params.data,
    // dataType: "jsonp",
    success: function (data) {
      if (params.success) {
        params.success(data);
      }
    },
    beforeSend: function (xhr) {
      var training = ["/pages/training_materials/training_materials.html"];
      var online = ["/pages/online_training/online_training.html"];
      var download = ["/pages/download-center/download-center.html"];
      var params_url = window.location.pathname;
      // console.log("鍦板潃", params_url);
      if (
        (localStorage.getItem("token") && params_url == training) ||
        params_url == online ||
        params_url == download
      ) {
        // console.log(xhr.setRequestHeader);
        xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
      }
      if (params.beforeSend) {
        params.beforeSend();
      }
    },
    complete: function () {
      if (params.complete) {
        params.complete();
      }
    },
  });
};
window.ajax_formData_clock = false;
window.ajax_formData = function (params) {
  if (ajax_formData_clock) {
    return;
  }
  ajax_formData_clock = true;
  $.ajax({
    async: false,
    type: params.type,
    url: BASE_URL + params.url,
    data: params.data,
    processData: false,
    contentType: false,
    success: function (data) {
      if (params.success) {
        params.success(data);
      }
    },
    beforeSend: function () {
      if (params.beforeSend) {
        params.beforeSend();
      }
    },
    complete: function () {
      ajax_formData_clock = false;
      if (params.complete) {
        params.complete();
      }
    },
  });
};
// 鑾峰彇鍥剧墖浣嶇疆璺濋《
var picOffsetLock = false;
window.picOffset = function () {
  offsetTopArr = [];
  offsetBottomArr = [];
  $(".d-ani").each(function (i, ele) {
    var offsetBottom =
      parseInt($(".d-ani").eq(i).offset().top) + $(".d-ani").eq(i).height();
    var offsetTop = parseInt($(".d-ani").eq(i).offset().top);
    $(".d-ani")
      .eq(i)
      .attr({ offsetBottom: offsetBottom, offsetTop: offsetTop });
    offsetTopArr.push(offsetTop);
    offsetBottomArr.push(offsetBottom);
  });
  if (!picOffsetLock) {
    picOffsetLock = true;
    setTimeout(function () {
      picOffsetLock = false;
      window.winScroll &&
        typeof window.winScroll === "function" &&
        window.winScroll();
    }, 1000);
  }
};
window.swiper_generator = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    (function (i) {
      //  swiper
      var autoplay = 0;
      // console.log("5556564654", i);
      if (arr[i].indexOf("autoplay") > 0) {
        arr[i] = arr[i].slice(0, arr[i].indexOf("autoplay"));
        // autoplay = {
        //     delay: 5000,
        //     stopOnLastSlide: false,
        //     disableOnInteraction: false,
        // };
        autoplay = 5000;
      }
      window[arr[i]] = new Swiper("." + arr[i] + " .swiper-container", {
        loop: true,
        autoplay: autoplay,
        autoplayDisableOnInteraction: false,
        autoHeight: true, //楂樺害闅忓唴瀹瑰彉鍖�
        preventClicks: false,
        pagination: "." + arr[i] + " .swiper-pagination",
        prevButton: "." + arr[i] + " .swiper-button-prev",
        nextButton: "." + arr[i] + " .swiper-button-next",
        observer: true, //淇敼swiper鑷繁鎴栧瓙鍏冪礌鏃讹紝鑷姩鍒濆鍖杝wiper
        observeParents: true, //淇敼swiper鐨勭埗鍏冪礌鏃讹紝鑷姩鍒濆鍖杝wiper
        paginationClickable: true,
      });
    })(i);
  }
};
window.initFun = function () {
  //浠ラ槻瀵艰埅涓嶆樉绀�
  // $("#cti-header").fadeIn(800);
  $("#cti-header")
    .css({
      opacity: 1,
    })
    .show();
  var callback = window.initFunCallback;
  callback && typeof callback === "function" && callback();
  $("html,body").animate({ scrollTop: 0 }, 0);
  $("body").removeClass("overflow");
  $(".default-menu .menu .logo").animate({ opacity: 1 }, 500);
  if (
    location.href.indexOf(".html") < 0 ||
    location.href.indexOf("index.html") > 0 ||
    typeof HOMEPAGE != "undefined"
  ) {
    // $(".loading-mask").fadeOut(0);
    $(".right-car,.left-car").fadeIn("slow");
    // $(".txt-wrap").fadeIn(2000);
    $("#loading-wrap").fadeOut(2000, function () {
      $("#loading-wrap,.loading-mask").remove();
      $("body").removeClass("overflow-hidden-wrap");
      // if ( window.ISWAP) {
      // 鎵嬫満绔� 骞朵笖鏄椤� 鏄剧ず杞﹀姩鐢�
      // 涓嶅崟鍗曟槸鎵嬫満绔�
      $(".banner").addClass("act");
      // }
    });
  } else {
    $("#loading-wrap,.loading-mask")
      .delay(10000)
      .fadeOut(500, function () {
        $("#loading-wrap,.loading-mask").remove();
        $("body").removeClass("overflow-hidden-wrap");
      });
  }
  if (typeof initRbt != "undefined") {
    console.log("鏈哄櫒浜�");
    // 鏈哄櫒浜�
    setTimeout(function () {
      console.log(loadingStorage);
      var hongqi_tag = false;
      // 鏄剧ず鏈哄櫒浜�
      $("#rbt-wrap").empty();
      var rbt = initRbt(document.getElementById("rbt-wrap"));
      // 缂╂斁鏈哄櫒浜�
      rbt.rbtGrp.setAttribute("style", "transform: scale(" + 0.6 + ");");
      // 鎾斁娆㈣繋寮圭獥
      if (loadingStorage != "true") {
        setTimeout(function () {
          rbt.playPop();
        }, 1500);
        hongqi_tag = localStorage.getItem("hongqi_tag");
      } else {
        hongqi_tag = false;
      }
      console.log(hongqi_tag);
      rbt.start(hongqi_tag); // 鎾斁鍑哄満鍔ㄧ敾  false鍚� true 鏄�
      if (!hongqi_tag) {
        // rbt.playPop();
        // sessionStorage.setItem("hongqi_tag", "true");
        localStorage.setItem("hongqi_tag", "true");
      } else {
        // if (window.isWAP768) {
        //     $(".rbt-hide-icon").trigger("click");
        // }
      }
      // $(".rbt-hide-icon").addClass("act");
      var customer_service_wrap = document.getElementById(
        "customer-service-wrap"
      );
      //  var p028d = lDiv(customer_service_wrap, 0, 0, 350, 490);
      //  var p028 = lImg(imgPath + "p028.jpg", p028d, 0, 0, 350, 490);
      //  TweenMax.to(p028d, 0, { autoAlpha: 0, scale: 0.5 });
      //  $("#rbt-wrap").click(function() {
      //      // rbt.addEventListener("click", function() {
      //      TweenMax.to(p028d, 0.5, { autoAlpha: 1, scale: 1, ease: Back.easeOut });
      //      $("#customer-service-wrap").fadeIn();
      //      setTimeout(function() {
      //          $("body").one("click", function() {
      //              $("#customer-service-wrap").fadeOut();
      //              TweenMax.to(p028d, 0.2, { autoAlpha: 0, scale: 0.5 });
      //          });
      //      }, 100);
      //  });
      //  p028d.addEventListener("click", function(e) {
      //      e.stopPropagation();
      //      // TweenMax.to(p028d, 0.2, { autoAlpha: 0, scale: 0.5 });
      //  });
    }, 2000);
  }
  getbanner();
};
// 缁熶竴鍒濆椤甸潰
function initPage() {
  // setTimeout(function() {
  initFun();
  // }, 0)
  // if (
  //     location.href.indexOf(".html") < 0 ||
  //     location.href.indexOf("index.html") > 0||HOMEPAGE
  // ) {} else {

  // }
}

// 绂佹婊戝姩
var mo = function (e) {
  e.preventDefault();
};
window.page_stop = function () {
  document.body.style.overflow = "hidden";
  document.addEventListener("touchmove", mo, { passive: false }); //绂佹椤甸潰婊戝姩
};

/***鍙栨秷婊戝姩闄愬埗***/
window.page_move = function () {
  document.body.style.overflow = ""; //鍑虹幇婊氬姩鏉�
  document.removeEventListener("touchmove", mo, { passive: false });
};

function loadImage(url, callback) {
  var img = new Image(); //閸掓稑缂撴稉鈧稉鐙猰age鐎电钖勯敍灞界杽閻滄澘娴橀悧鍥╂畱妫板嫪绗呮潪锟�    閵嗭拷
  img.src = url;
  if (img.complete) {
    // 婵″倹鐏夐崶鍓у瀹歌尙绮＄€涙ê婀禍搴㈢セ鐟欏牆娅掔紓鎾崇摠閿涘瞼娲块幒銉ㄧ殶閻劌娲栫拫鍐ㄥ毐閺侊拷
    callback && callback(img);
    return; // 閻╁瓨甯存潻鏂挎礀閿涘奔绗夐悽銊ュ晙婢跺嫮鎮妎nload娴滃娆�
  }
  img.onload = function () {
    //閸ュ墽澧栨稉瀣祰鐎瑰本鐦弮璺虹磽濮濄儴鐨熼悽鈺焌llback閸戣姤鏆�
    callback && callback(img);
  };
  img.onerror = function () {
    callback && callback(img);
  };
}

$(function () {
  var bodyLock = true;

  function loading_page_fun(num) {
    // if (num == 100) { return }
    if (typeof loading != "undefined") {
      loading.setP(num);
    }
    if (bodyLock) {
      $("body").show();
      bodyLock = false;
    }
    if (num == 100) {
      $("html,body").animate({ scrollTop: 0 }, 0);
      setTimeout(function () {
        Limg();
        // 寮€濮嬭幏鍙栧鑸暟鎹�/*  */
        getNavData();
      }, 100);
    }
  }

  if (
    (typeof initLoading != "undefined" && location.href.indexOf(".html") < 0) ||
    location.href.indexOf("index.html") > 0 ||
    typeof HOMEPAGE != "undefined"
  ) {
    // var w;
    if (loadingStorage == "true") {
      $("#cti-header").delay(2000).fadeIn(800);
      $(".container").show();
      var swiperArr = ["banner"];
      swiper_generator(swiperArr);
      setTimeout(function () {
        if (window["banner"] && window["banner"].length > 0) {
          window.ISWAP
            ? window["banner"][1].update()
            : window["banner"][0].update();
        }
      }, 100);
      getDataFun();
      getNavData();
      // setTimeout(function () {
      $(".loading-mask").fadeOut(1000);
      $(".txt-wrap").fadeIn(2000);
      // }, 2000);
      setTimeout(function () {
        $(".cartype-name li").eq(0).trigger("click");
      }, 200);
      initPage();
      return;
    }
    function startWorker() {
      for (var i = 0; i <= 100; i++) {
        (function (i) {
          setTimeout(function () {
            loading_page_fun(i);
          }, (i + 1) * 10);
        })(i);
      }
    }

    function stopWorker() {
      w.terminate();
    }
    $("#loading-wrap").animate({ opacity: 1 }, 1000);
    $("#loading-wrap").fadeIn(1000, function () {
      if (
        location.href.indexOf(".html") < 0 ||
        location.href.indexOf("index.html") > 0 ||
        typeof HOMEPAGE != "undefined"
      ) {
        loading.loadbar.style.display = "block";
        startWorker();
      } else {
        // 鍗曠嫭鎺у埗鍔犺浇鏉�
        // loading.loadbar.style.display="none"
        loading_page_fun(100);
      }
    });
    var loading_index_box = document.getElementById("loading-wrap");
    var loading = initLoading(document.getElementById("loading-wrap"));
    // 鍗曠嫭鎺у埗鍔犺浇鏉�
    loading.loadbar.style.display = "none";

    //璁剧疆鍗婂垎姣旀柟娉�0~100
    // loading.setP(0);
    loading.addEventListener("onAniEvt1", function () {
      // 鍒囨崲鑳屾櫙,鏄剧ずlogo
      // $(".loading-bg2").fadeIn(800);
      $("#cti-header").delay(2000).fadeIn(800);
      if (
        location.href.indexOf(".html") < 0 ||
        location.href.indexOf("index.html") > 0 ||
        typeof HOMEPAGE != "undefined"
      ) {
        // loading.playCarAni();
        $(".container").show();
        var swiperArr = ["banner"];
        swiper_generator(swiperArr);
        setTimeout(function () {
          if (window["banner"] && window["banner"].length > 0) {
            window.ISWAP
              ? window["banner"][1].update()
              : window["banner"][0].update();
          }
        }, 100);
        setTimeout(function () {
          $(".loading-mask").fadeOut(1000);
          $(".txt-wrap").fadeIn(2000);
        }, 4000);
        if (window.isWAP768) {
          // 瑕佸垵濮嬪寲椤甸潰鍟�
          initPage();
        }
        console.log("瑕佸垵濮嬪寲椤甸潰鍟�");
        // jiqiren()
      } else {
        // 瑕佸垵濮嬪寲椤甸潰鍟�
        // return;
        initPage();
      }
    });
    // logo姹囪仛瀹屾垚浜嬩欢锛歰nAniEvt2
    loading.addEventListener("onAniEvt2", function () {
      if (
        location.href.indexOf(".html") < 0 ||
        location.href.indexOf("index.html") > 0 ||
        typeof HOMEPAGE != "undefined"
      ) {
        if (!window.ISWAP) {
          $(".loading-bg2").fadeIn(800, function () {
            loading.playCarAni();
          });
        }
      }
    });
    // 姹借溅鍔ㄧ敾瀹屾垚浜嬩欢:onAniEvt3
    loading.addEventListener("onAniEvt3", function () {
      // 鍙湁棣栭〉浼氫娇鐢�
      // 瑕佸垵濮嬪寲椤甸潰鍟�
      initPage();
    });
  } else {
    loading_page_fun(100);
    // 瑕佸垵濮嬪寲椤甸潰鍟�
    initPage();
    console.log("鍒殑椤甸潰鐨勬満鍣ㄤ汉");
    jiqiren();
  }
});
function jiqiren() {
  setTimeout(function () {
    $("#rbt-wrap").empty();
    var rbt = initRbt(document.getElementById("rbt-wrap"));
    // 缂╂斁鏈哄櫒浜�
    rbt.rbtGrp.setAttribute("style", "transform: scale(" + 0.6 + ");");
    // 鎾斁娆㈣繋寮圭獥
    // rbt.playPop();
    var hongqi_tag;
    if (loadingStorage != "true") {
      rbt.playPop();
      hongqi_tag = localStorage.getItem("hongqi_tag");
    } else {
      hongqi_tag = false;
    }
    rbt.start(hongqi_tag); // 鎾斁鍑哄満鍔ㄧ敾  false鍚� true 鏄�
  }, 2000);
}

// 閲嶅啓alert()
function alert(text) {
  var tpl =
    '<div class="g-mask pointer-events-none d-middle-wrap">' +
    '<span class="g-tip-wrap">' +
    text +
    "</span>" +
    "</div>";
  $(tpl).appendTo($("body"));
  setTimeout(function () {
    $(".g-mask").remove();
    // $(".g-mask").one("click", function(e) {
    //     e.stopPropagation();
    //     $(".g-mask").remove();
    // });
  }, 4000);
}
// 鏇存敼鍥�
var changImgSrc = function () {
  var WinWidth = window.WINDOW_WIDTH;
  var srcType = !window.ISWAP ? "pcsrc" : "msrc";
  $("body")
    .find("img")
    .each(function (i, e) {
      if ($(e).parents(".cti-background")) {
        $(e)
          .parents(".cti-background")
          .css("background-image", "url(" + $(e).attr(srcType) + ")");
      }
      var imgSrc = $(e).attr(srcType);
      if (imgSrc) {
        $(e).attr("src", imgSrc);
      }
    });
};
// 閲嶇疆鍥剧墖楂樺害
var resetPicHeiLock = false;
var resetImgHeight = function () {
  var WinWidth = window.WINDOW_WIDTH;
  var type = !window.ISWAP ? "pimgh" : "mimgh";
  var initWidth = !window.ISWAP ? 1920 : 750;
  $("body")
    .find(".reset-img-height")
    .each(function (i, e) {
      var imgH = Number($(e).attr(type));
      if (imgH) {
        $(e).height(WinWidth / (initWidth / imgH));
      }
    });
  if (!resetPicHeiLock) {
    resetPicHeiLock = true;
    setTimeout(function () {
      picOffset();
      resetPicHeiLock = false;
    }, 1000);
  }
};
// 鑾峰彇閿氱偣
function checkUrl() {
  var i = window.location.hash.replace(/#/g, "");
  return $.trim(i);
}
// 璁剧疆cookie
function getCookie(name) {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}
if (!localStorage.getItem("token")) {
  $(".training-menu").hide();
  $(".login-wrap").show();
} else {
  $(".training-menu").show();
  $(".login-wrap").hide();
}
$(function () {
  $(window)
    .resize(function () {
      window.WINDOW_WIDTH = $(window).width();
      window.WINDOW_HEIGHT = $(window).height();
      window.ISWAP = window.WINDOW_WIDTH < 750;
      window.isWAP768 = window.WINDOW_WIDTH <= 768;
      // 鏇存敼鍥剧墖
      changImgSrc();
      // 閲嶇疆鍥剧墖楂樺害
      resetImgHeight();
      // 鏃燽anner鍗曠嫭澶勭悊
      $(".cti-event-detail,.cti-leaving-msg").css({
        "padding-top": $("#cti-header").height(),
      });
      $(".menu-secondlevel-item-wrap").hover(
        function () {},
        function () {
          if (!window.isWAP768) {
            if ($(".menu-secondlevel-item-wrap").hasClass("act")) {
              $("body").trigger("click");
            }
          }
        }
      );
      if (!window.isWAP768) {
        var imgSize = $(window).width() / 1920;
        $("#loading-wrap").css({
          transform: "scale(" + imgSize + ")",
          "transform-origin": " 0 0",
          height: $(window).height() + 1080 * imgSize,
        });
      } else {
        var imgSize = $(window).height() / 1080;
        $("#loading-wrap").css({
          transform: "scale(" + imgSize + ") translateX(-50%)",
          "transform-origin": " 0 0",
        });
      }
    })
    .resize();
});
// 浜岀骇瀵艰埅浜嬩欢
function secondlevelEvents() {
  $(".secondlevel-item-title")
    .unbind("click")
    .click(function () {
      $("#cti-header .menu-icon").trigger("click");
    });
}
// 闅愯棌瀵艰埅
function hideNav() {
  if (window.isWAP768) {
    $("#cti-header").stop().removeClass("show");
    $("body").removeClass("overflow-hidden-wrap");
    $(".menu-secondlevel-item-wrap").removeClass("act");
    $("#cti-header .menu-wrap").stop().fadeOut();
  }
}
// 寮瑰嚭瑙嗛鎴栬€呭浘鐗�
window.global_popup = function (type, src, poster) {
  if (type == "data") {
    typeName = $(src).attr("data-type");
    srcPath = $(src).attr("data-src");
    posterPath = $(src).attr("data-poster");
  } else {
    typeName = type;
    srcPath = src;
  }
  var arr = src.split("/");
  arr.shift();
  arr.shift();
  arr.shift();
  arr.shift();
  arr.push();
  var res_path = arr.join("/");
  if (res_path == "") {
    alert("Coming soon!");
    return;
  }
  var html =
    typeName == "video"
      ? '<video src="' +
        (srcPath ||
          "http://minio-staging.cloud-top.com.cn/videos/cartype.mp4") +
        '" controls="controls" autoplay poster="' +
        poster +
        '"></video>'
      : '<img src="' + srcPath + '" />';

  var tpl =
    '<div class="g-mask g-popup">' +
    '<div class="iconfont iconclose1"></div>' +
    '<div class="ele-wrap">' +
    html +
    "</div>" +
    "</div>";
  $(tpl).appendTo($("body"));
  // setTimeout(function() {
  if (typeName != "video") {
    loadImage(srcPath, function (e) {
      $(".g-popup").find("img").addClass("act");
    });
  }
  $(".g-popup").addClass("act");
  // }, 50)
};
// 鏃堕棿鏍煎紡 -.
var formatTime = function (date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  return (
    [year, month].map(formatNumber).join("-") + "." + [day].map(formatNumber)
  );
};
var formatNumber = function (n) {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

// 鑾峰彇鏍囧噯鏃堕棿
function getTime_normal(time) {
  Date.prototype.format = function (mask) {
    var d = this;

    var zeroize = function (value, length) {
      if (!length) length = 2;

      value = String(value);

      for (var i = 0, zeros = ""; i < length - value.length; i++) {
        zeros += "0";
      }

      return zeros + value;
    };

    return mask.replace(
      /"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|M{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g,
      function ($0) {
        switch ($0) {
          case "d":
            return d.getDate();

          case "dd":
            return zeroize(d.getDate());

          case "ddd":
            return ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"][
              d.getDay()
            ];

          case "dddd":
            return [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ][d.getDay()];

          case "M":
            return d.getMonth() + 1;

          case "MM":
            return zeroize(d.getMonth() + 1);

          case "MMM":
            return [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ][d.getMonth()];

          case "MMMM":
            return [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ][d.getMonth()];

          case "yy":
            return String(d.getFullYear()).substr(2);

          case "yyyy":
            return d.getFullYear();

          case "h":
            return d.getHours() % 12 || 12;

          case "hh":
            return zeroize(d.getHours() % 12 || 12);

          case "H":
            return d.getHours();

          case "HH":
            return zeroize(d.getHours());

          case "m":
            return d.getMinutes();

          case "mm":
            return zeroize(d.getMinutes());

          case "s":
            return d.getSeconds();

          case "ss":
            return zeroize(d.getSeconds());

          case "l":
            return zeroize(d.getMilliseconds(), 3);

          case "L":
            var m = d.getMilliseconds();

            if (m > 99) m = Math.round(m / 10);

            return zeroize(m);

          case "tt":
            return d.getHours() < 12 ? "am" : "pm";

          case "TT":
            return d.getHours() < 12 ? "AM" : "PM";

          case "Z":
            return d.toUTCString().match(/[A-Z]+$/);

          default:
            return $0.substr(1, $0.length - 2);
        }
      }
    );
  };
  var timeNew = new Date(Number(time));
  var a = timeNew.format("hh:mm TT路MMM dd,yyyy");
  return a;
}
// 鑾峰彇瀵艰埅鏁版嵁
function getNavData() {
  var item = $("#cti-header .menu").find("a");
  item.each(function (i, e) {
    var index = $(e).data("index");
    if (index == 0) {
      ajax_hq({
        type: "get",
        url: "nav/index/0",
        // data: formdata,
        success: function (res) {
          if (res.code != 200) {
            return;
          }
          var html = "";
          var car_wrap_html = "";
          for (var i = 0; i < res.data.length; i++) {
            html += "<li>" + res.data[i].data.name + "</li>";
            // 绗簩灞�
            var children = res.data[i].children;

            for (var j = 0; j < children.length; j++) {
              if (j == 0) {
                car_wrap_html += '<div class="swiper-slide flex-wrap-box">';
              }
              car_wrap_html +=
                '<a href="' +
                children[j].data.url +
                '" class="menu-vehicle-item">' +
                '<div class="menu-vehicle-intro">' +
                '<div class="menu-vehicle-title">' +
                children[j].data.name +
                "</div>" +
                "</div>" +
                '<img src="' +
                children[j].data.banner +
                '" alt="" class="menu-vehicle-img" />' +
                "</a>";
              if (j == children.length - 1) {
                car_wrap_html += "</div>";
              }
            }
          }
          $(".menu-vehicles-item-wrap .swiper-wrapper").append(car_wrap_html); // 涓夌骇
          $(".menu-vehicles-tab").html(html); // 浜岀骇
        },
      });
    }
    if (index == 1) {
      ajax_hq({
        type: "get",
        url: "nav/index/1",
        // data: formdata,
        success: function (res) {
          if (res.code != 200) {
            return;
          }
          var html =
            '<div class="secondlevel-item-title secondlevel-special">networks</div><ul class="menu-text-item ff-ul">';
          for (var i = 0; i < res.data.length; i++) {
            html +=
              '<li><a style="background-image:url(' +
              res.data[i].data.banner +
              ')" href="' +
              res.data[i].data.url +
              '"><span>' +
              res.data[i].data.name +
              "</span></a></li>";
          }

          html +=
            '</ul><div class="networks-nav-img networks-nav-swiper"><div class="swiper-container newswiper" id="newswiper"><div class="swiper-wrapper">';
          for (var i = 0; i < res.data.length; i++) {
            html +=
              '<div class="swiper-slide">' +
              '<a href="' +
              res.data[i].data.url +
              '" class="menu-item-a">' +
              '<img  src="' +
              res.data[i].data.banner +
              '" alt="">' +
              "</a>" +
              "</div>";
          }
          html += "</div></div></div>";
          //  $(".ff-ul").html(html);
          $(".menu-network-wrap").html(html);

          // networks 浜岀骇瀵艰埅
          swiper_generator(["networks-nav-swiper"]);
          //  $(".menu-network-wrap ul").delegate("li", "mouseover", function() {
          $(".menu-network-wrap").delegate("li", "mouseover", function () {
            var _i = $(this).index() + 1;
            window["networks-nav-swiper"].slideTo(_i, 0);
            // // 闅愯棌瀵艰埅
            // hideNav();
          });
          // 浜岀骇瀵艰埅浜嬩欢
          secondlevelEvents();
        },
      });
    }
    if (index == 2) {
      ajax_hq({
        type: "get",
        url: "nav/index/2",
        // data: formdata,
        success: function (res) {
          if (res.code != 200) {
            return;
          }
          //  var html = "";
          var html =
            '<div class="secondlevel-item-title secondlevel-special">events</div><ul class="menu-text-item ff-li">';
          for (var i = 0; i < res.data.length; i++) {
            html +=
              '<li><a style="background-image:url(' +
              res.data[i].data.banner +
              ')" href="' +
              res.data[i].data.url +
              '"><span>' +
              res.data[i].data.name +
              "</span></a></li>";
          }

          html +=
            '</ul><div class="networks-nav-img events-nav-swiper"> ' +
            '<div class="swiper-container newswiper" id="newswiper">' +
            '<div class="swiper-wrapper">';
          for (var i = 0; i < res.data.length; i++) {
            html +=
              '<div class="swiper-slide"> ' +
              '<a href="' +
              res.data[i].data.url +
              '" class="menu-item-a">' +
              '<img src="' +
              res.data[i].data.banner +
              '" alt="">' +
              "</a>" +
              "</div>";
          }
          html += "</div></div></div>";
          //  $(".ff-li").html(html);
          $(".menu-event-wrap").html(html);
          // networks 浜岀骇瀵艰埅
          swiper_generator(["events-nav-swiper"]);
          //  $(".menu-event-wrap ul").delegate("li", "mouseover", function() {
          $(".menu-event-wrap").delegate("li", "mouseover", function () {
            var _i = $(this).index() + 1;
            window["events-nav-swiper"].slideTo(_i, 0);
            // // 闅愯棌瀵艰埅
            // hideNav();
          });
          // 浜岀骇瀵艰埅浜嬩欢
          secondlevelEvents();
        },
      });
    }
    if (index == 3) {
      ajax_hq({
        type: "get",
        url: "nav/index/3",
        // data: formdata,
        success: function (res) {
          if (res.code != 200) {
            return;
          }
          var html =
            '<div class="secondlevel-item-title secondlevel-special">about hongqi</div><ul class="menu-text-item idea-html">';
          for (var i = 0; i < res.data.length; i++) {
            html +=
              '<li ><a style="background-image:url(' +
              res.data[i].data.banner +
              ')" href="' +
              res.data[i].data.url +
              '"><span>' +
              res.data[i].data.name +
              "</span></a></li>";
          }
          html +=
            '</ul><div class="networks-nav-img ideal-nav-swiper"><div class="swiper-container newswiper" id="newswiper"><div class="swiper-wrapper">';
          for (var i = 0; i < res.data.length; i++) {
            html +=
              '<div class="swiper-slide">' +
              '<a href="' +
              res.data[i].data.url +
              '" class="menu-item-a">' +
              '<img  src="' +
              res.data[i].data.banner +
              '" alt="">' +
              "</a>" +
              "</div>";
          }
          html += "</div></div></div>";
          $(".menu-ideal-wrap").html(html);
          // networks 浜岀骇瀵艰埅
          swiper_generator(["ideal-nav-swiper"]);
          //  $(".menu-ideal-wrap ul").delegate("li", "mouseover", function() {
          $(".menu-ideal-wrap").delegate("li", "mouseover", function () {
            var _i = $(this).index() + 1;
            window["ideal-nav-swiper"].slideTo(_i, 0);
            // 闅愯棌瀵艰埅
            // hideNav();
          });
          // 浜岀骇瀵艰埅浜嬩欢
          secondlevelEvents();
        },
      });
    }
    if (index == 4) {
      ajax_hq({
        type: "get",
        url: "nav/index/4",
        // data: formdata,
        success: function (res) {
          if (res.code != 200) {
            return;
          }
          var html =
            '<div class="secondlevel-item-title secondlevel-special">TRAINING Center</div><ul class="menu-text-item training-html">';
          for (var i = 0; i < res.data.length; i++) {
            html +=
              '<li><a style="background-image:url(' +
              res.data[i].data.banner +
              ')" href="' +
              res.data[i].data.url +
              '"><span>' +
              res.data[i].data.name +
              "</span></a></li>";
          }
          html +=
            '</ul><div class="networks-nav-img training-nav-swiper"> <div class="swiper-container newswiper" id="newswiper"><div class="swiper-wrapper">';
          for (var i = 0; i < res.data.length; i++) {
            html +=
              '<div class="swiper-slide"> ' +
              '<a href="' +
              res.data[i].data.url +
              '" class="menu-item-a">' +
              '<img  src="' +
              res.data[i].data.banner +
              '" alt="">' +
              "</a>" +
              "</div>";
          }
          html += "</div></div></div>";
          $(".menu-training-wrap").html(html);
          // networks 浜岀骇瀵艰埅
          swiper_generator(["training-nav-swiper"]);
          //  $(".menu-training-wrap ul").delegate("li", "mouseover", function() {
          $(".menu-training-wrap").delegate("li", "mouseover", function () {
            var _i = $(this).index() + 1;
            window["training-nav-swiper"].slideTo(_i, 0);
            // 闅愯棌瀵艰埅
            // hideNav();
          });
          // 浜岀骇瀵艰埅浜嬩欢
          secondlevelEvents();
        },
      });
    }
  });
}

function download(url, name) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob"; // 杩斿洖绫诲瀷blob
  xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var blob = this.response;
      // 杞崲涓€涓猙lob閾炬帴
      var u = window.URL.createObjectURL(new Blob([blob]));
      var a = document.createElement("a");
      a.download = name;
      a.href = u;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };
  xhr.send();
}
$(function () {
  $("body.overflow").addClass("overflow-hidden-wrap");

  // tab鍒囨崲鐐瑰嚮 鍙互閫氱敤
  $(".act-switch li,.act-switch .act-switch-item").click(function () {
    if ($(this).hasClass("act")) {
      return;
    }
    $(this).addClass("act").siblings().removeClass("act");
  });
  //   select涓嬫媺鐐瑰嚮浜嬩欢;
  var tag = "off";
  $(".select-wrap dt").click(function (e) {
    var flag = null;
    if ($(this).parents(".select-wrap").hasClass("open")) {
      flag = true;
    }
    $(".select-wrap").removeClass("open");
    if (flag) {
      $(this).parents(".select-wrap").removeClass("open");
    } else {
      $(this).parents(".select-wrap").addClass("open");
    }
    // $(this).parents('.select-wrap').toggleClass('open')
    // if (tag == "off") {
    //     $(".select-wrap").removeClass("open");
    //     $(this).parents("dl").toggleClass("open");
    //     tag = "on";
    // } else {
    //     $(".select-wrap").removeClass("open");
    //     tag = "off";
    // }
    e.stopPropagation();
  });

  $(".select-wrap dt a").click(function (e) {
    e.stopPropagation();
  });
  $(".select-wrap dd").delegate(".item", "click", function () {
    // $('.select-wrap dd .item').click(function() {
    $(this).parents("dl").toggleClass("open");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    tag = "off";
    var code = $(this).attr("data-code");
    $(this)
      .parents(".select-wrap")
      .find("dt")
      .html($(this).html())
      .attr("data-code", code);
  });

  // 鑿滃崟鐐瑰嚮
  //  $(".menu-icon,.menu-wrap").click(function() {
  // 鍙湁鎵嬫満绔細鏈�
  $("#cti-header .menu-icon").click(function (e) {
    e.stopPropagation();
    //  $(".menu-wrap").stop().toggleClass("show");
    // $("#cti-header").stop().toggleClass("show");
    // $("#cti-header .menu-wrap").stop().fadeToggle();
    if ($("#cti-header").hasClass("show")) {
      if ($(".menu-secondlevel-item-wrap.act").length > 0) {
        $(".menu-secondlevel-item-wrap").removeClass("act");
        $(".menu").stop().fadeIn();
      } else {
        $("#cti-header").stop().removeClass("show");
        $("body").removeClass("overflow-hidden-wrap");
        $(".menu-secondlevel-item-wrap").removeClass("act");
        $("#cti-header .menu-wrap").stop().fadeOut();
      }
    } else {
      $(".menu").stop().fadeIn();
      $("#cti-header").stop().addClass("show");
      $("body").addClass("overflow-hidden-wrap");
      $("#cti-header .menu-wrap").stop().fadeIn();
    }
  });
  // 浜岀骇瀵艰埅鐨勫噺鍙� 鐐瑰嚮闅愯棌浜岀骇瀵艰埅
  // $('.menu-secondlevel-item-wrap').delegate('.secondlevel-item-title', 'click', function() {

  // togglefade
  $(".show-switch").click(function () {
    $(this).toggleClass("act");
  });

  // 鍏抽棴瑙嗛鍥剧墖寮瑰眰
  $("body").delegate(".iconclose1", "click", function () {
    $("body").find(".g-popup").removeClass("act").delay(1000).remove();
  });
  $(".menu-secondlevel-item-wrap").click(function (e) {
    e.stopPropagation();
  });
  $(".menu-secondlevel-item-wrap").hover(
    function () {},
    function () {
      if (!window.ISWAP) {
        if ($(".menu-secondlevel-item-wrap").hasClass("act")) {
          $("body").trigger("click");
        }
      }
    }
  );

  // 搴曢儴鎸夐挳
  $("#cti-footer .button").click(function () {
    if (!$(".agree-wrap .agree-icon").hasClass("act")) {
      alert("Please accept the privacy policy!");
    } else if ($(".email-wrap .email").val().length < 5) {
      alert("Please fill in the correct email address, thank you!");
    } else {
      // 璁㈤槄鎺ュ彛
      var $box = $("#cti-footer");
      var params = {
        email: $box.find(".email").val(),
      };
      // console.log(params);
      // if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(
      if (!REG_EMAIL.test(params.email)) {
        // if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(
        //         params.email
        //     )) {
        alert("Please fill in the correct email address锛�");
        return;
      }
      var formdata = new FormData();
      formdata.append("email", params.email);
      ajax_formData({
        type: "post",
        url: "subscribe",
        data: formdata,
        processData: false,
        contentType: false,
        success: function (data) {
          if (data.code == 200) {
            $box.find(".email").val("");
            $("#cti-footer .agree-icon").trigger("click");
            alert("Congratulations, successful subscription!");
          } else if (data.msg) {
            alert(data.msg);
          }
        },
      });
    }
  });

  // 浜岀礆灏庤埅
  swiper_generator(["menu-vehicles-item-wrap"]);
  $(".menu-vehicles-tab").delegate("li", "click", function () {
    var _i = $(this).index();
    // console.log(_i);
    window["menu-vehicles-item-wrap"].slideTo(_i, 0);

    // if (_i == 2) {
    //   // alert("Coming soon!");
    // } else {
    //   // window["menu-vehicles-item-wrap"].slideTo(_i, 0);
    // }
  });

  // 闂滈枆
  $(".menu-close").click(function (e) {
    e.stopPropagation();
    $(".menu-secondlevel-item-wrap").removeClass("act");
  });
  // 灞曢枊浜岀礆鑿滃柈  hover
  // var yiru = true;
  // $(".menu-secondlevel-item-wrap").hover(function () {
  //   if (yiru == true) {
  //     $(".menu-secondlevel-item-wrap").addClass("act");
  //     yiru = false;
  //   }
  // });
  $(".has-secondlevel").hover(
    function (e) {
      e.stopPropagation();
      var _i = Number($(this).attr("data-index"));
      var leftVal = ($(this).offset().left / window.WINDOW_WIDTH) * 100;
      $(".secondlevel-item")
        .eq(_i)
        .trigger("click")
        .find(".menu-text-item")
        // .css("margin-left", leftVal + "%");
        // .css("margin-left", "14.5%");
        .css("margin-left", "15.5%");
      if (_i == 0) {
        // 濡傛灉灞曞紑鐨勬槸杞﹀瀷
        $(".menu-vehicles-tab").find("li").eq(0).trigger("click");
        if (window["menu-vehicles-item-wrap"]) {
          window["menu-vehicles-item-wrap"].update();
        }
      }
      // if (yiru == true) {
      $(".menu-secondlevel-item-wrap").addClass("act");
      // }
      if (window.isWAP768) {
        $(".menu").stop().fadeOut();
      }
      setTimeout(function () {
        $("body").one("click", function () {
          $(".menu-close").trigger("click");
          $(".menu").stop().fadeIn();
        });
      }, 100);
    }
    // function () {
    //   if (yiru == false) {
    //     setTimeout(function () {
    //       $(".menu-secondlevel-item-wrap").removeClass("act");
    //     }, 1000);
    //   }
    //   yiru = true;
    //   console.log(yiru);
    // }
  );

  // 浜岀骇鑿滃崟鍖呰９
  $(".secondlevel-item").click(function (e) {
    e.stopPropagation();
  });
  // 鐐瑰嚮鐧诲綍
  $(".login-wrap").click(function () {
    var src = window.location.href;
    localStorage.setItem("Url", src);
    location.href = "/pages/login/login.html";
  });
  // $(".menu-text-item li").click(function() {
  // $(".secondlevel-item").delegate("li", "click", function() {
  $(".secondlevel-item").delegate("li", "click", function () {
    // 鐐瑰嚮闅愯棌浜岀骇瀵艰埅
    // $("body").trigger("click");
    // console.log(152, $(".menu-secondlevel-item-wrap.act").length, )
    if (!$(".menu-vehicles-wrap").hasClass("act") && window.isWAP768) {
      $("#cti-header").stop().removeClass("show");
      $("body").removeClass("overflow-hidden-wrap");
      $(".menu-secondlevel-item-wrap").removeClass("act");
      $("#cti-header .menu-wrap").stop().fadeOut();
    }
    // if ($(".menu-secondlevel-item-wrap.act").length > 0) {
    //     $(".menu-secondlevel-item-wrap").removeClass("act");
    //     $(".menu").stop().fadeIn();

    // } else {
    //     $("#cti-header").stop().removeClass("show");
    //     $("body").removeClass("overflow-hidden-wrap");
    //     $(".menu-secondlevel-item-wrap").removeClass("act");
    //     $("#cti-header .menu-wrap").stop().fadeOut();
    // }
    // $("#cti-header").stop().removeClass("show");
    // $("body").removeClass("overflow-hidden-wrap");
    // $(".menu-secondlevel-item-wrap").removeClass("act");
    // $("#cti-header .menu-wrap").stop().fadeOut();
  });

  $(".act-switch").delegate("li", "click", function () {
    if ($(this).hasClass("act")) {
      return;
    }
    $(this).addClass("act").siblings().removeClass("act");
  });
  // 鍚屾剰闅愮鏀跨瓥
  $(".privacy_agree").click(function () {
    localStorage.setItem("privacy", "1");
    $(".agree").hide();
  });

  $(".set_up").click(function () {
    $(".set_up_mask").show();
  });
  $(".set_up_btn").click(function () {
    $(".set_up_mask").hide();
  });
  $(".set_up_close").click(function () {
    $(".set_up_mask").hide();
  });

  // 鐩戝惉瀵艰埅鐐瑰嚮浜嬩欢
  $(".act-switch-item").on("click", "li a", function () {
    //  console.log($(this).attr("href"));
    var data = $(this).attr("href");
    if (data == "javascript:") {
      alert("Coming soon!");
    }
  });
  // 涓€绾у鑸�
  $(".menu").on("click", "a", function () {
    //  console.log($(this).attr("data-index"));
    if ($(this).attr("data-index")) {
    } else {
      var data = $(this).attr("href");
      if (data == "javascript:") {
        alert("Coming soon!");
      }
    }
  });
  $(".menu-ideal-wrap").on("click", "li a", function () {
    var car_wrap = $(this).attr("href");
    if (car_wrap == "javascript:") {
      alert("Coming soon!");
    }
  });
  $(".menu-vehicles-item-wrap").on("click", ".menu-vehicle-item", function () {
    var model_url = $(this).attr("href");
    if (model_url == "javascript:") {
      alert("Coming soon!");
    }
  });
  $(".more-details").on("click", "a", function () {
    var data = $(this).attr("href");
    if (data == "javascript:") {
      alert("Coming soon!");
    }
  });
  $(".hongqi-ideal").on("click", ".column-item a", function () {
    var src = $(this).attr("href");
    if (src == "javascript:") {
      alert("Coming soon!");
    }
  });
  $(".privacy-btn").click(function () {
    $(".privacy_popup").show();
  });
  $(".privacy .close").click(function () {
    $(".privacy_popup").hide();
  });
  // 闅愯棌鏈哄櫒浜�
  $(".rbt-hide-icon").click(function () {
    // $('.rbt-box').fadeToggle();
    // $('.mini-rbt').toggleClass('act');
    $(".rbt-box").addClass("d-pcShow act");
    $(".mini-rbt").addClass("d-wapShow act");
  });
  $(".mini-rbt").click(function () {
    // $('.rbt-box').fadeToggle();
    // $('.mini-rbt').toggleClass('act');
    $("#kefu").click();
  });
  // $(".agree_privacy_btn").click(function() {
  //     $(".privacy_popup").show();
  // });

  // gotop
  $(".go-top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
});

// 鐩戝惉椤甸潰婊氬姩鏄剧ず闅愮寮圭獥
$(window).scroll(function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 200) {
    //  console.log("鎵ц浜�");
    if (!localStorage.getItem("privacy")) {
      $(".agree").delay().fadeIn();
    } else {
      $(".agree").remove();
    }
  }
});
//鍒ゆ柇鏄笉鏄墜鏈烘墦寮€(鎵цcookie寮€鍏�)
var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
  isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
  isAndroid = ua.match(/(Android)\s+([\d.]+)/),
  isMobile = isIphone || isAndroid;
if (isMobile) {
  function toogle(th) {
    var ele = $(th).children(".move");
    if (ele.attr("data-state") == "on") {
      ele.animate(
        {
          left: "7vw",
        },
        300,
        function () {
          ele.attr("data-state", "off");
        }
      );
      $(th).removeClass("on").addClass("off");
      $("#only").click();
    } else if (ele.attr("data-state") == "off") {
      ele.animate(
        {
          left: "4vw",
        },
        300,
        function () {
          $(this).attr("data-state", "on");
        }
      );
      $(th).removeClass("off").addClass("on");
      $("#only").click();
    }
  }

  function btn(th) {
    var ele = $(th).children(".move");
    if (ele.attr("data-state") == "on") {
      ele.animate(
        {
          left: "0",
        },
        300,
        function () {
          ele.attr("data-state", "red_off");
        }
      );
      $(th).removeClass("on").addClass("red_off");
    } else if (ele.attr("data-state") == "red_off") {
      ele.animate(
        {
          left: "4vw",
        },
        300,
        function () {
          $(this).attr("data-state", "on");
        }
      );
      $(th).removeClass("red_off").addClass("on");
    }
  }
} else {
  function toogle(th) {
    var ele = $(th).children(".move");
    if (ele.attr("data-state") == "on") {
      ele.animate(
        {
          left: "1.2vw",
        },
        300,
        function () {
          ele.attr("data-state", "off");
        }
      );
      $(th).removeClass("on").addClass("off");
      $("#only").click();
    } else if (ele.attr("data-state") == "off") {
      ele.animate(
        {
          left: "2.3vw",
        },
        300,
        function () {
          $(this).attr("data-state", "on");
        }
      );
      $(th).removeClass("off").addClass("on");
      $("#only").click();
    }
  }

  function btn(th) {
    var ele = $(th).children(".move");
    if (ele.attr("data-state") == "on") {
      ele.animate(
        {
          left: "0",
        },
        300,
        function () {
          ele.attr("data-state", "red_off");
        }
      );
      $(th).removeClass("on").addClass("red_off");
    } else if (ele.attr("data-state") == "red_off") {
      ele.animate(
        {
          left: "2.3vw",
        },
        300,
        function () {
          $(this).attr("data-state", "on");
        }
      );
      $(th).removeClass("red_off").addClass("on");
    }
  }
}