// (function(doc, win) {
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function() {
//             var clientWidth = docEl.clientWidth;
//             if (!clientWidth) return;
//             if (clientWidth >= 540) {
//                 docEl.style.fontSize = '54px';
//             } else {
//                 docEl.style.fontSize = 75 * (clientWidth / 750) + 'px';
//             }
//         };
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);

(function(doc, win) {
//      ��ԭ��������ȡ�û����õ�������������С(����ie)
        if(doc.documentElement.currentStyle) {
            var user_webset_font=doc.documentElement.currentStyle['fontSize'];
        }
        else {
            var user_webset_font=getComputedStyle(doc.documentElement,false)['fontSize'];
        }
//      ȡ������Ĭ��16px�ı���ϵ��
        var xs=parseFloat(user_webset_font)/16;
//      ����rem��js���õ������С
        var view_jsset_font,result_font;
        var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        clientWidth,
        recalc = function() {
            clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
            if(!doc.addEventListener) return;
            if(clientWidth<540){
//              ����rem��js���õ������С
                view_jsset_font=75 * (clientWidth / 750);
//              ���յ������СΪrem����/ϵ��
                result_font=view_jsset_font/xs;
//              ���ø������С
                docEl.style.fontSize = result_font + 'px';
                }
            else{
                docEl.style.fontSize = 54 + 'px';
                }
        };
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);