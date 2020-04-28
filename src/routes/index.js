const express = require('express')
const router = express.Router()
const pool = require('../database/db')



router.get('/',(req,res)=>{
    res.render('index')
});

router.post('/login',async (req,res)=>{

        const {nameLogin,surnameLogin,userKeyLogin} = req.body
        const result = await pool.query("SELECT * FROM employees WHERE name = $1 AND surname = $2 AND user_key =$3 ",[nameLogin,surnameLogin,userKeyLogin])
        const {name,surname,user_key,antiquity}= result.rows[0]

        if(result.rows[0] == ''){
            res.send('Datos incorrectos!!')
        }
    
        else{
            // LEVEL 1
            if(user_key == 1){
                res.render('login',{"name": name,"surname": surname,"userKey": user_key,"antiquity": antiquity,"vacations": "The employee is entitled to 6 days of vacations "})

            }
            else if(antiquity >= 2 && antiquity <=6){
                res.render('login',{"name": name,"surname": surname,"userKey": user_key,"antiquity": antiquity,"vacations": "The employee is entitled to 14 days of vacations "})
            }
            else if(antiquity >= 7){
                res.render('login',{"name": name,"surname": surname,"userKey": user_key,"antiquity": antiquity,"vacations": "The employee is entitled to 20 days of vacations"})
            }


            // LEVEL 2
            else if(user_key == 2){
                if(antiquity == 1){
                    res.render('login',{"name": name,"surname": surname,"userKey": user_key,"antiquity": antiquity,"vacations": "The employee is entitled to 7 days of vacations"})     
                
                }
                else if(antiquity >=2 && antiquity <= 6){
                    res.render('login',{"name": name,"surname": surname,"userKey": user_key,"antiquity": antiquity,"vacations": "The employee is entitled to 15 days of vacations"})
                }
                else if(antiquity >= 7){
                    res.render('login',{"name": name,"surname": surname,"userKey": user_key,"antiquity": antiquity,"vacations": "The employee is entitled to 22 days of vacations "})

                }

            }
            // LEVEL 3


            else if(user_key == 3 ){
                if(antiquity == 1){
                    res.render('login',{"name": name,"surname": surname,"userKey": user_key,"antiquity": antiquity,"vacations": "The employee is entitled to 10 days of vacations "})

                }
                else if(antiquity >= 2 && antiquity <=6){
                    res.render('login',{"name": name,"surname": surname,"userKey": user_key,"antiquity": antiquity,"vacations": "The employee is entitled to 26 days of vacations "})

                }
                else if(antiquity >= 7){
                    res.render('login',{"name": name,"surname": surname,"userKey": user_key,"antiquity": antiquity,"vacations": "The employee is entitled to 30days of vacations "})
                }
                

            }
            // LEVEL 4+


            else if(user_key >= 4){
                res.render('login',{"name": name,"surname": surname,"userKey": user_key,"antiquity": antiquity,"vacations": "The employee is entitled to 60 days of vacations"})
            }

            


        }
        
    
});

router.post('/register',async (req,res)=>{
    const{nameRegister,surnameRegister,userKeyRegister,antiquity} = req.body
    await pool.query("INSERT INTO employees(name,surname,user_key,antiquity) VALUES ($1,$2,$3,$4)",[nameRegister,surnameRegister,userKeyRegister,antiquity])
    res.render('register')
});











module.exports = router;