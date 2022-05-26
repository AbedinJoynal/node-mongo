const mongoose = require('mongoose');
const mongoPath =
    'mongodb+srv://dbatlas:3ntJCBbT59IOgmIP@cluster0.vv1kr.mongodb.net/?retryWrites=true&w=majority';

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    });
    return mongoose;
};
