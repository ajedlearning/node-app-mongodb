const indexCtrl = {};

indexCtrl.renderIndex= (req, resp)=>{
    resp.render('index');
};

indexCtrl.renderAbout = (req, resp)=>{
    resp.render('about');
};


module.exports = indexCtrl;
