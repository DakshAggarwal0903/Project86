canvas = new fabric.Canvas('myCanvas');
Hx = 10;
Hy = 10;
Bw = 30;
Bh = 30;
HeOb = "";
BlOb = "";
function Heroload(){
    fabric.Image.fromURL("hero.png",function(Img){
        HeOb = Img;
        HeOb.scaleToWidth(150);
        HeOb.scaleToHeight(150);
        HeOb.set({
            top:py,
            left:px
        });
        canvas.add(HeOb);
    });
}
function Objectload(newImg){
    fabric.Image.fromURL(newImg,function(Img){
        BlOb = Img;
        BlOb.scaleToWidth(Bw);
        BlOb.scaleToHeight(Bh);
        BlOb.set({
            top:Hy,
            left:Hx
        });
        canvas.add(BlOb);
    });
}