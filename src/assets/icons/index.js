const files = import.meta.glob('./*.svg', { eager: true })
const systemUrls = {}
Object.keys(files).map((path) => {
  const module = files[path]
  const fileName = path?.split('/')?.pop()?.split('.')?.[0] // 提取文件名部分
  systemUrls[fileName] = module.default
})

export default systemUrls
