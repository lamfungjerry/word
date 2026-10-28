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
  
  // 4. 全自動發音下載清單 (所有新課題會自動下載此清單內的所有語音)
  // 格式: "語音代號,語言代碼"
  VOICE_MODELS: [
    "en-US-Chirp3-HD-Fenrir,en-US", // 原使用：Chirp3 男聲，清脆有活力、咬字俐落
    "en-US-Chirp3-HD-Leda,en-US",   // Chirp3 女聲：親切溫和、類似兒童有聲書朗讀
    "en-US-Neural2-F,en-US",        // Neural2 女聲：標準美式課堂女教師發音，尾音極清晰
    "en-US-Studio-O,en-US"          // Studio 女聲：頂級錄音室音質，語調生動自然
  ],
  
  // 5. 預設 TTS 發音款式
  // 美式 Chirp3: "en-US-Chirp3-HD-Aoede,en-US"
  DEFAULT_VOICE: "en-US-Chirp3-HD-Fenrir,en-US",

  // 6. 圖片上傳壓縮設定
  IMAGE_SETTINGS: {
    MAX_SIZE: 1600,
    QUALITY: 0.82
  },

  // 7. Gemini 模型預設值與過濾關鍵字
  GEMINI_DEFAULT_MODEL: {
    id: "gemini-3.6-flash",
    displayName: "Gemini 3.6 Flash"
  },
  GEMINI_EXCLUDE_KEYWORDS: [
    "2.5", "3.5", "preview", "tts", "lite", "image",
    "nano", "omni", "transcribe", "computer-use", "robotics"
  ]
};
