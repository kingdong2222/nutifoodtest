document.querySelectorAll(".table_chart_container .tab").forEach(tab => {
  tab.addEventListener("click", function() {
      document.querySelector(".tab.active").classList.remove("active");
      this.classList.add("active");
      
      document.querySelector(".content.active").classList.remove("active");
      document.querySelector(".img_product_table img.active").classList.remove("active");
      document.querySelector(".pc .bg.active").classList.remove("active");
      document.querySelector(".sp .bg.active").classList.remove("active");
      document.querySelectorAll('.'+this.dataset.target).forEach(e=>e.classList.add("active"));
    });
});

function doSticky(obj) {
  window.addEventListener('scroll',function() {
    const selector_path = '.bl_sticky';
    let $selector = $(selector_path);
    if (obj) {
      $selector = obj.find(selector_path);
    }
    if ($('.header').hasClass('is-sticky')) {
      $selector.addClass('sticky');
    } else {
      $selector.removeClass('sticky');
    }
  });
}
function doAnchor(obj) {
  const selector_path = 'a[data-href*="#"]';
  let $selector = $(selector_path);
  if (obj) {
    $selector = obj.find(selector_path);
  }
  $selector.click(function() {
    let offset = ($('.supplemented_detail').hasClass('supplemented_vn')) ? (($(window).width() < 768) ? 115 : 140) : (($(window).width() < 768) ? 120 : 130);
    let target = $(this).data('href');
    $('html,body').stop().animate({scrollTop:$(target).offset().top - offset},500);
  });
}
function doSlider(obj) {
  let $selector = (obj) ? obj : $('.cmn_slider');
  let nav = $selector.next('.cmn_slider_nav');
  $selector.slick({
    slidesToShow: 3,
    arrows: true,
    dots: true,
    appendDots: nav,
    appendArrows: nav,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          appendDots: $selector,
          appendArrows: $selector,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
}
function doForm() {
  if ($('#agency-form').length > 0) {
    $('#agency-form').on('submit',function(e) {
      e.preventDefault();
      $('.supplemented_notice').addClass('init');
      return false;
    });
    $('.supplemented_notice__backdrop').click(function() {
      $('.supplemented_notice').removeClass('init');
    });
    $('.supplemented__agency .btn_view a').click(function() {
      $(this).parent().hide();
      $('.supplemented__agency .part_hidden').slideDown();
    });
  }
}
function doScrollbars(obj) {
  let $selector = (obj) ? $(obj) : $('.bl_scroll');
  if ($selector.length > 0) {
    $selector.each(function() {
      $(this).overlayScrollbars({
        scrollbars: {
          autoHide: 'leave',
          autoHideDelay: 0,
        },
        overflowBehavior: {
          x: 'hidden',
          y: 'scroll',
        },
      });
    });
  }
}
function doTabs(obj) {
  const selector_path = '.bl_nav li';
  const target_path = '.tabs';
  let $selector = $(selector_path);
  let $target = $(target_path);
  if (obj) {
    $selector = obj.find(selector_path);
    $target = obj.find(target_path);
  }
  $selector.click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $target.find('.tab').eq($(this).index()).fadeIn().siblings().hide();

    // Change image
    if ($selector.parent().hasClass('change_img')) {
      $('.supplemented__ingre--frame .img .gr').eq($(this).index()).show().siblings().hide();
    }
  });
}
function doModal(obj) {
  const selector_path = '.btn_modal';
  let $selector = $(selector_path);
  if (obj) {
    $target = obj.find(target_path);
  }
  $selector.click(function() {
    let target = $(this).data('target');
    $(target).addClass('init');
  });
  $('.cmn_modal__close').click(function() {
    $(this).closest('.cmn_modal').removeClass('init');
  });
  $('body').on('keyup',function(e) {
    if (e.key == "Escape") {
      $('.cmn_modal').removeClass('init');
    }
  });
}

$(function() {
  doSticky();
  doAnchor();
  doSlider($('.supplemented__news--slider'));
  doForm();
  doScrollbars();
  doModal();
  doTabs($('.supplemented__ingre'));
  doTabs($('.supplemented__contact'));
  doNearestStores();
  // Only for Nutifood.com.vn
  $('.supplemented_detail.supplemented_vn .select-box').click(function() {
    $(this).toggleClass('open');
  });
});

