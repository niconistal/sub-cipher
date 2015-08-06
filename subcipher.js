'use strict';

function SubCipher(key) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.key = key || 'Vmt6zP5QAWxI1G8fgjEJYvS2DsrqyHokCdKBe4b9p7ahXcUnMF0NuLTROZi3lw';
}

SubCipher.prototype.encode = function(message) {
    var encoded = [];
    var cchar, ind;

    for(var i =0 ; i < message.length; i++) {
        cchar = message.charAt(i);
        ind = this.alphabet.indexOf(cchar);
        if(ind === -1) {
            encoded.push(cchar);
        } else {
            encoded.push(this.key.charAt(ind));
        }
    }
    return encoded.join('');
};

SubCipher.prototype.decode = function( message ) {
    var decoded = [];
    var cchar, ind;
    for(var i = 0 ; i < message.length; i++) {
        cchar = message.charAt(i);
        ind = this.key.indexOf(cchar);

        if(ind === -1) {
            decoded.push(cchar);
        } else {
            decoded.push(this.alphabet.charAt(ind));
        }
    }
    return decoded.join('');
};

module.exports = function(key) {
    return new SubCipher(key);
};
