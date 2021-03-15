const Product = require('../model/Product');
const { Op } = require("sequelize");

exports.getAllProducts = (req,res,next)=>{
    if(req.query.filter){
        filterProducts(req,res);
    }else{
        Product.findAll()
        .then(products=> res.status(200).send(products))
        .catch(err => res.status(500).send(err));
    }
}

const filterProducts = (req,res) =>{
    const CategorySerach = req.get("CategorySearch");
    const NameSearch = req.get("NameSearch");
    let criteria;

    if(CategorySerach && NameSearch){
        criteria = {
            category: CategorySerach,
            title: {
                [Op.substring] : NameSearch
            }
        };         
    }else if(CategorySerach){
        criteria = {category: CategorySerach};    
    }else if(NameSearch){   
        criteria = {
            title: {
                [Op.substring] : NameSearch
            }
        };          
    }else{
        res.status(404).send({
            message: "Choose a criteria to filter !"
        });
    }

    Product.findAll({
        where:criteria
    }).then(products=> res.status(200).send(products))
    .catch(err => res.status(500).send(err));
}