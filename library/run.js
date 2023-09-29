(function (b, a) {
  window.addEventListener(
    'load',
    function () {
      var s = 0;
      var w = __gsw_bw;
      var q = __gsw_bh;
      var v = __gsw_sy;
      var z = __gsw_ry;
      var u = __gsw_sx;
      var y = __gsw_rx;
      var i = {banner_width: w, banner_height: q, banner_margin: s};
      var q = a.getElementsByClassName('gn_sw-outer').length;
      for (var B = 0; B < q; B++) {
        var t = p(B);
        j(t, i);
        r(t, i);
      }
      function A(c) {
        var e = c.split('&');
        var f, h, d;
        var g = {};
        for (f = 0, h = e.length; f < h; f++) {
          d = e[f].split('=');
          g[d[0]] = d[1];
        }
        return g;
      }
      function p(g) {
        var d = a.getElementsByClassName('gn_sw-outer');
        d = d[g];
        var e = d.getElementsByClassName('gn_sw-inner');
        e = e[e.length - 1];
        var f = e.getElementsByClassName('gn_sw-container');
        f = f[f.length - 1];
        var c = f.getElementsByClassName('gn_sw-slider');
        return {outer: d, inner: e, container: f, contents: c};
      }
      function j(c, g) {
        var f = c.inner;
        var e = c.container;
        var o = c.contents;
        var h = g.banner_width;
        var m = g.banner_height;
        var d = g.banner_margin;
        var n = o.length;
        var l, k;
        f.style.height = m + 'px';
        f.style.width = h + 'px';
        for (l = 0; l < n; l++) {
          o[l].style.left = (h + d) * l + 'px';
        }
      }
      function r(I, d) {
        var H = I.contents;
        var k = I.container;
        var F = d.banner_width;
        var g = d.banner_margin;
        var m = H.length;
        var n = 0;
        var o = 0;
        var c = 0;
        var G = F / 2;
        var f = 0;
        var l = 0;
        var h = 0;
        var E;
        var e = F * (m - 1) * -1;
        k.addEventListener('touchstart', function (x) {
          n = x.touches[0].screenX;
          o = x.touches[0].screenY;
        });
        k.addEventListener('touchmove', function (C) {
          C.preventDefault();
          var D = C.touches[0].screenX;
          var J = C.touches[0].screenY;
          var x = D - n;
          h = Math.abs(x);
          l = Math.abs(J - o);
          k.style.marginLeft = f + x + 'px';
          if (parseInt(k.style.marginLeft) > 0) {
            k.style.marginLeft = '0';
          }
          if (parseInt(k.style.marginLeft) < e) {
            k.style.marginLeft = e + 'px';
          }
          E = x < 0 ? 'left' : 'right';
        });
        k.addEventListener('touchend', function (C) {
          switch (E) {
            case 'left':
              D();
              break;
            case 'right':
              L();
              break;
            default:
              k.style.marginLeft = '';
              break;
          }
          K(k, e);
          function D() {
            var J = Math.abs(parseFloat(k.style.marginLeft));
            var M = c * (F + g) + G;
            if (c >= m - 1) {
              k.style.marginLeft = f + 'px';
            } else {
              if (J > M) {
                k.style.marginLeft = -1 * (M + G) + 'px';
                f = -1 * (M + G);
                c += 1;
              } else {
                k.style.marginLeft = f + 'px';
              }
            }
          }
          function L() {
            var J = parseFloat(k.style.marginLeft);
            var M = -1 * ((c - 1) * (F + g) + G);
            if (c <= 0) {
              k.style.marginLeft = '';
            } else {
              if (J >= M) {
                k.style.marginLeft = M + G + 'px';
                f = M + G;
                c -= 1;
              } else {
                k.style.marginLeft = f + 'px';
              }
            }
          }
          function x(J, O) {
            var N = a.createEvent('MouseEvents');
            N.initEvent(J, true, true);
            O.dispatchEvent(N);
          }
          function K(O, J) {
            var M = O.parentNode.getElementsByClassName('gn_sw-btn-left')[0];
            var P = O.parentNode.getElementsByClassName('gn_sw-btn-right')[0];
            var N = parseInt(O.style.marginLeft);
            if (N >= 0 || !N) {
              M.style.display = 'none';
              P.style.display = 'block';
            } else {
              if (N <= J) {
                M.style.display = 'block';
                P.style.display = 'none';
              } else {
                M.style.display = 'block';
                P.style.display = 'block';
              }
            }
          }
        });
      }
    },
    false
  );
})(window, document);
function swipeButtonClick(f) {
  var j = f.target;
  var i = j.parentNode.parentNode;
  var a = i.getElementsByClassName('gn_sw-slider').length - 1;
  var g = i.getElementsByClassName('gn_sw-container')[0];
  var b = parseFloat(g.style.marginLeft);
  if (!g.style.marginLeft) {
    b = 0;
  }
  var h = 'none';
  h = j.className.indexOf('gn_sw-btn-left') >= 0 ? 'left' : h;
  h = j.className.indexOf('gn_sw-btn-right') >= 0 ? 'right' : h;
  if (h === 'none') {
    return;
  }
  var c = parseFloat(j.parentNode.style.width);
  var k = 0;
  var d = b;
  if (h === 'left') {
    g.classList.add('slide-by-click');
    if (b >= 0) {
      demoMovingRight(g, null, b, 30);
      return;
    }
    k = b + c;
    g.style.marginLeft = k + 'px';
    d += 300;
    setTimeout(function () {
      g.classList.remove('slide-by-click');
    }, 500);
  } else {
    if (h === 'right') {
      g.classList.add('slide-by-click');
      if (b <= c * a * -1) {
        demoMovingLeft(g, null, b, 30);
        return;
      }
      k = b - c;
      g.style.marginLeft = k + 'px';
      d -= 300;
      setTimeout(function () {
        g.classList.remove('slide-by-click');
      }, 500);
    }
  }
  if (d >= 0) {
    i.getElementsByClassName('gn_sw-btn-left')[0].style.display = 'none';
    i.getElementsByClassName('gn_sw-btn-right')[0].style.display = 'block';
  } else {
    if (d <= c * a * -1) {
      i.getElementsByClassName('gn_sw-btn-left')[0].style.display = 'block';
      i.getElementsByClassName('gn_sw-btn-right')[0].style.display = 'none';
    } else {
      i.getElementsByClassName('gn_sw-btn-left')[0].style.display = 'block';
      i.getElementsByClassName('gn_sw-btn-right')[0].style.display = 'block';
    }
  }
}
