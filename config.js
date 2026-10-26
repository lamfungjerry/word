// ==========================================
// 系統全域設定檔 (Single Source of Truth)
// ==========================================
window.CONFIG = {
  // 1. GAS 後端部署網址 (結尾為 /exec)
  GAS_URL: "https://script.google.com/macros/s/AKfycbwQ0JpHtO3WAVU-RIQjPST8lu87dqCVllXLGC5AU4ILfgJB23M5K8yyLh2AqwIz3GW5/exec",

  // 2. GitHub 靜態資源與資料庫 (存放 JSON、圖片、MP3 的 Public 倉庫)
  // 格式: "你的GitHub帳號/你的資源庫名稱"
  GITHUB_REPO: "lamfungjerry/word-assets",
  GITHUB_BRANCH: "main",

  // 3. iPhone 主畫面 Icon 網址 (可放相對路徑如 "icon.png" 或完整 https 網址 / data:image/png;base64,...)
  ICON_URL: "https://lamfungjerry.github.io/gas/icons/app1.png",

  // 4. 預設 TTS 發音款式
  // 格式: "語音代號,語言代碼,引擎(azure|google)"
  // 港式女聲: "en-HK-YanNeural,en-HK,azure" | 港式男聲: "en-HK-SamNeural,en-HK,azure"
  // 美式 Chirp3: "en-US-Chirp3-HD-Aoede,en-US,google"
  DEFAULT_VOICE: "en-US-Chirp3-HD-Fenrir,en-US,google",

  // 5. Gemini 模型預設值與過濾關鍵字 (隨時修改免重發 GAS)
  GEMINI_DEFAULT_MODEL: {
    id: "gemini-3.6-flash",
    displayName: "Gemini 3.6 Flash"
  },
  GEMINI_EXCLUDE_KEYWORDS: [
    "2.5", "3.5", "preview", "tts", "lite", "image",
    "nano", "omni", "transcribe", "computer-use", "robotics"
  ]
};
