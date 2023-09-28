(function (i, j) {
  var h = 0;
  var d = __g_v_sw_bw;
  var l = __g_v_sw_bh;
  var e = __g_v_sw_sy;
  var b = __g_v_sw_ry;
  var f = __g_v_sw_sx;
  var c = __g_v_sw_rx;
  var o = {banner_width: d, banner_height: l, banner_margin: h};
  var g = m();
  n(g, o);
  k(g, o);
  function m() {
    var r = j.getElementsByClassName('gn_v-sw-outer');
    r = r[r.length - 1];
    var q = r.getElementsByClassName('gn_v-sw-inner');
    q = q[q.length - 1];
    var p = q.getElementsByClassName('gn_v-sw-container');
    p = p[p.length - 1];
    var s = p.getElementsByClassName('gn_v-sw-slider');
    return {outer: r, inner: q, container: p, contents: s};
  }
  function n(r, y) {
    var z = r.inner;
    var p = r.container;
    var s = r.contents;
    var x = y.banner_height;
    var u = y.banner_width;
    var q = y.banner_margin;
    var t = s.length;
    var v, w;
    z.style.width = u + 'px';
    z.style.height = x + 'px';
    for (v = 0; v < t; v++) {
      s[v].style.top = (x + q) * v + 'px';
    }
  }
  function k(s, D) {
    var t = s.contents;
    var p = s.container;
    var v = D.banner_height;
    var q = D.banner_margin;
    var z = t.length;
    var y = 0;
    var x = 0;
    var r = 0;
    var u = v / 2;
    var C = 0;
    var A = 0;
    var B = 0;
    var w;
    p.addEventListener('touchstart', function (E) {
      y = E.touches[0].screenY;
      x = E.touches[0].screenX;
    });
    p.addEventListener('touchmove', function (G) {
      G.preventDefault();
      var F = G.touches[0].screenY;
      var E = G.touches[0].screenX;
      var H = F - y;
      B = Math.abs(H);
      A = Math.abs(E - x);
      p.style.marginTop = C + H + 'px';
      w = H < 0 ? 'top' : 'bottom';
    });
    p.addEventListener('touchend', function (I) {
      var G = H(B, e, b, A, f, c);
      if (G) {
        J('click', I.target);
      }
      switch (w) {
        case 'top':
          F();
          break;
        case 'bottom':
          E();
          break;
        default:
          p.style.marginTop = '';
          break;
      }
      function H(L, P, N, K, O, M) {
        if (K < O) {
          return false;
        }
        if (K > O + M) {
          return false;
        }
        if (L < P) {
          return false;
        }
        if (L > P + N) {
          return false;
        }
        return true;
      }
      function F() {
        var L = Math.abs(parseFloat(p.style.marginTop));
        var K = r * (v + q) + u;
        if (r >= z - 1) {
          p.style.marginTop = C + 'px';
        } else {
          if (L > K) {
            p.style.marginTop = -1 * (K + u) + 'px';
            C = -1 * (K + u);
            r += 1;
          } else {
            p.style.marginTop = C + 'px';
          }
        }
      }
      function E() {
        var L = parseFloat(p.style.marginTop);
        var K = -1 * ((r - 1) * (v + q) + u);
        if (r <= 0) {
          p.style.marginTop = '';
        } else {
          if (L >= K) {
            p.style.marginTop = K + u + 'px';
            C = K + u;
            r -= 1;
          } else {
            p.style.marginTop = C + 'px';
          }
        }
      }
      function J(L, M) {
        var K = j.createEvent('MouseEvents');
        K.initEvent(L, true, true);
        M.dispatchEvent(K);
      }
    });
  }
})(window, document);