let nearest_stores = `[{"name_store":"M\u1eb9 V\u00e0 B\u00e9","district":"H.Ea S\u00fap","city":"DAK LAK","address":"22 L\u1ea1c Long Qu\u00e2n"},{"name_store":"SUA BE GAO","district":"H.Ph\u00fa Gi\u00e1o","city":"BINH DUONG","address":" doc lap"},{"name_store":"S\u1eefa B\u1ec9m 3 T\u1ed1t","district":"H.Th\u01b0\u1eddng T\u00edn","city":"HA NOI","address":" \u0110\u01b0\u1eddng 71"},{"name_store":"B\u00e9 Tu\u1ec7","district":"TP.Thanh H\u00f3a","city":"THANH HOA","address":"228 Tr\u00e2n H\u01b0ng \u0110\u1ea1o"},{"name_store":"MILK MILK","district":"TX.An Kh\u00ea","city":"GIA LAI","address":"351 Quang Trung"},{"name_store":"TH Ph\u01b0\u01a1ng Linh","district":"TP.Phan Thi\u1ebft","city":"BINH THUAN","address":"39 V\u00f5 V\u0103n T\u1ea7n"},{"name_store":"Chip Chip","district":"TP.Bi\u00ean H\u00f2a","city":"DONG NAI","address":" nguy\u1ec5n \u00e1i qu\u1ed1c"},{"name_store":"NG\u00c2N ANH","district":"TX.An Kh\u00ea","city":"GIA LAI","address":"08 Chu V\u0103n An"},{"name_store":"Khang Baby","district":"H.Y\u00ean Th\u1ebf","city":"BAC GIANG","address":0},{"name_store":"s\u1eefa b\u1ec9m cute baby","district":"Q.H\u1ea3i An","city":"HAI PHONG","address":"691 ng\u00f4 gia t\u1ef1"},{"name_store":"Ch\u00edn S\u01b0\u01a1ng","district":"H.\u0110\u1ed3ng Ph\u00fa","city":"BINH PHUOC","address":"272 \u0110T741"},{"name_store":"B\u00e9 bi","district":"H.B\u1eafc B\u00ecnh","city":"BINH THUAN","address":"19 Hai thuong lan ong"},{"name_store":"THU\u1ed0C T\u00c2Y T\u00c2M \u0110\u1ee8C","district":"H.C\u00e1i B\u00e8","city":"TIEN GIANG","address":" M\u1ef8 L\u1ee2I A"},{"name_store":"ST Th\u00e1i H\u1eadu","district":"TX.Ba \u0110\u1ed3n","city":"QUANG BINH","address":0},{"name_store":"H\u01b0ng th\u1ecbnh","district":"TX.Ho\u00e0i Nh\u01a1n","city":"BINH DINH","address":"Li\u00eam B\u00ecnh Tr\u1ea7n Ph\u00fa"},{"name_store":"TTTM Thi\u1ec7n Nh\u00e2n","district":"TX.Ba \u0110\u1ed3n","city":"QUANG BINH","address":" H\u00f9ng V\u01b0\u01a1ng"},{"name_store":"H\u00e0 Ng\u1ecdc","district":"TP.Cam Ranh","city":"KHANH HOA","address":"1 Nguy\u1ec5n Th\u00e1i H\u1ecdc"},{"name_store":"Th\u1ee7y Quy\u1ec1n","district":"TX.Ngh\u0129a L\u1ed9","city":"YEN BAI","address":" ph\u1ee5 n\u1eef"},{"name_store":"SHOP S\u1eecA BABY","district":"TX.Ki\u1ebfn T\u01b0\u1eddng","city":"LONG AN","address":"9 L\u00fd Th\u01b0\u1eddng Ki\u1ec7t"},{"name_store":"Ken Baby","district":"H.Nghi L\u1ed9c","city":"NGHE AN","address":" x\u00f3m 10"},{"name_store":"V\u01b0\u1eddn C\u1ee7a B\u00e9","district":"Q.Ho\u00e0ng Mai","city":"HA NOI","address":"97 Nguy\u1ec5n H\u1eefu Th\u1ecd"},{"name_store":"S\u1eefa b\u1ec9m H\u00e0 Ch\u00e2m","district":"H.Ho\u00e0i \u0110\u1ee9c","city":"HA NOI","address":" ao hoa"},{"name_store":"Lan T\u00e2m","district":"H.Ch\u01b0 S\u00ea","city":"GIA LAI","address":" H\u00f9ng V\u01b0\u01a1ng"},{"name_store":"Ken shop","district":"H.B\u1eafc B\u00ecnh","city":"BINH THUAN","address":"Khu 15HA Tr\u00e2\u0300n Phu\u0301"},{"name_store":"M\u1eb9 V\u00e0 B\u00e9 \u0110\u1ee9c C\u01a1","district":"H.\u0110\u1ee9c C\u01a1","city":"GIA LAI","address":"579  Quang Trung QL 19"},{"name_store":"B\u1ea3o H\u00e2n","district":"TP.Phan Thi\u1ebft","city":"BINH THUAN","address":" 303 Tr\u1ea7n Qu\u00fd C\u00e1p"},{"name_store":"H\u00e0 To\u00e0n","district":"TX.K\u1ef3 Anh","city":"HA TINH","address":" Th\u00f4n Nh\u00e2m"},{"name_store":"AN \u00da","district":"TP.B\u1eafc Ninh","city":"BAC NINH","address":" Nguy\u1ec5n \u0110\u0103ng \u0110\u1ea1o"},{"name_store":"TH Ph\u01b0\u1edbc Trung","district":"TP.B\u00e0 R\u1ecba","city":"BA RIA - VUNG TAU","address":"42 Nguy\u1ec5n H\u1eefu Th\u1ecd"},{"name_store":"Shop Laza","district":"TP.Bu\u00f4n Ma Thu\u1ed9t","city":"DAK LAK","address":"11 L\u00ea H\u1ed3ng Phong"},{"name_store":"M\u1eb9 & B\u00e9 Kim S\u00e1ng","district":"TP.Kon Tum","city":"KON TUM","address":"334A B\u00e0 Tri\u1ec7u"},{"name_store":"H\u00e0 th\u1eafng","district":"H.L\u1eadp Th\u1ea1ch","city":"VINH PHUC","address":" B\u00e0n Gi\u1ea3n"},{"name_store":"V\u00e2n T\u00e2n","district":"TP.Phan Thi\u1ebft","city":"BINH THUAN","address":" Nguy\u1ec5n H\u1ed9i"},{"name_store":"S\u1eefa B\u1ec9m Trang Nh\u00e1y","district":"Q.B\u1eafc T\u1eeb Li\u00eam","city":"HA NOI","address":"46 Ph\u1ed1 Trung T\u1ef1u"},{"name_store":"ST FAMILY R\u00d2N","district":"H.Qu\u1ea3ng Tr\u1ea1ch","city":"QUANG BINH","address":" QL1A"},{"name_store":"KIM OANH","district":"Q.12","city":"TP HCM","address":"515 L\u00ca V\u0102N KH\u01af\u01a0NG"},{"name_store":"baby mart","district":"TP.H\u00f2a B\u00ecnh","city":"HOA BINH","address":"315 CU CHINH LAN"},{"name_store":"B\u00e9 C\u01b0ng","district":"H.Qu\u1ea3ng X\u01b0\u01a1ng","city":"THANH HOA","address":" Qu\u1ea3ng Th\u1ea1ch"},{"name_store":"C\u00d4 TI\u1ec6N","district":"H.Kbang","city":"GIA LAI","address":"227 Quang Trung"},{"name_store":"MAI LAN","district":"H.Ch\u01b0 P\u0103h","city":"GIA LAI","address":"40 Quang Trung"},{"name_store":"C\u1eeda h\u00e0ng Ph\u01b0\u01a1ng Nghi","district":"H.Tuy Phong","city":"BINH THUAN","address":" thon ha thuy 1"},{"name_store":"T\u00e0i Th\u01b0","district":"H.Thanh Mi\u1ec7n","city":"HAI DUONG","address":"T\u1ea1p ho\u00e1_Anh T\u00e0i Nguy\u1ec5n L\u01b0\u01a1ng B\u1eb1ng"},{"name_store":"An An Baby","district":"TP.Nam \u0110\u1ecbnh","city":"NAM DINH","address":"111 Nguy\u1ec5"},{"name_store":"CH\u1eca \u01af\u1edaC","district":"H.Cai L\u1eady","city":"TIEN GIANG","address":"\u1ea4P B\u00ccNH THU\u1eacN CH\u1ee2 TAM B\u00ccNH"},{"name_store":"PERFECT SHOP XU\u00c2N MAI","district":"H.C\u1ee7 Chi","city":"TP HCM","address":"Khu ph\u1ed1 6 Nguy\u1ec5n V\u0103n Ni"},{"name_store":"Si\u00eau Th\u1ecb S\u1eefa - \u0110\u0103k Mil","district":"H.\u0110\u1eafk Mil","city":"DAK NONG","address":"Ch\u1ee3 \u0110\u0103k Mil 167 Nguy\u1ec5n T\u1ea5t Th\u00e0nh"},{"name_store":"Si\u00eau Th\u1ecb S\u1eefa - Ki\u1ebfn \u0110\u1ee9c","district":"H.\u0110\u1eafk R'l\u1ea5p","city":"DAK NONG","address":"79 Nguy\u1ec5n T\u1ea5t Th\u00e0nh"},{"name_store":"B\u00ecnh An","district":"H.B\u1ebfn C\u1ea7u","city":"TAY NINH","address":" \u0110T 786"},{"name_store":"THOA DUNG","district":"TX.\u0110\u00f4ng Tri\u1ec1u","city":"QUANG NINH","address":" tr\u1ea7n nh\u00e2n t\u00f4ng - \u0111\u00f4ng tri\u1ec1u"},{"name_store":"TH\u00d9Y TRANG","district":"H.\u0110\u1ee9c H\u00f2a","city":"LONG AN","address":"288 \u1ea4P NH\u01a0N HO\u00c0"},{"name_store":"S\u1eefa B\u1ec9m 360","district":"TP.V\u0129nh Y\u00ean","city":"VINH PHUC","address":"4 Nguy\u1ec5n Vi\u1ebft Xu\u00e2n"},{"name_store":"si\u00eau th\u1ecb s\u1eefa Grow IQ","district":"TX.Ho\u00e0i Nh\u01a1n","city":"BINH DINH","address":"349 T\u00e2n Th\u00e0nh1"},{"name_store":"Th\u01b0\u01a1ng Th\u01b0\u01a1ng","district":"H.Kr\u00f4ng Pa","city":"GIA LAI","address":" Ch\u1ee3 Ph\u00fa T\u00fac"},{"name_store":"TT H\u01b0ng","district":"H.H\u00e0m Thu\u1eadn B\u1eafc","city":"BINH THUAN","address":"Th\u00f4n 4 QL1A"},{"name_store":"CH POPBIMART","district":"H.V\u0103n L\u00e2m","city":"HUNG YEN","address":"T\u1ea0P H\u00d3A_POPBIMART D\u1ed0C NGH\u0128A"},{"name_store":"Vi\u1ec7t Nhi","district":"TX.Ayun Pa","city":"GIA LAI","address":"83 L\u00ea H\u1ed3ng Phong"},{"name_store":"Kim Anh","district":"TP.Th\u00e1i B\u00ecnh","city":"THAI BINH","address":"SN 214 Tr\u1ea7n H\u01b0ng \u0110\u1ea1o"},{"name_store":"SANG H\u00c0","district":"H.Ho\u00e0i \u00c2n","city":"BINH DINH","address":"48 NGUY\u1ec4N T\u1ea4T TH\u00c0NH"},{"name_store":"THU TH\u1ee6Y","district":"H.\u0110\u1ee9c H\u00f2a","city":"LONG AN","address":"66 T\u1ec8NH L\u1ed8 10"},{"name_store":"M\u1eb9 V\u00e0 B\u00e9 Nguy\u00ean Anh","district":"H.Ch\u01b0 S\u00ea","city":"GIA LAI","address":" 33A Quang Trung"},{"name_store":"ANH H\u00d2A","district":"H.Th\u1ed1ng Nh\u1ea5t","city":"DONG NAI","address":"200\/3 \u1ea4p 94"},{"name_store":"C\u00f4 \u0110\u1ecbnh","district":"H.V\u0129nh C\u1eedu","city":"DONG NAI","address":"\u1ea4p 2, Th\u1ea1nh Ph\u00fa B\u00ecnh L\u1ee3i"},{"name_store":"\u0110\u00c0O NGUY\u00caN","district":"TP.B\u1ea1c Li\u00eau","city":"BAC LIEU","address":"510 V\u00d5 TH\u1eca S\u00c1U"},{"name_store":"Kim Li\u00ean I","district":"TX.B\u1ebfn C\u00e1t","city":"BINH DUONG","address":" N3"},{"name_store":"Ng\u1ecdc H\u00f9ng","district":"H.H\u00f3c M\u00f4n","city":"TP HCM","address":"56\/8 PHAN V\u0102N H\u1edaN"},{"name_store":"Ng\u1ecdc B\u00edch","district":"H.Ninh H\u1ea3i","city":"NINH THUAN","address":"N\u1ea1i D\u01b0 Kh\u00e1nh"},{"name_store":"ST Minh C\u1ea7u 1","district":"TP.Th\u00e1i Nguy\u00ean","city":"THAI NGUYEN","address":"1 Minh C\u1ea7u"},{"name_store":"Lan Anh","district":"TX.Tr\u1ea3ng B\u00e0ng","city":"TAY NINH","address":"3416 QL22"},{"name_store":"Dollakids","district":"TP.Thanh H\u00f3a","city":"THANH HOA","address":" ph\u1ed1 8"},{"name_store":"TiTi Mart","district":"TP.V\u0129nh Y\u00ean","city":"VINH PHUC","address":" SN 58 Nguy\u1ec5n T\u1ea5t Th\u00e0nh"},{"name_store":"H\u1ea2I H\u01af\u01a0NG","district":"TP.Bi\u00ean H\u00f2a","city":"DONG NAI","address":"0 T\u1ed5 7, KP 4"},{"name_store":"T\u00e2n Th\u00e1i","district":"H.Ph\u00fa Qu\u00ed","city":"BINH THUAN","address":"141 v\u00f5 v\u0103n ki\u1ec7t"},{"name_store":"Ph\u01b0\u01a1ng Anh","district":"H.\u0110\u1eafk H\u00e0","city":"KON TUM","address":" H\u00f9ng V\u01b0\u01a1ng"},{"name_store":"Uy\u00ean Ly","district":"TP.Phan Rang - Th\u00e1p Ch\u00e0m","city":"NINH THUAN","address":"10 Tr\u00e2\u0300n Phu\u0301"},{"name_store":"Shop Ch\u00e2u Anh","district":"H.Ph\u00fa Thi\u1ec7n","city":"GIA LAI","address":"25 Nguy\u1ec5n T\u1ea5t Th\u00e0nh"},{"name_store":"CH\u1eca T\u00c2M","district":"H.Ph\u00f9 C\u00e1t","city":"BINH DINH","address":" 3 th\u00e1ng 2"},{"name_store":"Lan Kh\u00e1","district":"H.Thanh S\u01a1n","city":"PHU THO","address":" Ch\u1ecb Lan"},{"name_store":"CH\u1eca TH\u1ee6Y","district":"TX.H\u01b0\u01a1ng Th\u1ee7y","city":"THUA THIEN HUE","address":"100 S\u00f3ng H\u1ed3ng"},{"name_store":"Kh\u00e1nh Trinh","district":"H.Ninh Ph\u01b0\u1edbc","city":"NINH THUAN","address":" Hu\u1ef3nh Ph\u01b0\u1edbc"},{"name_store":"HOA MINH","district":"H.V\u0129nh B\u1ea3o","city":"HAI PHONG","address":"\u0110\u1ed0I Di\u1ec6N MAY 10 KCN T\u00c2N LI\u00caN"},{"name_store":"Shop Minh Tr\u00ed","district":"Q.12","city":"TP HCM","address":"302 TTH07"},{"name_store":"H\u1ed3ng M\u1ef9","district":"TP.Phan Thi\u1ebft","city":"BINH THUAN","address":"94 Tr\u1ea7n Ph\u00fa"},{"name_store":"Shop Kitty","district":"TX.Ayun Pa","city":"GIA LAI","address":"193 L\u00ea H\u1ed3ng Phong"},{"name_store":"Shop M\u1eb9 Th\u1ecf","district":"TX.Ayun Pa","city":"GIA LAI","address":"132 L\u00ea H\u1ed3ng Phong"},{"name_store":"C\u1eeda h\u00e0ng Comcome 1","district":"TP.Kon Tum","city":"KON TUM","address":"348 Tr\u1ea7n H\u01b0ng \u0110\u1ea1o"},{"name_store":"ph\u00fac th\u1ecbnh","district":"H.Ph\u00f9 C\u00e1t","city":"BINH DINH","address":"176 quang trung"},{"name_store":"C\u00f4 Li\u1ec3u","district":"H.H\u00e0m Thu\u1eadn B\u1eafc","city":"BINH THUAN","address":"348 QL 1A"},{"name_store":"Th\u00fay To\u00e0n 2","district":"H.B\u00ecnh Gia","city":"LANG SON","address":"Ng\u00e3 t\u01b0 B\u00ecnh Gia Qu\u1ed1c L\u1ed9 1B"},{"name_store":"CHTC TRUNG HI\u1ec0N","district":"TP.S\u00f4ng C\u00f4ng","city":"THAI NGUYEN","address":"73 T\u1ed4 1 CMT 8"},{"name_store":"B\u1ea2O TR\u00c2M","district":"H.An L\u00e3o","city":"BINH DINH","address":"\u0110\u1ed8I 9 XU\u00c2N PHONG NAM"},{"name_store":"Ch\u1ecb Tuy\u00ean","district":"H.H\u00e0m Thu\u1eadn B\u1eafc","city":"BINH THUAN","address":"Kios 46 Ch\u1ee3 Ma L\u00e2m"},{"name_store":"HI\u1ec0N H\u00c0","district":"H.\u0110\u1ecbnh H\u00f3a","city":"THAI NGUYEN","address":"C\u1ed4NG CH\u1ee2 PH\u1ed0 M\u1edaI \u0110\u01af\u1edcNG T\u1ec8NH 268"},{"name_store":"PERFECT SHOP H\u1ed2 ANH","district":"TP.D\u0129 An","city":"BINH DUONG","address":"8 TR\u1ea6N H\u01afNG \u0110\u1ea0O"},{"name_store":"Kh\u00e1nh Ng\u00e2n","district":"TP.T\u00e2y Ninh","city":"TAY NINH","address":"158 \u0110\u01b0\u1eddng 786"},{"name_store":"Si\u00eau Th\u1ecb S\u1eefa - Qu\u1ea3ng T\u00edn","district":"H.\u0110\u1eafk R'l\u1ea5p","city":"DAK NONG","address":" Ch\u1ee3 Qu\u1ea3ng T\u00edn"},{"name_store":"Th\u00e0nh Vinh Mart","district":"TP.Phan Thi\u1ebft","city":"BINH THUAN","address":"518 Th\u1ee7 Khoa Hu\u00e2n"},{"name_store":"Ng\u1ecdc H\u00e2n","district":"TP.Th\u1ee7 \u0110\u1ee9c","city":"TP HCM","address":"S\u1ed1 2 H\u1ed3 V\u0103n T\u01b0"},{"name_store":"Ph\u01b0\u1ee3ng","district":"H.Ph\u00f9 M\u1ef9","city":"BINH DINH","address":"b\u00ean nh\u00e0 thanh th\u1ea3o di\u00eam ti\u00eau"},{"name_store":"BIBIONE M\u1eb8 B\u1ea6U & EM B\u00c9","district":"TP.V\u0169ng T\u00e0u","city":"BA RIA - VUNG TAU","address":"30 Nguy\u1ec5n Du"},{"name_store":"H\u1ed2NG HU\u1ec6","district":"TP.Nam \u0110\u1ecbnh","city":"NAM DINH","address":"321 HO\u00c0NG V\u0102N TH\u1ee4"},{"name_store":"PERFECT SHOP S\u1eeeA NG\u1eccC T\u00c0I","district":"TX.T\u00e2n Uy\u00ean","city":"BINH DUONG","address":" dt743"},{"name_store":"TH TUY\u1ebeT NH\u01af","district":"TP.C\u00e0 Mau","city":"CA MAU","address":"41A \u1ea4P B\u00c0 \u0110i\u1ec0U"},{"name_store":"NGUY\u00caN H\u01afNG PH\u00c1T","district":"TP.S\u00f3c Tr\u0103ng","city":"SOC TRANG","address":"01 NGUY\u1ec4N H\u00d9NG PH\u01af\u1edaC"},{"name_store":"PERFECT SHOP HO\u00c0NG LY","district":"TP.Th\u1ee7 D\u1ea7u M\u1ed9t","city":"BINH DUONG","address":"0 CH\u1ee2 C\u0168"},{"name_store":"Thu\u1ed1c t\u00e2y 88","district":"H.H\u00e0m Thu\u1eadn B\u1eafc","city":"BINH THUAN","address":"88 - KP1 QL28"},{"name_store":"XU\u00c2N B\u00ccNH 2","district":"TP.Pleiku","city":"GIA LAI","address":"587 L\u00ea \u0110\u1ea1i H\u00e0nh"},{"name_store":"Th\u1ebf Gi\u1edbi S\u1eefa","district":"H.Th\u1edbi B\u00ecnh","city":"CA MAU","address":" K8, TT TB"},{"name_store":"Coca baby","district":"TX.S\u01a1n T\u00e2y","city":"HA NOI","address":"164 s\u01a1n \u0111\u00f4ng"},{"name_store":"C\u01b0\u1eddng Nguy\u1ec7t","district":"H.Thi\u1ec7u H\u00f3a","city":"THANH HOA","address":" Khu 12"},{"name_store":"Kisd Family","district":"H.Th\u1ea1ch Th\u1ea5t","city":"HA NOI","address":" th\u00f4n 2"},{"name_store":"S\u00e2u  KiDS","district":"H.Th\u1ecd Xu\u00e2n","city":"THANH HOA","address":"4 4"},{"name_store":"VI\u1ec6T TRINH","district":"H.B\u00ecnh S\u01a1n","city":"QUANG NGAI","address":" V\u1ea1n T\u01b0\u1eddng, B\u00ecnh Tr\u1ecb"},{"name_store":"Ph\u01b0\u01a1ng H\u00e0","district":"H.Ch\u00e2u \u0110\u1ee9c","city":"BA RIA - VUNG TAU","address":"107 L\u00ea H\u1ed3ng Phong"},{"name_store":"ST ALOHA","district":"H.Thanh S\u01a1n","city":"PHU THO","address":" TT Thanh S\u01a1n"},{"name_store":"G\u1ea5u Con","district":"TP.B\u1ebfn Tre","city":"BEN TRE","address":"24C \u0110o\u00e0n Ho\u00e0ng Minh"},{"name_store":"B\u1ec8M S\u1eeeA QU\u1ef2NH NGUY\u1ec4N","district":"H.V\u0103n Giang","city":"HUNG YEN","address":" G\u1ea7n ch\u1ee3 long h\u01b0ng"},{"name_store":"\u0110\u1ea0I L\u00dd S\u1eeeA T\u00d4T","district":"H.Ki\u1ebfn X\u01b0\u01a1ng","city":"THAI BINH","address":"Ng\u00e3 T\u01b0 Thanh T\u00e2n NG\u00c3 T\u01af THANH T\u00c2N"},{"name_store":"H\u1eefu Th\u1eddi","district":"H.Ea H'leo","city":"DAK LAK","address":"Th\u00f4n 2 Ch\u1ee3 Eahiao"},{"name_store":"THANH PH\u00d9NG","district":"H.Xu\u00e2n Tr\u01b0\u1eddng","city":"NAM DINH","address":"C\u00c1CH C\u1ea6U 50 20 M\u00c9T XU\u00c2N TH\u01af\u1ee2NG"},{"name_store":"V\u00c2N D\u01af\u01a0NG","district":"TP.Tam K\u1ef3","city":"QUANG NAM","address":"T\u1ed4 4 \u0110\u1ed2NG H\u00c0NH"},{"name_store":"CHTC H\u01af\u01a0NG C\u01af\u1edcNG 2","district":"TP.Ph\u1ed5 Y\u00ean","city":"THAI NGUYEN","address":"98 TK6 L\u00dd NAM \u0110\u1ebe"},{"name_store":"Ch\u00ed Th\u00e0nh","district":"TP.Phan Rang - Th\u00e1p Ch\u00e0m","city":"NINH THUAN","address":"712 21\/8"},{"name_store":"CH\u1eca CHUNG","district":"TX.\u0110i\u1ec7n B\u00e0n","city":"QUANG NAM","address":"T\u1ed4 3 KH\u1ed0I H\u00c0 D\u1eeaA"},{"name_store":"Hi\u1ebfu H\u00f9ng","district":"Q.Long Bi\u00ean","city":"HA NOI","address":"91 Ng\u1ecdc L\u00e2m"},{"name_store":"M\u1eb9 v\u00e0 B\u00e9 CHIP BAP","district":"TX.H\u1ed3ng L\u0129nh","city":"HA TINH","address":" x\u00f3m 6 \u0111\u1ee9c Thu\u1eadn"},{"name_store":"Ph\u01b0\u01a1ng Th\u1ea3o","district":"TP.Phan Thi\u1ebft","city":"BINH THUAN","address":"373 Tr\u1ea7n Qu\u00fd C\u00e1p"},{"name_store":"Th\u1ecbnh H\u00e0","district":"H.Thanh Ch\u01b0\u01a1ng","city":"NGHE AN","address":" Kh\u1ed1i 10"},{"name_store":"H\u01b0\u01a1ng Giang","district":"H.Tuy Phong","city":"BINH THUAN","address":"8 Tr\u1ea7n H\u01b0ng \u0110\u1ea1o"},{"name_store":"TH\u00caU NH\u00c1NH","district":"H.V\u0103n L\u00e2m","city":"HUNG YEN","address":"T\u1ea0P H\u00d3A_TH\u00caU NH\u00c1NH X\u00d3M CH\u00d9A"},{"name_store":"Anh Th\u01b0","district":"H.V\u0103n Giang","city":"HUNG YEN","address":" Ch\u1ee3 M\u1ec5"},{"name_store":"Anh S\u01a1n","district":"TX.K\u1ef3 Anh","city":"HA TINH","address":" Ch\u1ee3 TX K\u1ef3 Anh"},{"name_store":"L\u1ee4C MINH H\u01af\u01a0NG","district":"TP.Pleiku","city":"GIA LAI","address":"143 Tr\u01b0\u1eddng Chinh"},{"name_store":"PERFECT SHOP TRUE MILK PG","district":"TP.D\u0129 An","city":"BINH DUONG","address":" \u0110\u01b0\u1eddng s\u1ed1 7, KP Nh\u1ecb \u0110\u1ed3ng"},{"name_store":"Qu\u1ef3nh Ch\u00e2u","district":"H.T\u00e1nh Linh","city":"BINH THUAN","address":"267 \u0110T 717 - Th\u00f4n 2"},{"name_store":"Shop C\u1ecf","district":"H.M'\u0110r\u1eafk","city":"DAK LAK","address":" Ql26"},{"name_store":"T\u00fa Uy\u00ean","district":"H.Kr\u00f4ng Pa","city":"GIA LAI","address":" Ng\u00e3 3 ch\u01b0 c\u0103m"},{"name_store":"H\u1ea3i H\u1ee3i","district":"H.Di\u1ec5n Ch\u00e2u","city":"NGHE AN","address":" Kh\u1ed1i 4"},{"name_store":"Ch\u1ecb Dung","district":"Q.B\u00ecnh T\u00e2n","city":"TP HCM","address":"4545 Nguy\u1ec5n C\u1eedu Ph\u00fa"},{"name_store":"Ph\u00fac S\u01b0\u01a1ng","district":"TX.Tr\u1ea3ng B\u00e0ng","city":"TAY NINH","address":"104A TL6"},{"name_store":"TH TUY\u1ebeT NH\u01af 2","district":"TP.C\u00e0 Mau","city":"CA MAU","address":" NGUY\u1ec4N TR\u00c3I"},{"name_store":"Trung T\u00e2m S\u1eefa Ph\u01b0\u1edbc B\u00ecnh","district":"TX.Ph\u01b0\u1edbc Long","city":"BINH PHUOC","address":"Ch\u1ee3 c\u0169 Ph\u01b0\u1edbc B\u00ecnh khu ph\u1ed1 2"},{"name_store":"BABY MART . ST M\u1eb8 V\u00c0 B\u00c9","district":"TP.Th\u00e1i B\u00ecnh","city":"THAI BINH","address":"A11 L\u00fd Th\u00e1i T\u1ed5"},{"name_store":"Ch\u1ecb Trang","district":"H.H\u01b0ng Nguy\u00ean","city":"NGHE AN","address":"X\u00d3m 3A X\u00f3m th\u1ecb T\u1ee9"},{"name_store":"NGA","district":"H.Hi\u1ec7p \u0110\u1ee9c","city":"QUANG NAM","address":"T\u1ed4 6 KH\u1ed0I PH\u1ed0 AN T\u00c2Y"},{"name_store":"TI\u1ebeN C\u00daC","district":"H.\u0110\u1ea1i T\u1eeb","city":"THAI NGUYEN","address":"CH\u1ee2 \u0110\u1ea0I T\u1eea CH\u1ee2 \u0110\u1ea0I T\u1eea"},{"name_store":"THANH TH\u1ea2O V\u00c2N","district":"Q.B\u00ecnh T\u00e2n","city":"TP HCM","address":"I1 - I7 CH\u1ee2 KI\u1ebeN \u0110\u1ee8C"},{"name_store":"DHA Max","district":"TX.B\u1ebfn C\u00e1t","city":"BINH DUONG","address":" XC2"},{"name_store":"Khoa Y\u1ebfn","district":"H.B\u00f9 \u0110\u0103ng","city":"BINH PHUOC","address":" Ch\u1ee3 Minh H\u01b0ng"},{"name_store":"SHOP Y\u0301","district":"TP.Quy Nh\u01a1n","city":"BINH DINH","address":"354 TR\u1ea6N H\u01afNG \u0110\u1ea0O"},{"name_store":"Doraemon Ch\u1ee3 B\u0110","district":"H.B\u00f9 \u0110\u0103ng","city":"BINH PHUOC","address":"V\u00f5 Th\u1ecb S\u00e1u, TT.\u0110\u1ee9c Phong"},{"name_store":"Nh\u00e0 Mia","district":"H.Ph\u00fa Gi\u00e1o","city":"BINH DUONG","address":"232, \u0110\u1ed9c L\u1eadp, TT.Ph\u01b0\u1edbc V\u0129nh"},{"name_store":"B\u1eafp BABY","district":"TX.T\u00e2n Uy\u00ean","city":"BINH DUONG","address":"dt747, P.V\u0129nh T\u00e2n"},{"name_store":"Cao Thanh Lan","district":"H.T\u00e2n Ch\u00e2u","city":"TAY NINH","address":"T\u00e2n Ch\u00e2u, TT.T\u00e2n Ch\u00e2u"},{"name_store":"Tom Kids","district":"H.G\u00f2 D\u1ea7u","city":"TAY NINH","address":"02, H\u00f9ng V\u01b0\u01a1ng, TT.G\u00f2 D\u1ea7u"},{"name_store":"S\u1eefa T\u00e3 Nh\u00e0 Kh\u00f4i","district":"TX.H\u00f2a Th\u00e0nh","city":"TAY NINH","address":"330, Nguy\u1ec5n V\u0103n Linh, X.Tr\u01b0\u1eddng T\u00e2y"},{"name_store":"Shop s\u1eefa Baby house","district":"H.L\u1ed9c Ninh","city":"BINH PHUOC","address":"150 qu\u1ed1c l\u1ed9 13, g\u1ea7n xe m\u00e1y l\u1ed9c h\u01b0ng ph\u00e1t, TT.L\u1ed9c Ninh"},{"name_store":"Tr\u00fac Linh","district":"TX.Tr\u1ea3ng B\u00e0ng","city":"TAY NINH","address":"Ch\u1ee3 B\u00ecnh Th\u1ea1nh, X.Ph\u01b0\u1edbc B\u00ecnh"},{"name_store":"JENNIE BEBE","district":"TP.\u0110\u1ed3ng Xo\u00e0i","city":"BINH PHUOC","address":"An D\u01b0\u01a1ng V\u01b0\u01a1ng, P.T\u00e2n B\u00ecnh"},{"name_store":"b\u1eafp kids 2","district":"TP.\u0110\u1ed3ng Xo\u00e0i","city":"BINH PHUOC","address":"880, Ph\u00fa Ri\u1ec1ng \u0110\u1ecf, P.T\u00e2n Xu\u00e2n"},{"name_store":"Tr\u01b0\u1eddng Th\u1ecd","district":"TX.Ch\u01a1n Th\u00e0nh","city":"BINH PHUOC","address":"P.Minh H\u01b0ng"},{"name_store":"BABY HOUSE 2","district":"TX.B\u00ecnh Long","city":"BINH PHUOC","address":"Tr\u1ea7n H\u01b0ng \u0110\u1ea1o, P.An L\u1ed9c"},{"name_store":"H\u1ed3ng H\u1ea1nh","district":"H.B\u00f9 \u0110\u0103ng","city":"BINH PHUOC","address":"Ng\u00e3 4 Bom Bo, X.Bom Bo"},{"name_store":"Qu\u1ef3nh Tr\u00e2m","district":"H.Ch\u00e2u Th\u00e0nh","city":"TAY NINH","address":"145, QL 22B, X.Thanh \u0110i\u1ec1n"}]`;

