const UserDB = require('../model/users')
const bcrypt = require("bcryptjs");
const validator = require('validator')

const ProfileDB = require('../model/profile')
const SettingDb = require('../model/Settings')
const WalletDB = require('../model/Wallet')

const jwt = require('jsonwebtoken')

const SECRET = `highscoretechBringwexsingthebestamoung23498hx93`

const createToken = ((_id)=>{
   return  jwt.sign({_id}, SECRET, { expiresIn: '3d' })
})

// Login controller
const Login = (async (req, res)=>{
    const { email , password } = req.body
    if(!email || !password){
        res.status(401).json({error : "All field is required"})
    }else{
        const exist = await UserDB.findOne({ email })
        if (!exist){
            res.status(401).json({error :  "Incorrect email"})
        }else{
            const match = await bcrypt.compare(password,exist.password)
            if (!match){
                res.status(401).json({error : "Incorrect password"})
            }else{
                try{
                   // create token
                   const Token = createToken(exist._id)
                   res.status(200).json({email, Token})
               } catch (error){
                   res.status(400).json({error : error.message})
               }
            }
        }
    }
})


// Signup controller
const CreateAccount = (async (req, res)=>{ 

    const {  email, password } = req.body

    if( !email || !password){
        res.status(401).json({error : "All field is required"})
    }else{
        if(!validator.isEmail(email)){
            res.status(401).json({error :  "Email is not valid"})
        } else{
            if(!validator.isStrongPassword(password)){
                res.status(401).json({error :  "Passoword is not strong"})
            }else{
                const Emailexist = await UserDB.findOne({ email })
                if (Emailexist){
                    res.status(401).json({error :  "Email already exist"})
                }else{

                    // declare all characters
                    // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

                    // function generateString(length) {
                    //     let result = ' ';
                    //     const charactersLength = characters.length;
                    //     for ( let i = 0; i < length; i++ ) {
                    //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    //     }
                    //     return result;
                    // }

                    const salt = await bcrypt.genSalt(10)
                    const hash = await bcrypt.hash(password, salt)

                    let DOB = "-"
                    let Username = '-'
                    let image = "-"
                    let firstname = "-"
                    let lastname = "-"

                    let btc = "0.00000"
                    let eth = "0.00000"
                    let nexo = "0.00000"
                    let sol = "0.00000"
                    let usdc = "0.0000"
                    let usdt = "0.00000"
                    let matic = "0.00000"
                    let bnb = "0.00000"
                    let busd = "0.00000"
                    let Total_waged = 0
                    let  Total_bet = 0
                    let Total_win = 0

                    let Fa_Auth = false
        
                    // const username  = generateString(5)
                    // const male = 'https://www.linkpicture.com/q/female-avatar.png'
                    // const tiger = `https://www.linkpicture.com/q/image-65_1.png`
                    // const guy = "https://www.linkpicture.com/q/guy-avatar-1_2.png"
                    // const female = `https://www.linkpicture.com/q/male-avataer-1_1.png`
                    try{
                        const user = await UserDB.create({ email , password : hash })
                         await SettingDb.create({ user_id:user._id , Fa_Auth })
                        await WalletDB.create({ user_id:user._id , btc , eth, nexo,sol,usdc , usdt ,matic,bnb,busd })
                        await ProfileDB.create({Username,firstname, lastname, DOB, image, Total_bet, Total_waged, Total_win, user_id:user._id})

                        const Token = createToken(user._id)
                        res.status(200).json({email, Token})

                    } catch (error){
                        res.status(401).json({error : error.message})
                    }
                }
            }
        }
    } 
})
module.exports = { Login, CreateAccount }