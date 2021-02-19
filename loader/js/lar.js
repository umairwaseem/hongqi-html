document.body.addEventListener("mousedown",onth)
document.body.addEventListener("touchstart",onth)

var audoCplay=false
function onth () {
	audoCplay=true
}

var imgPath = "loader/img/";
 

///////////////////////////////////

function initLoading(p) {
    var ef03 = new Howl({ src: [imgPath + "ef03.mp3"], autoplay: false, loop: false, volume: 0.3 });
    var ef04 = new Howl({ src: [imgPath + "ef04.mp3"], autoplay: false, loop: false, volume: 0.05 });
    var ef05 = new Howl({ src: [imgPath + "ef05.mp3"], autoplay: false, loop: false, volume: 0.3 });

    var pW = 1920
    var pH = 1080
    var mainDiv = lDiv(p, 0, 0, 1920, 1080)
    mainDiv.style.overflow = "hidden";

    //var p002 = lImg(imgPath+"p002.jpg",mainDiv,0,0,1920,1080)
    //var p001 = lImg(imgPath+"p001.jpg",mainDiv,0,0,1920,1080)
    //TweenMax.to(p001,0,{autoAlpha:0})
    //var p003 = lImg(imgPath+"p003.png",mainDiv,190,142,1541,666)

    //var head = lDiv(mainDiv,0,0,1920,150,"#f3f3f3")
    //TweenMax.to(head,0,{y:-150})

    var lw = lWaveEf(imgPath + "p003.png", mainDiv, 190, 142, 1541, 666, 5, true, function(tl, img, i) {
        //console.log(i);

        tl.to(img, 2.0, { x: 10, y: 60, ease: Power1.easeInOut })
        tl.to(img, 2.0, { x: 0, y: 0, ease: Power1.easeInOut })
    })
    lw.style.width = "1541px"
    lw.style.height = "666px"

    var loadbar = lDiv(mainDiv, 0, 853);
    // loadbar.l1 = lDiv(loadbar, 0, 16, 815, 1, "#dd6264")
    // loadbar.l2 = lDiv(loadbar, 1075, 16, 815 + 30, 1, "#dd6264");
    // loadbar.sp = lSpan("loading..." + "<span id='ptext'>100</span>" + "%", loadbar, 797, 0, 25, "#dd6264")
    // #891010 loading 字体大小14px  rgb(137 16 16)
    loadbar.l1 = lDiv(loadbar, 0, 12, 850, 1, "#891010")
    loadbar.l2 = lDiv(loadbar, 1075, 12, 850 + 30, 1, "#891010");
    // loadbar.sp = lSpan("loading..." + "<span id='ptext'>100</span>" + "%", loadbar, 797, 0, 16, "#891010")
    loadbar.sp = lSpan("loading..." + "<span id='ptext'>100</span>" + "%", loadbar, 800, 0, 16, "#891010")
    loadbar.ptext = document.getElementById("ptext")
    loadbar.sp.style.width = "300px"
    loadbar.sp.style.textAlign = "center"

    mainDiv.loadbar = loadbar


    loadbar.tl = new TimelineMax({ repeat: -0, paused: true })
    loadbar.tl.to(loadbar.ptext, 0, { innerHTML: "0" })
    loadbar.tl.to(loadbar.ptext, 3, { innerHTML: "100", roundProps: "innerHTML", ease: Power0.easeNone })
    loadbar.tl.to(loadbar, 1, { autoAlpha: 0 })
    loadbar.tl.render(0)
        //loadbar.tl.play()

    var tl1
    var aniCom = false
    var ldCom = false
    mainDiv.setP = function(txt) {
        loadbar.ptext.innerHTML = txt
        if (txt >= 100 && ldCom == false) {
            TweenMax.to(loadbar, 1, { autoAlpha: 0 })
            if (tl1 != undefined) {
                tl1.play()
            }

            ldCom = true
        }
        if (txt >= 100 && aniCom == true) {


        }
    }

    //var logo = lImg(imgPath+"p000.png",mainDiv,0,0)
    var starPoint = { x: 884, y: 481 }

    // var logoPng = lDiv(mainDiv, starPoint.x, starPoint.y, 151, 116)
    var logoPng = lDiv(mainDiv, starPoint.x, starPoint.y, 151, 134)
    logoPng.img = lImg(imgPath + "p000.png", logoPng, 0, 0)
    logoPng.style.overflow = "hidden"

    TweenMax.to(logoPng, 0, { autoAlpha: 0 })
        //433,-24,0.65
    var p004d = lDiv(mainDiv, 899, 516, 1000, 401)
    var p004 = lImg(imgPath + "p004.png", p004d, 0, 0, 1000, 401)
        //var p009 = lImg(imgPath+"p009.png",p004d,0,0,856,296)
    var p009 = lHighlightAni(imgPath + "p009.png", p004d, 0, 0, 856, 296, {

        hlw: 80, //高光宽
        hlr: 25, //高光角
        blur: 8, //模糊
        brightness: 1.3, //高亮
        tweenObj: { time: 2, ease: Power0.easeNone, delay: 1 }
    })


    var ass136c1 = lImg(imgPath + "ass136.png", p004d, 43, -42)
    var ass136c2 = lImg(imgPath + "ass136.png", p004d, -236, -38)

    p004d.lt = lDiv(p004d, 0, 0)
    var p006c1d = lDiv(p004d.lt, 409, 213, 153, 153)
    var p006c1 = lImg(imgPath + "p006.png", p006c1d, 0, 0, 153, 153)

    var p006c2d = lDiv(p004d.lt, 721, 178, 153, 153)
    var p006c2 = lImg(imgPath + "p006.png", p006c2d, 0, 0, 153, 153)

    TweenMax.to(p006c1d, 0, { rotationY: 59, scale: 0.96 })
    TweenMax.to(p006c2d, 0, { rotationY: 67, scale: 0.74 })


    var tl2 = new TimelineMax({ repeat: 0, paused: true })
    tl2.to([ass136c1, ass136c2], 0, { autoAlpha: 0 })

    tl2.to(p004d, 0, { x: 433 * 1.7, y: -24 * 1.7, scale: 1 - (1 - 0.65) * 1.7 })
    tl2.to(p004d, 3, { x: 0, y: 0, scale: 1, ease: Elastic.easeOut.config(0.05, 0.9) })
    tl2.to([p006c1, p006c2], 3, { rotation: -360 * 3, ease: Elastic.easeOut.config(0.05, 0.9) }, "-=3")

    tl2.to([ass136c1, ass136c2], 0, { autoAlpha: 1 }, "-=1")
    tl2.to([ass136c1, ass136c2], 0.1, { autoAlpha: 0 }, "-=1")
    tl2.to([ass136c1, ass136c2], 0, { autoAlpha: 1 }, "-=0.9")
    tl2.to([ass136c1, ass136c2], 0.1, { autoAlpha: 0 }, "-=0.9")
    tl2.to([ass136c1, ass136c2], 0.3, { autoAlpha: 1 }, "-=0.8")

    tl2.to(p004d, 1, {
            onStart: function() {
                // console.log("onAniEvt3");
                var evt = document.createEvent('Event');
                evt.initEvent("onAniEvt3", false, false);
                mainDiv.dispatchEvent(evt)
            }
        })
        //tl2.pause()

    //tl2.play()

    //
    TweenMax.to(p004d, 0, { x: 433 * 1.7, y: -24 * 1.7, scale: 1 - (1 - 0.65) * 1.7 })

    var p005d = lDiv(mainDiv, 112, 565, 752, 296)
    var p005 = lImg(imgPath + "p005.png", p005d, 0, 0, 752, 296)
        //var p008 = lImg(imgPath+"p008.png",p005d,0,0,751,282)

    var p008 = lHighlightAni(imgPath + "p008.png", p005d, 0, 0, 751, 282, {
        reverse: true,
        hlw: 80, //高光宽
        hlr: 25, //高光角
        blur: 8, //模糊
        brightness: 1.3, //高亮
        tweenObj: { time: 2, ease: Power0.easeNone, delay: 1 }
    })

    var ass136 = lImg(imgPath + "ass136.png", p005d, 270, -94)

    //rotateY(49deg) scale(0.66)
    p005d.lt = lDiv(p005d, 0, 0)
    var p006c3d = lDiv(p005d.lt, 376, 129, 153, 153)
    var p006c3 = lImg(imgPath + "p006.png", p006c3d, 0, 0, 153, 153)

    var p006c4d = lDiv(p005d.lt, 78, 117, 153, 153)
    var p006c4 = lImg(imgPath + "p006.png", p006c4d, 0, 0, 153, 153)

    TweenMax.to(ass136, 0, { scale: 0.5 })
    TweenMax.to(p006c3d, 0, { rotationY: 49, scale: 0.66 })
    TweenMax.to(p006c4d, 0, { rotationY: 57, scale: 0.53 })

    var tl3 = new TimelineMax({ repeat: 0, paused: true })
    tl3.to([ass136], 0, { autoAlpha: 0 })

    tl3.to(p005d, 0, { x: -358 * 2.1, y: -9 * 2.1, scale: 1 - (1 - 0.75) * 2.1 })
    tl3.to(p005d, 3, { x: 0, y: 0, scale: 1, ease: Elastic.easeOut.config(0.05, 0.9) })
    tl3.to([p006c3, p006c4], 3, { rotation: 360 * 4, ease: Elastic.easeOut.config(0.05, 0.9) }, "-=3")
    tl3.to([ass136], 0, { autoAlpha: 1 }, "-=1")
    tl3.to([ass136], 0.1, { autoAlpha: 0 }, "-=1")
    tl3.to([ass136], 0, { autoAlpha: 1 }, "-=0.9")
    tl3.to([ass136], 0.1, { autoAlpha: 0 }, "-=0.9")
    tl3.to([ass136], 0.3, { autoAlpha: 1 }, "-=0.8")
    tl3.to(p005d, 1, {})
    tl3.render(0)

    //tl3.play()
    //tl2.play()
    //p009.tl.play()
    //p008.tl.play()

    //translate3d(-358px, -9px, 0px) scale(0.75)

    //var p007 = lImg(imgPath+"p007.png",mainDiv,0,633,1920,229)

    var ptcDiv = lDiv(mainDiv, 0, 0)
    var logocvs = lImgToCanvas(imgPath + "p000.png", ptcDiv, starPoint.x, starPoint.y, onCvsCom)
    TweenMax.to(logocvs, 0, { autoAlpha: 0 })

    var imgW = 151
        // var imgH = 116
    var imgH = 134
    var pointD = 9
    var pointW = 4

    var curPX = 0
    var curpY = 0
    var pointArr = []
    var curPoint
    var curEndPoint
    var tmpColor
    var tmpColor2
    var maxAlf = pointD * pointD * 255
    var tR, tG, tB
    var pointDL

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
              y: pointArr[i].oy * 0.6 + starPoint.y - 465, // 鍚戜笂涓嬫眹鑱� y杞�
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
              x: pointArr[i].ox * 0.6 + starPoint.x - 600, // 鍚戝乏鍙虫眹鑱�  x杞�
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
        top: 14.5,
        // left: 284,
        left: 248,
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

    mainDiv.playCarAni = function() {
        TweenMax.delayedCall(0.1, function() {
            tl3.restart()
        })

        TweenMax.delayedCall(1, function() {
            p009.tl.play()

            TweenMax.delayedCall(5, function() {
                p009.tl.stop()
            })
        })

        TweenMax.delayedCall(1, function() {
            tl2.restart()

            TweenMax.delayedCall(1, function() {
                p008.tl.play()

                TweenMax.delayedCall(5, function() {
                    p008.tl.stop()
                })
            })
        })

    }

    return mainDiv
}