const Product = require('../model/Product');

exports.getAllProducts = (req,res,next)=>{
    Product.findAll()
    .then(products=> res.status(200).send(products))
    .catch(err => res.status(500).send(err));
}

exports.addProducts = (req,res,next)=>{
    const productList = req.body;
    Product.bulkCreate(productList).then(result => console.log(result)).catch(error => console.log(error));   
    res.status(200).json({
        message: "Saved successfully"
    });
}

exports.filterById = (req,res,next)=>{
    Product.findAll({
        where: {
            productId : req.params.productId
        }
    }).then(product=> res.status(200).send(product))
    .catch(err => res.status(500).send(err));
}