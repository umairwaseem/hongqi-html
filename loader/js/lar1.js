document.body.addEventListener("mousedown",onth)
document.body.addEventListener("touchstart",onth)

var audoCplay=false
function onth () {
	audoCplay=true
}

var imgPath = "loader/img/";
 

///////////////////////////////////

function initRbt(p) {
  var hongqivo = new Howl({
    src: [imgPath + "hongqi.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.3,
  });
  var mDiv = lDiv(p, 0, 0, 280, 250, "rgba(255,0,0,0.0)");

  var popGrp = lDiv(mDiv, -443 + 80, 40 + 10, 670, 160);
  var pop = lDiv(popGrp, 0, 0, 670, 160);
  pop.style.cssText += "border-radius: 15px;";

  var p029d = lDiv(pop, 0, 0, 503, 117);
  var p029 = lImg(imgPath + "p029.png", p029d, 0, 0, 503, 117);
  var p030 = lImg(imgPath + "p030.png", p029d, 320 - 2, 106 - 1, 117, 10);

  var p032d = lDiv(pop, 0, 0);
  var p032 = lImg(imgPath + "p032.png", p032d, 1, 0, 486, 20);
  var p033 = lImg(imgPath + "p033.png", p032d, 0, 80, 483, 37);

  var p031 = lImg(imgPath + "p031.png", pop, 9, 7, 452, 103);

  pop.sp = lSpan(
    "Welcome to the official website of Hongqi.If you have <br/>any questions, please click me for consultation.",
    pop,
    20,
    40,
    15,
    "#fff"
  );
  //pop.sp.style.position=""

  var charsArr = new SplitText(pop.sp, { type: "chars" });

  pop.tl = new TimelineMax({ repeat: -0, paused: true });
  pop.tl.to(charsArr.chars, 0, { autoAlpha: 0, scale: 1 });
  pop.tl.to(charsArr.chars, 0.1, {});
  pop.tl.staggerTo(charsArr.chars, 0.3, { autoAlpha: 1, scale: 1 }, 0.08);
  pop.tl.render(0);
  //pop.tl.play()

  //spArr[i].st1 = new SplitText(spArr[i].sp1, {type:"chars"})
  //spArr[i].tl.to(spArr[i].st2.chars,0,{autoAlpha:0,scale:2,x:10})

  mDiv.rbtGrp = lDiv(mDiv, 0, 0);

  //TweenMax.to(mDiv.rbtGrp,0,{scale:0.5})

  var p024 = lDiv(mDiv.rbtGrp, -12, 97, 280, 280);
  p024.d1 = lDiv(p024, 0, 0, 280, 280);
  p024.img = lImg(imgPath + "p024.png", p024.d1, 0, 0, 280, 280);

  var p025 = lDiv(mDiv.rbtGrp, 16, 122, 227, 227);
  p025.d1 = lDiv(p025, 0, 0, 227, 227);
  p025.img = lImg(imgPath + "p025.png", p025.d1, 0, 0, 227, 227);

  //var p025 = lImg(imgPath+"p025.png",mDiv,27,112,227,227)

  var rbt_msk = lDiv(mDiv.rbtGrp, 0, -100, 255, 236 + 100);

  var rbt = lDiv(rbt_msk, 0, 0, 255, 236);
  var body = lDiv(rbt, 100, 124, 59, 68);
  var p010 = lImg(imgPath + "p010.png", body, 0, 0, 59, 59);
  var p011 = lImg(imgPath + "p011.png", body, 41, 43, 12, 25);
  var p013 = lImg(imgPath + "p013.png", body, 5, 44, 14, 23);
  var lr = lDiv(body, -34, 6, 45, 72);
  var p015 = lImg(imgPath + "p015.png", lr, 21, 0, 18, 25);
  var p016 = lImg(imgPath + "p016.png", lr, 0, 15, 35, 57);
  //var cp = lImg(imgPath+"cp.png",lr,38,5,7,7)
  //var cp = lImg(imgPath+"cp.png",lr,28,19,7,7)
  var rr = lDiv(body, 54, 6, 39, 72);
  rr.style.zIndex = 1;
  var p017 = lImg(imgPath + "p017.png", rr, 0, 0, 18, 22);
  var p018 = lDiv(rr, 5, 15, 34, 57);
  p018.img = lImg(imgPath + "p018.png", p018, 0, 0, 34, 57);
  //var cp = lImg(imgPath+"cp.png",rr,2,5,7,7)
  //var cp = lImg(imgPath+"cp.png",rr,11,19,7,7)

  var head = lDiv(body, -45, -106, 149, 112);
  var p019 = lImg(imgPath + "p019.png", head, 22, 24, 106, 75);
  var bq = lDiv(head, 0, 0, 74, 42);
  var p020 = lImg(imgPath + "p020.png", bq, 47 + 38, 27 + 52, 14, 15);
  var p021 = lImg(imgPath + "p021.png", bq, 54 + 38, 52, 20, 18);
  var p022 = lImg(imgPath + "p022.png", bq, 38, 52, 20, 19);
  var p021b = lDiv(bq, 38, 60, 20, 3, "#2795b6");
  p021b.style.borderRadius = "4px";
  var p022b = lDiv(bq, 92, 60, 20, 3, "#2795b6");
  p022b.style.borderRadius = "4px";

  var smx = lDiv(bq, 20, 25, 111, 76);
  smx.style.overflow = "hidden";
  smx.l1 = lDiv(smx, 0, -20, 111, 30, "#1688a3");
  var p023 = lImg(imgPath + "p023.png", head, 0, 0, 149, 112);
  //var cp = lImg(imgPath+"cp.png",head,75,99,7,7)

  var sd = lDiv(rbt, 78, 238, 107, 8, "#000");
  sd.style.borderRadius = "100%";
  TweenMax.to(sd, 0, { webkitFilter: "blur(10px)" });
  TweenMax.to(head, 0, { transformOrigin: "50% 90%" });
  TweenMax.to(lr, 0, { transformOrigin: "38px 5px" }, 0);
  TweenMax.to(p016, 0, { transformOrigin: "90% 3px" }, 0);
  TweenMax.to(rr, 0, { transformOrigin: "2px 5px" }, 0);
  TweenMax.to(p018, 0, { transformOrigin: "5px 3px" }, 0);
  TweenMax.to(p018.img, 0, { transformOrigin: "5px 3px" }, 0);

  var leg = lDiv(rbt, 95, 187, 69, 58);
  var p012 = lImg(imgPath + "p012.png", leg, 38, 0, 31, 57);
  var p014 = lImg(imgPath + "p014.png", leg, 0, 0, 33, 58);

  var p026 = lDiv(mDiv.rbtGrp, -7, 0, 277, 244);
  p026.img = lImg(imgPath + "p026.png", p026, 0, 0, 277, 244);

  var imgArr = [
    p026.img,
    p014,
    p012,
    p023,
    p022,
    p021,
    p020,
    p019,
    p018,
    p017,
    p016,
    p015,
    p013,
    p011,
    p010,
    p024.img,
    p025.img,
  ];

  TweenMax.to(mDiv, 0, { autoAlpha: 0 });
  // console.log(imgArr);
  lOnAllComplete(imgArr, function () {
    //console.log("rbtLoadCom");
    TweenMax.to(mDiv, 0.3, { autoAlpha: 1 });
  });

  var ps01 = lPsEf(
    mDiv.rbtGrp,
    0,
    180,
    10,
    [imgPath + "p027.png"],
    function (tl, img, i) {
      tl.to(img, 0, {
        x: 24 * i,
        scaleX: lRandomRange(0.2, 0.7),
        scaleY: lRandomRange(0.2, 1),
      });
      tl.to(img, lRandomRange(0.3, 0.7), { y: -350, ease: Power0.easeNone });

      var alphaT = 0.1;
      tl.to(img, 0, { autoAlpha: 0 }, 0);
      tl.to(img, alphaT, { autoAlpha: lRandomRange(0.3, 1) }, 0);
      tl.to(img, alphaT, { autoAlpha: 0 }, "-=" + alphaT);
    },
    true
  );

  //ps01.play()

  var p026tl = new TimelineMax({ repeat: -1, paused: true });
  p026tl.to([p026.img, p024.img], 0, { autoAlpha: 1 });
  p026tl.to([p026.img, p024.img], 0.1, { autoAlpha: 0.5 });
  p026tl.render(0);
  p026tl.play();

  //寰呮満
  var tl1 = new TimelineMax({ repeat: -1, paused: true });
  tl1.to(body, 1, { y: 3, ease: yoyoEaseInOut_pw2 });
  tl1.to(lr, 1, { rotation: 3, ease: yoyoEaseInOut_pw2 }, 0);
  tl1.to(p016, 1, { rotation: 3, ease: yoyoEaseInOut_pw2 }, 0);
  tl1.to(rr, 1, { rotation: -3, ease: yoyoEaseInOut_pw2 }, 0);
  tl1.to(p018, 1, { rotation: -3, ease: yoyoEaseInOut_pw2 }, 0);
  tl1.to(head, 1, { y: -1, ease: yoyoEaseInOut_pw2 }, 0);
  tl1.render(0);
  //tl1.play()

  var tl2 = new TimelineMax({ repeat: -1, paused: true });
  tl2.to(bq, 0, { autoAlpha: 1 });
  tl2.to(bq, 0.1, { autoAlpha: 0.5 });
  tl2.to(bq, 0, { autoAlpha: 1 });
  tl2.to(bq, 0.1, { autoAlpha: 0.5 });
  tl2.render(0);
  //tl2.play()

  TweenMax.to(smx.l1, 0, { autoAlpha: 0.3 });
  var tl3 = new TimelineMax({ repeat: -1, paused: true });
  tl3.to(smx.l1, 1, { y: 76 + 20, ease: Power0.easeNone });
  tl3.render(0);
  //tl3.play()

  var tl4 = new TimelineMax({ repeat: -1, paused: true });
  tl4.to(p024.d1, 0, { rotationX: 75 });
  tl4.to(p025.d1, 0, { rotationX: 75 });
  tl4.to(p024.img, 2.5, { rotation: 360, ease: Power0.easeNone }, 0);
  tl4.render(0);
  //tl4.play()

  rbt_msk.style.overflow = "hidden";
  //showup
  var tl5 = new TimelineMax({ repeat: -0, paused: true });
  tl5.to(p025, 0, { autoAlpha: 0, scale: 0.1 });
  tl5.to(p024, 0, { autoAlpha: 0, scale: 0.1 });
  tl5.to(p026, 0, { autoAlpha: 0, scaleX: 0.1 });
  tl5.to(sd, 0, { autoAlpha: 0 });
  tl5.to(ps01, 0, { autoAlpha: 0 });
  tl5.to(rbt, 0, { y: 350 });

  tl5.to(p024, 1, {
    autoAlpha: 1,
    scale: 1,
    ease: Back.easeOut,
    onStart: function () {
      if (isplayShowup == false) return;
      rbt_msk.style.overflow = "hidden";
      TweenMax.delayedCall(0.5, function () {
        TweenMax.to(ps01, 1, { autoAlpha: 1 });
        ps01.play();
        // console.log("=============");
      });
    },
  });
  tl5.to(p025, 1, { autoAlpha: 1, scale: 1 }, "-=0.5");
  tl5.to(p026, 1, { autoAlpha: 1, scale: 1 }, "-=1");
  tl5.to(rbt, 0.3, {
    y: 10,
    ease: Power1.easeOut,
    onComplete: function () {
      rbt_msk.style.overflow = "";
    },
  });
  tl5.to(rbt, 0.25, { y: 90, ease: Power1.easeIn });
  tl5.to(rbt, 0.1, { scaleY: 0.9, scaleX: 1.1, transformOrigin: "50% 100%" });
  tl5.to(rbt, 1, {
    scaleX: 1,
    scaleY: 1,
    ease: Elastic.easeOut,
    onStart: function () {
      if (isplayShowup == false) return;
      TweenMax.to(sd, 0.3, { autoAlpha: 1 });
      TweenMax.to(ps01, 0.3, {
        autoAlpha: 0,
        onComplete: function () {
          ps01.stop();
        },
      });
    },
  });
  tl5.to(
    p026,
    0.5,
    {
      autoAlpha: 0,
      ease: Power1.easeIn,
      scaleY: 0.8,
      transformOrigin: "50% 100%",
    },
    "-=1.6"
  );
  tl5.to(p025, 0.5, { autoAlpha: 0 }, "-=1.3");
  tl5.to(p024, 0.5, { scale: 1.3, autoAlpha: 0, ease: Power1.easeIn }, "-=1.2");

  tl5.to(rbt, 2, {});
  tl5.render(0);

  //p029d
  //p031
  // var p029 = lImg(imgPath+"p029.png",p029d,0,0,503,117)
  // var p030 = lImg(imgPath+"p030.png",p029d,320-2,106-1,117,10)
  // var p031 = lImg(imgPath+"p031.png",pop,9,7,452,103)
  //TweenMax.to(target,1,{clip:"rect(top, right, bottom, left)"})
  //var p032 = lImg(imgPath+"p032.png",p029d,0,0,486,20)
  //var p033 = lImg(imgPath+"p033.png",p029d,0,80,483,37)

  var poptl2 = new TimelineMax({ repeat: -0, paused: true });
  poptl2.to(p029d, 0, { clip: "rect(0px, 503px, 117px, 503px)" });
  poptl2.to(p031, 0, { clip: "rect(0px, 0px, 103px, 0px)" });
  poptl2.to(popGrp, 0, { autoAlpha: 0 });
  poptl2.to([p032d, pop.sp], 0, { autoAlpha: 0 });

  poptl2.to(popGrp, 0.1, { autoAlpha: 1 });
  poptl2.to(p029d, 1, { clip: "rect(0px, 503px, 117px, 0px)" });
  poptl2.to(p031, 1, { clip: "rect(0px, 452px, 103px, 0px)" }, "-=0.4");
  poptl2.to([p032d], 0.5, { autoAlpha: 0.8 });

  poptl2.to([pop.sp], 0, { autoAlpha: 1 }, "-=1.2");
  poptl2.to(
    p029d,
    0,
    {
      onStart: function () {
        pop.tl.restart();
        //if(audoCplay==true) hongqivo.play()
      },
    },
    "-=1.2"
  );

  poptl2.to([p032d], 7, {});

  poptl2.to([p032d, pop.sp], 0.5, { autoAlpha: 0 });
  poptl2.to(p031, 0.5, { clip: "rect(0px, 0px, 103px, 0px)" }, "-=0.3");
  poptl2.to(p029d, 0.5, { clip: "rect(0px, 503px, 117px, 503px)" }, "-=0.2");
  poptl2.to(popGrp, 0.1, { autoAlpha: 0 });

  // poptl2.to(pop,0,{autoAlpha:0,scale:0.1,transformOrigin:'80% 50%'})
  // poptl2.to(pop,0.1,{})
  // poptl2.to(pop,0.5,{autoAlpha:1,scale:1,ease:Back.easeOut,onStart:function() {

  // }})

  //poptl2.to(pop,8,{})
  //poptl2.to(pop,0.3,{autoAlpha:0,scale:0.1})
  poptl2.render(0);
  //poptl2.play()
  //curFlipPage.aniArr.push(poptl)

  var poptl1 = new TimelineMax({ repeat: -1, paused: true });
  poptl1.to(p030, 0.3, { x: 7, ease: Power0.easeNone });
  poptl1.render(0);

  var poptl3 = new TimelineMax({ repeat: -1, paused: true });
  poptl3.to([p029d, p031], 0, { autoAlpha: 1 });
  poptl3.to([p029d, p031], 0.08, { autoAlpha: 0.8 });
  poptl3.render(0);

  var poptl4 = new TimelineMax({ repeat: -1, paused: true });
  poptl4.to(p032, 0, { clip: "rect(0px, 0px, 20px, -40px)" });
  poptl4.to(p032, 1.5, {
    clip: "rect(0px, 526px, 20px, 486px)",
    ease: Power0.easeNone,
  });

  ////var p033 = lImg(imgPath+"p033.png",pop,0,80,483,37)
  var poptl5 = new TimelineMax({ repeat: -1, paused: true });
  poptl5.to(p033, 0, { clip: "rect(0px, 523px, 37px, 483px)" });
  poptl5.to(p033, 2, {
    clip: "rect(0px, 0px, 37px, -40px)",
    ease: Power0.easeNone,
  });

  mDiv.playPop = function () {
    poptl3.play();
    poptl4.play();
    poptl5.play();
    poptl1.play();
    hongqivo.stop();
    pop.tl.stop();
    poptl2.restart();

    TweenMax.delayedCall(10, function () {
      poptl3.stop();
      poptl4.stop();
      poptl5.stop();
      poptl1.stop();
    });
  };

  //tl5.progress(1)

  //鎷涙墜
  var tl6 = new TimelineMax({ repeat: -0, paused: true });
  tl6.to(head, 0.3, { rotation: -20 });
  tl6.to(
    rr,
    0.5,
    {
      rotation: -110,
      ease: Back.easeOut,
      onStart: function () {
        TweenMax.to(p018.img, 0, { scaleX: -1 });
        TweenMax.to(p018.img, 0, { rotation: -50 });
      },
    },
    "-=0.3"
  );
  tl6.to(p018, 0.3, { rotation: -30, ease: yoyoEaseInOut_pw2 }, "-=0.3");
  tl6.to(p018, 0.3, { rotation: -30, ease: yoyoEaseInOut_pw2 });
  tl6.to(p018, 0.3, { rotation: -30, ease: yoyoEaseInOut_pw2 });

  tl6.to(rr, 0.5, {
    rotation: 0,
    onStart: function () {
      TweenMax.to(p018.img, 0, { scaleX: 1 });
      TweenMax.to(p018.img, 0, { rotation: 0 });
    },
  });
  tl6.to(head, 0.5, { rotation: 0 }, "-=.3");

  tl6.to(head, 1, {});
  tl6.render(0);
  //tl6.play()

  //zhayan
  var tl7 = new TimelineMax({ repeat: -1, paused: true });
  tl7.to([p021, p022], 0, { autoAlpha: 1 });
  tl7.to([p021b, p022b], 0, { autoAlpha: 0 });

  tl7.to(p022, 0.5, {});

  tl7.to([p021b, p022b], 0, { autoAlpha: 1 });
  tl7.to([p021, p022], 0, { autoAlpha: 0 });
  tl7.to(p022, 0.1, {});
  tl7.to([p021b, p022b], 0, { autoAlpha: 0 });
  tl7.to([p021, p022], 0, { autoAlpha: 1 });

  tl7.to(p022, 1, {});

  tl7.to([p021b, p022b], 0, { autoAlpha: 1 });
  tl7.to([p021, p022], 0, { autoAlpha: 0 });
  tl7.to(p022, 0.1, {});
  tl7.to([p021b, p022b], 0, { autoAlpha: 0 });
  tl7.to([p021, p022], 0, { autoAlpha: 1 });

  tl7.to(p022, 2, {});

  tl7.to([p021b, p022b], 0, { autoAlpha: 1 });
  tl7.to([p021, p022], 0, { autoAlpha: 0 });
  tl7.to(p022, 0.1, {});
  tl7.to([p021b, p022b], 0, { autoAlpha: 0 });
  tl7.to([p021, p022], 0, { autoAlpha: 1 });

  tl7.to(p022, 0.2, {});

  tl7.to([p021b, p022b], 0, { autoAlpha: 1 });
  tl7.to([p021, p022], 0, { autoAlpha: 0 });
  tl7.to(p022, 0.1, {});
  tl7.to([p021b, p022b], 0, { autoAlpha: 0 });
  tl7.to([p021, p022], 0, { autoAlpha: 1 });

  tl7.to(p022, 1, {});
  tl7.render(0);

  var isplayShowup = true;
  mDiv.start = function (playShowup) {
    tl7.play();

    tl2.play();
    tl3.play();
    tl4.play();
    isplayShowup = playShowup;
    if (playShowup == false) {
      tl5.progress(1);
      tl5.stop();
      TweenMax.to(ps01, 0, {
        autoAlpha: 0,
        onComplete: function () {},
      });
      ps01.stop();
      onAniCom();
    } else {
      tl5.play();
      TweenMax.delayedCall(2.5, function () {
        tl6.restart();
      });

      TweenMax.delayedCall(4.5, function () {
        onAniCom();
      });
    }

    var lastAct = 1;
    var isOnAniCom = false;

    function onAniCom() {
      if (isOnAniCom == true) return;
      isOnAniCom = true;
      tl1.stop();
      var r = Math.random();
      //console.log(r);
      if (r >= 0.5 && lastAct != 1) {
        //zhaoshou
        tl6.restart();
        TweenMax.delayedCall(1.6, function () {
          isOnAniCom = false;
          onAniCom();
        });
        lastAct = 1;
      } else {
        tl1.play();
        TweenMax.delayedCall(lRandomRange(2, 5), function () {
          isOnAniCom = false;
          onAniCom();
        });
        lastAct = 0;
      }
    }
  };

  return mDiv;
}

///////////////////////////////////

function initLoading(p) {
  var ef03 = new Howl({
    src: [imgPath + "ef03.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.3,
  });
  var ef04 = new Howl({
    src: [imgPath + "ef04.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.05,
  });
  var ef05 = new Howl({
    src: [imgPath + "ef05.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.3,
  });

  var pW = 1920;
  var pH = 1080;
  var mainDiv = lDiv(p, 0, 0, 1920, 1080);
  mainDiv.style.overflow = "hidden";

  //var p002 = lImg(imgPath+"p002.jpg",mainDiv,0,0,1920,1080)
  //var p001 = lImg(imgPath+"p001.jpg",mainDiv,0,0,1920,1080)
  //TweenMax.to(p001,0,{autoAlpha:0})
  //var p003 = lImg(imgPath+"p003.png",mainDiv,190,142,1541,666)

  //var head = lDiv(mainDiv,0,0,1920,150,"#f3f3f3")
  //TweenMax.to(head,0,{y:-150})

  var lw = lWaveEf(
    imgPath + "p003.png",
    mainDiv,
    190,
    142,
    1541,
    666,
    5,
    true,
    function (tl, img, i) {
      //console.log(i);

      tl.to(img, 2.0, { x: 10, y: 60, ease: Power1.easeInOut });
      tl.to(img, 2.0, { x: 0, y: 0, ease: Power1.easeInOut });
    }
  );
  lw.style.width = "1541px";
  lw.style.height = "666px";

  var loadbar = lDiv(mainDiv, 0, 853);
  // loadbar.l1 = lDiv(loadbar, 0, 16, 815, 1, "#dd6264")
  // loadbar.l2 = lDiv(loadbar, 1075, 16, 815 + 30, 1, "#dd6264");
  // loadbar.sp = lSpan("loading..." + "<span id='ptext'>100</span>" + "%", loadbar, 797, 0, 25, "#dd6264")
  // #891010 loading 瀛椾綋澶у皬14px  rgb(137 16 16)
  loadbar.l1 = lDiv(loadbar, 0, 12, 850, 1, "#891010");
  loadbar.l2 = lDiv(loadbar, 1075, 12, 850 + 30, 1, "#891010");
  // loadbar.sp = lSpan("loading..." + "<span id='ptext'>100</span>" + "%", loadbar, 797, 0, 16, "#891010")
  loadbar.sp = lSpan(
    "loading..." + "<span id='ptext'>100</span>" + "%",
    loadbar,
    800,
    0,
    16,
    "#891010"
  );
  loadbar.ptext = document.getElementById("ptext");
  loadbar.sp.style.width = "300px";
  loadbar.sp.style.textAlign = "center";

  mainDiv.loadbar = loadbar;

  loadbar.tl = new TimelineMax({ repeat: -0, paused: true });
  loadbar.tl.to(loadbar.ptext, 0, { innerHTML: "0" });
  loadbar.tl.to(loadbar.ptext, 3, {
    innerHTML: "100",
    roundProps: "innerHTML",
    ease: Power0.easeNone,
  });
  loadbar.tl.to(loadbar, 1, { autoAlpha: 0 });
  loadbar.tl.render(0);
  //loadbar.tl.play()

  var tl1;
  var aniCom = false;
  var ldCom = false;
  mainDiv.setP = function (txt) {
    loadbar.ptext.innerHTML = txt;
    if (txt >= 100 && ldCom == false) {
      TweenMax.to(loadbar, 1, { autoAlpha: 0 });
      if (tl1 != undefined) {
        tl1.play();
      }

      ldCom = true;
    }
    if (txt >= 100 && aniCom == true) {
    }
  };

  //var logo = lImg(imgPath+"p000.png",mainDiv,0,0)
  var starPoint = { x: 884, y: 481 };

  // var logoPng = lDiv(mainDiv, starPoint.x, starPoint.y, 151, 116)
  var logoPng = lDiv(mainDiv, starPoint.x, starPoint.y, 151, 134);
  logoPng.img = lImg(imgPath + "p000.png", logoPng, 0, 0);
  logoPng.style.overflow = "hidden";

  TweenMax.to(logoPng, 0, { autoAlpha: 0 });
  //433,-24,0.65
  var p004d = lDiv(mainDiv, 899, 516, 1000, 401);
  var p004 = lImg(imgPath + "p004.png", p004d, 0, 0, 1000, 401);
  //var p009 = lImg(imgPath+"p009.png",p004d,0,0,856,296)
  // 杞︽祦鍏�
  var p009 = lHighlightAni(imgPath + "p009.png", p004d, 0, 0, 856, 296, {
    hlw: 80, //楂樺厜瀹�
    hlr: 25, //楂樺厜瑙�
    blur: 8, //妯＄硦
    brightness: 1.3, //楂樹寒
    tweenObj: { time: 2, ease: Power0.easeNone, delay: 1 },
  });

  var ass136c1 = lImg(imgPath + "ass136.png", p004d, 43, -42);
  var ass136c2 = lImg(imgPath + "ass136.png", p004d, -236, -38);

  p004d.lt = lDiv(p004d, 0, 0);
  var p006c1d = lDiv(p004d.lt, 409, 213, 153, 153);
  var p006c1 = lImg(imgPath + "p006.png", p006c1d, 0, 0, 153, 153);

  var p006c2d = lDiv(p004d.lt, 721, 178, 153, 153);
  var p006c2 = lImg(imgPath + "p006.png", p006c2d, 0, 0, 153, 153);

  TweenMax.to(p006c1d, 0, { rotationY: 59, scale: 0.96 });
  TweenMax.to(p006c2d, 0, { rotationY: 67, scale: 0.74 });

  var tl2 = new TimelineMax({ repeat: 0, paused: true });
  tl2.to([ass136c1, ass136c2], 0, { autoAlpha: 0 });

  tl2.to(p004d, 0, { x: 433 * 1.7, y: -24 * 1.7, scale: 1 - (1 - 0.65) * 1.7 });
  tl2.to(p004d, 3, {
    x: 0,
    y: 0,
    scale: 1,
    ease: Elastic.easeOut.config(0.05, 0.9),
  });
  tl2.to(
    [p006c1, p006c2],
    3,
    { rotation: -360 * 3, ease: Elastic.easeOut.config(0.05, 0.9) },
    "-=3"
  );

  tl2.to([ass136c1, ass136c2], 0, { autoAlpha: 1 }, "-=1");
  tl2.to([ass136c1, ass136c2], 0.1, { autoAlpha: 0 }, "-=1");
  tl2.to([ass136c1, ass136c2], 0, { autoAlpha: 1 }, "-=0.9");
  tl2.to([ass136c1, ass136c2], 0.1, { autoAlpha: 0 }, "-=0.9");
  tl2.to([ass136c1, ass136c2], 0.3, { autoAlpha: 1 }, "-=0.8");

  tl2.to(p004d, 1, {
    onStart: function () {
      // console.log("onAniEvt3");
      var evt = document.createEvent("Event");
      evt.initEvent("onAniEvt3", false, false);
      mainDiv.dispatchEvent(evt);
    },
  });
  //tl2.pause()

  //tl2.play()

  //
  TweenMax.to(p004d, 0, {
    x: 433 * 1.7,
    y: -24 * 1.7,
    scale: 1 - (1 - 0.65) * 1.7,
  });

  var p005d = lDiv(mainDiv, 112, 565, 752, 296);
  var p005 = lImg(imgPath + "p005.png", p005d, 0, 0, 752, 296);
  //var p008 = lImg(imgPath+"p008.png",p005d,0,0,751,282)

  var p008 = lHighlightAni(imgPath + "p008.png", p005d, 0, 0, 751, 282, {
    reverse: true,
    hlw: 80, //楂樺厜瀹�
    hlr: 25, //楂樺厜瑙�
    blur: 8, //妯＄硦
    brightness: 1.3, //楂樹寒
    tweenObj: { time: 2, ease: Power0.easeNone, delay: 1 },
  });

  var ass136 = lImg(imgPath + "ass136.png", p005d, 270, -94);

  //rotateY(49deg) scale(0.66)
  p005d.lt = lDiv(p005d, 0, 0);
  var p006c3d = lDiv(p005d.lt, 376, 129, 153, 153);
  var p006c3 = lImg(imgPath + "p006.png", p006c3d, 0, 0, 153, 153);

  var p006c4d = lDiv(p005d.lt, 78, 117, 153, 153);
  var p006c4 = lImg(imgPath + "p006.png", p006c4d, 0, 0, 153, 153);

  TweenMax.to(ass136, 0, { scale: 0.5 });
  TweenMax.to(p006c3d, 0, { rotationY: 49, scale: 0.66 });
  TweenMax.to(p006c4d, 0, { rotationY: 57, scale: 0.53 });

  var tl3 = new TimelineMax({ repeat: 0, paused: true });
  tl3.to([ass136], 0, { autoAlpha: 0 });

  tl3.to(p005d, 0, { x: -358 * 2.1, y: -9 * 2.1, scale: 1 - (1 - 0.75) * 2.1 });
  tl3.to(p005d, 3, {
    x: 0,
    y: 0,
    scale: 1,
    ease: Elastic.easeOut.config(0.05, 0.9),
  });
  tl3.to(
    [p006c3, p006c4],
    3,
    { rotation: 360 * 4, ease: Elastic.easeOut.config(0.05, 0.9) },
    "-=3"
  );
  tl3.to([ass136], 0, { autoAlpha: 1 }, "-=1");
  tl3.to([ass136], 0.1, { autoAlpha: 0 }, "-=1");
  tl3.to([ass136], 0, { autoAlpha: 1 }, "-=0.9");
  tl3.to([ass136], 0.1, { autoAlpha: 0 }, "-=0.9");
  tl3.to([ass136], 0.3, { autoAlpha: 1 }, "-=0.8");
  tl3.to(p005d, 1, {});
  tl3.render(0);

  //tl3.play()
  //tl2.play()
  //p009.tl.play()
  //p008.tl.play()

  //translate3d(-358px, -9px, 0px) scale(0.75)

  //var p007 = lImg(imgPath+"p007.png",mainDiv,0,633,1920,229)

  var ptcDiv = lDiv(mainDiv, 0, 0);
  var logocvs = lImgToCanvas(
    imgPath + "p000.png",
    ptcDiv,
    starPoint.x,
    starPoint.y,
    onCvsCom
  );
  TweenMax.to(logocvs, 0, { autoAlpha: 0 });

  var imgW = 151;
  // var imgH = 116
  var imgH = 134;
  var pointD = 9;
  var pointW = 4;

  var curPX = 0;
  var curpY = 0;
  var pointArr = [];
  var curPoint;
  var curEndPoint;
  var tmpColor;
  var tmpColor2;
  var maxAlf = pointD * pointD * 255;
  var tR, tG, tB;
  var pointDL;

  function onCvsCom() {
    var imgData = logocvs.c2d.getImageData(0, 0, imgW, imgH);
    //console.log(imgData);

    //for (var i = 0; i < imgData.data.length; i+=4) {

    //鏋勯€犵偣
    for (var i = 0; i < imgData.data.length; i += 4) {
      //console.log(curPX,curpY,imgData.data[i]);
      if (curPX % pointD == 0 && curpY % pointD == 0) {
        //缁撴灉鐐�
        curEndPoint = lCanvas(
          ptcDiv,
          curPX + starPoint.x,
          curpY + starPoint.y,
          pointD,
          pointD
        );
        curEndPoint.c2d.drawImage(
          logocvs,
          curPX,
          curpY,
          pointD,
          pointD,
          0,
          0,
          pointD,
          pointD
        );
        //curEndPoint.style.borderRadius="100%"

        tR = tG = tB = 0;
        tmpColor = curEndPoint.c2d.getImageData(0, 0, pointD, pointD);
        tmpColor2 = 0;
        pointDL = 0;
        for (var j = 0; j < tmpColor.data.length; j += 4) {
          tmpColor2 += tmpColor.data[j + 3]; //璁＄畻alf闃堝€�
          //console.log(tmpColor.data[j+3])
          if (tmpColor.data[j + 3] != 0) {
            //棰滆壊娣峰悎
            tR += tmpColor.data[j];
            tG += tmpColor.data[j + 1];
            tB += tmpColor.data[j + 2];
            pointDL += 1;
          }
        }

        if (tmpColor2 != 0) {
          tR = parseInt(tR / pointDL);
          tG = parseInt(tG / pointDL);
          tB = parseInt(tB / pointDL);

          curPoint = lDiv(
            ptcDiv,
            curPX,
            curpY,
            pointW,
            pointW,
            "rgb(" + tR + "," + tG + "," + tB + ")"
          );
          curPoint.style.borderRadius = "100%";
          curPoint.ox = curPX;
          curPoint.oy = curpY;
          curPoint.alf = tmpColor2 / maxAlf;
          curPoint.endP = curEndPoint;
          pointArr.push(curPoint);

          //lDiv(mainDiv,curPX+0,curpY+0,pointD,pointD,'rgba('+tR+','+tG+','+tB+','+curPoint.alf+')')
        } else {
          lRemoveChild(curEndPoint);
        }
      }

      curPX += 1;
      if (curPX >= imgW) {
        curPX = 0;
        curpY += 1;
      }
    }

    //鏋勯€犲畬鎴愬浘

    // console.log(pointArr.length);

    var tmpRt1;
    var tmpRt2;
    var temn;
    tl1 = new TimelineMax({ repeat: -0, paused: true });

    tl1.to(logoPng, 0, {
      onStart: function () {
        //tl2.progress(0)
        //tl2.pause()
        //tl3.progress(0)
        //tl3.pause()

        //p009.tl.stop()
        //p008.tl.stop()
        lw.play();
        //loadbar.tl.play()

        //if(audoCplay==true) ef03.play()
      },
    });

    //鍒濆鍖栧姩鐢�
    var rP;
    var adR = 360 / pointArr.length;
    for (var i = 0; i < pointArr.length; i++) {
      rP = lAngleToVectorByP(
        { x: starPoint.x, y: starPoint.y },
        i * adR + lRandomRange(-30, 30),
        800
      );

      TweenMax.to(pointArr[i], 0, {
        left: 0,
        top: 0,
        x: rP.x,
        y: rP.y,
        autoAlpha: 0,
      });
      TweenMax.to(pointArr[i].endP, 0, { autoAlpha: 0 });
      if (i % 2 == 0) {
        TweenMax.to(pointArr[i], 0, { scale: lRandomRange(5, 9) });
      }
    }

    for (var i = 0; i < pointArr.length; i++) {
      if (i % 2 == 0) {
        tl1.to(pointArr[i], 1, { scale: 1 }, 0.01 * i);
      }

      tmpRt1 = lRandomRange(1, 3);
      tmpRt2 = lRandomRange(1, 3);
      tl1.to(
        pointArr[i],
        tmpRt1,
        {
          x: pointArr[i].ox + starPoint.x,
          ease: Back.easeOut,
          autoAlpha: pointArr[i].alf,
        },
        0.01 * i
      );
      tl1.to(
        pointArr[i],
        tmpRt2,
        { y: pointArr[i].oy + starPoint.y, ease: Back.easeOut },
        0.01 * i
      );
    }

    tl1.to(mainDiv, 0.4, {
      onComplete: function () {
        aniCom = true;

        if (parseInt(loadbar.ptext.innerHTML) >= 100) {
          TweenMax.delayedCall(0.1, function () {
            tl1.play();
          });
        }
      },
    });
    //tl1.addPause();
    tl1.to(mainDiv, 0, {
      onStart: function () {
        //if(audoCplay==true) ef04.play()

        var evt = document.createEvent("Event");
        evt.initEvent("onAniEvt1", false, false);
        mainDiv.dispatchEvent(evt);

        TweenMax.delayedCall(0.5, function () {
          //if(audoCplay==true) ef05.play()
        });
      },
    });

    var tempY;
    for (var i = 0; i < pointArr.length; i++) {
      temn = Math.max(tmpRt1, tmpRt1);

      tl1.to(pointArr[i].endP, 0.1, { autoAlpha: 1 }, 0.01 * i + 2.5);
      tl1.to(pointArr[i], 0.1, { autoAlpha: 0 }, 0.01 * i + 2.5);

      tl1.to(pointArr[i].endP, 0, { autoAlpha: 0 }, 0.005 * i + 7);
      tl1.to(pointArr[i], 0, { autoAlpha: 1 }, 0.005 * i + 7);

      tmpRt1 = lRandomRange(0.5, 1);
      //console.log(11);
      console.log(
        "pointArr[i].oy * 0.6 + starPoint.y ",
        pointArr[i].ox,
        pointArr[i].oy
      );
      if (i % 2 == 0) {
        tl1.to(
          pointArr[i],
          tmpRt1,
          {
            // x:(pointArr[i].ox*0.6)+starPoint.x,
            // y: (pointArr[i].oy * 0.6) + starPoint.y - 440,
            // y: pointArr[i].oy * 0.6 + starPoint.y - 472, // 鍚戜笂涓嬫眹鑱� y杞�
            y: pointArr[i].oy * 0.6 + starPoint.y - 435, // 鍚戜笂涓嬫眹鑱� y杞�
            ease: Power1.easeOut,
          },
          0.005 * i + 7.1
        );

        tl1.to(
          pointArr[i],
          0.3,
          {
            // x: 960 + lRandomRange(-300, 300),
            x: 400 + lRandomRange(-280, 100), //绮掑瓙涓€寮€濮嬪悜宸︽眹鑱�   x杞�
            ease: Power1.easeOut,
          },
          0.005 * i + 7.1
        );

        tl1.to(
          pointArr[i],
          tmpRt1 - 0.3,
          {
            // x: pointArr[i].ox * 0.6 + starPoint.x + 28,
            x: pointArr[i].ox * 0.6 + starPoint.x - 705, // 鍚戝乏鍙虫眹鑱�  x杞�
            ease: Power1.easeInOut,
          },
          0.005 * i + 7.1 + 0.3
        );
        tl1.to(
          pointArr[i],
          0.2,
          {
            autoAlpha: 0,
            onStart: function () {
              if (tempY != this.target.oy) {
                //console.log(this.target.oy,116-this.target.oy);
                tempY = this.target.oy;
                TweenMax.to(logoPng, 0, { height: this.target.oy + pointD });
              }
            },
          },
          0.005 * i + 8.1
        );
      } else {
        tl1.to(pointArr[i], 0, { autoAlpha: 0 }, 0.005 * i + 7.1);
      }

      //tl1.to(logoPng,0.01*pointArr.length,{height:116,ease:Power0.easeNone},7.9)

      //tl1.to(pointArr[i].endP,0.3,{borderRadius:"0%"},0.01*i+temn+2)
    }

    // TweenMax.to(logoPng, 0, { autoAlpha: 1, top: 41, scale: 92 / 151, height: 0, transformOrigin: '50% 0%' })
    TweenMax.to(logoPng, 0, {
      autoAlpha: 1,
      top: 44.5,
      // left: 284,
      left: 145,
      scale: 92 / 151,
      height: 0,
      transformOrigin: "50% 0%",
    });
    //tl1.to(ptcDiv,0,{autoAlpha:0})

    //tl1.to(head,1,{y:0},8)
    //tl1.to(logoPng,0.8,{top:18,scale:92/151,ease:Power1.easeInOut},"-=0.5")

    tl1.to(
      lw,
      0.5,
      {
        autoAlpha: 0,
        ease: Power1.easeIn,
        onStart: function () {
          lw.stop();
        },
      },
      "-=3"
    );
    //tl1.to(p001,1,{autoAlpha:1},"-=3")

    tl1.to(
      mainDiv,
      0,
      {
        onStart: function () {},
      },
      "-=3"
    );
    tl1.to(
      mainDiv,
      0,
      {
        onStart: function () {},
      },
      "-=2"
    );

    tl1.to(pointArr[0], 5, {
      onStart: function () {
        // console.log("onAniEvt2");

        var evt = document.createEvent("Event");
        evt.initEvent("onAniEvt2", false, false);
        mainDiv.dispatchEvent(evt);
      },
    });

    tl1.render(0);
    //tl1.play()

    tl1.timeScale(1.3);

    if (ldCom == true) {
      tl1.play();
    }
  }

  mainDiv.playCarAni = function () {
    TweenMax.delayedCall(0.1, function () {
      tl3.restart();
    });

    TweenMax.delayedCall(1, function () {
      p009.tl.play();

      TweenMax.delayedCall(5, function () {
        p009.tl.stop();
      });
    });

    TweenMax.delayedCall(1, function () {
      tl2.restart();

      TweenMax.delayedCall(1, function () {
        p008.tl.play();

        TweenMax.delayedCall(5, function () {
          p008.tl.stop();
        });
      });
    });
  };

  return mainDiv;
}