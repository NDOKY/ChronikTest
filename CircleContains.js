function circleFunction() {
    xPoint = prompt("Enter the x of the point");
    yPoint = prompt("Enter the y of the point");

    radius = prompt("What\'s the radius of your circle? ");
    xCircle = prompt("Enter x of the circle");
    yCircle = prompt("Enter y of the circle");

    distancePointToCenter = Math.sqrt(Math.pow((xPoint - xCircle),2) + (Math.pow((yPoint - yCircle),2)));

    if(distancePointToCenter <= radius){
        return true;
    }
    else{
        return false;
    }
}