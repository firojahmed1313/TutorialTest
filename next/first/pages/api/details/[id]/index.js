export default async (req, res) => {
    console.log(req.query.id);
    switch (req.method) {
        case 'GET':
            res.json({
                message: `Hello World get ${req.query.id}`
            })
            break;
        case 'POST':
            res.json({
                message: `Hello World  post ${req.query.id}`
            })
            break;
        default:
            res.json({
                message: "Hello World"
            })
    }
}