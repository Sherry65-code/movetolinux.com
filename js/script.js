window.addEventListener('load', resize);
window.addEventListener('load', getscroll);
window.addEventListener('resize', resize);
document.getElementById('body').addEventListener('scroll', getscroll);
function resize() {
    var w = window.innerWidth;

    var wp  = Math.max(w/95, 10);
    var wp2 = Math.max(w/350, 4);
    var wp3 = Math.max(w/500, 3);
    var wp4 = Math.max(w/500, 2);

    document.getElementById('style').innerHTML = `
        .nomargin {
            margin: none;
        }    
        .s200 {
            margin-left: 10px;
            font-size: ${wp}vh;
        }
        .s50 {
            font-size: ${wp2}vh;
            margin-left: 20px;
            margin-right: 80px;
        }
        .s40 {
            font-size: ${wp3}vh;
            margin-left: 20px;
            margin-left: 20px;
            text-align: justify;
            margin-right: 80px;
        }
        .s32 {
            font-size: ${wp4}vh;
            margin-left: 20px;
            text-align: justify;
            margin-right: 80px;
        }
    `;
}
function getscroll() {
    var cp = Math.ceil(document.getElementById('body').scrollTop/innerHeight);
    var x = 0;
    for (;x < 9;x+=1) {
        if (x == cp) document.getElementById(`l${x}`).style.color = '#fff500';
        else document.getElementById(`l${x}`).style.color = '#ffffff';
    }
    
}

function gotopage(num) {
    document.getElementById('body').scrollTop = innerHeight*(num-1);
}