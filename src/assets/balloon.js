export function init(){
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    let clientWidth = (document.documentElement || document.body).clientWidth; //获取可视区域宽度
    let clientHeight = (document.documentElement || document.body).clientHeight; //获取可视区域高度
    canvas.width = clientWidth;
    canvas.height = clientHeight;
    let iWidth = clientWidth
    let iHeight = clientHeight
    let limit = 20
    let sizes = [20,25,30,35]
    let colors = ["orange", "pink", "deepskyblue", "yellow", "red"];
    let length = 20
    let speed = -1

    context.strokeStyle= 'pink';
    context.fillStyle = '#fff'
    // context.beginPath();
    // context.fillRect(0, 0, length, length);//绘制矩形
    // context.arc(length, iHeight, length, 0, 2 * Math.PI, true);//圆
    // context.fillRect(100, 100, length, length);
    // context.strokeStyle = "blue"
    // context.arc(100, 0, length, 0, 2 * Math.PI, true);//圆
    for (let i=0;i<2;i++){
        context.beginPath();
        context.ellipse(i*50+50,0,20,30,0,0,Math.PI*2)
        context.moveTo(i*50+50, 30);
        context.arcTo(i*50+50, 55, i*50+50, 80, 40);
        context.lineTo(i*50+50, 80);
        context.stroke();
        context.globalAlpha = 0.5
        context.closePath();
        // context.arc(i*50, 0, length, 0, 2 * Math.PI, true);//圆
    }
    // context.closePath();
    // context.fill();
    // for (let i=0;i<limit;i++){
    //     let sizeIndex = Math.floor(Math.random() * 4);
    //     let size = sizes[sizeIndex];
    //     let colorIndex = Math.floor(Math.random() * 5);
    //     let color = colors[colorIndex];
    //     let x = Math.floor(Math.random() * clientWidth);
    //     let y = Math.floor(Math.random() * clientHeight);
    //     context.beginPath();
    //     context.fillStyle = color;
    //     context.arc(x, 100, size, 0, 2 * Math.PI);
    //     context.closePath();
    //     context.fill();
    // }
    let startPoint = iHeight - length;
    setInterval(function () {
        startPoint += speed;
        if (startPoint <= (-1 * length)) {
            startPoint = iHeight - length
        }
        run(context, iWidth, iHeight, length, startPoint,limit,sizes,colors,clientWidth);
    }, 30);

}
export function balloon(limit,ctx){
    // ctx.beginPath();


}
export function run(cxt, width, height, length, point) {
    cxt.clearRect(0, 0, width, height);
    // cxt.beginPath();
    // cxt.fillRect(0, point, length, length);
    // cxt.arc(length, point , length, 0, 2 * Math.PI, true);
    // cxt.arc(100, 100, length, 0, 2 * Math.PI, true);//圆
    for (let i=0;i<2;i++){
        cxt.beginPath();
        cxt.globalAlpha = 0.5
        cxt.ellipse(i*50+50,point,20,30,0,0,Math.PI*2)
        cxt.moveTo(i*50+50, point);
        cxt.arcTo(i*50+50+20, point+(point+50)/2, i*50+50, point+50, 40);
        cxt.lineTo(i*50+50, point+50);
        cxt.stroke();
        cxt.closePath();
        // cxt.arc(i*50, point , length, 0, 2 * Math.PI, true);//圆
    }
    // cxt.closePath();
    // cxt.fill();

}
export default {
    init,
    balloon,
    run
}