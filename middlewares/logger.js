function logger(req, res, next){
    
        console.log('loading...')
        next()
}

module.exports = {
    logger,

};
