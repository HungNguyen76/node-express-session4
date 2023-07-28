let isAdmin = true;

module.exports = {
    checkAdmin: (req, res, next) =>  {
        if(!isAdmin) {
            return res.status(500).json({
                message: "Bạn cần có quyền admin để truy cập api này"
            })
        }
        next()
    }
} 