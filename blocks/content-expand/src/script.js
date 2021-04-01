import './style.scss'
import $ from 'jquery'

/*
  Scroll Animation
*/
function scrollTo(element, duration) {
    var e = document.documentElement;
    if (e.scrollTop === 0) {
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t + 1 === e.scrollTop-- ? e : document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
    if (duration <= 0) return;
    if (typeof from === "object") from = from.offsetTop;
    if (typeof to === "object") to = to.offsetTop;

    scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
    if (t01 < 0 || t01 > 1 || speed <= 0) {
        element.scrollTop = xTo;
        return;
    }
    element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;

    setTimeout(function() {
        scrollToX(element, xFrom, xTo, t01, speed, step, motion);
    }, step);
}

function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
}

/*
  Button Toggle
*/
function buttonToggle () {
    var OffsetTop = 0

    function handler_open () {
        $(this).parent().attr('data-toggle', 1)
        OffsetTop = $(document).scrollTop()
        $(this).one('click', handler_close)
    }

    function handler_close () {
        $(this).parent().attr('data-toggle', 0)
        scrollTo(OffsetTop || 200, 100)
        $(this).one('click', handler_open)
    }

    $('.btn-expand').one('click', handler_open)
}

/*
 Check Height
*/
function seeMoreChekcHeight () {
    $('.expand').each(function () {
        const button = $(this).find('.btn-expand')
        let elMaxHeight = $(this).find('.max-height')
        let maxHeight = parseInt(elMaxHeight.attr('data-max-height'))
        let elFullText = $(this).find('.full-text')
        let height = elFullText.height()

        //Get height in dispaly none
        if (!height) {
            var copied_elem = elFullText.clone().attr('id', false).css({
                visibility: 'hidden', display: 'block',
                position: 'absolute',
            })
            $('body').append(copied_elem)
            height = copied_elem.height()
            copied_elem.remove()
        }

        if (height > parseInt(maxHeight)) {
            button.show()
            elMaxHeight.css('max-height', maxHeight)
        } else {
            button.hide()
            elMaxHeight.css('max-height', 'initial')
        }
    })
}

$(document).ready(function () {
    seeMoreChekcHeight()
    buttonToggle()
})

window.addEventListener('resize', seeMoreChekcHeight)

export {seeMoreChekcHeight, buttonToggle}

