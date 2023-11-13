import axios from "axios";
const BASE_URL = "https://localhost:8081/api";

const dashboardAI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization":
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1c2VyLW1hbmFnZW1lbnQiLCJzdWIiOiJ1c2VyLW1hbmFnZW1lbnQiLCJncm91cHMiOlsiYWRtaW4iLCJ1c2VyIl0sImV4cCI6MTY5OTcwNTI3MzExNSwiaWF0IjoxNjk5NzA1MjY5LCJqdGkiOiIwN2NjYWU0OC00NGIzLTQxN2ItYjFlNy1mMDlkZjc1YWJkYzYifQ.beQnVp2DqsV2QhU0R4Z0q3MeK6siLsUWwFkUOXrPCNay5613HWiHOui-986plcnVNQg5b_VCOaqS-ZzcD1HXhMz9i3rhMNik5XqApwOCBfyLQ-nD9Bcq8weC5ffdLSePWONC5iLUE35ZrLZ-Zdr4GtGg55KGrSwywvBm2SpHL8X-olN0OVUkBC0wbF-tSuP8OiSktSU8AoQZi7M41uwSfJ5dWylSk2w_pGNfexoEw7OtH1GF2vsBcxBz5fiEwzijcItghBdzuWYVFzc_ryaVlLMs78VS2MPTmiYoiMwBRQw_IptfG-G-R_Kq7qEd1Bx2cj0x7hhnG2pVtEGynLgoUw",
    "Accept": "application/jsonp",
    "ngrok-skip-browser-warning": "true",
    "Access-Control-Allow-Origin": "*",
  },
});

export default dashboardAI;
