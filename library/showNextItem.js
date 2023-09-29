/**
 * 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励※蛻ｰ驕斐＠縺溘ｉ谺｡縺ｮ繧ｫ繝ｫ繝ｼ繧ｻ繝ｫ隕∫ｴ�繧定ｦ九○繧�(Aladdin/GAM蟇ｾ蠢�)
 */
(function (window, document) {
  const gnSwiperContainer = document.querySelectorAll(".gn_v-sw-container");
  if (gnSwiperContainer.length === 0) return;
  const showNextItem = function(target) {
      target.style.marginTop = "-100px";
      setTimeout(function () {
          target.style.marginTop = "0";
      }, 1000);
  };
  const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60% 0px", // 蠎�相縺檎判髱｢逵溘ｓ荳ｭ縺ｫ縺阪◆繧ｿ繧､繝溘Φ繧ｰ縲√％縺ｮ蛟､縺御ｸ逡ｪ繧医＆縺昴≧
      threshold: 0
  };
  const observerCallback = function (entries) {
      entries.forEach(function (entry) {
          if (entry.isIntersecting) {
              const target = entry.target;
              showNextItem(target);
              observer.unobserve(target);
          }
      });
  };
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  gnSwiperContainer.forEach(function (target) {
      observer.observe(target);
  });
})(window, document);