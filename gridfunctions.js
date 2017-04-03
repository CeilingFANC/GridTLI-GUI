function changeValues(){
    document.getElementById('xtmin').value = document.getElementById('xmin').value;
    document.getElementById('xtmax').value = document.getElementById('xmax').value;
    document.getElementById('ytmax').value = document.getElementById('ymax').value;
    document.getElementById('ct').value = document.getElementById('cluster').value;
    var xtmin = document.getElementById('xmin').value;
    var xtmax = document.getElementById('xmax').value;
    var ytmax = document.getElementById('ymax').value;
    var xt = document.getElementById('x_divs').value;
    var yt = document.getElementById('y_divs').value;
    var ct = document.getElementById('cluster').value;
    document.getElementById('xrange').value = linspace(xtmin,xtmax,xt);
    document.getElementById('yrange').value = linspace(0,ytmax,yt);
    document.write(xAxisValues) = linspace(xtmin,xtmax,xt);
    document.write(yAxisValues) = linspace(0,ytmax,yt);

};

function linspace(a,b,n) {
    if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
    if(n<2) { return n===1?[a]:[]; }
    var i,ret = Array(n);
    n--;
    for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
    return ret;
}
