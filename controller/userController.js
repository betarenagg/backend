const User = require('../model/users')
const bcrypt = require("bcryptjs");
const validator = require('validator')
const WalletDB = require('../model/Wallet')
const ProfileDB = require('../model/profile')

const jwt = require('jsonwebtoken')

const createToken = ((_id)=>{
   return  jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
})

// Login controller
const Login = (async (req, res)=>{
    const { email , password } = req.body
    if(!email || !password){
        res.status(401).json({error : "All field is required"})
    }else{
        const exist = await User.findOne({ email })
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
                const Emailexist = await User.findOne({ email })
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

                    let btc = 0.00000
                    let eth = 0.00000
                    let nexo = 0.00000
                    let sol = 0.00000
                    let usdc = 0.0000
                    let usdt = 0.00000
                    let matic = 0.000000
                    let bnb = 0.000000
                    let busd = 0.000000
                    let Total_waged = 0
                    let  Total_bet = 0
                    let Total_win = 0
        
                    // const username  = generateString(5)
                    // const male = 'https://www.linkpicture.com/q/female-avatar.png'
                    // const tiger = `https://www.linkpicture.com/q/image-65_1.png`
                    // const guy = "https://www.linkpicture.com/q/guy-avatar-1_2.png"
                    // const female = `https://www.linkpicture.com/q/male-avataer-1_1.png`
                    try{
                        await WalletDB.create({ user_id:user._id , btc , eth, nexo,sol,usdc , usdt ,matic,bnb,busd })
                        await ProfileDB.create({Username,firstname, lastname, DOB, image, Total_bet, Total_waged, Total_win, user_id:user._id})
                         const user = await UsersEl.create({ email , password : hash })

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