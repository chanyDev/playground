const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

require('dotenv').config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get('/auth/kakao', async (req, res) => {
  const { code } = req.query;
  const { KAKAO_API_KEY, KAKAO_REDIRECT_URL, KAKAO_CLIENT_SECRET } = process.env;

  // 파라미터 직렬화
  const parameter = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: KAKAO_API_KEY,
    redirect_uri: KAKAO_REDIRECT_URL,
    code,
    client_secret: KAKAO_CLIENT_SECRET,
  }).toString();

  try {
    // 카카오 토큰 발급받기
    const {
      data: { access_token },
    } = await axios.post('https://kauth.kakao.com/oauth/token', parameter, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    // 사용자 정보 가져오기
    const {
      data: {
        kakao_account: {
          profile: { nickname },
        },
      },
    } = await axios.get('https://kapi.kakao.com//v2/user/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    res.status(200).send({ msg: '로그인 성공', nickname });
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
