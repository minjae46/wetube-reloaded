import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT}.`);

app.listen(PORT, handleListening);

// init.js 는 서버 실행 전에 필요한 모든 것들을 import 시키는 역할을 담당.
// db 등 필요한 파일들을 모두 import한 후에 서버 실행.
