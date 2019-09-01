const mongoose = require ('mongoose');
const bcrypt = require('bcrypt'); 
const saltRounds = 10; //hash nya di bikin random sebanyak 10 kali

const Schema = mongoose.Schema;

const UserSchema = new Schema({
 name: {
     type: String,
     trim: true,
     required: true,
 },
 email:{
     type: String,
     trim: true,
     required: true
 },
 password: {
     type: String,
     trim: true,
     required: true
 }
});
//sebelum di save di hase dulu, setelah dapat hash nya di lanjut ke passwd lalu bisa di next
UserSchema.pre('save', function(next) { 
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
})
module.exports = mongoose.model('user', UserSchema);