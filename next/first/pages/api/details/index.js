import { getDetails, postDetails } from "@/backend/controler/details";

export default async (req, res) => {

    switch (req.method) {
        case 'GET':
            await getDetails(req, res)
            break;
        case 'POST':
            await postDetails(req, res)
            break;
        default:
            res.json({
                message: "Hello World"
            })
            break;
    }
}