var Comment = require('../models/Comment');

module.exports = {
    // get request
    find: function (params, callback) {
        Comment.find(params, function (err, comments) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, comments)
        })
    },

    findById: function (id, callback) {
        Comment.findById(id, function (err, comment) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, comment)
        })
    },

    // post request
    create: function (params, callback) {
        Comment.create(params, function (err, comment) {
            if (err) {
                callback(err, null)
                return
            }
            callback(null, comment)
        })
    },

    // put request
    update: function (id, params, callback) {
        Comment.findByIdAndUpdate(id, params, {new:true}, function(err, comment){
            if(err){
                callback(err, null)
                return
            }
            callback(null, comment)
        })
    },

    delete: function (id, callback) {
        Comment.findByIdAndRemove(id, function(err){
            if(err){
                callback(err, null)
                return
            }
            callback(null, null);
        })
    }
}