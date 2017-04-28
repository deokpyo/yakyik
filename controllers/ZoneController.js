var Zone = require('../models/Zone');

module.exports = {
    // get request
    find: function (params, callback) {
        Zone.find(params, function (err, zones) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, zones)
        })
    },

    findById: function (id, callback) {
        Zone.findById(id, function (err, zone) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },

    // post request
    create: function (params, callback) {
        // validation - testing purpose before creating REACT
        // fix wrong data type (string with comma) given from user input
        // var zips = params['zipCodes'];
        // var zip = zips.split(',');
        // var newZips = [];
        // zip.forEach(function (zipCode) {
        //     newZips.push(zipCode.trim()); // get rid of possible spaces
        // });

        // params['zipCodes'] = newZips;

        Zone.create(params, function (err, zone) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },

    // put request
    update: function (id, params, callback) {
        Zone.findByIdAndUpdate(id, params, {new:true}, function(err, zone){
            if(err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },

    delete: function (id, callback) {
        Zone.findByIdAndRemove(id, function(err){
            if(err){
                callback(err, null)
                return
            }
            callback(null, null);
        })
    }


}