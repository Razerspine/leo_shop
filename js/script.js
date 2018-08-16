$(document).ready(function () {

    (function () {

        $(".js-btn_next").click(function() {

            var slide = $(".js-slide");
            var currentImg = $(".active");
            var currentIndex = currentImg.index();
            var nextIndex = currentIndex  + 1;
            var nextImg = slide.eq(nextIndex);
            var lastImg = slide.eq(-1);
            var lastIndex = lastImg.index();

            var indexButton = $(".b-button-index");
            var buttonIndex1 = indexButton.eq(0);
            var buttonIndex2 = indexButton.eq(1);
            var buttonIndex3 = indexButton.eq(2);
            var buttonIndex4 = indexButton.eq(3);
            var buttonIndex5 = indexButton.eq(4);
            var slideIndex1 = slide.eq(0).index();
            var slideIndex2 = slide.eq(1).index();
            var slideIndex3 = slide.eq(2).index();
            var slideIndex4 = slide.eq(3).index();
            var slideIndex5 = slide.eq(4).index();

            currentImg.removeClass("active");
            $(indexButton).removeClass("b-button-index_bg-color");

            if (currentIndex === slideIndex1) {
                buttonIndex2.addClass("b-button-index_bg-color");
            }
            if (currentIndex === slideIndex2) {
                buttonIndex3.addClass("b-button-index_bg-color");
            }
            if (currentIndex === slideIndex3) {
                buttonIndex4.addClass("b-button-index_bg-color");
            }
            if (currentIndex === slideIndex4) {
                buttonIndex5.addClass("b-button-index_bg-color");
            }
            if (currentIndex === slideIndex5) {
                buttonIndex1.addClass("b-button-index_bg-color");
            }
            if(lastIndex  === currentIndex) {
                slide.eq(0).addClass("active");

            } else {
                nextImg.addClass("active");
            }
        });

        $(".js-btn_prev").click(function () {

            var slide = $(".js-slide");
            var currentSlide = $(".active");
            var currentIndex = currentSlide.index();
            var prevIndex = currentIndex  - 1;
            var prevSlide = slide.eq(prevIndex);

            var indexButton = $(".b-button-index");
            var buttonIndex1 = indexButton.eq(0);
            var buttonIndex2 = indexButton.eq(1);
            var buttonIndex3 = indexButton.eq(2);
            var buttonIndex4 = indexButton.eq(3);
            var buttonIndex5 = indexButton.eq(4);
            var slideIndex1 = slide.eq(0).index();
            var slideIndex2 = slide.eq(1).index();
            var slideIndex3 = slide.eq(2).index();
            var slideIndex4 = slide.eq(3).index();
            var slideIndex5 = slide.eq(4).index();

            currentSlide.removeClass("active");
            prevSlide.addClass("active");
            $(indexButton).removeClass("b-button-index_bg-color");

            if (currentIndex === slideIndex5) {
                buttonIndex4.addClass("b-button-index_bg-color");
            }
            if (currentIndex === slideIndex4) {
                buttonIndex3.addClass("b-button-index_bg-color");
            }
            if (currentIndex === slideIndex3) {
                buttonIndex2.addClass("b-button-index_bg-color");
            }
            if (currentIndex === slideIndex2) {
                buttonIndex1.addClass("b-button-index_bg-color");
            }
            if (currentIndex === slideIndex1) {
                buttonIndex5.addClass("b-button-index_bg-color");
            }
        });
    })();

    (function () {

        var indexButton = $(".b-button-index");

        $(indexButton).click(function () {

            var currentButton = $(this).attr("data-slide");
            var slideContent = $(".b-slider__content");
            var slide1 = $("#slide1");
            var slide2 = $("#slide2");
            var slide3 = $("#slide3");
            var slide4 = $("#slide4");
            var slide5 = $("#slide5");

            indexButton.removeClass("b-button-index_bg-color");
            $(this).addClass("b-button-index_bg-color");
            slideContent.removeClass("active");

            if(currentButton === "slide1") {
                slide1.addClass("active");
            }
            if(currentButton === "slide2") {
                slide2.addClass("active");
            }
            if(currentButton === "slide3") {
                slide3.addClass("active");
            }
            if(currentButton === "slide4") {
                slide4.addClass("active");
            }
            if(currentButton === "slide5") {
                slide5.addClass("active");
            }
        });

    })();

    (function () {

        var modalButton = $(".js-btn-lang");
        var modal = $(".js-language");
        $(modalButton).click(function () {
            $(modal).slideToggle();
        });

        $(document).mouseup(function (e) {
            if (!modal.is(e.target) && modal.has(e.target).length === 0) {
                $(modal).fadeOut();
            }
        });
    })();

    (function () {

        var modalButton = $(".js-btn-cy");
        var modal = $(".js-currency");
        $(modalButton).click(function () {
            $(modal).slideToggle();
        });

        $(document).mouseup(function (e) {
            if (!modal.is(e.target) && modal.has(e.target).length === 0) {
                $(modal).fadeOut();
            }
        });
    })();

    (function () {

        var tabButton = $(".b-button");
        var tabContent = $(".b-tabs");

        $(tabButton).click(function () {

           var btnAttr = $(this).attr("data-tab");
           var tab1 = $("#tab1");
           var tab2 = $("#tab2");
           var tab3 = $("#tab3");

           $(tabButton).removeClass("js-active");
           $(this).addClass("js-active");
           $(tabContent).removeClass("b-tabs_active");

           if(btnAttr === "tab1") {
               tab1.addClass("b-tabs_active");
           }
            if(btnAttr === "tab2") {
                tab2.addClass("b-tabs_active");
            }
            if(btnAttr === "tab3") {
                tab3.addClass("b-tabs_active");
            }
        });
    })();
});