(function () {
    var logic = 'Will Scotland become independent?: ' + (Math.round(Math.random()) === 1 ? 'yes' : 'no');
    if (typeof alert === 'function') alert(logic);
    else console.log(logic);
})();
