const {Schema, model} = require("mongoose");

const UserSchema = new Schema(
    {
        firstName:{
            type: String,
            required: true,
        },
        lastName:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            
        },
        password:{
            type: String,
            minlength: 6,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
const User = model("User", UserSchema);
module.exports=User;
