/**
 * curl -X 'GET' \
  'https://42b31216-70ba-4319-9356-d3e4d3205232-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/quizes/collections/quizes' \
  -H 'accept: application/json' \
  -H 'X-Cassandra-Token: eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsYmJUcDRObzdfUHBJLUxOWFZJbUFmY1pWQWs3TFNwdnY5Z0RFVF80M2ZrIn0.eyJqdGkiOiI2NTRmMmE0OC05MWY4LTQ5NWYtOGQwMi03OGIwODhmZDZmZWQiLCJleHAiOjE2NjUzNzIzNjgsIm5iZiI6MCwiaWF0IjoxNjY1MzM2MzY4LCJpc3MiOiJodHRwczovL2F1dGguY2xvdWQuZGF0YXN0YXguY29tL2F1dGgvcmVhbG1zL0Nsb3VkVXNlcnMiLCJhdWQiOiJhdXRoLXByb3h5Iiwic3ViIjoiMjA2ZjZiYmItYjlhZC00NWNkLTgxYWUtMjBhNzczODJiOWMwIiwidHlwIjoiSUQiLCJhenAiOiJhdXRoLXByb3h5IiwiYXV0aF90aW1lIjoxNjY1MzM2MzY4LCJzZXNzaW9uX3N0YXRlIjoiZDkxN2VmMzctMjllMi00Y2Q4LWJjZGYtNjFjNTM3M2VlMzExIiwiYWNyIjoiMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwibmFtZSI6ImRpZWdvIHZhbGRlcyIsInByZWZlcnJlZF91c2VybmFtZSI6ImR2YWxkZXNnN0BnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiZGllZ28iLCJmYW1pbHlfbmFtZSI6InZhbGRlcyIsImVtYWlsIjoiZHZhbGRlc2c3QGdtYWlsLmNvbSJ9.GTCwixsaKPRsEBznLB6kkgLH2WNZwfVS_sxWK3wBCWLDUeHLbMV1aRgVACnfs5uCnsmuh-PTsYwrUEhEvEYt8tY9wk2vu3XvJxQkseekYNwzgVGu7nEijQ9dW2D0XNIkYhdhq_zzbsjvfE7Yz8T0bLv9m189gIuatoYka8RMbAcIncv3ju6X1IN9kBEGUXzk7-fEDMYjiDFi9NKXolAZWy0gMKUMNlekzNJ7Mnlb5CFZfVrk87p0gkcMcms1-pcshYJH4MpZdD76muZzCo7sUs6S7cj01WRxmoVDKy0mrVmljEl_wRlwuxOFZE0l23xSS3BSP6GTLHj_isbqthFrVA'
 */
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import axios, { AxiosResponse } from 'axios';
import { Quiz } from './types/quizes';
dotenv.config();
const app = express();
app.use(express.json());
app.get('/quizes', async (req: Request, res: Response) => {
    try {
        const resp: AxiosResponse = await axios.get(
            'https://42b31216-70ba-4319-9356-d3e4d3205232-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/quizes/collections/quizes',
            {
                headers: {
                    accept: 'application/json',
                    'X-Cassandra-Token': process.env.TOKEN_CASSANDRA,
                },
            }
        );
        const { data } = resp.data;
        console.log(data);

        const quizes: Quiz = data['2064dabb-bb58-4f0a-84b9-106b81e06a2a'];
        res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
        return res.status(200).json(quizes);
    } catch (e) {
        console.log(e);
        res.status(400).send('Error');
    }
});

app.listen(process.env.PORT, () =>
    console.log('Server on ' + process.env.PORT)
);
