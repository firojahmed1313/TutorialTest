
export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            res.json({
                message: `Hello World run get`
            })
            break;
        case 'POST':
            res.json({
                message: `Hello World  post run`
            })
            break;
        default:
            res.json({
                message: "Hello World"
            })
    }
}
