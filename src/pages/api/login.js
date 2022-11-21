import axios from 'axios'

export default async function handler(req, res) {

    const { username, password } = req.body;

    const params = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'password',
        username: username,
        password: password
    }

    const options = {
        method: 'POST',
        data: params,
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/oauth/login`,
    };

    try {
        const { data: result } = await axios(options)

        return res.status(200).json(result)

    } catch (err) {
        return res.status(500).json(err.response.data)
    }

};