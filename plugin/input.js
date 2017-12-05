function val() {
    return Math.random() * 100 << 0;
}
var a = [
    1,
    val(),
    3,
    4
];
// var b = [];
a.forEach(function (item) {
    // b.push(item * 10);
});

try {
    var people = 43;
    var num = people / 10;
} catch (e) {
    console.log(e);
}
if (a.length === 3) {
    var n = a.concat(a);
    var lf = n * n * n;
}

var xml = '<div class="name">fdsfs</div>';