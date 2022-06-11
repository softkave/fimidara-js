const serverAddr =
  process.env.FIMIDARA_SERVER_ADDR || 'https://api.fimidara.com';

export function getServerAddr() {
  return serverAddr;
}
