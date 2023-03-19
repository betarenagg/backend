const mongoose = require('mongoose')
const UserProfile =  require('../model/users')
const UsersProfile =  require('../model/profile')
const WalletDB = require("../model/Wallet")
const defaultCoinDB = require("../model/defaultCoin")

// Get single user's profile
const SingleUser = async(req,res) =>{
   const user_id = req.user._id
   try{
      const users =   await UsersProfile.find({user_id })
      res.status(200).json(users)
   }
   catch(err){
      res.status(501).json({message: err.message})
   }
}

// Get single user's Wallet
const Wallet = async(req,res) =>{
   const user_id = req.user._id
   try{
      const users =   await WalletDB.find({user_id })
      res.status(200).json(users)
   }
   catch(err){
      res.status(501).json({message: err.message})
   }
}

// Get an individual profile
const UserPro = async(req, res)=>{
     const { id } = req.params
     if( !mongoose.Types.ObjectId.isValid(id) ){
            res.status(404).json({error: "NO such profile"})
     }else{
        const SingleProfile = await UserProfile.findById(id)
        if(SingleProfile){
           res.status(201).json(SingleProfile)
        }else{
           res.status(409).json({error: "No such Id "})
        }
     }
}

// update userProfile 
const SecondStep = async(req, res) =>{
   const {username , image } = req.body
   let img = ""
   if(!username || !image ){
       res.status(401).json({error : "All field is required"})
   }else{
      const user_id = req.user._id
      if(!user_id){
         res.status(500).json({error: "Token not available on the database, Please relogin"})
      }else{
         if(image === 1){
            img = `https://www.linkpicture.com/q/image-65_1.png`
         }
        else  if(image === 2){
            img = `https://www.linkpicture.com/q/female-avatar.png`
         }
         else  if(image === 3){
            img = `https://www.linkpicture.com/q/male-avataer-1_1.png`
         }else{
            img = `https://www.linkpicture.com/q/guy-avatar-1_2.png`
         }
         try{
       const profileUpdate =  await UsersProfile.updateOne({ user_id }, { username, img });
            res.status(201).json(profileUpdate)
         } catch(err){
            res.status(500).json({message: err.message})
         }
      }
   }
}

// update userProfile 
const LastStep = async(req, res) =>{
   const {firstname , lastname, DOB } = req.body

      if(!firstname || !lastname || !DOB ){
         res.status(401).json({error : "All field is required"})
      }else{
         const user_id = req.user._id
         if(!user_id){
            res.status(500).json({error: "Token not available on the database, Please relogin"})
         }else{
            try{
               const profileUpdate =  await UsersProfile.updateOne({ user_id }, { firstname, lastname, DOB });
                  
                  res.status(201).json(profileUpdate)
               } catch(err){
                  res.status(500).json({message: err.message})
               }
         }
      }
}

// update userProfile 
const DefaultCoin = async(req, res) =>{
      const user_id = req.user._id
      if(!user_id){
         res.status(500).json({error: "Token not available on the database, Please relogin"})
      }else{
         try{
      const defaultCoin =  await defaultCoinDB.find({ user_id })

                 res.status(201).json(defaultCoin)
              } catch(err){
                 res.status(500).json({message: err.message})
              }
      }
}

// update userProfile 
const UpdateDefaultCoin = async(req, res) =>{
   const { coin_name , coin_image, coin_bal } = req.body
   const coinWallet = {
      BTC: {
           address: `128TUZbbpJ73zjEU1UUUJP2ftBYveTPXdC`
      },
      USDT: {
          networks: {
              ERC20: {
                  address: `0x60a3171d77c38c4BEB84c0102680d4F4dc75e3db`,
              },
              BEP20: {
                  address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
              }
          }
      },
      ETH: {
              address :`0x60a3171d77c38c4BEB84c0102680d4F4dc75e3db`,
      },
      SOL: {
              address :`3oN3ZxWVgMyZcw5qre1ty3bFokkmLPcVWkY94uKNXkYY`,
      },
      NEXO: {
              address :`0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
      },
      BNB: {
              address :`0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
      },
      BUSD: {
              address :`0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
      },
      USDC: {
          address :`0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
      }
  }

   if(!coin_name  || !coin_image|| !coin_bal  ){
       res.status(401).json({error : "All field is required"})
   }else{
      const user_id = req.user._id

      if(!user_id){
         res.status(500).json({error: "Token not available on the database, Please relogin"})
      }else{
         if (coin_name === "BTC"){
            try{
               const Update =  await defaultCoinDB.updateOne({ user_id }, { coin_name,coin_image, coin_bal, wallet_address: coinWallet.BTC });   
                  res.status(201).json(Update)
               } catch(err){
                  res.status(500).json({message: err.message})
               }
         }
         else if(coin_name === "ETH"){
            try{
               const Update =  await defaultCoinDB.updateOne({ user_id }, { coin_name,coin_image, coin_bal, wallet_address: coinWallet.ETH });   
                  res.status(201).json(Update)
               } catch(err){
                  res.status(500).json({message: err.message})
               }
         }
         else if(coin_name === "SOL"){
            try{
               const Update =  await defaultCoinDB.updateOne({ user_id }, { coin_name,coin_image, coin_bal, wallet_address: coinWallet.SOL });   
                  res.status(201).json(Update)
               } catch(err){
                  res.status(500).json({message: err.message})
               }
         }
         else if(coin_name === "USDT"){
            try{
               const Update =  await defaultCoinDB.updateOne({ user_id }, { coin_name,coin_image, coin_bal, wallet_address: coinWallet.USDT });   
                  res.status(201).json(Update)
               } catch(err){
                  res.status(500).json({message: err.message})
               }
         }
         else if(coin_name === "USDC"){
            try{
               const Update =  await defaultCoinDB.updateOne({ user_id }, { coin_name,coin_image, coin_bal, wallet_address: coinWallet.USDC });   
                  res.status(201).json(Update)
               } catch(err){
                  res.status(500).json({message: err.message})
               }
         }
         else if(coin_name === "BUSD"){
            try{
               const Update =  await defaultCoinDB.updateOne({ user_id }, { coin_name,coin_image, coin_bal, wallet_address: coinWallet.BUSD });   
                  res.status(201).json(Update)
               } catch(err){
                  res.status(500).json({message: err.message})
               }
         }
         else if(coin_name === "NEXO"){
            try{
               const Update =  await defaultCoinDB.updateOne({ user_id }, { coin_name,coin_image, coin_bal, wallet_address: coinWallet.NEXO });   
                  res.status(201).json(Update)
               } catch(err){
                  res.status(500).json({message: err.message})
               }
         }
         else if(coin_name === "BNB"){
            try{
               const Update =  await defaultCoinDB.updateOne({ user_id }, { coin_name,coin_image, coin_bal, wallet_address: coinWallet.BNB });   
                  res.status(201).json(Update)
               } catch(err){
                  res.status(500).json({message: err.message})
               }
         }
      }
   }
}

module.exports = {SingleUser, UpdateDefaultCoin, UserPro, DefaultCoin, Wallet, SecondStep, LastStep }