function doNearestStores(input={}) {
  stores = nearest_stores ? JSON.parse(nearest_stores) : [],
    groupBy = function (xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },
    storesCities = groupBy(stores, "city"),
    storeDistrictsChoose = [];
   
  let choose_a_city_text = 'Chọn Tỉnh/Thành phố';
  let choose_a_district_text = 'Chọn Quận/Huyện';
  if(Object.hasOwn(input, 'city')){
    choose_a_city_text = input.city;
  }
  if(Object.hasOwn(input, 'district')){
    choose_a_district_text = input.district;
  }
  if (stores) $("#city").append(`<li class="" data-value="">`+choose_a_city_text+`</li>`);
  for (const [keyCity, city] of Object.entries(storesCities)) {
    $("#city").append(`<li data-value="${keyCity}">${keyCity}</li>`);
  }
  $("#city li").click(function () {
    let val = $(this).data("value"),
      storeByCity = val ? storesCities[val] : stores,
      districtElement = $("#district"),
      storeCitiesChoose = [],
      parentCity = $("#parent-city");
    districtElement.html("");
    $("#parent-district").removeClass("has-value");
    if (val) {
      districtElement.append(`<li class="" data-value="">`+choose_a_district_text+`</li>`);
      storeDistrictsChoose = groupBy(storeByCity, "district");
      for (const [keyDistrict, district] of Object.entries(storeDistrictsChoose)) {
        districtElement.append(`<li data-value="${keyDistrict}">${keyDistrict}</li>`);
      }
      $("#show-city").text(val);
      parentCity.addClass("has-value");
    } else {
      parentCity.removeClass("has-value");
    }
    listStore(storeByCity);
  });
  $(document).on("click", "#district li", function () {
    let val = $(this).data("value"),
      storeByDistrict = [],
      parentDistrict = $("#parent-district");
    if (val) {
      storeByDistrict = storeDistrictsChoose[val];
      $("#show-district").text(val);
      parentDistrict.addClass("has-value");
    } else {
      Object.keys(storeDistrictsChoose).forEach(district => {
        storeByDistrict = storeByDistrict.concat(storeDistrictsChoose[district]);
      });
      parentDistrict.removeClass("has-value");
    }
    listStore(storeByDistrict);
  });
  listStore(stores);

  function listStore(storesValue) {
    const perPage = Number(10);
    $('#pagination').pagination({
      showPageNumbers: perPage < storesValue.length,
      dataSource: storesValue,
      pageSize: perPage,
      autoHidePrevious: true,
      autoHideNext: true,
      sizeChangerOptions: 3,
      hideLastOnEllipsisShow: true,
      hideFirstOnEllipsisShow: true,
      ulClassName: 'pagination-custom',
      prevText: '&laquo;',
      nextText: '&raquo;',
      callback: function (data, pagination) {
        const storeElement = $("#list-store");
        storeElement.html("");
        for (store of data) {
          storeElement.append(`
      <li class="store"><h3 class="text-transform-uppercase">${store.name_store}</h3><p class="flex"><img class="w-[11px]" src="https://nutifoodsweden.com/wp-content/themes/nuti-sweden/tpl/dist/assets/images/products/grow-plus-tang-cuong-tieu-hoa/ico-add.svg" alt="" src="">
          ${store.address}
        </p></li>
      `);
        }
      }
    })
  }
  $(document).on("change", "select[name=province], select[name=district], select[name=ward]", function () {
    if (!$(this).val()) {
      $(this).parent().parent().parent().removeClass("has-value");
      if ($(this).attr("name") == "province") {
        $("select[name=district], select[name=ward]").parent().parent().parent().removeClass("has-value");
      } else if ($(this).attr("name") == "district") {
        $("select[name=ward]").parent().parent().parent().removeClass("has-value");
      }
    }
  });
}
  