const orm = require("../config/orm.js"); 

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (burgers) => {
            cb(burgers);
        });
    },

    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);
        });
    },

    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    },

    deleteOne: (condition, cb) => {
        orm.deleteOne("burgers", condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;