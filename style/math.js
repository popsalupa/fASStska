function raschitat() {
    l = document.getElementById('l').value;
    a = document.getElementById('a').value;
    z = document.getElementById('z').value;
    d = document.getElementById('d').value;
    c = document.getElementById('c').value;
    r = document.getElementById('r').value;
        XA = d -((l + c) * 2) * (Math.tan(a * Math.PI / 180)) - 2 * (r * (1 - Math.tan(a / 2 * Math.PI / 180)) * (Math.tan (a * Math.PI / 180)));
        ZA = z + c;
        XB = d + (c * 2);
        ZB = z + c - ((XB -(d-((l + c) *2) *(Math.tan(a*Math.PI/180)))) * (1/ Math.tan(a*Math.PI/180))-(r*(1-(Math.tan(a/2*Math.PI)))))

    document.getElementById('XA').innerHTML = XA + " X-координата точки А";
    document.getElementById('ZA').innerHTML = ZA + " Z-координата точки А";
    document.getElementById('XB').innerHTML = XB + " X-координата точки B";
    document.getElementById('ZB').innerHTML = ZB + " Z-координата точки B";
    }