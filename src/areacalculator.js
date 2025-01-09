const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{
    let area = 0.0;
    switch (choice) {
        case 'square':
            if (side>0) {
                area = Math.pow(side, 2);
            } else {
                area = -1;
            }
        break;
        case 'rectangle':
            if (length > 0 && breadth > 0) {
                area = length * breadth;
            } else {
                area = -1;
            }
        break;
        case 'circle':
            if (radius > 0) {
                area = pi * Math.pow(radius, 2);
            } else {
                area = -1;
            }
        break;
        default:
            area = -1;
        break;
    }
    return area
}
module.exports = {calculateArea}
