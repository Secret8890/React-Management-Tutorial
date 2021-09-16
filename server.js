const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/api/customers', (req, res) => {
    res.send([{
            id: 1,
            image: "https://placeimg.com/64/64/1",
            name: "홍길동",
            birthday: "19950109",
            gender: "남자",
            job: "대학생",
        },

        {
            id: 2,
            image: "https://placeimg.com/64/64/2",
            name: "강감찬",
            birthday: "19950109",
            gender: "남자",
            job: "귀주대첩",
        },

        {
            id: 3,
            image: "https://placeimg.com/64/64/3",
            name: "광개토대왕",
            birthday: "19950109",
            gender: "남자",
            job: "고구려전성시대의 왕",
        },
    ]);
})
app.listen(port, () => console.log(`listening on port ${port}`));